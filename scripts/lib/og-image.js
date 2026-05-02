'use strict';

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

const FETCH_TIMEOUT_MS = 10000;
const MAX_HTML_BYTES = 2 * 1024 * 1024;
const MAX_IMAGE_BYTES = 3 * 1024 * 1024;
const USER_AGENT = 'Mozilla/5.0 (compatible; ice-timeline-scanner/1.0; +https://icetimeline.dumbsoft.com)';

function get(url, opts, redirects = 5) {
  return new Promise((resolve, reject) => {
    if (redirects < 0) return reject(new Error('Too many redirects'));
    const u = new URL(url);
    const lib = u.protocol === 'http:' ? http : https;
    const req = lib.get(url, {
      headers: { 'User-Agent': USER_AGENT, ...(opts.headers || {}) },
      timeout: FETCH_TIMEOUT_MS,
    }, (res) => {
      if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location) {
        const next = new URL(res.headers.location, url).toString();
        res.resume();
        return resolve(get(next, opts, redirects - 1));
      }
      if (res.statusCode !== 200) {
        res.resume();
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      const chunks = [];
      let total = 0;
      res.on('data', chunk => {
        total += chunk.length;
        if (total > opts.maxBytes) {
          req.destroy();
          return reject(new Error(`Response exceeds ${opts.maxBytes} bytes`));
        }
        chunks.push(chunk);
      });
      res.on('end', () => resolve({
        body: Buffer.concat(chunks),
        contentType: res.headers['content-type'] || ''
      }));
      res.on('error', reject);
    });
    req.on('error', reject);
    req.on('timeout', () => req.destroy(new Error('Request timed out')));
  });
}

function extractMeta(html, property) {
  const patterns = [
    new RegExp(`<meta[^>]+(?:property|name)=["']${property}["'][^>]+content=["']([^"']+)["']`, 'i'),
    new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["']${property}["']`, 'i'),
  ];
  for (const re of patterns) {
    const m = html.match(re);
    if (m) return decodeEntities(m[1]);
  }
  return null;
}

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'");
}

function extFromContentType(ct) {
  if (/image\/jpe?g/i.test(ct)) return 'jpg';
  if (/image\/png/i.test(ct))   return 'png';
  if (/image\/webp/i.test(ct))  return 'webp';
  if (/image\/gif/i.test(ct))   return 'gif';
  if (/image\/avif/i.test(ct))  return 'avif';
  return null;
}

/**
 * Fetch an article URL, find its og:image, download it, and write it to
 * `<targetDir>/<slug>.<ext>`. Returns { ok, filename, alt, imageUrl }
 * on success, or { ok: false, reason } on any failure.
 */
async function downloadOgImage(articleUrl, slug, targetDir) {
  let htmlRes;
  try {
    htmlRes = await get(articleUrl, { maxBytes: MAX_HTML_BYTES });
  } catch (err) {
    return { ok: false, reason: `fetch article: ${err.message}` };
  }
  const html = htmlRes.body.toString('utf8');

  const ogImage = extractMeta(html, 'og:image') || extractMeta(html, 'twitter:image');
  if (!ogImage) return { ok: false, reason: 'no og:image meta tag' };

  const alt = extractMeta(html, 'og:image:alt') || extractMeta(html, 'twitter:image:alt') || null;
  const imageUrl = new URL(ogImage, articleUrl).toString();

  let imgRes;
  try {
    imgRes = await get(imageUrl, { maxBytes: MAX_IMAGE_BYTES });
  } catch (err) {
    return { ok: false, reason: `fetch image: ${err.message}` };
  }

  const ext = extFromContentType(imgRes.contentType);
  if (!ext) return { ok: false, reason: `unsupported image content-type: ${imgRes.contentType}` };

  fs.mkdirSync(targetDir, { recursive: true });
  const filename = `${slug}.${ext}`;
  fs.writeFileSync(path.join(targetDir, filename), imgRes.body);

  return { ok: true, filename, alt, imageUrl };
}

module.exports = { downloadOgImage };
