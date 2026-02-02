# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static, single-page timeline documenting ICE training deficiencies from 2003-2026. No build system, bundler, or package manager—just vanilla HTML, CSS, and JavaScript served directly.

## Development

Open `index.html` in a browser to view. No build or compilation required.

## Architecture

**Files:**
- `index.html` - Page structure, includes filter UI, search, modal container, sources section
- `styles.css` - All styling with CSS custom properties in `:root`
- `data.js` - Timeline data as `timelineData` object (events array, sources array, categories object)
- `app.js` - IIFE that renders timeline, handles filtering/search, manages modal

**Data Schema (data.js):**
```javascript
{
  events: [{
    id: Number,           // Sequential, chronological order
    date: String,         // Display date ("March 1, 2003" or "January 2026")
    year: Number,         // For grouping (2003, 2018, etc.)
    category: String,     // "watchdog" | "court" | "investigation" | "incident" | "policy"
    title: String,
    excerpt: String,      // Card preview text
    content: String,      // HTML for modal body
    source: String,       // Source name
    sourceUrl: String,

    // Option 1: Actual media (preferred when available)
    media: {
      type: String,       // "image" | "youtube" | "video" | "audio" | "embed"
      src: String,        // Path for image/video/audio
      alt: String,        // Alt text for images
      caption: String,    // Optional caption
      youtubeId: String,  // For youtube type
      title: String,      // For youtube/video title
      poster: String,     // For video poster image
      mimeType: String,   // For video/audio MIME type
      html: String        // For embed type (raw HTML)
    },

    // Option 2: Placeholder (fallback when no actual media)
    mediaType: String,    // "document" | "video" | "audio" | "image"
    mediaPlaceholder: String
  }],
  sources: [{ type, name, url }],
  categories: { [key]: { label, color } }
}
```

**Media files:** Store in `images/` directory.

**Content Conventions:**
- Use `class="warning-highlight"` on `<p>`, `<ul>`, or `<blockquote>` elements to highlight sentences describing unlawful incidents, watchdog warnings, or policy violations
- Event IDs must be sequential and chronologically ordered (renumber all IDs when inserting historical events)
- All events require verifiable sources with working URLs

**Key CSS Classes:**
- `.warning-highlight` - Red left border + subtle red background for incident/warning callouts
- `.filtered-out` - Hides events that don't match current filter/search
- `.visible` - Triggers fade-in animation for timeline events
