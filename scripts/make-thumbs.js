'use strict';

// Backfill card thumbnails (images/thumbs/*.webp) for every image event in
// data.js. Safe to re-run: up-to-date thumbnails are skipped.
//   node make-thumbs.js

const path = require('path');
const { loadData } = require('./lib/data');
const { makeThumb } = require('./lib/thumbs');

const ROOT = path.join(__dirname, '..');

async function main() {
  const { events } = loadData();
  let made = 0;
  for (const e of events) {
    if (!e.media || e.media.type !== 'image' || !e.media.src) continue;
    const out = await makeThumb(path.join(ROOT, e.media.src));
    if (out) {
      made++;
      console.log(`  ${path.relative(ROOT, out)}`);
    }
  }
  console.log(`✓ ${made} thumbnail(s) written`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
