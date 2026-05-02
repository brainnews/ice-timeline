'use strict';

const fs = require('fs');
const path = require('path');
const { generateToken } = require('./lib/tokens');

const PROPOSALS_DIR = path.join(__dirname, '..', 'proposals');

function getProposalFiles() {
  if (!fs.existsSync(PROPOSALS_DIR)) return [];
  return fs.readdirSync(PROPOSALS_DIR)
    .filter(f => f.endsWith('.json') && !f.startsWith('debug-'))
    .sort();
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const CATEGORY_EMOJI = {
  watchdog: '🔍',
  court: '⚖️',
  investigation: '📰',
  incident: '⚠️',
  policy: '📋'
};

function buildEventSection(proposal, filename, workerUrl, secret) {
  const token = generateToken(filename, secret);
  const approveUrl = `${workerUrl}/approve?file=${encodeURIComponent(filename)}&token=${token}`;
  const rejectUrl = `${workerUrl}/reject?file=${encodeURIComponent(filename)}&token=${token}`;
  const emoji = CATEGORY_EMOJI[proposal.category] || '📌';

  return `
    <div style="border:1px solid #e5e7eb;border-radius:8px;padding:20px 24px;margin-bottom:16px;background:#fafafa;">
      <p style="margin:0 0 6px;font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.06em;font-weight:600;">
        ${emoji} ${escapeHtml(proposal.category)} &mdash; ${escapeHtml(proposal.date)}
      </p>
      <h2 style="margin:0 0 8px;font-size:16px;line-height:1.4;color:#111827;font-weight:600;">
        ${escapeHtml(proposal.title)}
      </h2>
      ${proposal.imageUrl ? `<img src="${escapeHtml(proposal.imageUrl)}" alt="${escapeHtml(proposal.imageAlt || '')}" style="display:block;width:100%;max-width:520px;height:auto;border-radius:6px;border:1px solid #e5e7eb;margin:0 0 12px;">` : ''}
      <p style="margin:0 0 10px;font-size:14px;line-height:1.5;color:#374151;">
        ${escapeHtml(proposal.excerpt)}
      </p>
      <p style="margin:0 0 16px;font-size:12px;color:#6b7280;">
        Source: <a href="${escapeHtml(proposal.sourceUrl)}" style="color:#2563eb;text-decoration:none;">${escapeHtml(proposal.source)}</a>
        &nbsp;&rarr;&nbsp;
        <a href="${escapeHtml(proposal.sourceUrl)}" style="color:#2563eb;font-size:11px;">${escapeHtml(proposal.sourceUrl.slice(0, 60))}${proposal.sourceUrl.length > 60 ? '…' : ''}</a>
      </p>
      <div>
        <a href="${approveUrl}" style="display:inline-block;padding:9px 22px;background:#16a34a;color:#fff;text-decoration:none;border-radius:6px;font-size:14px;font-weight:600;margin-right:8px;">
          ✅ Approve
        </a>
        <a href="${rejectUrl}" style="display:inline-block;padding:9px 22px;background:#dc2626;color:#fff;text-decoration:none;border-radius:6px;font-size:14px;font-weight:600;">
          ❌ Reject
        </a>
      </div>
    </div>`;
}

function buildEmail(proposals, filenames, workerUrl, secret) {
  const count = proposals.length;
  const subject = `[ICE Timeline] ${count} event${count !== 1 ? 's' : ''} to review`;

  const sections = proposals
    .map((p, i) => buildEventSection(p, filenames[i], workerUrl, secret))
    .join('');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${subject}</title>
</head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:32px 16px;">
    <div style="background:#fff;border-radius:10px;padding:28px 28px 20px;margin-bottom:16px;border:1px solid #e5e7eb;">
      <h1 style="margin:0 0 4px;font-size:18px;color:#111827;font-weight:700;">ICE Timeline &mdash; News Scan</h1>
      <p style="margin:0 0 20px;font-size:13px;color:#6b7280;">
        ${count} new event${count !== 1 ? 's' : ''} found. Click Approve to add to the timeline, or Reject to discard.
      </p>
      ${sections}
    </div>
    <p style="font-size:11px;color:#9ca3af;text-align:center;margin:0;">
      Approving merges the event into <code>data.js</code> and triggers a Cloudflare Pages deploy.<br>
      Each link can only be used once.
    </p>
  </div>
</body>
</html>`;

  return { subject, html };
}

async function sendEmail({ subject, html, to, from, apiKey }) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ from, to, subject, html })
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Resend API error ${response.status}: ${body}`);
  }

  return response.json();
}

async function main() {
  const isDryRun = process.argv.includes('--dry-run');

  const workerUrl = process.env.WORKER_URL;
  const webhookSecret = process.env.WEBHOOK_SECRET;
  const resendApiKey = process.env.RESEND_API_KEY;
  const resendFrom = process.env.RESEND_FROM;
  const reviewEmail = process.env.REVIEW_EMAIL;

  if (!workerUrl || !webhookSecret) {
    console.error('Error: WORKER_URL and WEBHOOK_SECRET must be set');
    process.exit(1);
  }

  if (!isDryRun && (!resendApiKey || !resendFrom || !reviewEmail)) {
    console.error('Error: RESEND_API_KEY, RESEND_FROM, and REVIEW_EMAIL must be set');
    process.exit(1);
  }

  const filenames = getProposalFiles();
  if (filenames.length === 0) {
    console.log('No proposals found — nothing to email.');
    process.exit(0);
  }

  const proposals = filenames.map(f =>
    JSON.parse(fs.readFileSync(path.join(PROPOSALS_DIR, f), 'utf8'))
  );

  const { subject, html } = buildEmail(proposals, filenames, workerUrl, webhookSecret);

  if (isDryRun) {
    console.log('Subject:', subject);
    console.log('\n--- Email HTML preview (truncated) ---');
    console.log(html.slice(0, 3000));
    console.log('\n[dry-run: no email sent]');
    return;
  }

  console.log(`Sending "${subject}" to ${reviewEmail}...`);
  const result = await sendEmail({ subject, html, to: reviewEmail, from: resendFrom, apiKey: resendApiKey });
  console.log('Email sent:', result.id);
}

main().catch(err => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});
