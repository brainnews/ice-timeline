# ICE Timeline

An interactive public timeline documenting U.S. Immigration and Customs Enforcement (ICE) training deficiencies, policy failures, and oversight findings from 2003–present. No build step — vanilla HTML, CSS, and JavaScript.

**Live:** Deployed to Cloudflare Pages via GitHub Actions on every approved event.

## Features

- 100+ documented events with search and category filtering
- Modal deep-dives with full citations, images, video, and audio embeds
- Dark/light theme toggle
- Scroll-linked progress bar
- Mobile-friendly with keyboard navigation
- Weekly automated news scan using Claude AI (Mondays at 9am UTC)

## Structure

| File | Purpose |
|------|---------|
| `index.html` | Page layout, filter UI, modal container |
| `styles.css` | All styling via CSS custom properties |
| `data.js` | All events as `timelineData` (events, sources, categories) |
| `app.js` | Timeline rendering, filtering, search, modal logic |
| `scripts/` | Node.js tooling for news scanning and event management |
| `proposals/` | JSON files for pending events awaiting review |
| `.github/workflows/` | Automation: scan, approve, reject, deploy |

## Adding Events

Events go through a proposal workflow:

1. **Manual:** Create a JSON file in `proposals/` following the schema in `CLAUDE.md`
2. **Automated:** The weekly GitHub Actions scan creates proposals automatically
3. **Review:** Trigger `Approve Timeline Event` workflow from the Actions tab with the proposal filename
4. **Deploy:** Approval merges the event into `data.js` and deploys to Cloudflare Pages automatically

## Required GitHub Secrets

| Secret | Used by |
|--------|---------|
| `ANTHROPIC_API_KEY` | Weekly news scan (`scan.yml`) |
| `CLOUDFLARE_API_TOKEN` | Deployment on approval (`approve.yml`) |
| `WORKER_URL` | Email notification on new proposals |
| `WEBHOOK_SECRET` | Email notification webhook auth |
| `RESEND_API_KEY` | Sending review emails |
| `RESEND_FROM` | Sender address for review emails |
| `REVIEW_EMAIL` | Recipient for review emails |

## Local Development

No build step required. Open `index.html` directly in a browser.

To run the news scan locally:
```bash
cd scripts && npm install
ANTHROPIC_API_KEY=... node scan-news.js
```

## Event Schema

See `CLAUDE.md` for the full event data schema and content conventions.
