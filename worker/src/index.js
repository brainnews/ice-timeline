// Cloudflare Worker: handles approve/reject links from ICE timeline review emails.
// Secrets required (set via `wrangler secret put`):
//   WEBHOOK_SECRET  — shared HMAC signing key (same value used by send-email.js)
//   GH_TOKEN        — GitHub PAT with `actions:write` scope

const GITHUB_REPO = 'brainnews/ice-timeline';

// HMAC-SHA256 verification using the Web Crypto API (available in Workers)
async function verifyToken(filename, token, secret) {
  const encoder = new TextEncoder();
  const keyData = encoder.encode(secret);
  const msgData = encoder.encode(filename);

  const cryptoKey = await crypto.subtle.importKey(
    'raw', keyData, { name: 'HMAC', hash: 'SHA-256' }, false, ['verify']
  );

  const tokenBytes = hexToBytes(token);
  if (!tokenBytes) return false;

  return crypto.subtle.verify('HMAC', cryptoKey, tokenBytes, msgData);
}

function hexToBytes(hex) {
  if (!hex || hex.length % 2 !== 0) return null;
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    const byte = parseInt(hex.slice(i, i + 2), 16);
    if (isNaN(byte)) return null;
    bytes[i / 2] = byte;
  }
  return bytes;
}

async function triggerWorkflow(workflowFile, inputs, githubToken) {
  const url = `https://api.github.com/repos/${GITHUB_REPO}/actions/workflows/${workflowFile}/dispatches`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${githubToken}`,
      'Accept': 'application/vnd.github+json',
      'Content-Type': 'application/json',
      'X-GitHub-Api-Version': '2022-11-28'
    },
    body: JSON.stringify({ ref: 'main', inputs })
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`GitHub API ${response.status}: ${body}`);
  }
}

function htmlPage(title, emoji, message, color) {
  return new Response(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${title}</title>
  <style>
    body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;
         background:#f9fafb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;}
    .card{text-align:center;padding:48px 40px;max-width:380px;background:#fff;
          border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,.1),0 1px 2px rgba(0,0,0,.06);}
    .emoji{font-size:52px;margin-bottom:16px;}
    h1{margin:0 0 10px;font-size:22px;color:#111827;}
    p{margin:0;font-size:14px;color:#6b7280;line-height:1.5;}
  </style>
</head>
<body>
  <div class="card">
    <div class="emoji">${emoji}</div>
    <h1 style="color:${color};">${title}</h1>
    <p>${message}</p>
  </div>
</body>
</html>`, { headers: { 'Content-Type': 'text/html;charset=utf-8' } });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const action = url.pathname.slice(1); // strips leading '/'

    if (action !== 'approve' && action !== 'reject') {
      return new Response('Not found', { status: 404 });
    }

    const file = url.searchParams.get('file');
    const token = url.searchParams.get('token');

    if (!file || !token) {
      return new Response('Missing parameters', { status: 400 });
    }

    // Prevent path traversal: only allow simple filenames like "2026-03-15-ice-event.json"
    if (!/^[\w.-]+-\d{4}-\d{2}-\d{2}[\w.-]*\.json$|^\d{4}-\d{2}-\d{2}[\w.-]*\.json$/.test(file)) {
      return new Response('Invalid filename', { status: 400 });
    }

    let valid;
    try {
      valid = await verifyToken(file, token, env.WEBHOOK_SECRET);
    } catch {
      return new Response('Token verification error', { status: 500 });
    }

    if (!valid) {
      return htmlPage(
        'Invalid or expired link',
        '🔒',
        'This link is invalid or has already been used. Check your email for a fresh link.',
        '#dc2626'
      );
    }

    const workflow = action === 'approve' ? 'approve.yml' : 'reject.yml';

    try {
      await triggerWorkflow(workflow, { file }, env.GH_TOKEN);
    } catch (err) {
      console.error('Workflow dispatch failed:', err.message);
      return new Response(`Failed to trigger workflow: ${err.message}`, { status: 500 });
    }

    if (action === 'approve') {
      return htmlPage(
        'Event approved',
        '✅',
        'The event has been queued for merging into the timeline. The site will update in about 1–2 minutes.',
        '#16a34a'
      );
    } else {
      return htmlPage(
        'Proposal rejected',
        '🗑️',
        'The proposal has been discarded.',
        '#6b7280'
      );
    }
  }
};
