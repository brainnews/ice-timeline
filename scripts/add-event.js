'use strict';

const fs = require('fs');
const path = require('path');
const { loadData, saveData } = require('./lib/data');

const ROOT = path.join(__dirname, '..');
const PROPOSALS_MEDIA_DIR = path.join(ROOT, 'proposals-media');
const IMAGES_DIR = path.join(ROOT, 'images');

const MONTH_ORDER = [
  'january', 'february', 'march', 'april', 'may', 'june',
  'july', 'august', 'september', 'october', 'november', 'december'
];

function parseMonth(dateStr) {
  const lower = dateStr.toLowerCase();
  for (let i = 0; i < MONTH_ORDER.length; i++) {
    if (lower.includes(MONTH_ORDER[i])) return i + 1;
  }
  return null;
}

function insertChronologically(events, newEvent) {
  let insertAt = events.length;

  for (let i = 0; i < events.length; i++) {
    const e = events[i];
    if (e.year > newEvent.year) {
      insertAt = i;
      break;
    }
    if (e.year === newEvent.year) {
      const existingMonth = parseMonth(e.date);
      const newMonth = parseMonth(newEvent.date);
      if (existingMonth !== null && newMonth !== null && existingMonth > newMonth) {
        insertAt = i;
        break;
      }
    }
  }

  const result = [...events];
  result.splice(insertAt, 0, newEvent);
  return result;
}

function renumberIds(events) {
  return events.map((e, i) => ({ ...e, id: i + 1 }));
}

const SOURCE_TYPE_MAP = {
  watchdog: 'Government Report',
  court: 'Court Document',
  investigation: 'Investigative Journalism',
  incident: 'News Report',
  policy: 'News Report'
};

function addSourceIfNew(sources, proposal) {
  if (sources.some(s => s.url === proposal.sourceUrl)) return sources;
  return [
    ...sources,
    {
      type: SOURCE_TYPE_MAP[proposal.category] || 'News Report',
      name: `${proposal.source}: ${proposal.title.slice(0, 60)}`,
      url: proposal.sourceUrl
    }
  ];
}

function main() {
  const proposalArg = process.argv[2];
  if (!proposalArg) {
    console.error('Usage: node add-event.js <path-to-proposal.json>');
    console.error('Example: node add-event.js ../proposals/2026-03-15-ice-incident.json');
    process.exit(1);
  }

  const proposalPath = path.resolve(proposalArg);
  if (!fs.existsSync(proposalPath)) {
    console.error(`Error: File not found: ${proposalPath}`);
    process.exit(1);
  }

  let proposal;
  try {
    proposal = JSON.parse(fs.readFileSync(proposalPath, 'utf8'));
  } catch (err) {
    console.error(`Error: Could not parse proposal JSON: ${err.message}`);
    process.exit(1);
  }

  const dataJsPath = path.join(ROOT, 'data.js');
  const data = loadData(dataJsPath);

  // Guard against duplicates
  if (data.events.some(e => e.sourceUrl === proposal.sourceUrl)) {
    console.error(`Error: An event with this sourceUrl already exists:\n  ${proposal.sourceUrl}`);
    process.exit(1);
  }

  // Strip any id from proposal — will be assigned by renumber.
  // Also strip the staging-only fields (imageFile/imageAlt/imageUrl); they
  // get folded into a `media` object below.
  const {
    id: _unused,
    imageFile,
    imageAlt,
    imageUrl: _imgUrl,
    mediaType,
    mediaPlaceholder,
    ...proposalWithoutId
  } = proposal;

  let eventToInsert = { ...proposalWithoutId, id: 0 };

  // If the scanner downloaded an og:image, move it into images/ and
  // attach a media block. Drop mediaType/mediaPlaceholder when we have a
  // real image so the evidence board renders the photo, not a fallback.
  if (imageFile) {
    const stagedPath = path.join(PROPOSALS_MEDIA_DIR, imageFile);
    if (fs.existsSync(stagedPath)) {
      fs.mkdirSync(IMAGES_DIR, { recursive: true });
      const finalPath = path.join(IMAGES_DIR, imageFile);
      fs.renameSync(stagedPath, finalPath);
      eventToInsert.media = {
        type: 'image',
        src: `images/${imageFile}`,
        alt: imageAlt || proposal.title,
        caption: `${proposal.source} — ${proposal.date}`,
      };
      console.log(`  Image: images/${imageFile}`);
    } else {
      console.warn(`  Warning: imageFile referenced but not found: ${stagedPath}`);
      if (mediaType && mediaPlaceholder) {
        eventToInsert.mediaType = mediaType;
        eventToInsert.mediaPlaceholder = mediaPlaceholder;
      }
    }
  } else if (mediaType && mediaPlaceholder) {
    // No real image — preserve the placeholder so the timeline modal can
    // show the textual cue.
    eventToInsert.mediaType = mediaType;
    eventToInsert.mediaPlaceholder = mediaPlaceholder;
  }

  let events = insertChronologically(data.events, eventToInsert);
  events = renumberIds(events);

  const insertedEvent = events.find(e => e.sourceUrl === proposal.sourceUrl);
  const sources = addSourceIfNew(data.sources, proposal);

  saveData({ ...data, events, sources }, dataJsPath);

  fs.unlinkSync(proposalPath);

  console.log(`✓ Added event ${insertedEvent.id}: "${insertedEvent.title}"`);
  console.log(`  Total events: ${events.length}`);
  console.log(`  Proposal deleted: ${path.basename(proposalPath)}`);
}

main();
