/* ==========================================================================
   RESEARCH PAGE — Yusuf Silicon Portfolio
   Sections: RESEARCH_AREAS, SYSTEM_METRICS, CURRENT_INVESTIGATIONS,
             FUTURE_DIRECTIONS_ROADMAP, EVOLUTION_TIMELINE.
   ========================================================================== */

import { registerRoute } from '../lib/router.js';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Pick a Material Symbols icon based on keywords in a research area name.
 */
function pickIcon(name) {
  const n = (name || '').toLowerCase();
  if (n.includes('architecture') || n.includes('memory') || n.includes('processor')) return 'developer_board';
  if (n.includes('ai') || n.includes('acceleration') || n.includes('cryptographic')) return 'neurology';
  if (n.includes('energy') || n.includes('high-perform') || n.includes('security')) return 'bolt';
  return 'science';
}

/**
 * Format a date range from start/end date strings.
 */
function formatDateRange(start, end) {
  const fmt = (s) => {
    if (!s) return '';
    const d = new Date(s);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };
  return `${fmt(start)} — ${fmt(end) || 'PRESENT'}`;
}

// ---------------------------------------------------------------------------
// Section Renders
// ---------------------------------------------------------------------------

/**
 * Page Annotation — stitch reference style.
 * Renders: [PAGE. XX]  ——————  [DOCUMENT_CLASS: ...]
 */
function renderAnnotation(pageNum, docClass) {
  return `
    <div class="research-annotation">
      <span class="research-annotation-badge font-mono-data">PAGE. ${pageNum}</span>
      <div class="research-annotation-line"></div>
      <span class="font-label-caps research-annotation-text">[DOCUMENT_CLASS: ${docClass}]</span>
    </div>
  `;
}

/**
 * [RESEARCH_AREAS_V2.0]
 * Left sidebar — list of research interest areas with icons.
 */
function renderResearchAreas(interests) {
  const areas = interests?.overview || [];
  if (!areas.length) return '';

  const items = areas
    .map(a => {
      const icon = pickIcon(a.name);
      return `
        <li class="research-area-item">
          <div class="research-area-item-inner">
            <span class="material-symbols-outlined research-area-icon">${icon}</span>
            <div class="research-area-content">
              <h3 class="font-headline-md research-area-name">${a.name}</h3>
              <p class="font-body-sm research-area-desc research-text-justify">${a.description || ''}</p>
            </div>
          </div>
        </li>
      `;
    })
    .join('');

  return `
    <div class="sidebar-section">
      <div class="font-label-caps research-section-heading">[RESEARCH_AREAS_V2.0]</div>
      <ul class="research-area-list">${items}</ul>
    </div>
  `;
}

/**
 * [SYSTEM_METRICS]
 * Left sidebar — dynamic metrics table.
 */
function renderSystemMetrics(profile) {
  const interestCount = profile?.interests?.overview?.length || 0;
  const pubCount = profile?.research?.publications?.length || 0;
  const thesisCount = profile?.research?.theses?.length || 0;

  const metrics = [
    { label: 'RESEARCH_INTERESTS', value: interestCount.toString().padStart(2, '0') },
    { label: 'PUBLICATIONS',       value: pubCount.toString().padStart(2, '0') },
    { label: 'THESES',             value: thesisCount.toString().padStart(2, '0') },
  ];

  const rows = metrics
    .map(m => `
      <div class="metric-row">
        <span class="font-mono-data metric-row-label">${m.label}</span>
        <span class="font-mono-data metric-row-value">${m.value}</span>
      </div>
    `)
    .join('');

  return `
    <div class="sidebar-section">
      <div class="font-label-caps research-section-heading">[SYSTEM_METRICS]</div>
      <div class="metrics-table">${rows}</div>
    </div>
  `;
}

/**
 * [CURRENT_INVESTIGATIONS]
 * Right column — shows only theses with status "active".
 * If none active, displays an empty-state message.
 */
function renderCurrentInvestigations(theses) {
  const active = (theses || []).filter(t => t.status === 'active');

  if (!active.length) {
    return `
      <section class="content-section research-section">
        <div class="font-label-caps research-section-heading content-section-label">
          <span class="section-label-dot"></span> [CURRENT_INVESTIGATIONS]
        </div>
        <div class="investigations-empty">
          <p class="font-body-md investigations-empty-text">No active research in progress. Interested in collaborating? Feel free to reach out.</p>
        </div>
      </section>
    `;
  }

  const cards = active
    .map((t, i) => {
      const cats = (t.category || []).map(c => `<span class="chip chip-sm chip-investigation">${c.toUpperCase().replace(/\s+/g, '_')}</span>`).join('');
      return `
        <div class="investigation-card">
          <span class="investigation-card-number font-mono-data">#${String(i + 1).padStart(3, '0')}</span>
          <h3 class="font-headline-md investigation-card-title">${t.title || ''}</h3>
          <p class="font-body-sm investigation-card-desc research-text-justify">${t.description || ''}</p>
          ${cats ? `<div class="investigation-card-chips">${cats}</div>` : ''}
        </div>
      `;
    })
    .join('');

  return `
    <section class="content-section research-section">
      <div class="font-label-caps research-section-heading content-section-label">
        <span class="section-label-dot"></span> [CURRENT_INVESTIGATIONS]
      </div>
      <div class="investigations-grid">${cards}</div>
    </section>
  `;
}

/**
 * [FUTURE_DIRECTIONS_ROADMAP]
 * Right column — planned research projects from future_projects.research.
 * Numbering starts from (thesisCount + 1): PROJECT_003, PROJECT_004, etc.
 */
function renderFutureDirections(theses, futureProjects) {
  const projects = futureProjects?.research || [];
  if (!projects.length) return '';

  const thesisCount = theses?.length || 0;

  const items = projects
    .map((p, i) => {
      const projectNum = thesisCount + i + 1;
      const projectId = `PROJECT_${String(projectNum).padStart(3, '0')}`;
      return `
        <div class="future-direction-item">
          <span class="font-mono-data future-direction-id">${projectId}</span>
          <div>
            <h4 class="font-headline-md future-direction-title">${p.title}</h4>
            <p class="font-body-sm future-direction-desc research-text-justify">${p.description || ''}</p>
          </div>
        </div>
      `;
    })
    .join('');

  return `
    <section class="content-section research-section future-section">
      <div class="font-label-caps research-section-heading content-section-label">[FUTURE_DIRECTIONS_ROADMAP]</div>
      <div class="future-directions">${items}</div>
    </section>
  `;
}

/**
 * [EVOLUTION_TIMELINE]
 * Right column — completed thesis timeline (status !== 'active').
 */
function renderEvolutionTimeline(theses) {
  const completed = (theses || []).filter(t => t.status !== 'active');
  if (!completed.length) return '';

  const entries = completed
    .map((t, i) => {
      const dateRange = formatDateRange(t.start_date, t.end_date);
      const isFirst = i === 0;
      return `
        <div class="timeline-entry">
          <div class="timeline-node-col">
            <div class="timeline-node ${isFirst ? 'timeline-node--active' : ''}"></div>
          </div>
          <div class="timeline-content">
            <div class="timeline-header">
              <span class="font-mono-data timeline-date">${dateRange}</span>
              <span class="font-label-caps timeline-tag">${t.institution || ''}</span>
            </div>
            <h3 class="font-headline-md timeline-title">${t.title}</h3>
            <p class="font-body-sm timeline-desc research-text-justify">${t.description || ''}</p>
            ${t.advisor ? `<div class="font-mono-data timeline-advisor">ADVISOR: ${t.advisor}</div>` : ''}
          </div>
        </div>
      `;
    })
    .join('');

  return `
    <section class="content-section research-section">
      <div class="font-label-caps research-section-heading content-section-label">[EVOLUTION_TIMELINE]</div>
      <div class="timeline">
        <div class="timeline-line"></div>
        ${entries}
      </div>
    </section>
  `;
}

// ---------------------------------------------------------------------------
// Page Render Function
// ---------------------------------------------------------------------------

function researchRender(profile) {
  if (!profile) {
    return `<div class="container-page" style="padding-top: 4rem;">
      <p class="font-mono-data" style="color: var(--error);">No profile data available.</p>
    </div>`;
  }

  const interests = profile.interests;
  const theses = profile.research?.theses;
  const futureProjects = profile.future_projects;

  return `
    <div class="research-page">
      <div class="container-page research-page-inner blueprint-grid-lines">
        <div class="pubs-header">
          ${renderAnnotation('02', 'RESEARCH_MANIFESTO')}
          <div class="pubs-header-bottom" style="margin-bottom: 0;">
            <h1 class="font-headline-xl pubs-title">Research Repository</h1>
          </div>
        </div>

        <div class="research-grid">
          <aside class="research-sidebar">
            ${renderResearchAreas(interests)}
            ${renderSystemMetrics(profile)}
          </aside>

          <section class="research-content">
            ${renderCurrentInvestigations(theses)}
            ${renderFutureDirections(theses, futureProjects)}
            ${renderEvolutionTimeline(theses)}
          </section>
        </div>
      </div>
    </div>
  `;
}

// ---------------------------------------------------------------------------
// Register Route
// ---------------------------------------------------------------------------

registerRoute('research', { render: researchRender });

export default researchRender;
