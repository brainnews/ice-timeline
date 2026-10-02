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
    let papersById = new Map(); // eventId -> paper
    let yarns = [];  // [{ a, b, path, shadow }]
    let shadowGroup, lineGroup;
    let adjacency = new Map(); // eventId -> { yarns: [...], papers: [...] }
    let zCounter = 1;
    let didFitOnce = false;
    let pendingFilterFit = null; // filter state to frame once the view is active
    let boardW = 0, boardH = 0;
    let latestColCenterX = 0, latestColWidth = 0;
    let zoomBtnIn, zoomBtnOut, zoomBtnFit;

    // -- hover-intent state --------------------------------------------------
    // A single committed hover id + a short debounce so a card can never be
    // left in a half-applied dim/focus state when the pointer oscillates
    // rapidly between overlapping cards.
    const HOVER_DELAY = 50; // ms
    let hoverTimer = null;
    let activeHoverId = null;

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
                if (pendingFilterFit) fitToFilter(pendingFilterFit);
            });
        } else if (pendingFilterFit) {
            requestAnimationFrame(() => fitToFilter(pendingFilterFit));
        }
    }
    function deactivate() {
        isActive = false;
    }

    // -- layout ------------------------------------------------------------
    // Years with more than SUBCLUSTER_THRESHOLD events are split into
    // month-sized sub-blocks (buildYearBlocks) rather than one column that
    // grows without bound — this is what keeps the board from collapsing
    // into one enormous strip as the news-scan pipeline keeps adding events
    // to the current year.
    const MONTH_LABELS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const SUBCLUSTER_THRESHOLD = 7;
    const MAX_BLOCK_SIZE = 8;
    const MIN_BLOCK_SIZE = 3;

    function parseMonthFromDate(dateStr) {
        const s = String(dateStr || '').toLowerCase();
        const names = ['january', 'february', 'march', 'april', 'may', 'june',
            'july', 'august', 'september', 'october', 'november', 'december'];
        for (let i = 0; i < names.length; i++) {
            if (s.includes(names[i])) return i;
        }
        return null;
    }

    // Groups a year's events (already id-sorted) into blocks bounded to
    // roughly MIN_BLOCK_SIZE..MAX_BLOCK_SIZE events each. Ordering is always
    // driven by event.id (guaranteed chronological); the date string is only
    // used to derive a cosmetic month label, so an unparseable date (e.g.
    // "2002-2003") only degrades a label, never breaks the layout.
    function buildYearBlocks(yearEvents) {
        if (yearEvents.length <= SUBCLUSTER_THRESHOLD) {
            return [{ events: yearEvents, label: null }];
        }

        const buckets = [];
        const byMonth = new Map();
        yearEvents.forEach(e => {
            const m = parseMonthFromDate(e.date);
            const key = m === null ? -1 : m;
            if (!byMonth.has(key)) {
                const bucket = { month: key, events: [] };
                byMonth.set(key, bucket);
                buckets.push(bucket);
            }
            byMonth.get(key).events.push(e);
        });
        buckets.sort((a, b) => (a.month === -1 ? 1 : b.month === -1 ? -1 : a.month - b.month));

        const blocks = [];
        let pending = null;
        const flushPending = () => { if (pending) blocks.push(pending); pending = null; };
        buckets.forEach(bucket => {
            if (bucket.events.length > MAX_BLOCK_SIZE) {
                flushPending();
                const parts = Math.ceil(bucket.events.length / MAX_BLOCK_SIZE);
                for (let i = 0; i < parts; i++) {
                    blocks.push({
                        events: bucket.events.slice(i * MAX_BLOCK_SIZE, (i + 1) * MAX_BLOCK_SIZE),
                        months: [bucket.month],
                        partLabel: parts > 1 ? `${i + 1}/${parts}` : null,
                    });
                }
                return;
            }
            if (!pending) {
                pending = { events: bucket.events.slice(), months: [bucket.month] };
            } else if (pending.events.length < MIN_BLOCK_SIZE || pending.events.length + bucket.events.length <= MAX_BLOCK_SIZE) {
                pending.events = pending.events.concat(bucket.events);
                pending.months.push(bucket.month);
            } else {
                flushPending();
                pending = { events: bucket.events.slice(), months: [bucket.month] };
            }
        });
        flushPending();

        blocks.forEach(b => {
            const known = b.months.filter(m => m !== -1);
            if (!known.length) b.label = 'UNDATED';
            else if (known.length === 1) b.label = MONTH_LABELS[known[0]] + (b.partLabel ? ` (${b.partLabel})` : '');
            else b.label = `${MONTH_LABELS[known[0]]}–${MONTH_LABELS[known[known.length - 1]]}`;
        });
        return blocks;
    }

    function layoutAndRender(events) {
        const byYear = {};
        events.forEach(e => (byYear[e.year] = byYear[e.year] || []).push(e));
        const years = Object.keys(byYear).map(Number).sort((a, b) => a - b);

        const COL_W = 320;
        // Cards rotate up to ±5deg around a pivot near their top edge (see
        // makePaper), so a tall card's bottom corners can swing sideways by
        // tens of px beyond its unrotated box. ROW_GAP/BLOCK_GAP_X need to be
        // wide enough to absorb that swing on both neighbors, or adjacent
        // rotated cards can visually overlap — which reads as hover flicker
        // (the browser's hit-test alternates between the two overlapping
        // shapes) even though their axis-aligned boxes never touch.
        const ROW_GAP = 56;
        const BLOCK_GAP_X = 90;
        const YEAR_GAP_X = 90;
        const TIER_GAP_Y = 110;
        const PADDING_X = 220;
        // Top/bottom padding clears the floating UI (search bar at top,
        // hint pill at bottom) so the year banners are immediately legible.
        const PADDING_Y = 240;

        // Blocks (month groups) and their column counts don't depend on how
        // blocks are wrapped into tiers, so build them once.
        const yearBlocks = {};
        years.forEach(y => {
            const list = byYear[y].slice().sort((a, b) => a.id - b.id);
            yearBlocks[y] = buildYearBlocks(list).map(b => ({ ...b, cols: b.events.length > 5 ? 2 : 1 }));
        });

        // -- create + measure every paper once. Positions are assigned
        // afterwards (position:absolute papers measure their own content
        // regardless of left/top), in a single reflow.
        const fragment = document.createDocumentFragment();
        papersEl.querySelectorAll('.paper').forEach(p => p.remove());
        const placed = [];
        years.forEach(y => {
            yearBlocks[y].forEach(block => {
                block.events.forEach((e, i) => {
                    const rot = (hash(e.id * 19) - 0.5) * 10; // -5..5 deg
                    const paperEl = makePaper(e, { x: 0, y: 0, rot });
                    // staggered drop-in: ~22ms between papers, with slight randomization
                    paperEl.style.animationDelay = `${placed.length * 22 + hash(e.id) * 40}ms`;
                    fragment.appendChild(paperEl);
                    placed.push({
                        event: e, el: paperEl, x: 0, y: 0, rot, block,
                        rowIdx: Math.floor(i / block.cols),
                        colIdx: i % block.cols,
                    });
                });
            });
        });
        papersEl.appendChild(fragment);
        placed.forEach(p => {
            p.w = p.el.offsetWidth;
            p.h = p.el.offsetHeight;
        });

        // Pure geometry for a given number of blocks per tier (row of month
        // blocks within a year). Real per-row card heights keep cards from
        // bleeding into the next row, and every block's footprint stays
        // bounded regardless of year size.
        function computeLayout(blocksPerTier) {
            const pos = new Map();      // paper -> {x, y}
            const monthBanners = [];
            const yearBanners = [];
            let xCursor = PADDING_X;
            let boardHeight = 0;
            let latest = null;
            years.forEach(y => {
                const blocks = yearBlocks[y];
                const tiers = [];
                for (let i = 0; i < blocks.length; i += blocksPerTier) {
                    tiers.push(blocks.slice(i, i + blocksPerTier));
                }
                let yearWidth = 0;
                let tierY = PADDING_Y;
                tiers.forEach(tier => {
                    let bx = 0;
                    let tierHeight = 0;
                    tier.forEach(block => {
                        const cards = placed.filter(p => p.block === block);
                        const rowHeights = [];
                        cards.forEach(c => { rowHeights[c.rowIdx] = Math.max(rowHeights[c.rowIdx] || 0, c.h); });
                        const rowY = [];
                        let cum = 0;
                        rowHeights.forEach((h, r) => { rowY[r] = cum; cum += h + ROW_GAP; });
                        cards.forEach(c => pos.set(c, {
                            x: xCursor + bx + c.colIdx * COL_W + (hash(c.event.id * 7) - 0.5) * 16,
                            y: tierY + rowY[c.rowIdx] + (hash(c.event.id * 13) - 0.5) * 10,
                        }));
                        // Sub-block label, only shown when the year was actually split.
                        if (blocks.length > 1 && block.label) {
                            monthBanners.push({ x: xCursor + bx + (block.cols * COL_W) / 2, y: tierY - 46, text: block.label });
                        }
                        if (block === blocks[blocks.length - 1]) {
                            latest = { x: xCursor + bx, w: block.cols * COL_W };
                        }
                        tierHeight = Math.max(tierHeight, Math.max(0, cum - ROW_GAP));
                        bx += block.cols * COL_W + BLOCK_GAP_X;
                    });
                    yearWidth = Math.max(yearWidth, bx - BLOCK_GAP_X);
                    tierY += tierHeight + TIER_GAP_Y;
                });
                boardHeight = Math.max(boardHeight, tierY - TIER_GAP_Y);
                yearBanners.push({ x: xCursor + yearWidth / 2, year: y });
                xCursor += yearWidth + YEAR_GAP_X;
            });
            return {
                pos, monthBanners, yearBanners, latest,
                width: xCursor - YEAR_GAP_X + PADDING_X,
                height: boardHeight + PADDING_Y,
            };
        }

        // Pick the tier width that makes the zoomed-out overview largest for
        // this viewport. A fixed 4 blocks/tier stacked the busiest years
        // into a tall column and left most of a landscape board empty.
        const fw = frame.clientWidth;
        const fh = frame.clientHeight - INSET_TOP - INSET_BOTTOM;
        let layout = computeLayout(4);
        if (fw > 0 && fh > 0) {
            const fitScale = l => Math.min(fw / l.width, fh / l.height);
            for (let bpt = 2; bpt <= 12; bpt++) {
                const candidate = computeLayout(bpt);
                if (fitScale(candidate) > fitScale(layout) + 1e-6) layout = candidate;
            }
        }

        // -- apply
        placed.forEach(p => {
            const { x, y } = layout.pos.get(p);
            p.x = x;
            p.y = y;
            p.el.style.left = `${x}px`;
            p.el.style.top = `${y}px`;
        });
        papersEl.querySelectorAll('.month-banner, .year-banner').forEach(b => b.remove());
        const bannerFragment = document.createDocumentFragment();
        layout.monthBanners.forEach(b => {
            const mb = document.createElement('div');
            mb.className = 'month-banner';
            mb.style.left = `${b.x}px`;
            mb.style.top = `${b.y}px`;
            mb.textContent = b.text;
            bannerFragment.appendChild(mb);
        });
        layout.yearBanners.forEach(b => {
            const banner = document.createElement('div');
            banner.className = 'year-banner';
            banner.style.left = `${b.x}px`;
            banner.style.top = `${PADDING_Y - 90}px`;
            banner.style.transform = `translateX(-50%) rotate(${(hash(b.year) - 0.5) * 4}deg)`;
            banner.textContent = String(b.year);
            bannerFragment.appendChild(banner);
        });
        papersEl.appendChild(bannerFragment);

        // Mobile fitInitialView zooms to "the most recent chunk of the
        // board" — target the freshest block, not the whole year, so this
        // stays a sensible target as the current year keeps growing.
        latestColWidth = layout.latest.w;
        latestColCenterX = layout.latest.x + layout.latest.w / 2;

        boardW = layout.width;
        boardH = layout.height;
        board.style.width = `${boardW}px`;
        board.style.height = `${boardH}px`;
        stringsEl.setAttribute('viewBox', `0 0 ${boardW} ${boardH}`);
        stringsEl.setAttribute('width', boardW);
        stringsEl.setAttribute('height', boardH);

        papers = placed;
        papersById = new Map(papers.map(p => [p.event.id, p]));
    }

    // -- paper construction -------------------------------------------------
    function makePaper(event, { x, y, rot }) {
        const el = document.createElement('article');
        const kind = paperKindFor(event);
        el.className = `paper paper--${kind} paper--dropping`;
        el.addEventListener('animationend', () => el.classList.remove('paper--dropping'), { once: true });
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
        el.tabIndex = 0;
        el.setAttribute('role', 'button');
        el.setAttribute('aria-label', `${event.date}: ${event.title}`);

        el.addEventListener('click', () => {
            // ignore the trailing click after a pan-drag or a pinch
            const now = performance.now();
            if (now - lastDragEndAt < 250 || now - lastPinchAt < 250) return;
            window.iceTimeline.openModal(event.id);
        });
        el.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.iceTimeline.openModal(event.id);
            }
        });
        // Tabbing through the wall pans each focused card into view.
        el.addEventListener('focus', () => {
            const p = papersById.get(event.id);
            if (p && el.matches(':focus-visible')) panToPaper(p);
        });
        el.addEventListener('mouseenter', () => {
            zCounter += 1;
            el.style.zIndex = String(zCounter);
            scheduleHoverOn(event.id);
        });
        el.addEventListener('mouseleave', () => {
            scheduleHoverOff(event.id);
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

        // Card-sized thumbnail (see cardImgTag in app.js), not the original.
        const img = (event.media && event.media.type === 'image' && event.media.src)
            ? (cls) => window.iceTimeline.cardImgTag(event.media, cls, event.media.alt || event.title)
            : null;
        const photoBand = img ? `<div class="paper-photo">${img('')}</div>` : '';

        // Decorations (tack, tape) are pinned a few px above the card's own
        // top edge by design. They're kept OUTSIDE .paper-body, which is
        // where CSS paint containment is applied (see views.css) — paint
        // containment clips to the container's own box, so anything meant to
        // visually stick out past it has to live outside that container.
        const tack = `<div class="tack"></div>`;

        switch (kind) {
            case 'polaroid': {
                // Polaroid: square photo area on top, caption underneath in handwriting.
                // If the event has no real image and no placeholder cue, omit the photo
                // block entirely and render a text-only polaroid.
                const hasPlaceholder = !!(event.mediaPlaceholder || event.mediaType);
                if (!img && !hasPlaceholder) {
                    return `
                        ${tack}
                        <div class="paper-body">
                            <div class="polaroid-textonly">
                                <div class="polaroid-stamp">${cat}</div>
                                <div class="polaroid-date">${date}</div>
                            </div>
                            <div class="polaroid-caption">${title}</div>
                            <div class="polaroid-excerpt">${excerpt}</div>
                            <div class="polaroid-source">${source}</div>
                        </div>
                    `;
                }
                const photoCls = img ? 'polaroid-photo polaroid-photo--photo' : `polaroid-photo polaroid-photo--v${variant}`;
                const photoImg = img ? img('polaroid-img') : '';
                return `
                    ${tack}
                    <div class="paper-body">
                        <div class="${photoCls}">
                            ${photoImg}
                            <div class="polaroid-stamp">${cat}</div>
                            <div class="polaroid-date">${date}</div>
                        </div>
                        <div class="polaroid-caption">${title}</div>
                        <div class="polaroid-source">${source}</div>
                    </div>
                `;
            }
            case 'document': {
                // Official report / OIG / GAO document
                return `
                    ${tack}
                    <div class="paper-body">
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
                    </div>
                `;
            }
            case 'court': {
                return `
                    ${tack}
                    <div class="paper-body">
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
                    </div>
                `;
            }
            case 'clipping': {
                // Newspaper clipping — torn edges, multi-column header, dated
                return `
                    ${tack}
                    <div class="clip-tape clip-tape--top"></div>
                    <div class="paper-body">
                        <div class="clip-masthead">
                            <span class="clip-outlet">${guessOutlet(event)}</span>
                            <span class="clip-date">${date}</span>
                        </div>
                        <h3 class="clip-headline clip-headline--v${variant}">${title}</h3>
                        ${photoBand}
                        <p class="clip-deck">${excerpt}</p>
                        <div class="clip-byline">By ${guessByline(event)}</div>
                    </div>
                `;
            }
            case 'memo':
            default: {
                return `
                    ${tack}
                    <div class="paper-body">
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
                    </div>
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

        // Shadows are a plain offset stroke under each yarn (see addYarn)
        // rather than an SVG blur filter: ~90 per-path Gaussian blurs over
        // a ~7500x5000px board were re-rasterized on every zoom step.
        stringsEl.querySelectorAll('.yarn-shadows, .yarn-lines').forEach(g => g.remove());
        shadowGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        shadowGroup.setAttribute('class', 'yarn-shadows');
        lineGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        lineGroup.setAttribute('class', 'yarn-lines');
        stringsEl.append(shadowGroup, lineGroup);

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

        buildAdjacency();
    }

    // Precomputed once per drawYarn() so hover only ever touches the
    // directly-connected yarns/papers (O(degree)) instead of scanning the
    // entire board on every mouseenter/mouseleave (O(n)).
    function buildAdjacency() {
        adjacency = new Map(papers.map(p => [p.event.id, { yarns: [], papers: [] }]));
        yarns.forEach(y => {
            const aId = y.a.event.id;
            const bId = y.b.event.id;
            adjacency.get(aId).yarns.push(y);
            adjacency.get(bId).yarns.push(y);
            adjacency.get(aId).papers.push(y.b);
            adjacency.get(bId).papers.push(y.a);
        });
    }

    function addYarn(eventA, eventB, color, kind, opacity) {
        const a = papersById.get(eventA.id);
        const b = papersById.get(eventB.id);
        if (!a || !b) return;

        const ax = a.x + a.w / 2;
        const ay = a.y + 14;          // approximate tack location
        const bx = b.x + b.w / 2;
        const by = b.y + 14;

        // sag the line — quadratic Bezier with droop midpoint
        const mx = (ax + bx) / 2;
        const my = Math.max(ay, by) + 30 + hash(a.event.id + b.event.id * 3) * 30;

        const d = `M ${ax} ${ay} Q ${mx} ${my} ${bx} ${by}`;
        const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        shadow.setAttribute('d', d);
        shadow.setAttribute('transform', 'translate(0 2)');
        shadow.setAttribute('fill', 'none');
        shadow.setAttribute('stroke', '#000');
        shadow.setAttribute('stroke-width', kind === 'source' ? '3.2' : '2');
        shadow.setAttribute('stroke-linecap', 'round');
        shadow.setAttribute('opacity', String(opacity * 0.3));
        shadowGroup.appendChild(shadow);

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', d);
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', color);
        path.setAttribute('stroke-width', kind === 'source' ? '2.2' : '1.2');
        path.setAttribute('stroke-linecap', 'round');
        path.setAttribute('opacity', String(opacity));
        path.classList.add('yarn', `yarn--${kind}`);
        path.dataset.aId = String(a.event.id);
        path.dataset.bId = String(b.event.id);

        lineGroup.appendChild(path);
        yarns.push({ a, b, path, shadow, kind, baseOpacity: opacity });
    }

    function highlightConnected(eventId, on) {
        const adj = adjacency.get(eventId);
        if (!adj) return;
        adj.yarns.forEach(y => {
            y.path.setAttribute('opacity', on ? '1' : String(y.baseOpacity));
            y.path.setAttribute('stroke-width', on
                ? (y.kind === 'source' ? '3' : '2')
                : (y.kind === 'source' ? '2.2' : '1.2'));
        });
        // The hovered card + its connected neighbors get `paper--focus`;
        // `papersEl`'s `is-hovering` class dims everything else via CSS
        // cascade, so this touches only O(degree) elements, not all papers.
        const hoveredPaper = papersById.get(eventId);
        if (hoveredPaper) hoveredPaper.el.classList.toggle('paper--focus', on);
        adj.papers.forEach(p => p.el.classList.toggle('paper--focus', on));
        papersEl.classList.toggle('is-hovering', on);
    }

    // -- hover-intent debounce ----------------------------------------------
    // Overlapping/rotated cards can shift their hitbox under the cursor as
    // they animate on hover, causing rapid mouseenter/mouseleave oscillation
    // between neighbors. Committing hover state through a single timer with
    // one "active" id at a time guarantees a card can never be left stuck in
    // a dimmed state, regardless of how enter/leave events interleave.
    function scheduleHoverOn(eventId) {
        clearTimeout(hoverTimer);
        hoverTimer = setTimeout(() => commitHoverOn(eventId), HOVER_DELAY);
    }
    function scheduleHoverOff(eventId) {
        clearTimeout(hoverTimer);
        if (activeHoverId === eventId) {
            hoverTimer = setTimeout(() => commitHoverOff(eventId), HOVER_DELAY);
        }
    }
    function commitHoverOn(eventId) {
        if (activeHoverId === eventId) return;
        if (activeHoverId !== null) commitHoverOff(activeHoverId);
        activeHoverId = eventId;
        highlightConnected(eventId, true);
    }
    function commitHoverOff(eventId) {
        if (activeHoverId !== eventId) return;
        highlightConnected(eventId, false);
        activeHoverId = null;
    }

    function applyFilter(state) {
        const matchingIds = state && state.matchingIds
            ? state.matchingIds
            : new Set(window.iceTimeline.getEvents().filter(window.iceTimeline.eventMatches).map(e => e.id));
        const fitState = { matchingIds, filtered: !!(state && (state.category !== 'all' || state.query)) };
        if (isActive && didFitOnce) fitToFilter(fitState);
        else pendingFilterFit = fitState;
        papers.forEach(p => {
            const match = matchingIds.has(p.event.id);
            p.el.classList.toggle('paper--filtered-out', !match);
        });
        yarns.forEach(y => {
            const both = matchingIds.has(y.a.event.id) && matchingIds.has(y.b.event.id);
            // Clear (not set) the inline style for matches, so the hover
            // highlight's opacity attribute isn't permanently overridden.
            y.path.style.opacity = both ? '' : '0.04';
            y.shadow.style.opacity = both ? '' : '0';
        });
    }

    // -- pan + zoom --------------------------------------------------------
    function computeZoomBounds() {
        const fw = frame.clientWidth;
        // Fit between the floating search bar and the hint pill, so the
        // overview's top row isn't tucked under the controls.
        const fh = frame.clientHeight - INSET_TOP - INSET_BOTTOM;
        const bw = boardW || board.offsetWidth;
        const bh = boardH || board.offsetHeight;
        if (fw <= 0 || fh <= 0 || !bw || !bh) return;
        // Leave a little breathing room so the cork edges are visible at fit.
        const margin = 0.94;
        zoomFit = Math.min(fw / bw, fh / bh) * margin;
        zoomMin = zoomFit;
    }
    function fitInitialView(animate = false) {
        if (animate && !reduceMotion.matches) {
            board.classList.add('is-animating');
            clearTimeout(animTimer);
            animTimer = setTimeout(stopAnimating, 500);
        }
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
    // -- camera moves ------------------------------------------------------
    // Floating UI covers the top (search/filters) and bottom (hint pill) of
    // the frame, so "fit" targets the area between them.
    const INSET_TOP = 80, INSET_BOTTOM = 70;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let animTimer = null;

    function moveTo(newScale, panX, panY) {
        scale = Math.max(zoomMin, Math.min(ZOOM_MAX, newScale));
        pan.x = panX;
        pan.y = panY;
        clampPan();
        if (!reduceMotion.matches) {
            board.classList.add('is-animating');
            clearTimeout(animTimer);
            animTimer = setTimeout(stopAnimating, 500);
        }
        applyTransform();
    }
    function stopAnimating() {
        clearTimeout(animTimer);
        board.classList.remove('is-animating');
    }
    // Center a world-space rect in the usable area at the given scale.
    function centerRect(r, newScale) {
        const fw = frame.clientWidth;
        const fh = frame.clientHeight;
        const cy = INSET_TOP + (fh - INSET_TOP - INSET_BOTTOM) / 2;
        moveTo(newScale, fw / 2 - (r.x + r.w / 2) * newScale, cy - (r.y + r.h / 2) * newScale);
    }
    function boundsOf(list) {
        const PAD = 40;
        const x0 = Math.min(...list.map(p => p.x)) - PAD;
        const y0 = Math.min(...list.map(p => p.y)) - PAD;
        const x1 = Math.max(...list.map(p => p.x + p.w)) + PAD;
        const y1 = Math.max(...list.map(p => p.y + p.h)) + PAD;
        return { x: x0, y: y0, w: x1 - x0, h: y1 - y0 };
    }

    // On search/filter, frame the matching papers so a narrow result isn't
    // lost somewhere on a 7000px board. Clearing the filter returns to the
    // overview. Capped at 1x so a single match doesn't fill the screen.
    function fitToFilter({ matchingIds, filtered }) {
        pendingFilterFit = null;
        if (!filtered) { fitInitialView(true); return; }
        const matches = papers.filter(p => matchingIds.has(p.event.id));
        if (!matches.length) return;
        const r = boundsOf(matches);
        // Screen-space margin, so edge cards (and their rotated corners)
        // don't land flush against the viewport edge.
        const fw = frame.clientWidth - 2 * 48;
        const fh = frame.clientHeight - INSET_TOP - INSET_BOTTOM - 2 * 24;
        centerRect(r, Math.min(1, fw / r.w, fh / r.h));
    }

    // Keyboard focus: bring the paper on screen at a readable zoom.
    function panToPaper(p) {
        const left = pan.x + p.x * scale;
        const top = pan.y + p.y * scale;
        const onScreen = left >= 0 && top >= INSET_TOP &&
            left + p.w * scale <= frame.clientWidth &&
            top + p.h * scale <= frame.clientHeight - INSET_BOTTOM;
        if (onScreen && scale >= 0.6) return;
        centerRect({ x: p.x, y: p.y, w: p.w, h: p.h }, Math.max(scale, 0.9));
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
    let lastDragEndAt = 0;      // same, for the click that trails a pan-drag. Recorded
                                // in onUp because panStart is cleared before click fires.

    function onDown(e) {
        if (e.button !== undefined && e.button !== 0) return;
        stopAnimating();
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
            if (panStart && Math.hypot(panStart.dx, panStart.dy) > 6) lastDragEndAt = performance.now();
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
        stopAnimating();
        // Trackpad pinch and Ctrl/⌘+wheel both arrive as wheel events with
        // ctrlKey/metaKey set. Treat them as zoom toward the cursor.
        if (e.ctrlKey || e.metaKey) {
            const rect = frame.getBoundingClientRect();
            // Trackpad pinch sends small deltas; a mouse-wheel notch sends
            // ~100px (or 3 "lines" in Firefox). Clamp so one notch is a
            // ~1.2x step instead of a ~2.7x jump.
            const dy = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY;
            const factor = Math.exp(-Math.max(-20, Math.min(20, dy)) * 0.01);
            setZoom(scale * factor, e.clientX - rect.left, e.clientY - rect.top);
            return;
        }
        // Otherwise: two-finger scroll = pan.
        const lineScale = e.deltaMode === 1 ? 16 : 1;
        pan.x -= e.deltaX * lineScale;
        pan.y -= e.deltaY * lineScale;
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
        zoomBtnFit.addEventListener('click', () => fitInitialView(true));
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
