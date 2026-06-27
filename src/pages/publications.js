/* ==========================================================================
   PUBLICATIONS PAGE — Yusuf Silicon Portfolio
   Sections: SELECTED_WORKS (dynamic top-cited + featured),
             METRICS_LOG, FULL_BIBLIOGRAPHY with search filter,
             year grouping, expandable abstracts, citation copy.
   ========================================================================== */

import { registerRoute } from '../lib/router.js';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function renderAnnotation(pageNum, docClass) {
  return `
    <div class="research-annotation">
      <span class="research-annotation-badge font-mono-data">PAGE. ${pageNum}</span>
      <div class="research-annotation-line"></div>
      <span class="font-label-caps research-annotation-text">[DOCUMENT_CLASS: ${docClass}]</span>
    </div>
  `;
}

// ---------------------------------------------------------------------------
// Google Scholar Citation Fetch (best-effort)
// ---------------------------------------------------------------------------

let cachedCitations = null;

async function fetchCitations() {
  if (cachedCitations !== null) return cachedCitations;
  try {
    // Attempt to fetch via CORS proxy — falls back to 0s if it fails
    const resp = await fetch(
      'https://api.allorigins.win/raw?url=' +
      encodeURIComponent('https://scholar.google.com/citations?user=EJitK1IAAAAJ&hl=en&pagesize=100'),
      { signal: AbortSignal.timeout(5000) }
    );
    const html = await resp.text();
    // Parse cited-by numbers from the HTML
    const citedRegex = /citedby\s*=\s*['"](\d+)['"]/gi;
    let match;
    const counts = [];
    while ((match = citedRegex.exec(html)) !== null) {
      counts.push(parseInt(match[1], 10));
    }
    cachedCitations = counts.length ? counts : null;
  } catch {
    cachedCitations = null;
  }
  return cachedCitations;
}

// ---------------------------------------------------------------------------
// Section Renders
// ---------------------------------------------------------------------------

function renderPageHeader() {
  return `
    <div class="pubs-header">
      ${renderAnnotation('03', 'PUBLICATION_ARCHIVE')}
      <div class="pubs-header-bottom">
        <h1 class="font-headline-xl pubs-title">Scientific Publications</h1>
        <div class="pubs-search">
          <span class="material-symbols-outlined pubs-search-icon">search</span>
          <input class="pubs-search-input font-mono-data" type="text" id="pubSearchInput" placeholder="Filter by Venue, Keyword, or Year..." />
        </div>
      </div>
    </div>
  `;
}

/**
 * [SELECTED_WORKS]
 * Left sidebar — dynamic: top-cited (from Google Scholar) + featured (from JSON).
 * If tied citations, all tied entries shown with dividers.
 */
function renderSelectedWorks(publications, citationCounts) {
  if (!publications || !publications.length) return '';

  const counts = citationCounts || publications.map(() => 0);

  // --- Top Cited: sort by citations descending, take all tied for first place ---
  const withCitations = publications.map((p, i) => ({ ...p, citations: counts[i] || 0 }));
  const sortedByCit = [...withCitations].sort((a, b) => b.citations - a.citations);
  const topCitedCount = sortedByCit[0]?.citations || 0;
  const topCited = sortedByCit.filter(p => p.citations === topCitedCount);

  // --- Featured: from JSON field ---
  const featured = publications.filter(p => p.featured);

  // Helper: render a list of entries with dividers
  const renderEntryList = (entries, labelPrefix) =>
    entries.map((p, i) => `
      <div class="selected-work-entry">
        ${i > 0 ? '<div class="selected-work-divider"></div>' : ''}
        <div class="font-mono-data selected-work-fig">${labelPrefix} ${String(i + 1).padStart(2, '0')}</div>
        <h3 class="font-headline-md selected-work-title">${p.title}</h3>
        <p class="font-body-sm selected-work-venue">${p.venue_short || p.venue || ''}</p>
        ${p.citations !== undefined ? `<div class="font-mono-data selected-work-cites">CITATIONS: ${p.citations}</div>` : ''}
      </div>
    `).join('');

  const topCitedHtml = topCited.length ? renderEntryList(topCited, '// TOP_CITED') : '';
  const featuredHtml = featured.length ? renderEntryList(featured, '// FEATURED') : '';

  return `
    <div class="sidebar-section pubs-selected-works">
      <div class="research-section-heading">SELECTED_WORKS</div>
      ${topCitedHtml ? `<div class="selected-works-list">${topCitedHtml}</div>` : ''}
      ${featuredHtml ? `<div class="selected-works-list" style="${topCitedHtml ? 'margin-top: 1.5rem;' : ''}">${featuredHtml}</div>` : ''}
    </div>
  `;
}

/**
 * [METRICS_LOG]
 * Left sidebar — citations from Google Scholar, peer-reviewed from JSON.
 */
function renderMetricsLog(publications, citationCounts) {
  const total = publications?.length || 0;
  const peerReviewed = publications?.filter(p => p.peer_reviewed).length || 0;
  const totalCitations = citationCounts ? citationCounts.reduce((s, c) => s + c, 0) : 0;

  return `
    <div class="pubs-metrics">
      <div class="font-mono-data pubs-metrics-header">METRICS_LOG</div>
      <div class="pubs-metrics-grid">
        <div class="pubs-metric">
          <div class="font-headline-md pubs-metric-value">${totalCitations}</div>
          <div class="font-label-caps pubs-metric-label">CITATIONS</div>
        </div>
        <div class="pubs-metric">
          <div class="font-headline-md pubs-metric-value">${peerReviewed}</div>
          <div class="font-label-caps pubs-metric-label">PEER_REVIEWED</div>
        </div>
      </div>
    </div>
  `;
}

/**
 * [FULL_BIBLIOGRAPHY]
 * Right column — publications grouped by year, expandable abstracts.
 */
function renderFullBibliography(publications) {
  if (!publications || !publications.length) {
    return `
      <div class="content-section">
        <div class="research-section-heading">FULL_BIBLIOGRAPHY</div>
        <p class="font-body-sm" style="color: var(--on-surface-variant);">No publications found.</p>
      </div>
    `;
  }

  const grouped = {};
  for (const p of publications) {
    const year = p.year || 'Unknown';
    if (!grouped[year]) grouped[year] = [];
    grouped[year].push(p);
  }

  const years = Object.keys(grouped).sort((a, b) => b - a);

  const yearGroups = years
    .map(year => {
      const entries = grouped[year]
        .map((p, idx) => {
          const doi = p.doi || '';
          const citation = p.citation || '';
          const citationEncoded = citation ? encodeURIComponent(citation) : '';
          const abstractId = `abstract-${year}-${idx}`;

          return `
            <article class="pub-entry" data-year="${year}" data-search="${(p.title + ' ' + p.venue_short + ' ' + p.venue + ' ' + year).toLowerCase()}">
              <div class="pub-entry-inner">
                <div class="pub-entry-header">
                  <h3 class="font-body-lg pub-entry-title">${p.title}</h3>
                  <span class="font-mono-data pub-entry-venue-tag">${p.venue_short || year}</span>
                </div>
                <p class="font-body-sm pub-entry-authors">${(p.authors || []).join(', ')}</p>
                <p class="font-mono-data pub-entry-source">${p.venue || ''}</p>
                <div class="pub-entry-actions">
                  ${doi ? `<a class="pub-entry-btn font-mono-data" href="https://doi.org/${doi}" target="_blank" rel="noopener noreferrer">[PDF]</a>` : ''}
                  ${citation ? `<button class="pub-entry-btn pub-entry-cite-btn font-mono-data" type="button" data-citation="${citationEncoded}">[CITATION]</button>` : ''}
                  <button class="pub-entry-btn pub-entry-abstract-toggle font-mono-data" type="button" data-target="${abstractId}" aria-label="Toggle abstract">
                    [ABSTRACT] <span class="material-symbols-outlined">expand_more</span>
                  </button>
                </div>
                <div class="pub-abstract" id="${abstractId}">
                  <div class="pub-abstract-inner">${(p.abstract || p.description || '')}</div>
                </div>
              </div>
            </article>
          `;
        })
        .join('');

      return `
        <div class="pub-year-group" data-year="${year}">
          <div class="pub-year-header">
            <span class="font-mono-data pub-year-label">${year}</span>
            <div class="pub-year-line"></div>
          </div>
          <div class="pub-year-entries">${entries}</div>
        </div>
      `;
    })
    .join('');

  return `
    <div class="content-section">
      <div class="research-section-heading">FULL_BIBLIOGRAPHY</div>
      <div class="pub-bibliography-list" id="bibliographyList">${yearGroups}</div>
    </div>
  `;
}

// ---------------------------------------------------------------------------
// Page Render Function
// ---------------------------------------------------------------------------

async function publicationsRender(profile) {
  if (!profile) {
    return `<div class="container-page" style="padding-top: 4rem;">
      <p class="font-mono-data" style="color: var(--error);">No profile data available.</p>
    </div>`;
  }

  const publications = profile.research?.publications || [];

  // Try fetching Google Scholar citations
  let citationCounts = null;
  try {
    citationCounts = await fetchCitations();
  } catch { /* ignore */ }

  return `
    <div class="pubs-page">
      <div class="container-page pubs-page-inner blueprint-grid-lines">
        ${renderPageHeader()}

        <div class="pubs-grid">
          <aside class="pubs-sidebar">
            ${renderSelectedWorks(publications, citationCounts)}
            ${renderMetricsLog(publications, citationCounts)}
          </aside>

          <section class="pubs-content">
            ${renderFullBibliography(publications)}
          </section>
        </div>
      </div>
    </div>
  `;
}

// ---------------------------------------------------------------------------
// Mount — bind search, abstract toggles, citation copy (delegated on #page-content)
// ---------------------------------------------------------------------------

export function mountPublicationsPage() {
  // --- Search filter ---
  const searchInput = document.getElementById('pubSearchInput');
  const bibliographyList = document.getElementById('bibliographyList');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase().trim();
      const entries = bibliographyList?.querySelectorAll('.pub-entry') || [];
      const yearGroups = bibliographyList?.querySelectorAll('.pub-year-group') || [];

      entries.forEach(entry => {
        const searchData = entry.dataset.search || '';
        entry.style.display = (!query || searchData.includes(query)) ? '' : 'none';
      });
      yearGroups.forEach(group => {
        const hasVisible = [...group.querySelectorAll('.pub-entry')].some(e => e.style.display !== 'none');
        group.style.display = hasVisible ? '' : 'none';
      });
    });
  }

  // --- Abstract toggle: bind each button directly ---
  document.querySelectorAll('.pub-entry-abstract-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      const abstract = document.getElementById(targetId);
      if (!abstract) return;
      const isOpen = abstract.classList.contains('pub-abstract--open');

      // Close all other abstracts
      document.querySelectorAll('.pub-abstract--open').forEach(el => {
        if (el.id !== targetId) {
          el.classList.remove('pub-abstract--open');
          const otherBtn = document.querySelector(`[data-target="${el.id}"]`);
          if (otherBtn) {
            const icon = otherBtn.querySelector('.material-symbols-outlined');
            if (icon) icon.textContent = 'expand_more';
          }
        }
      });

      // Toggle current
      abstract.classList.toggle('pub-abstract--open');
      const icon = btn.querySelector('.material-symbols-outlined');
      if (icon) icon.textContent = isOpen ? 'expand_more' : 'expand_less';
    });
  });

  // --- Citation copy: bind each button directly ---
  document.querySelectorAll('.pub-entry-cite-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const citation = decodeURIComponent(btn.dataset.citation);
      if (!citation) return;
      navigator.clipboard.writeText(citation).then(() => showToast('CITATION_COPIED'))
        .catch(() => {
          const ta = document.createElement('textarea');
          ta.value = citation;
          ta.style.cssText = 'position:fixed;opacity:0';
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
          showToast('CITATION_COPIED');
        });
    });
  });
}

// --- Toast (reuse from home.js pattern) ---
function showToast(message) {
  const existing = document.querySelector('.toast-notification');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast-notification font-mono-data';
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('toast-notification--visible'));
  setTimeout(() => {
    toast.classList.remove('toast-notification--visible');
    toast.addEventListener('transitionend', () => toast.remove(), { once: true });
  }, 2000);
}

// ---------------------------------------------------------------------------
// Register Route (async render supported via Promise)
// ---------------------------------------------------------------------------

registerRoute('publications', { render: publicationsRender, mount: mountPublicationsPage });

export default publicationsRender;
