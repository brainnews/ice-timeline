'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const DATA_JS_PATH = path.join(__dirname, '..', '..', 'data.js');

function loadData(filePath = DATA_JS_PATH) {
  const src = fs.readFileSync(filePath, 'utf8');
  // Append an assignment so the const-declared variable is accessible on the context.
  // (vm.runInNewContext only exposes var declarations to the context object, not const/let)
  const ctx = {};
  vm.createContext(ctx);
  vm.runInNewContext(src + '\n__data = timelineData;', ctx);
  return ctx.__data;
}

// Serialize a string value as JS source: backtick literal if it contains
// HTML, quotes, newlines, or backticks; otherwise JSON.stringify.
function jsString(value) {
  if (typeof value !== 'string') return String(value);
  if (/[<>'"` \n]/.test(value) || value.includes('\n')) {
    const escaped = value
      .replace(/\\/g, '\\\\')
      .replace(/`/g, '\\`')
      .replace(/\$\{/g, '\\${');
    return `\`${escaped}\``;
  }
  return JSON.stringify(value);
}

const MEDIA_FIELD_ORDER = ['type', 'src', 'alt', 'caption', 'youtubeId', 'title', 'poster', 'mimeType', 'html'];

function serializeMedia(media, indent) {
  const fields = [];
  for (const key of MEDIA_FIELD_ORDER) {
    if (media[key] !== undefined) {
      fields.push(`${indent}    ${key}: ${jsString(media[key])}`);
    }
  }
  return `{\n${fields.join(',\n')}\n${indent}}`;
}

const EVENT_FIELD_ORDER = [
  'id', 'date', 'year', 'category', 'title', 'excerpt', 'content',
  'source', 'sourceUrl', 'mediaType', 'mediaPlaceholder'
];

function serializeEvent(event, indent = '        ') {
  const fields = [];
  for (const key of EVENT_FIELD_ORDER) {
    if (event[key] !== undefined) {
      const val = typeof event[key] === 'number' ? event[key] : jsString(event[key]);
      fields.push(`${indent}    ${key}: ${val}`);
    }
  }
  if (event.media) {
    fields.push(`${indent}    media: ${serializeMedia(event.media, `${indent}    `)}`);
  }
  return `${indent}{\n${fields.join(',\n')}\n${indent}}`;
}

function serializeSource(source, indent = '        ') {
  const fields = Object.entries(source)
    .map(([k, v]) => `${indent}    ${k}: ${jsString(v)}`);
  return `${indent}{\n${fields.join(',\n')}\n${indent}}`;
}

function buildDataFile(data) {
  const eventsStr = data.events.map(e => serializeEvent(e, '        ')).join(',\n');
  const sourcesStr = data.sources.map(s => serializeSource(s, '        ')).join(',\n');

  const catLines = Object.entries(data.categories).map(([key, val]) =>
    `        ${key}: {\n            label: ${jsString(val.label)},\n            color: ${jsString(val.color)}\n        }`
  );
  const categoriesStr = `{\n${catLines.join(',\n')}\n    }`;

  return `/**
 * ICE Training Deficiencies Timeline Data
 * Compiled from government reports, court documents, and investigative journalism
 */

const timelineData = {
    events: [
${eventsStr}
    ],

    sources: [
${sourcesStr}
    ],

    categories: ${categoriesStr}
};
`;
}

function saveData(data, filePath = DATA_JS_PATH) {
  const content = buildDataFile(data);
  const tmpPath = filePath + '.tmp';
  fs.writeFileSync(tmpPath, content, 'utf8');

  // Verify round-trip before replacing original
  const ctx = {};
  vm.createContext(ctx);
  vm.runInNewContext(content + '\n__data = timelineData;', ctx);
  const verified = ctx.__data;

  if (verified.events.length !== data.events.length) {
    fs.unlinkSync(tmpPath);
    throw new Error(
      `Write verification failed: expected ${data.events.length} events, got ${verified.events.length}`
    );
  }

  fs.renameSync(tmpPath, filePath);
}

module.exports = { loadData, saveData, buildDataFile };
