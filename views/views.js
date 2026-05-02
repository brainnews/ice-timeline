/**
 * View switcher: Evidence · Timeline
 *
 * The other view modules register themselves on window.__iceViews and we call
 * their lifecycle hooks (mount, activate, deactivate) as the user switches.
 */
(function () {
    'use strict';

    const STORAGE_KEY = 'view';
    const viewRoots = {};
    const tabs = {};
    let currentView = null;

    // Each view module pushes its registration here:
    //   window.__iceViews.register({ id, mount(root), activate(), deactivate() })
    if (!window.__iceViews) {
        window.__iceViews = {
            registry: {},
            mounted: {},
            register(spec) {
                this.registry[spec.id] = spec;
                if (this.pendingMount && this.pendingMount[spec.id]) {
                    this.pendingMount[spec.id]();
                }
            },
            pendingMount: {},
        };
    }

    function init() {
        document.querySelectorAll('.view').forEach(el => {
            viewRoots[el.dataset.view] = el;
            // Strip any pre-existing 'active' class from HTML so setView can
            // be the single source of truth.
            el.classList.remove('active');
        });
        document.querySelectorAll('.view-tab').forEach(btn => {
            tabs[btn.dataset.view] = btn;
            btn.addEventListener('click', () => setView(btn.dataset.view));
        });

        // URL query param wins (good for sharing direct links to a view).
        // Otherwise fall back to the last view the user picked (saved by inline
        // pre-paint script as well so the body class is set before first paint).
        let initial = null;
        try {
            const url = new URL(window.location.href);
            initial = url.searchParams.get('view');
        } catch (_) { /* ignore */ }
        if (!initial || !viewRoots[initial]) {
            initial = localStorage.getItem(STORAGE_KEY);
        }
        if (!initial || !viewRoots[initial]) initial = 'evidence';
        setView(initial, { skipScroll: true });

        // Keyboard shortcuts: 1 = evidence (primary), 2 = timeline
        document.addEventListener('keydown', (e) => {
            if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
            if (e.metaKey || e.ctrlKey || e.altKey) return;
            const map = { '1': 'evidence', '2': 'timeline' };
            if (map[e.key]) {
                e.preventDefault();
                setView(map[e.key]);
            }
        });
    }

    function setView(viewId, opts = {}) {
        if (!viewRoots[viewId]) return;
        if (currentView === viewId) return;

        // Update tab buttons
        Object.entries(tabs).forEach(([id, btn]) => {
            btn.classList.toggle('active', id === viewId);
            btn.setAttribute('aria-pressed', id === viewId ? 'true' : 'false');
        });

        // Update body attribute (used by CSS for background, layout)
        document.documentElement.setAttribute('data-view', viewId);
        document.body.setAttribute('data-view', viewId);
        localStorage.setItem(STORAGE_KEY, viewId);

        // Deactivate previous
        if (currentView) {
            const prev = window.__iceViews.registry[currentView];
            if (prev && prev.deactivate) {
                try { prev.deactivate(); } catch (e) { console.error(e); }
            }
            viewRoots[currentView].classList.remove('active');
        }

        // Activate new
        const root = viewRoots[viewId];
        root.classList.add('active');

        // Timeline is rendered by app.js — no mount needed, just a class flip.
        const STATIC_VIEWS = new Set(['timeline']);

        const mount = () => {
            if (STATIC_VIEWS.has(viewId)) return;
            const spec = window.__iceViews.registry[viewId];
            if (!spec) {
                // Module hasn't registered yet; queue mount for when it does.
                window.__iceViews.pendingMount[viewId] = () => mount();
                return;
            }
            if (!window.__iceViews.mounted[viewId]) {
                try { spec.mount(root); } catch (e) { console.error(`Mount ${viewId}:`, e); }
                window.__iceViews.mounted[viewId] = true;
            }
            if (spec.activate) {
                try { spec.activate(); } catch (e) { console.error(`Activate ${viewId}:`, e); }
            }
        };

        // Defer slightly so the active class lands first (gives correct sizes
        // to canvases that read clientWidth/clientHeight on activation)
        requestAnimationFrame(mount);

        currentView = viewId;
        if (!opts.skipScroll) window.scrollTo({ top: 0, behavior: 'instant' });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
