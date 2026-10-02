'use strict';

/**
 * Card-sized WebP thumbnails for event images.
 *
 * Cards on the timeline and Evidence Wall show images at ~140–400 CSS px,
 * but the originals are often 1200–2800px. Thumbnails live next to them in
 * images/thumbs/<name>.webp; the front end derives that path from
 * media.src (see thumbSrc in app.js), so data.js needs no extra field.
 * The modal keeps using the original.
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const THUMB_WIDTH = 640; // 2x the widest card rendering (~320px on mobile)
const THUMB_QUALITY = 72;

function thumbPathFor(imagePath) {
  const dir = path.join(path.dirname(imagePath), 'thumbs');
  const base = path.basename(imagePath, path.extname(imagePath));
  return path.join(dir, `${base}.webp`);
}

// Returns the thumbnail path, or null if it was already up to date.
async function makeThumb(imagePath) {
  const out = thumbPathFor(imagePath);
  if (fs.existsSync(out) && fs.statSync(out).mtimeMs >= fs.statSync(imagePath).mtimeMs) {
    return null;
  }
  fs.mkdirSync(path.dirname(out), { recursive: true });
  await sharp(imagePath)
    .rotate() // honor EXIF orientation
    .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
    .webp({ quality: THUMB_QUALITY })
    .toFile(out);
  return out;
}

module.exports = { makeThumb, thumbPathFor };
