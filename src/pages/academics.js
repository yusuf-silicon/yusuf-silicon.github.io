/* ==========================================================================
   ACADEMICS PAGE — Yusuf Silicon Portfolio
   Sections: EDUCATION, RESEARCH & THESIS, AWARDS // HONORS, CERTIFICATIONS
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
// Section Renders
// ---------------------------------------------------------------------------

/**
 * Page Header — annotation + title + UID/PROG tags
 */
function renderPageHeader(education) {
  const prog = education?.find(e => e.enrolment_number)?.program || 'ELECTRONICS & COMMUNICATION ENGINEERING';
  return `
    <header class="academics-header">
      ${renderAnnotation('03', 'ACADEMIC_RECORD')}
      <div class="pubs-header-bottom">
        <h1 class="font-headline-xl pubs-title">Academic History</h1>
      </div>
      <div class="academics-tags">
        <div class="academics-tag">
          <span class="font-mono-data academics-tag-label">UID:</span>
          <span class="font-mono-data academics-tag-value">2026-BT-2002</span>
        </div>
        <div class="academics-tag">
          <span class="font-mono-data academics-tag-label">PROG:</span>
          <span class="font-mono-data academics-tag-value">${prog}</span>
        </div>
      </div>
    </header>
  `;
}

/**
 * [01 // EDUCATION]
 * Left column — education timeline cards sorted by year desc.
 */
function renderEducation(education) {
  if (!education || !education.length) return '';

  const sorted = [...education].sort((a, b) => (b.graduation_year || 0) - (a.graduation_year || 0));

  const entries = sorted
    .map((e, i) => {
      const isFirst = i === 0;
      const hasGpa = e.cgpa || e.percentage;
      const yearRange = e.start_year ? `${e.start_year} — ${e.graduation_year || 'PRESENT'}` : `${e.graduation_year || ''}`;

      return `
        <div class="edu-card ${isFirst ? 'edu-card--current' : ''}">
          ${isFirst ? '<div class="edu-card-badge font-mono-data">CURRENT</div>' : ''}
          <div class="edu-card-inner">
            <div class="edu-card-header">
              <div>
                <h3 class="font-headline-md edu-card-degree">${e.degree || ''}</h3>
                <p class="font-body-lg edu-card-institution">${e.institution || ''}</p>
              </div>
              <div class="edu-card-dates">
                <span class="font-mono-data edu-card-year">${yearRange}</span>
                ${e.enrolment_number ? `<p class="font-mono-data edu-card-enrolment">ENROL: ${e.enrolment_number}</p>` : ''}
              </div>
            </div>
            <div class="edu-card-metrics">
              ${hasGpa ? `<div><p class="font-mono-data edu-card-metric-label">${e.cgpa ? 'CGPA' : 'PERCENTAGE'}</p><p class="font-headline-md edu-card-metric-value">${e.cgpa || (e.percentage + '%') || ''}</p></div>` : ''}
              ${e.advisor ? `<div><p class="font-mono-data edu-card-metric-label">ADVISOR</p><p class="font-body-lg edu-card-metric-text">${e.advisor}</p></div>` : ''}
              ${e.rank ? `<div><p class="font-mono-data edu-card-metric-label">RANK</p><p class="font-body-lg edu-card-metric-text">${e.rank}</p></div>` : ''}
            </div>
          </div>
        </div>
      `;
    })
    .join('');

  return `
    <section class="academics-section">
      <div class="academics-section-header">
        <h2 class="font-headline-lg academics-section-title">[01 // EDUCATION]</h2>
        <div class="academics-section-line"></div>
      </div>
      <div class="edu-entries">${entries}</div>
    </section>
  `;
}

/**
 * [02 // RESEARCH & THESIS]
 * Left column — thesis cards grid (replaces Teaching Assistant).
 */
function renderResearchThesis(theses) {
  if (!theses || !theses.length) return '';

  const cards = theses
    .map(t => {
      const cats = (t.category || []).map(c => `<span class="chip chip-sm chip-investigation">${c.toUpperCase().replace(/\s+/g, '_')}</span>`).join('');
      const yearRange = t.start_date ? `${t.start_date?.substring(0, 4) || ''} — ${t.end_date?.substring(0, 4) || 'PRESENT'}` : '';
      return `
        <div class="thesis-card">
          <div class="thesis-card-header">
            <span class="font-mono-data thesis-card-code">${t.institution || ''}</span>
            <span class="font-mono-data thesis-card-year">${yearRange}</span>
          </div>
          <h4 class="font-headline-md thesis-card-title">${t.title || ''}</h4>
          <p class="font-body-sm thesis-card-desc">${t.description || ''}</p>
          ${cats ? `<div class="thesis-card-chips">${cats}</div>` : ''}
          ${t.advisor ? `<div class="font-mono-data thesis-card-advisor">ADVISOR: ${t.advisor}</div>` : ''}
        </div>
      `;
    })
    .join('');

  return `
    <section class="academics-section">
      <div class="academics-section-header">
        <h2 class="font-headline-lg academics-section-title">[02 // RESEARCH & THESIS]</h2>
        <div class="academics-section-line"></div>
      </div>
      <div class="thesis-grid">${cards}</div>
    </section>
  `;
}

/**
 * [AWARDS // HONORS]
 * Right sidebar — timeline with dot markers.
 * Only shows items with featured: true (or all if no featured field exists).
 */
function renderAwardsHonors(achievements) {
  if (!achievements || !achievements.length) return '';

  const featured = achievements.filter(a => a.featured !== false);
  if (!featured.length) return '';

  const items = featured
    .map(a => `
      <div class="award-item">
        <div class="award-dot"></div>
        <p class="font-mono-data award-year">${a.year || ''}</p>
        <h4 class="font-body-md award-title">${a.title || ''}</h4>
        <p class="font-body-sm award-desc">${a.description || ''}</p>
      </div>
    `)
    .join('');

  return `
    <div class="academics-sidebar-section">
      <h2 class="font-label-caps academics-sidebar-heading">AWARDS // HONORS</h2>
      <div class="awards-list">${items}</div>
    </div>
  `;
}

/**
 * [CERTIFICATIONS]
 * Right sidebar — certification list.
 * Only shows items with featured: true (or all if no featured field exists).
 */
function renderCertifications(certifications) {
  if (!certifications || !certifications.length) return '';

  const featured = certifications.filter(c => c.featured !== false);
  if (!featured.length) return '';

  const items = featured
    .map(c => `
      <div class="cert-item">
        <span class="font-mono-data cert-name">${c.title || ''}</span>
        <span class="material-symbols-outlined cert-icon">verified</span>
      </div>
    `)
    .join('');

  return `
    <div class="academics-sidebar-section">
      <h2 class="font-label-caps academics-sidebar-heading">CERTIFICATIONS</h2>
      <div class="certs-list">${items}</div>
    </div>
  `;
}

// ---------------------------------------------------------------------------
// Page Render Function
// ---------------------------------------------------------------------------

function academicsRender(profile) {
  if (!profile) {
    return `<div class="container-page" style="padding-top: 4rem;">
      <p class="font-mono-data" style="color: var(--error);">No profile data available.</p>
    </div>`;
  }

  const education = profile.education || [];
  const theses = profile.research?.theses || [];
  const achievements = profile.achievements || [];
  const certifications = profile.certifications || [];

  return `
    <div class="academics-page">
      <div class="container-page academics-page-inner blueprint-grid-lines">
        ${renderPageHeader(education)}

        <div class="academics-grid">
          <!-- Left Column (8 cols) -->
          <div class="academics-primary">
            ${renderEducation(education)}
            ${renderResearchThesis(theses)}
          </div>

          <!-- Right Sidebar (4 cols) -->
          <aside class="academics-sidebar">
            ${renderAwardsHonors(achievements)}
            ${renderCertifications(certifications)}
          </aside>
        </div>
      </div>
    </div>
  `;
}

// ---------------------------------------------------------------------------
// Register Route
// ---------------------------------------------------------------------------

registerRoute('academics', { render: academicsRender });

export default academicsRender;
