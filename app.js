/**
 * ICE Training Deficiencies Timeline
 * Interactive timeline application
 */

(function() {
    'use strict';

    // DOM Elements
    const elements = {
        timeline: document.getElementById('timeline'),
        searchInput: document.getElementById('search-input'),
        clearSearch: document.getElementById('clear-search'),
        filterBtns: document.querySelectorAll('.filter-btn'),
        modalOverlay: document.getElementById('modal-overlay'),
        modal: document.getElementById('modal'),
        modalContent: document.getElementById('modal-content'),
        modalClose: document.getElementById('modal-close'),
        scrollTop: document.getElementById('scroll-top'),
        progressBar: document.getElementById('progress-bar'),
        sourcesGrid: document.getElementById('sources-grid'),
        themeToggle: document.getElementById('theme-toggle')
    };

    // State
    let currentFilter = 'all';
    let searchQuery = '';
    let visibleEvents = new Set();
    let currentModalEventId = null;

    // Initialize
    function init() {
        initTheme();
        renderTimeline();
        renderSources();
        setupEventListeners();
        setupIntersectionObserver();
        updateScrollProgress();
    }

    // Theme management
    function initTheme() {
        elements.themeToggle.addEventListener('click', toggleTheme);
    }

    function toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme');
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const effectiveDark = current === 'dark' || (current !== 'light' && systemDark);
        const newTheme = effectiveDark ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }

    // Render timeline events
    function renderTimeline() {
        const events = timelineData.events;
        const groupedByYear = groupEventsByYear(events);

        let html = '';

        for (const year of Object.keys(groupedByYear).sort()) {
            html += `<div class="timeline-year" data-year="${year}">`;
            html += `<span class="year-marker">${year}</span>`;

            for (const event of groupedByYear[year]) {
                html += createEventCard(event);
            }

            html += '</div>';
        }

        elements.timeline.innerHTML = html;

        // Add click handlers to event cards
        document.querySelectorAll('.event-card').forEach(card => {
            card.addEventListener('click', () => {
                const eventId = parseInt(card.dataset.eventId);
                openModal(eventId);
            });
        });
    }

    // Group events by year
    function groupEventsByYear(events) {
        return events.reduce((acc, event) => {
            const year = event.year;
            if (!acc[year]) acc[year] = [];
            acc[year].push(event);
            return acc;
        }, {});
    }

    // Create event card HTML
    function createEventCard(event) {
        const categoryData = timelineData.categories[event.category];

        return `
            <article class="timeline-event" data-event-id="${event.id}" data-category="${event.category}">
                <div class="event-card" data-event-id="${event.id}">
                    <div class="event-header">
                        <time class="event-date">${event.date}</time>
                        <span class="event-category" data-category="${event.category}">${categoryData.label}</span>
                    </div>
                    <h3 class="event-title">${event.title}</h3>
                    <p class="event-excerpt">${event.excerpt}</p>
                    <div class="event-footer">
                        <span class="event-source">${event.source}</span>
                        <span class="event-expand">
                            Read more
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </span>
                    </div>
                </div>
            </article>
        `;
    }

    // Render sources section
    function renderSources() {
        const html = timelineData.sources.map(source => `
            <a href="${source.url}" target="_blank" rel="noopener noreferrer" class="source-card">
                <span class="source-type">${source.type}</span>
                <span class="source-name">${source.name}</span>
                <span class="source-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    View source
                </span>
            </a>
        `).join('');

        elements.sourcesGrid.innerHTML = html;
    }

    // Setup event listeners
    function setupEventListeners() {
        // Search input
        elements.searchInput.addEventListener('input', debounce(handleSearch, 200));
        elements.clearSearch.addEventListener('click', clearSearch);

        // Filter buttons
        elements.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => handleFilter(btn.dataset.filter));
        });

        // Modal
        elements.modalClose.addEventListener('click', closeModal);
        elements.modalOverlay.addEventListener('click', (e) => {
            if (e.target === elements.modalOverlay) closeModal();
        });

        // Modal nav bar
        const modalNav = document.createElement('div');
        modalNav.className = 'modal-nav';
        modalNav.innerHTML = `
            <button class="modal-nav-btn" id="modal-prev" aria-label="Previous event">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
                Prev
            </button>
            <span class="modal-nav-counter" id="modal-nav-counter"></span>
            <button class="modal-nav-btn" id="modal-next" aria-label="Next event">
                Next
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
        `;
        elements.modal.appendChild(modalNav);
        elements.modalPrev = document.getElementById('modal-prev');
        elements.modalNext = document.getElementById('modal-next');
        elements.modalNavCounter = document.getElementById('modal-nav-counter');
        elements.modalPrev.addEventListener('click', () => navigateModal(-1));
        elements.modalNext.addEventListener('click', () => navigateModal(1));

        // Keyboard navigation
        document.addEventListener('keydown', handleKeyboard);

        // Scroll
        window.addEventListener('scroll', throttle(handleScroll, 100), { passive: true });
        elements.scrollTop.addEventListener('click', scrollToTop);

        // Touch gestures for modal
        setupModalGestures();
    }

    // Handle search
    function handleSearch(e) {
        searchQuery = e.target.value.toLowerCase().trim();
        elements.clearSearch.classList.toggle('visible', searchQuery.length > 0);
        filterEvents();
    }

    // Clear search
    function clearSearch() {
        elements.searchInput.value = '';
        searchQuery = '';
        elements.clearSearch.classList.remove('visible');
        filterEvents();
        elements.searchInput.focus();
    }

    // Handle filter
    function handleFilter(filter) {
        currentFilter = filter;

        elements.filterBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });

        filterEvents();
    }

    // Filter events
    function filterEvents() {
        const eventElements = document.querySelectorAll('.timeline-event');
        let visibleCount = 0;

        eventElements.forEach(el => {
            const eventId = parseInt(el.dataset.eventId);
            const event = timelineData.events.find(e => e.id === eventId);
            const category = el.dataset.category;

            // Check category filter
            const passesFilter = currentFilter === 'all' || category === currentFilter;

            // Check search query
            let passesSearch = true;
            if (searchQuery) {
                const searchableText = [
                    event.title,
                    event.excerpt,
                    event.content,
                    event.source,
                    event.date
                ].join(' ').toLowerCase();

                passesSearch = searchableText.includes(searchQuery);
            }

            const isVisible = passesFilter && passesSearch;
            el.classList.toggle('filtered-out', !isVisible);

            if (isVisible) {
                visibleCount++;
                // Re-trigger animation for visible elements
                el.classList.remove('visible');
                requestAnimationFrame(() => {
                    el.classList.add('visible');
                });
            }
        });

        // Show/hide year markers based on visible events
        document.querySelectorAll('.timeline-year').forEach(yearEl => {
            const hasVisibleEvents = yearEl.querySelector('.timeline-event:not(.filtered-out)');
            yearEl.style.display = hasVisibleEvents ? '' : 'none';
        });

        // Show no results message if needed
        showNoResults(visibleCount === 0);
    }

    // Show no results
    function showNoResults(show) {
        let noResultsEl = document.querySelector('.no-results');

        if (show && !noResultsEl) {
            noResultsEl = document.createElement('div');
            noResultsEl.className = 'no-results';
            noResultsEl.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="M21 21l-4.35-4.35"></path>
                </svg>
                <p>No events found matching your search.</p>
            `;
            elements.timeline.appendChild(noResultsEl);
        } else if (!show && noResultsEl) {
            noResultsEl.remove();
        }
    }

    // Open modal
    function openModal(eventId) {
        const event = timelineData.events.find(e => e.id === eventId);
        if (!event) return;

        const categoryData = timelineData.categories[event.category];

        const mediaHTML = getMediaHTML(event);

        elements.modalContent.innerHTML = `
            <div class="modal-header">
                <p class="modal-date">${event.date}</p>
                <h2 class="modal-title">${event.title}</h2>
                <span class="modal-category event-category" data-category="${event.category}">${categoryData.label}</span>
            </div>
            <div class="modal-media">
                ${mediaHTML}
            </div>
            <div class="modal-body">
                ${event.content}
            </div>
            <div class="modal-source">
                <p class="modal-source-label">Source</p>
                <a href="${event.sourceUrl}" target="_blank" rel="noopener noreferrer" class="modal-source-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    ${event.source}
                </a>
            </div>
        `;

        currentModalEventId = eventId;

        const navigable = getNavigableEvents();
        const currentIndex = navigable.findIndex(e => e.id === eventId);
        elements.modalPrev.disabled = currentIndex <= 0;
        elements.modalNext.disabled = currentIndex >= navigable.length - 1;
        elements.modalNavCounter.textContent = `${currentIndex + 1} / ${navigable.length}`;

        elements.modalContent.scrollTop = 0;
        elements.modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Focus trap
        elements.modalClose.focus();
    }

    // Get events that are currently visible (not filtered out)
    function getNavigableEvents() {
        return timelineData.events.filter(e => {
            const el = document.querySelector(`.timeline-event[data-event-id="${e.id}"]`);
            return el && !el.classList.contains('filtered-out');
        });
    }

    // Navigate to adjacent modal
    function navigateModal(direction) {
        const navigable = getNavigableEvents();
        const currentIndex = navigable.findIndex(e => e.id === currentModalEventId);
        if (currentIndex === -1) return;
        const nextIndex = currentIndex + direction;
        if (nextIndex < 0 || nextIndex >= navigable.length) return;
        openModal(navigable[nextIndex].id);
    }

    // Get media HTML - handles actual media or falls back to placeholder
    function getMediaHTML(event) {
        if (event.media) return renderMedia(event.media);
        if (event.mediaType && event.mediaPlaceholder) return '';
        return '';
    }

    // Render actual media based on type
    function renderMedia(media) {
        switch (media.type) {
            case 'image':
                return `
                    <figure class="media-figure">
                        <img src="${media.src}" alt="${media.alt || ''}" class="media-image" loading="lazy">
                        ${media.caption ? `<figcaption class="media-caption">${media.caption}</figcaption>` : ''}
                    </figure>
                `;

            case 'youtube':
                return `
                    <div class="media-video-wrapper">
                        <iframe
                            src="https://www.youtube.com/embed/${media.youtubeId}"
                            title="${media.title || 'Video'}"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                            loading="lazy"
                        ></iframe>
                    </div>
                    ${media.caption ? `<p class="media-caption">${media.caption}</p>` : ''}
                `;

            case 'video':
                return `
                    <div class="media-video-wrapper">
                        <video controls preload="metadata" ${media.poster ? `poster="${media.poster}"` : ''}>
                            <source src="${media.src}" type="${media.mimeType || 'video/mp4'}">
                            Your browser does not support video playback.
                        </video>
                    </div>
                    ${media.caption ? `<p class="media-caption">${media.caption}</p>` : ''}
                `;

            case 'audio':
                return `
                    <div class="media-audio-wrapper">
                        <audio controls preload="metadata">
                            <source src="${media.src}" type="${media.mimeType || 'audio/mpeg'}">
                            Your browser does not support audio playback.
                        </audio>
                        ${media.caption ? `<p class="media-caption">${media.caption}</p>` : ''}
                    </div>
                `;

            case 'embed':
                return `
                    <div class="media-embed-wrapper">
                        ${media.html}
                    </div>
                    ${media.caption ? `<p class="media-caption">${media.caption}</p>` : ''}
                `;

            default:
                return getMediaPlaceholder(media.type, media.alt || 'Media');
        }
    }

    // Get placeholder HTML for events without actual media
    function getMediaPlaceholder(type, label) {
        const icons = {
            video: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>`,
            audio: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 18V5l12-2v13"></path>
                <circle cx="6" cy="18" r="3"></circle>
                <circle cx="18" cy="16" r="3"></circle>
            </svg>`,
            image: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
            </svg>`,
            document: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
            </svg>`
        };

        return `
            <div class="media-placeholder">
                ${icons[type] || icons.document}
                <span>${label}</span>
            </div>
        `;
    }

    // Close modal
    function closeModal() {
        elements.modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
        currentModalEventId = null;
    }

    // Handle keyboard
    function handleKeyboard(e) {
        const modalActive = elements.modalOverlay.classList.contains('active');

        if (modalActive) {
            if (e.key === 'Escape') { closeModal(); return; }
            if (e.key === 'ArrowRight') { e.preventDefault(); navigateModal(1); return; }
            if (e.key === 'ArrowLeft') { e.preventDefault(); navigateModal(-1); return; }
        }

        // Cmd/Ctrl + K to focus search
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            elements.searchInput.focus();
        }
    }

    // Handle scroll
    function handleScroll() {
        updateScrollProgress();
        updateScrollTopButton();
    }

    // Update scroll progress
    function updateScrollProgress() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        elements.progressBar.style.width = `${progress}%`;
    }

    // Update scroll to top button
    function updateScrollTopButton() {
        const shouldShow = window.scrollY > 500;
        elements.scrollTop.classList.toggle('visible', shouldShow);
    }

    // Scroll to top
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Setup intersection observer for animations
    function setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    visibleEvents.add(entry.target.dataset.eventId);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('.timeline-event').forEach(el => {
            observer.observe(el);
        });
    }

    // Setup modal gestures for mobile
    function setupModalGestures() {
        let startX = 0;
        let startY = 0;
        let currentX = 0;
        let currentY = 0;
        let isDragging = false;

        const modal = elements.modal;

        modal.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            currentX = startX;
            currentY = startY;
            isDragging = true;
        }, { passive: true });

        modal.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            currentX = e.touches[0].clientX;
            currentY = e.touches[0].clientY;

            const diffX = currentX - startX;
            const diffY = currentY - startY;

            // Only apply visual drag for downward vertical swipe at top of scroll
            if (Math.abs(diffY) > Math.abs(diffX) && diffY > 0 && elements.modalContent.scrollTop === 0) {
                modal.style.transform = `translateY(${diffY}px)`;
            }
        }, { passive: true });

        modal.addEventListener('touchend', () => {
            if (!isDragging) return;

            const diffX = currentX - startX;
            const diffY = currentY - startY;

            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                // Horizontal swipe → navigate (swipe left = next, swipe right = prev)
                navigateModal(diffX < 0 ? 1 : -1);
            } else if (diffY > 100 && elements.modalContent.scrollTop === 0) {
                // Swipe down from top → close
                closeModal();
            }

            modal.style.transform = '';
            isDragging = false;
        });
    }

    // Utility: Debounce
    function debounce(fn, delay) {
        let timeoutId;
        return function(...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => fn.apply(this, args), delay);
        };
    }

    // Utility: Throttle
    function throttle(fn, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                fn.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
