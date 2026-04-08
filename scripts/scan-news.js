'use strict';

const Anthropic = require('@anthropic-ai/sdk');
const fs = require('fs');
const path = require('path');
const { loadData } = require('./lib/data');

const ROOT = path.join(__dirname, '..');
const PROPOSALS_DIR = path.join(ROOT, 'proposals');

const VALID_CATEGORIES = ['watchdog', 'court', 'investigation', 'incident', 'policy'];
const VALID_MEDIA_TYPES = ['document', 'video', 'audio', 'image'];

function slugify(title) {
  return title.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 50)
    .replace(/-+$/, '');
}

function buildPrompt(existingEvents) {
  const dedupList = existingEvents
    .map(e => `- "${e.title}" (${e.date})`)
    .join('\n');

  return `You are a research assistant maintaining a public-interest timeline documenting ICE (U.S. Immigration and Customs Enforcement) training deficiencies and related incidents.

Use web search to find news published in the last 90 days about any of these topics:
- ICE agent use-of-force incidents, injuries, or deaths during enforcement operations
- Watchdog reports (DHS OIG, GAO) about ICE training deficiencies or oversight failures
- Federal court rulings that reference ICE training failures or unconstitutional use of force
- Investigative journalism findings about ICE training, hiring standards, or agent conduct
- Policy changes that affect ICE agent training requirements or standards

ALREADY IN THE TIMELINE — do not re-propose any of these:
${dedupList}

For each NEW event you find that belongs on this timeline, produce a proposal matching the JSON schema below.

Return ONLY a \`\`\`json fenced block containing an array of proposal objects. No prose before or after the block.

Schema for each proposal:
{
  "date": "Month DD, YYYY  or  Month YYYY  or  YYYY",
  "year": <number>,
  "category": "watchdog" | "court" | "investigation" | "incident" | "policy",
  "title": "Concise factual title, under 15 words",
  "excerpt": "1-2 sentence factual summary for the timeline card",
  "content": "<p>HTML content for the event modal. Use &lt;p&gt;, &lt;ul&gt;&lt;li&gt;, &lt;blockquote&gt; tags. Add class=\\"warning-highlight\\" on any element describing unlawful conduct, watchdog warnings, or policy violations.</p>",
  "source": "Publication or organization name",
  "sourceUrl": "https://the-exact-url-you-found-via-search",
  "mediaType": "document" | "video" | "audio" | "image",
  "mediaPlaceholder": "Brief description of what media would show"
}

Rules:
- sourceUrl MUST be the real URL from your search result — never fabricate or guess a URL
- excerpt must be factual and neutral in tone
- content must be valid HTML using the tags listed above
- If you find no qualifying new events, return an empty array: []
- Perform at least 5 different searches before concluding

Today's date: ${new Date().toISOString().slice(0, 10)}`;
}

function validateProposal(p) {
  const errors = [];
  if (!p.date || typeof p.date !== 'string') errors.push('missing date');
  if (!p.year || typeof p.year !== 'number') errors.push('missing or non-numeric year');
  if (!VALID_CATEGORIES.includes(p.category)) errors.push(`invalid category: "${p.category}"`);
  if (!p.title || typeof p.title !== 'string') errors.push('missing title');
  if (!p.excerpt || typeof p.excerpt !== 'string') errors.push('missing excerpt');
  if (!p.content || typeof p.content !== 'string') errors.push('missing content');
  if (!p.source || typeof p.source !== 'string') errors.push('missing source');
  if (!p.sourceUrl || !p.sourceUrl.startsWith('http')) errors.push('invalid sourceUrl');
  if (!VALID_MEDIA_TYPES.includes(p.mediaType)) errors.push(`invalid mediaType: "${p.mediaType}"`);
  return errors;
}

function extractProposals(response) {
  const textBlock = response.content.filter(b => b.type === 'text').at(-1);
  if (!textBlock) throw new Error('No text block in Claude response');

  const match = textBlock.text.match(/```json\s*([\s\S]*?)```/);
  if (!match) {
    fs.mkdirSync(PROPOSALS_DIR, { recursive: true });
    const debugPath = path.join(PROPOSALS_DIR, `debug-${new Date().toISOString().slice(0, 10)}.txt`);
    fs.writeFileSync(debugPath, textBlock.text);
    throw new Error(`No JSON block found in response. Raw output saved to ${debugPath}`);
  }

  const parsed = JSON.parse(match[1]);
  if (!Array.isArray(parsed)) throw new Error('Response JSON is not an array');
  return parsed;
}

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('Error: ANTHROPIC_API_KEY environment variable is not set');
    process.exit(1);
  }

  console.log('Loading existing timeline data...');
  const data = loadData();
  const existingEvents = data.events.map(e => ({
    title: e.title,
    date: e.date,
    sourceUrl: e.sourceUrl
  }));
  console.log(`Loaded ${existingEvents.length} existing events`);

  console.log('Calling Claude API with web search...');
  const client = new Anthropic();

  const response = await client.beta.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 8096,
    betas: ['web_search_20250305'],
    tools: [{ type: 'web_search_20250305', name: 'web_search' }],
    messages: [{ role: 'user', content: buildPrompt(existingEvents) }]
  });

  console.log('Parsing proposals from response...');
  const proposals = extractProposals(response);
  console.log(`Claude returned ${proposals.length} candidate(s)`);

  if (proposals.length === 0) {
    console.log('No new events found.');
    process.exit(1); // Exit 1 so GitHub Actions skips the email step
  }

  fs.mkdirSync(PROPOSALS_DIR, { recursive: true });

  let saved = 0;
  let skipped = 0;

  for (const proposal of proposals) {
    const errors = validateProposal(proposal);
    if (errors.length > 0) {
      console.warn(`  Skipping "${proposal.title || 'untitled'}": ${errors.join(', ')}`);
      skipped++;
      continue;
    }

    // Dedup by URL
    if (existingEvents.some(e => e.sourceUrl === proposal.sourceUrl)) {
      console.warn(`  Skipping duplicate URL: ${proposal.sourceUrl}`);
      skipped++;
      continue;
    }

    const dateStr = new Date().toISOString().slice(0, 10);
    const slug = slugify(proposal.title);
    const filename = `${dateStr}-${slug}.json`;
    const filepath = path.join(PROPOSALS_DIR, filename);

    fs.writeFileSync(filepath, JSON.stringify(proposal, null, 2));
    console.log(`  Saved: ${filename}`);
    saved++;
  }

  console.log(`\nDone: ${saved} proposal(s) saved, ${skipped} skipped`);

  // Exit 1 if nothing saved so GitHub Actions skips the email step
  if (saved === 0) process.exit(1);
}

main().catch(err => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});
