/**
 * Evidence Wall view — a detective's cork board.
 *
 * Each event becomes a tactile artifact appropriate to its category:
 *   policy        →  bureaucratic memo
 *   watchdog      →  official report letterhead
 *   court         →  legal filing
 *   investigation →  newspaper clipping
 *   incident      →  polaroid photograph
 *
 * Items are pinned to the cork at chronological columns and connected by red
 * yarn between events that share a source. The wall is larger than the
 * viewport — drag to pan around. Click any artifact to open the full modal.
 */
(function () {
    'use strict';

    // -- state -------------------------------------------------------------
    let root, frame, board, papersEl, stringsEl;
    let pan = { x: 0, y: 0 };
    let scale = 1;
    let zoomMin = 0.15;       // recomputed from viewport — can't zoom out past fit
    let zoomFit = 1;          // scale that shows the entire board
    const ZOOM_MAX = 2.0;
    const ZOOM_STEP = 1.25;   // multiplier per button click / keypress
    let isPanning = false;
    let panStart = null;
    let pointerDownAt = 0;
    let isActive = false;
    let papers = []; // [{ event, el, x, y, rot, w, h }]
    let yarns = [];  // [{ a, b, path }]
    let zCounter = 1;
    let didFitOnce = false;
    let boardW = 0, boardH = 0;
    let latestColCenterX = 0, latestColWidth = 0;
    let zoomBtnIn, zoomBtnOut, zoomBtnFit;

    // -- registration ------------------------------------------------------
    function register() {
        if (!window.__iceViews) { setTimeout(register, 30); return; }
        window.__iceViews.register({ id: 'evidence', mount, activate, deactivate });
    }

    // -- mount -------------------------------------------------------------
    function mount(rootEl) {
        root = rootEl;
        frame = rootEl.querySelector('#evidence-frame');
        board = rootEl.querySelector('#evidence-board');
        papersEl = rootEl.querySelector('#evidence-papers');
        stringsEl = rootEl.querySelector('#evidence-strings');

        const events = window.iceTimeline.getEvents();
        layoutAndRender(events);
        drawYarn();
        buildZoomControls(rootEl);

        // Pan via pointer drag
        frame.addEventListener('pointerdown', onDown);
        frame.addEventListener('pointermove', onMove);
        frame.addEventListener('pointerup', onUp);
        frame.addEventListener('pointercancel', onUp);
        frame.addEventListener('pointerleave', onUp);
        // Wheel = trackpad pan + pinch-to-zoom (ctrlKey is set on pinch).
        // Mouse-wheel users hold Ctrl/⌘ to zoom.
        frame.addEventListener('wheel', onWheel, { passive: false });

        window.addEventListener('resize', onResize);
        document.addEventListener('keydown', onKeydown);
        window.iceTimeline.onFilterChange(applyFilter);
    }

    function activate() {
        isActive = true;
        if (!didFitOnce) {
            // center on first activation so the board lands in a nice spot
            requestAnimationFrame(() => {
                fitInitialView();
                didFitOnce = true;
            });
        }
    }
    function deactivate() {
        isActive = false;
    }

    // -- layout ------------------------------------------------------------
    function layoutAndRender(events) {
        // Build year columns. Years with > 4 events split into two columns.
        const byYear = {};
        events.forEach(e => (byYear[e.year] = byYear[e.year] || []).push(e));
        const years = Object.keys(byYear).map(Number).sort();

        const COL_W = 270;
        const ROW_H = 290;
        const PADDING_X = 220;
        // Top/bottom padding clears the floating UI (search bar at top,
        // hint pill at bottom) so the year banners are immediately legible.
        const PADDING_Y = 240;
        const yearMeta = {};
        let xCursor = PADDING_X;
        years.forEach(y => {
            const list = byYear[y];
            // wider years for years with more events so the board breathes
            const cols = list.length > 8 ? 3 : (list.length > 3 ? 2 : 1);
            yearMeta[y] = { x: xCursor, cols, rows: Math.ceil(list.length / cols) };
            xCursor += COL_W * cols + 30;
        });
        const boardWidth = xCursor + PADDING_X;
        const lastYear = years[years.length - 1];
        const lastMeta = yearMeta[lastYear];
        latestColWidth = COL_W * lastMeta.cols;
        latestColCenterX = lastMeta.x + latestColWidth / 2;
        const maxRows = Math.max(...years.map(y => yearMeta[y].rows));
        const boardHeight = PADDING_Y + maxRows * ROW_H + PADDING_Y;
        boardW = boardWidth;
        boardH = boardHeight;
        board.style.width = `${boardWidth}px`;
        board.style.height = `${boardHeight}px`;
        stringsEl.setAttribute('viewBox', `0 0 ${boardWidth} ${boardHeight}`);
        stringsEl.setAttribute('width', boardWidth);
        stringsEl.setAttribute('height', boardHeight);

        // Year banners floating above each year column
        years.forEach(y => {
            const meta = yearMeta[y];
            const banner = document.createElement('div');
            banner.className = 'year-banner';
            banner.style.left = `${meta.x + (COL_W * meta.cols) / 2}px`;
            banner.style.top = `${PADDING_Y - 90}px`;
            banner.style.transform = `translateX(-50%) rotate(${(hash(y) - 0.5) * 4}deg)`;
            banner.textContent = String(y);
            papersEl.appendChild(banner);
        });

        // Place artifacts
        papers = [];
        papersEl.querySelectorAll('.paper').forEach(p => p.remove());
        events.forEach((e, sortedIdx) => {
            const list = byYear[e.year];
            const idx = list.indexOf(e);
            const meta = yearMeta[e.year];
            const colIdx = idx % meta.cols;
            const rowIdx = Math.floor(idx / meta.cols);
            const x = meta.x + colIdx * COL_W + (hash(e.id * 7) - 0.5) * 30;
            const y = PADDING_Y + rowIdx * ROW_H + (hash(e.id * 13) - 0.5) * 26;
            const rot = (hash(e.id * 19) - 0.5) * 14; // -7..7 deg

            const paperEl = makePaper(e, { x, y, rot });
            // staggered drop-in: ~25ms between papers, with slight randomization
            paperEl.style.animationDelay = `${sortedIdx * 28 + hash(e.id) * 50}ms`;
            papersEl.appendChild(paperEl);

            const w = paperEl.offsetWidth;
            const h = paperEl.offsetHeight;
            papers.push({ event: e, el: paperEl, x, y, rot, w, h });
        });
    }

    // -- paper construction -------------------------------------------------
    function makePaper(event, { x, y, rot }) {
        const el = document.createElement('article');
        const kind = paperKindFor(event);
        el.className = `paper paper--${kind}`;
        el.dataset.eventId = String(event.id);
        el.dataset.category = event.category;
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        el.style.setProperty('--rot', `${rot}deg`);

        // tack color varies by category for variety
        const tackColors = {
            policy: '#2f6d3a',
            watchdog: '#1f3d8a',
            court: '#7c2d12',
            investigation: '#7e3c97',
            incident: '#c1121f',
        };
        el.style.setProperty('--tack-color', tackColors[event.category] || '#c1121f');

        el.innerHTML = renderPaperContent(event, kind);

        el.addEventListener('click', (e) => {
            // ignore clicks that came from a pan-drag
            if (Math.hypot(panStart?.dx || 0, panStart?.dy || 0) > 6) return;
            // ignore the trailing click that fires right after a pinch
            if (performance.now() - lastPinchAt < 250) return;
            window.iceTimeline.openModal(event.id);
        });
        el.addEventListener('mouseenter', () => {
            zCounter += 1;
            el.style.zIndex = String(zCounter);
            highlightConnected(event.id, true);
        });
        el.addEventListener('mouseleave', () => {
            highlightConnected(event.id, false);
        });
        return el;
    }

    function paperKindFor(event) {
        return ({
            policy: 'memo',
            watchdog: 'document',
            court: 'court',
            investigation: 'clipping',
            incident: 'polaroid',
        })[event.category] || 'document';
    }

    function renderPaperContent(event, kind) {
        const date = escapeHtml(event.date);
        const title = escapeHtml(event.title);
        const excerpt = escapeHtml(truncate(event.excerpt, 120));
        const source = escapeHtml(event.source);
        const cat = escapeHtml(window.iceTimeline.getCategoryLabel(event.category).toUpperCase());

        // hash to pick visual variant within a kind for variety
        const variant = Math.floor(hash(event.id * 31) * 3);

        const img = (event.media && event.media.type === 'image' && event.media.src)
            ? { src: escapeHtml(event.media.src), alt: escapeHtml(event.media.alt || event.title) }
            : null;
        const photoBand = img
            ? `<div class="paper-photo"><img src="${img.src}" alt="${img.alt}" loading="lazy"></div>`
            : '';

        switch (kind) {
            case 'polaroid': {
                // Polaroid: square photo area on top, caption underneath in handwriting.
                // If the event has no real image and no placeholder cue, omit the photo
                // block entirely and render a text-only polaroid.
                const hasPlaceholder = !!(event.mediaPlaceholder || event.mediaType);
                if (!img && !hasPlaceholder) {
                    return `
                        <div class="tack"></div>
                        <div class="polaroid-textonly">
                            <div class="polaroid-stamp">${cat}</div>
                            <div class="polaroid-date">${date}</div>
                        </div>
                        <div class="polaroid-caption">${title}</div>
                        <div class="polaroid-excerpt">${excerpt}</div>
                        <div class="polaroid-source">${source}</div>
                    `;
                }
                const photoCls = img ? 'polaroid-photo polaroid-photo--photo' : `polaroid-photo polaroid-photo--v${variant}`;
                const photoImg = img ? `<img class="polaroid-img" src="${img.src}" alt="${img.alt}" loading="lazy">` : '';
                return `
                    <div class="tack"></div>
                    <div class="${photoCls}">
                        ${photoImg}
                        <div class="polaroid-stamp">${cat}</div>
                        <div class="polaroid-date">${date}</div>
                    </div>
                    <div class="polaroid-caption">${title}</div>
                    <div class="polaroid-source">${source}</div>
                `;
            }
            case 'document': {
                // Official report / OIG / GAO document
                return `
                    <div class="tack"></div>
                    <div class="doc-letterhead">
                        <div class="doc-seal"></div>
                        <div class="doc-letterhead-text">
                            <div class="doc-agency">${guessAgency(event)}</div>
                            <div class="doc-classification">OFFICIAL REPORT</div>
                        </div>
                    </div>
                    <div class="doc-meta">
                        <span>${date}</span>
                        <span class="doc-cat">${cat}</span>
                    </div>
                    <h3 class="doc-title">${title}</h3>
                    ${photoBand}
                    <p class="doc-excerpt">${excerpt}</p>
                    <div class="doc-stamp">EVIDENCE</div>
                    <div class="doc-source">— ${source}</div>
                `;
            }
            case 'court': {
                return `
                    <div class="tack"></div>
                    <div class="court-header">
                        <div class="court-seal">⚖</div>
                        <div class="court-line">UNITED STATES</div>
                        <div class="court-line">v.</div>
                    </div>
                    <div class="court-meta">${date}</div>
                    <h3 class="court-title">${title}</h3>
                    ${photoBand}
                    <p class="court-excerpt">${excerpt}</p>
                    <div class="court-source">${source}</div>
                `;
            }
            case 'clipping': {
                // Newspaper clipping — torn edges, multi-column header, dated
                return `
                    <div class="tack"></div>
                    <div class="clip-tape clip-tape--top"></div>
                    <div class="clip-masthead">
                        <span class="clip-outlet">${guessOutlet(event)}</span>
                        <span class="clip-date">${date}</span>
                    </div>
                    <h3 class="clip-headline clip-headline--v${variant}">${title}</h3>
                    ${photoBand}
                    <p class="clip-deck">${excerpt}</p>
                    <div class="clip-byline">By ${guessByline(event)}</div>
                `;
            }
            case 'memo':
            default: {
                return `
                    <div class="tack"></div>
                    <div class="memo-header">
                        <div class="memo-line"><span>MEMORANDUM</span></div>
                        <div class="memo-line"><strong>DATE:</strong> ${date}</div>
                        <div class="memo-line"><strong>RE:</strong> Policy</div>
                        <div class="memo-line"><strong>CLASS:</strong> ${cat}</div>
                    </div>
                    <h3 class="memo-title">${title}</h3>
                    ${photoBand}
                    <p class="memo-body">${excerpt}</p>
                    <div class="memo-source">/ ${source} /</div>
                `;
            }
        }
    }

    function guessAgency(event) {
        const s = event.source || '';
        if (/GAO/i.test(s)) return 'U.S. GOVERNMENT ACCOUNTABILITY OFFICE';
        if (/OIG/i.test(s)) return 'DHS OFFICE OF INSPECTOR GENERAL';
        if (/Congressional/i.test(s)) return 'U.S. CONGRESS';
        if (/DHS/i.test(s)) return 'DEPT. OF HOMELAND SECURITY';
        if (/Court/i.test(s)) return 'U.S. FEDERAL COURT';
        if (/Senate/i.test(s)) return 'U.S. SENATE';
        return 'GOVERNMENT WATCHDOG';
    }
    function guessOutlet(event) {
        const s = event.source || '';
        const known = ['NPR', 'CNN', 'NBC News', 'CBS News', 'PBS NewsHour', 'ProPublica', 'The Atlantic', 'CBS Minnesota'];
        for (const k of known) if (s.includes(k)) return k.toUpperCase();
        if (/Type Investigations/i.test(s)) return 'TYPE INVESTIGATIONS';
        if (/Business Insider/i.test(s)) return 'BUSINESS INSIDER';
        if (/The Trace/i.test(s)) return 'THE TRACE';
        if (/American Immigration/i.test(s)) return 'AM. IMMIGRATION COUNCIL';
        if (/Physicians/i.test(s)) return 'PHYSICIANS FOR HUMAN RIGHTS';
        return 'INVESTIGATIVE PRESS';
    }
    function guessByline(event) {
        // deterministic fake byline so the visual reads as a real clipping
        const firstNames = ['M.', 'R.', 'J.', 'A.', 'S.', 'T.', 'L.', 'K.'];
        const lastNames = ['Rivera', 'Tanaka', 'Holloway', 'Ortiz', 'Greene', 'Bashir', 'Walker', 'Choi', 'Singh', 'Reyes'];
        const a = firstNames[Math.floor(hash(event.id * 41) * firstNames.length)];
        const b = lastNames[Math.floor(hash(event.id * 73) * lastNames.length)];
        return `${a} ${b}`;
    }

    // -- yarn (red string between same-source events) ----------------------
    function drawYarn() {
        // chain events by source domain, oldest-to-newest
        const events = window.iceTimeline.getEvents();
        const byHost = {};
        events.forEach(e => {
            try {
                const h = new URL(e.sourceUrl).hostname.replace(/^www\./, '');
                (byHost[h] = byHost[h] || []).push(e);
            } catch (_) {}
        });
        yarns = [];

        // gradient definition for the yarn
        let defs = stringsEl.querySelector('defs');
        if (!defs) {
            defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
            stringsEl.appendChild(defs);
        }
        defs.innerHTML = `
            <filter id="yarnShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1.4"/>
                <feOffset dx="0" dy="2"/>
                <feComponentTransfer><feFuncA type="linear" slope="0.45"/></feComponentTransfer>
                <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
        `;

        // also add light category-based threads: chain events of same category by year
        const byCategory = {};
        events.forEach(e => (byCategory[e.category] = byCategory[e.category] || []).push(e));
        Object.entries(byCategory).forEach(([cat, list]) => {
            if (list.length < 2) return;
            const sorted = list.slice().sort((a, b) => a.year - b.year);
            const color = window.iceTimeline.getCategoryColor(cat);
            for (let i = 0; i < sorted.length - 1; i++) {
                addYarn(sorted[i], sorted[i + 1], color, 'category', 0.18);
            }
        });

        // strong red yarn for shared-source chains
        Object.values(byHost).forEach(group => {
            if (group.length < 2) return;
            const sorted = group.slice().sort((a, b) => a.year - b.year);
            for (let i = 0; i < sorted.length - 1; i++) {
                addYarn(sorted[i], sorted[i + 1], '#c1121f', 'source', 0.85);
            }
        });
    }

    function addYarn(eventA, eventB, color, kind, opacity) {
        const a = papers.find(p => p.event.id === eventA.id);
        const b = papers.find(p => p.event.id === eventB.id);
        if (!a || !b) return;

        const ax = a.x + a.w / 2;
        const ay = a.y + 14;          // approximate tack location
        const bx = b.x + b.w / 2;
        const by = b.y + 14;

        // sag the line — quadratic Bezier with droop midpoint
        const mx = (ax + bx) / 2;
        const my = Math.max(ay, by) + 30 + hash(a.event.id + b.event.id * 3) * 30;

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', `M ${ax} ${ay} Q ${mx} ${my} ${bx} ${by}`);
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', color);
        path.setAttribute('stroke-width', kind === 'source' ? '2.2' : '1.2');
        path.setAttribute('stroke-linecap', 'round');
        path.setAttribute('opacity', String(opacity));
        path.setAttribute('filter', 'url(#yarnShadow)');
        path.classList.add('yarn', `yarn--${kind}`);
        path.dataset.aId = String(a.event.id);
        path.dataset.bId = String(b.event.id);

        stringsEl.appendChild(path);
        yarns.push({ a, b, path, kind, baseOpacity: opacity });
    }

    function highlightConnected(eventId, on) {
        yarns.forEach(y => {
            const involved = y.a.event.id === eventId || y.b.event.id === eventId;
            if (involved) {
                y.path.setAttribute('opacity', on ? '1' : String(y.baseOpacity));
                y.path.setAttribute('stroke-width', on
                    ? (y.kind === 'source' ? '3' : '2')
                    : (y.kind === 'source' ? '2.2' : '1.2'));
            }
        });
        // dim other papers
        papers.forEach(p => {
            const isThis = p.event.id === eventId;
            const isConnected = yarns.some(y =>
                (y.a.event.id === eventId && y.b.event.id === p.event.id) ||
                (y.b.event.id === eventId && y.a.event.id === p.event.id)
            );
            p.el.classList.toggle('paper--dim', on && !isThis && !isConnected);
        });
    }

    function applyFilter(state) {
        const matchingIds = state && state.matchingIds
            ? state.matchingIds
            : new Set(window.iceTimeline.getEvents().filter(window.iceTimeline.eventMatches).map(e => e.id));
        papers.forEach(p => {
            const match = matchingIds.has(p.event.id);
            p.el.classList.toggle('paper--filtered-out', !match);
        });
        yarns.forEach(y => {
            const both = matchingIds.has(y.a.event.id) && matchingIds.has(y.b.event.id);
            y.path.style.opacity = both ? String(y.baseOpacity) : '0.04';
        });
    }

    // -- pan + zoom --------------------------------------------------------
    function computeZoomBounds() {
        const fw = frame.clientWidth;
        const fh = frame.clientHeight;
        const bw = boardW || board.offsetWidth;
        const bh = boardH || board.offsetHeight;
        if (!fw || !fh || !bw || !bh) return;
        // Leave a little breathing room so the cork edges are visible at fit.
        const margin = 0.94;
        zoomFit = Math.min(fw / bw, fh / bh) * margin;
        zoomMin = zoomFit;
    }
    function fitInitialView() {
        computeZoomBounds();
        const fw = frame.clientWidth;
        const fh = frame.clientHeight;
        // On narrow viewports, fitting the entire ~3500px board into a phone
        // screen scales papers down to ~10% — illegible. Open zoomed-in on the
        // most recent year instead; users can pinch out to overview.
        const isMobile = fw < 768;
        if (isMobile && latestColWidth > 0) {
            const targetColPx = Math.min(fw * 0.92, 360);
            const desired = targetColPx / latestColWidth;
            scale = Math.max(zoomMin, Math.min(ZOOM_MAX, desired));
            pan.x = fw / 2 - latestColCenterX * scale;
            pan.y = (fh - boardH * scale) / 2;
            clampPan();
        } else {
            scale = zoomFit;
            pan.x = (fw - boardW * scale) / 2;
            pan.y = (fh - boardH * scale) / 2;
        }
        applyTransform();
    }
    function clampPan() {
        const fw = frame.clientWidth;
        const fh = frame.clientHeight;
        const sw = (boardW || board.offsetWidth) * scale;
        const sh = (boardH || board.offsetHeight) * scale;
        const overscroll = 80;
        // If the scaled board is smaller than the viewport, center it.
        // Otherwise allow a small overscroll past each edge.
        if (sw <= fw) {
            pan.x = (fw - sw) / 2;
        } else {
            pan.x = Math.min(overscroll, Math.max(fw - sw - overscroll, pan.x));
        }
        if (sh <= fh) {
            pan.y = (fh - sh) / 2;
        } else {
            pan.y = Math.min(overscroll, Math.max(fh - sh - overscroll, pan.y));
        }
    }
    function applyTransform() {
        board.style.transform = `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${scale})`;
        if (zoomBtnIn)  zoomBtnIn.disabled  = scale >= ZOOM_MAX - 1e-3;
        if (zoomBtnOut) zoomBtnOut.disabled = scale <= zoomMin + 1e-3;
    }
    function setZoom(newScale, anchorX, anchorY) {
        newScale = Math.max(zoomMin, Math.min(ZOOM_MAX, newScale));
        if (Math.abs(newScale - scale) < 1e-4) return;
        // Keep the world point under (anchorX, anchorY) fixed across the zoom.
        const wx = (anchorX - pan.x) / scale;
        const wy = (anchorY - pan.y) / scale;
        scale = newScale;
        pan.x = anchorX - wx * scale;
        pan.y = anchorY - wy * scale;
        clampPan();
        applyTransform();
    }
    function zoomBy(factor, anchor) {
        const a = anchor || { x: frame.clientWidth / 2, y: frame.clientHeight / 2 };
        setZoom(scale * factor, a.x, a.y);
    }
    // Track every active pointer so we can distinguish single-finger pan from
    // two-finger pinch (mobile). Mac trackpad pinch still uses ctrl+wheel.
    const pointers = new Map(); // pointerId -> {x, y}
    let pinch = null;           // {startDist, startScale, startPan, startMid}
    let lastPinchAt = 0;        // timestamp; paper-click is suppressed briefly
                                // after a pinch so the trailing tap doesn't open a modal.

    function onDown(e) {
        if (e.button !== undefined && e.button !== 0) return;
        pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

        if (pointers.size >= 2) {
            // Promote to pinch — abandon any single-pointer pan in progress.
            startPinch();
            panStart = null;
            isPanning = false;
            frame.classList.remove('is-panning');
            return;
        }

        // Single pointer: existing pan / paper-click logic.
        if (e.target.closest('.paper')) {
            panStart = { x: e.clientX, y: e.clientY, panX: pan.x, panY: pan.y, dx: 0, dy: 0, target: 'paper' };
            return;
        }
        isPanning = true;
        panStart = { x: e.clientX, y: e.clientY, panX: pan.x, panY: pan.y, dx: 0, dy: 0, target: 'frame' };
        pointerDownAt = performance.now();
        try { frame.setPointerCapture(e.pointerId); } catch (_) {}
        frame.classList.add('is-panning');
    }
    function onMove(e) {
        if (!pointers.has(e.pointerId)) return;
        pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

        if (pinch && pointers.size >= 2) {
            updatePinch();
            return;
        }

        if (!panStart) return;
        const dx = e.clientX - panStart.x;
        const dy = e.clientY - panStart.y;
        panStart.dx = dx;
        panStart.dy = dy;
        if (panStart.target === 'paper' && Math.hypot(dx, dy) > 8) {
            isPanning = true;
            frame.classList.add('is-panning');
            try { frame.setPointerCapture(e.pointerId); } catch (_) {}
        }
        if (isPanning) {
            pan.x = panStart.panX + dx;
            pan.y = panStart.panY + dy;
            clampPan();
            applyTransform();
        }
    }
    function onUp(e) {
        pointers.delete(e.pointerId);
        try { frame.releasePointerCapture(e.pointerId); } catch (_) {}

        if (pinch && pointers.size < 2) {
            // Pinch ended. If a single finger is still down, resume panning
            // from its current location so there's no jump.
            pinch = null;
            lastPinchAt = performance.now();
            if (pointers.size === 1) {
                const [remaining] = pointers.values();
                panStart = { x: remaining.x, y: remaining.y, panX: pan.x, panY: pan.y, dx: 0, dy: 0, target: 'frame' };
                isPanning = true;
                frame.classList.add('is-panning');
                return;
            }
        }

        if (pointers.size === 0) {
            isPanning = false;
            panStart = null;
            frame.classList.remove('is-panning');
        }
    }
    function startPinch() {
        const [a, b] = [...pointers.values()];
        const rect = frame.getBoundingClientRect();
        pinch = {
            startDist: Math.hypot(b.x - a.x, b.y - a.y) || 1,
            startScale: scale,
            startPan: { x: pan.x, y: pan.y },
            startMid: { x: (a.x + b.x) / 2 - rect.left, y: (a.y + b.y) / 2 - rect.top },
        };
    }
    function updatePinch() {
        const [a, b] = [...pointers.values()];
        const rect = frame.getBoundingClientRect();
        const dist = Math.hypot(b.x - a.x, b.y - a.y) || 1;
        const mid = { x: (a.x + b.x) / 2 - rect.left, y: (a.y + b.y) / 2 - rect.top };
        const factor = dist / pinch.startDist;
        const newScale = Math.max(zoomMin, Math.min(ZOOM_MAX, pinch.startScale * factor));
        // Keep the world point under the original midpoint anchored to the
        // current midpoint — combines pinch zoom with two-finger pan.
        const wx = (pinch.startMid.x - pinch.startPan.x) / pinch.startScale;
        const wy = (pinch.startMid.y - pinch.startPan.y) / pinch.startScale;
        scale = newScale;
        pan.x = mid.x - wx * scale;
        pan.y = mid.y - wy * scale;
        clampPan();
        applyTransform();
    }
    function onWheel(e) {
        e.preventDefault();
        // Trackpad pinch and Ctrl/⌘+wheel both arrive as wheel events with
        // ctrlKey/metaKey set. Treat them as zoom toward the cursor.
        if (e.ctrlKey || e.metaKey) {
            const rect = frame.getBoundingClientRect();
            const factor = Math.exp(-e.deltaY * 0.01);
            setZoom(scale * factor, e.clientX - rect.left, e.clientY - rect.top);
            return;
        }
        // Otherwise: two-finger scroll = pan.
        pan.x -= e.deltaX;
        pan.y -= e.deltaY;
        clampPan();
        applyTransform();
    }
    function onResize() {
        if (!isActive) return;
        // Recompute the fit/min scale for the new viewport, then clamp the
        // current zoom and pan into the new bounds.
        computeZoomBounds();
        if (scale < zoomMin) scale = zoomMin;
        if (scale > ZOOM_MAX) scale = ZOOM_MAX;
        clampPan();
        applyTransform();
    }
    function onKeydown(e) {
        if (!isActive) return;
        if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
        if (e.altKey) return;
        // Don't swallow Ctrl/⌘ shortcuts the browser uses (e.g. Cmd-+ for browser zoom).
        if (e.metaKey || e.ctrlKey) return;
        if (e.key === '+' || e.key === '=') {
            e.preventDefault();
            zoomBy(ZOOM_STEP);
        } else if (e.key === '-' || e.key === '_') {
            e.preventDefault();
            zoomBy(1 / ZOOM_STEP);
        } else if (e.key === '0') {
            e.preventDefault();
            fitInitialView();
        }
    }

    // -- zoom controls UI --------------------------------------------------
    function buildZoomControls(rootEl) {
        const wrap = document.createElement('div');
        wrap.className = 'evidence-zoom';
        wrap.innerHTML = `
            <button type="button" class="zoom-btn" data-act="in" aria-label="Zoom in" title="Zoom in (+)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <line x1="12" y1="6" x2="12" y2="18"/>
                    <line x1="6" y1="12" x2="18" y2="12"/>
                </svg>
            </button>
            <button type="button" class="zoom-btn" data-act="out" aria-label="Zoom out" title="Zoom out (−)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <line x1="6" y1="12" x2="18" y2="12"/>
                </svg>
            </button>
            <button type="button" class="zoom-btn" data-act="fit" aria-label="Fit to view" title="Fit to view (0)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <path d="M4 9V5h4M20 9V5h-4M4 15v4h4M20 15v4h-4"/>
                </svg>
            </button>
        `;
        rootEl.appendChild(wrap);
        zoomBtnIn  = wrap.querySelector('[data-act="in"]');
        zoomBtnOut = wrap.querySelector('[data-act="out"]');
        zoomBtnFit = wrap.querySelector('[data-act="fit"]');
        zoomBtnIn.addEventListener('click',  () => zoomBy(ZOOM_STEP));
        zoomBtnOut.addEventListener('click', () => zoomBy(1 / ZOOM_STEP));
        zoomBtnFit.addEventListener('click', () => fitInitialView());
    }

    // -- utils -------------------------------------------------------------
    function hash(n) {
        const x = Math.sin(n * 12.9898 + 78.233) * 43758.5453;
        return x - Math.floor(x);
    }
    function escapeHtml(s) {
        return String(s).replace(/[&<>"']/g, c => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
        }[c]));
    }
    function truncate(s, n) {
        s = String(s || '');
        return s.length <= n ? s : s.slice(0, n - 1).trim() + '…';
    }

    register();
})();
