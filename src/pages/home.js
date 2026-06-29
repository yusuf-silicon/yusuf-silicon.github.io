/* ==========================================================================
   HOME PAGE — Yusuf Silicon Portfolio
   Renders the full home page layout with dynamic data from profile.json.
   Sections: ID_CARD, ANALYTICS_MODULE, COMMUNICATION_BUS,
             PEER_REVIEWED_ARCHIVE, HARDWARE_HARD_REPO.
   ========================================================================== */

import { registerRoute } from '../lib/router.js';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Resolve paths from profile.json (relative to /data/profile_data/)
 * to absolute paths the browser can fetch.
 */
function img(path) {
  if (!path) return '';
  return path.replace(/^\.\.\//, '/data/');
}

/**
 * Format a date string like "2025-05-27" to "May 2025".
 */
function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}

// ---------------------------------------------------------------------------
// Section Renders
// ---------------------------------------------------------------------------

/**
 * [ID_CARD // USER_PROFILE]
 * Flex row: name, headline, description, tags + profile image.
 */
function renderIdCard(personal, interests) {
  const name = personal?.name || '';
  const headline = personal?.headline || '';
  const description = personal?.description || '';
  const highlights = personal?.description_highlight || [];
  const image = img(personal?.image);
  const tags = interests?.description_mentions || [];

  const tagChips = tags
    .map(t => `<span class="chip">${t.toUpperCase().replace(/\s+/g, '_')}</span>`)
    .join('');

  // Highlight specific words in the description with primary color
  let highlightedDesc = description;
  if (highlights.length) {
    // Sort by length (longest first) to avoid partial replacements
    const sorted = [...highlights].sort((a, b) => b.length - a.length);
    for (const word of sorted) {
      const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      highlightedDesc = highlightedDesc.replace(
        new RegExp(`(${escaped})`, 'gi'),
        '<span class="home-highlight">$1</span>'
      );
    }
  }

  return `
    <section class="home-section">
      <div class="home-id-card">
        <div class="home-id-card-text">
          <div class="font-label-caps page-section-label id-card-label">
            <span class="section-label-dot"></span> [ID_CARD // USER_PROFILE]
          </div>
          <h1 class="font-headline-xl home-name">${name}</h1>
          <p class="font-body-lg home-headline">${headline}</p>
          <p class="font-body-md home-description">${highlightedDesc}</p>
          <div class="home-tags">${tagChips}</div>
        </div>
        <div class="home-id-card-image-wrapper">
          <div class="home-id-card-image-border">
            <img class="home-id-card-image progressive-image" src="${image}" alt="${personal?.image_name || name}" onload="this.classList.add('progressive-image--loaded')" />
            <div class="home-image-ref font-mono-data">${personal?.image_name || 'IMG_REF_01.A'}</div>
          </div>
        </div>
      </div>
    </section>
  `;
}

/**
 * [01 // ANALYTICS_MODULE]
 * 2×2 metric cards — dynamic counts from profile data.
 */
function renderAnalytics(profile) {
  const pubCount = profile?.research?.publications?.length || 0;
  const projectCount =
    (profile?.projects?.vlsi?.length || 0) +
    (profile?.projects?.iot?.length || 0) +
    (profile?.projects?.software?.length || 0);
  const thesisCount = profile?.research?.theses?.length || 0;
  const certCount = profile?.certifications?.length || 0;

  const metrics = [
    { label: 'PUBLICATIONS',    value: pubCount.toString().padStart(2, '0') },
    { label: 'PROJECTS',        value: projectCount.toString().padStart(2, '0') },
    { label: 'THESES',          value: thesisCount.toString().padStart(2, '0') },
    { label: 'CERTIFICATIONS',  value: certCount.toString().padStart(2, '0') },
  ];

  const cards = metrics
    .map(m => `
      <div class="metric-card">
        <div class="font-label-caps metric-card-label">${m.label}</div>
        <div class="font-headline-md metric-card-value">${m.value}</div>
      </div>
    `)
    .join('');

  return `
    <div class="sidebar-section">
      <div class="font-label-caps page-section-label sidebar-section-heading">01 // ANALYTICS_MODULE</div>
      <div class="metrics-grid">${cards}</div>
    </div>
  `;
}

/**
 * [02 // COMMUNICATION_BUS]
 * Contact list with icons + resume download button.
 */
function renderCommunicationBus(contact, personal) {
  if (!contact) return '';

  const items = [
    { icon: 'mail',       content: contact.email || '',       href: contact.email ? `mailto:${contact.email}` : null },
    { icon: 'school',     content: 'Google Scholar',          href: contact.google_scholar || null },
    { icon: 'code',       content: 'github.com/yusuf-silicon', href: contact.github || null },
    { icon: 'location_on', content: personal?.location || '' },
  ];

  const listItems = items
    .filter(i => i.content)
    .map(i => `
      <li class="contact-item">
        <span class="material-symbols-outlined contact-icon">${i.icon}</span>
        ${i.href ? `<a class="contact-link" href="${i.href}" target="_blank" rel="noopener noreferrer">${i.content}</a>`
                 : `<span class="contact-text">${i.content}</span>`}
      </li>
    `)
    .join('');

  const resumeHref = contact.resume ? img(contact.resume) : '#';

  return `
    <div class="sidebar-section">
      <div class="font-label-caps page-section-label sidebar-section-heading">02 // COMMUNICATION_BUS</div>
      <ul class="contact-list">${listItems}</ul>
      <div class="resume-btn-wrapper">
        <a href="${resumeHref}" class="resume-btn font-label-caps" target="_blank" rel="noopener noreferrer">
          DOWNLOAD_CV.PDF
        </a>
      </div>
    </div>
  `;
}

/**
 * Research Interests Visual — replaces System Block Diagram from stitch reference.
 * Displays the 3 interest areas as compact labelled sections with sub-items.
 */
function renderResearchInterests(interests) {
  const areas = interests?.overview || [];
  if (!areas.length) return '';

  const areaCards = areas
    .map(a => {
      const includes = (a.includes || []).map(t => `<span class="chip chip-sm">${t}</span>`).join('');
      return `
        <div class="interest-area">
          <div class="font-label-caps interest-area-name">${a.name.toUpperCase().replace(/\s+/g, '_')}</div>
          <div class="interest-area-chips">${includes}</div>
        </div>
      `;
    })
    .join('');

  return `
    <div class="sidebar-section">
      <div class="font-label-caps page-section-label sidebar-section-heading">// RESEARCH_INTERESTS</div>
      <div class="interests-visual">${areaCards}</div>
    </div>
  `;
}

/**
 * [03 // PEER_REVIEWED_ARCHIVE]
 * Featured publication cards — first 2 publications.
 */
function renderPeerReviewedArchive(publications) {
  if (!publications || !publications.length) return '';

  const featured = publications.slice(0, 2);

  const cards = featured
    .map(p => {
      const yearStr = p.year || '';
      const monthStr = p.month || '';
      const venueShort = p.venue_short || '';
      const doi = p.doi || '';
      const citation = p.citation || '';

      // Encode citation for safe HTML data attribute (decode on click)
      const citationEncoded = citation ? encodeURIComponent(citation) : '';

      return `
        <div class="pub-card">
          <div class="font-mono-data pub-card-year">${yearStr}${monthStr ? '.' + monthStr.substring(0, 3).toUpperCase() : ''}</div>
          <div class="font-label-caps pub-card-venue">${venueShort}</div>
          <h3 class="font-headline-md pub-card-title">${p.title}</h3>
          <p class="font-body-sm pub-card-authors">${(p.authors || []).join(', ')}</p>
          <p class="font-body-sm pub-card-desc">${p.description || ''}</p>
          <div class="pub-card-actions">
            ${doi ? `<a class="pub-action font-mono-data" href="https://doi.org/${doi}" target="_blank" rel="noopener noreferrer">
              <span class="material-symbols-outlined">description</span> PDF
            </a>` : ''}
            ${citation ? `<button class="pub-action font-mono-data citation-btn" type="button" data-citation="${citationEncoded}">
              <span class="material-symbols-outlined">share</span> CITATION
            </button>` : ''}
          </div>
        </div>
      `;
    })
    .join('');

  return `
    <div class="content-section">
      <div class="content-section-header">
        <div class="font-label-caps page-section-label">03 // PEER_REVIEWED_ARCHIVE</div>
        <a class="font-mono-data content-section-link" href="#/publications">VIEW_ALL_PUBLICATIONS</a>
      </div>
      <div class="pub-cards">${cards}</div>
    </div>
  `;
}

/**
 * [04 // HARDWARE_HARD_REPO]
 * Featured project cards (first 2 featured VLSI projects) with thumbnails.
 */
function renderHardwareHardRepo(projects) {
  const vlsiProjects = projects?.vlsi || [];
  const featured = vlsiProjects.filter(p => p.featured).slice(0, 2);

  if (!featured.length) return '';

  const cards = featured
    .map(p => {
      const thumb = img(p.thumbnail);
      const techs = (p.techStack?.languages || []).slice(0, 2);
      const techChips = techs.map(t => `<span class="chip chip-tech">${t.toUpperCase()}</span>`).join('');

      return `
        <div class="project-card">
          <div class="project-card-thumb">
            <img src="${thumb}" alt="${p.title}" class="progressive-image" onload="setTimeout(()=>this.classList.add('progressive-image--loaded'),300)" />
            <div class="project-card-status font-mono-data">STATUS: ${(p.status || '').toUpperCase()}</div>
          </div>
          <div class="project-card-body">
            <div class="font-label-caps project-card-id">${p.id || ''}</div>
            <h4 class="font-headline-md project-card-title">${p.title}</h4>
            <p class="font-body-sm project-card-desc">${p.overview || ''}</p>
            <div class="project-card-techs">${techChips}</div>
          </div>
        </div>
      `;
    })
    .join('');

  return `
    <div class="content-section">
      <div class="content-section-header">
        <div class="font-label-caps page-section-label">04 // HARDWARE_REPO</div>
        <a class="font-mono-data content-section-link" href="#/projects">VIEW_PROJECTS</a>
      </div>
      <div class="project-cards">${cards}</div>
    </div>
  `;
}

// ---------------------------------------------------------------------------
// Page Render Function
// ---------------------------------------------------------------------------

function homeRender(profile) {
  if (!profile) {
    return `<div class="container-page" style="padding-top: 4rem;">
      <p class="font-mono-data" style="color: var(--error);">No profile data available.</p>
    </div>`;
  }

  const personal = profile.personal;
  const interests = profile.interests;
  const contact = profile.contact;
  const publications = profile.research?.publications;
  const projects = profile.projects;

  return `
    <div class="home-page">
      <div class="container-page home-page-inner blueprint-grid-lines">
        ${renderIdCard(personal, interests)}

        <!-- Two-column grid: sidebar + content -->
        <div class="home-grid">
          <!-- Left Sidebar (4 cols) -->
          <aside class="home-sidebar">
            ${renderAnalytics(profile)}
            ${renderCommunicationBus(contact, personal)}
            ${renderResearchInterests(interests)}
          </aside>

          <!-- Right Content (8 cols) -->
          <section class="home-content">
            ${renderPeerReviewedArchive(publications)}
            ${renderHardwareHardRepo(projects)}
          </section>
        </div>

        <!-- Bottom annotation line -->
        <div class="home-bottom-annotation">
          <div class="home-annotation-line"></div>
          <div class="font-mono-data home-annotation-text">
            SID: IN-240626 | REF: 226028 | ACTIVE
          </div>
        </div>
      </div>
    </div>
  `;
}

// ---------------------------------------------------------------------------
// Register Route
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Citation Copy Handler + Toast
// ---------------------------------------------------------------------------

/**
 * Mount citation copy handlers after the home page is rendered.
 * Uses event delegation on #page-content.
 */
export function mountHomePage() {
  const content = document.getElementById('page-content');
  if (!content) return;

  // Mark already-loaded progressive images
  document.querySelectorAll('.progressive-image').forEach(img => {
    if (img.complete) img.classList.add('progressive-image--loaded');
  });

  // Delegate click events from citation buttons
  content.addEventListener('click', e => {
    const btn = e.target.closest('.citation-btn');
    if (!btn) return;
    e.preventDefault();

    const citation = decodeURIComponent(btn.dataset.citation);
    if (!citation) return;

    navigator.clipboard.writeText(citation).then(() => {
      showToast('CITATION_COPIED');
    }).catch(() => {
      // Fallback: select and copy from a temporary element
      const textarea = document.createElement('textarea');
      textarea.value = citation;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      showToast('CITATION_COPIED');
    });
  });
}

/**
 * Show a brief toast notification overlay.
 * @param {string} message — text to display
 */
function showToast(message) {
  // Remove any existing toast
  const existing = document.querySelector('.toast-notification');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast-notification font-mono-data';
  toast.textContent = message;
  document.body.appendChild(toast);

  // Trigger reflow then add visible class for animation
  requestAnimationFrame(() => {
    toast.classList.add('toast-notification--visible');
  });

  // Auto-dismiss after 2 seconds
  setTimeout(() => {
    toast.classList.remove('toast-notification--visible');
    toast.addEventListener('transitionend', () => toast.remove(), { once: true });
  }, 2000);
}

registerRoute('home', { render: homeRender });

export default homeRender;
