/* ==========================================================================
   PROJECTS PAGE — Yusuf Silicon Portfolio
   Sections: FILTER_BAR, PROJECT_GRID, SIDEBAR_METRICS.
   Data from profile.json → projects (vlsi[], iot[], software[])
   ========================================================================== */

import { registerRoute } from '../lib/router.js';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function img(path) {
  if (!path) return '';
  return path.replace(/^\.\.\//, '/data/');
}

// ---------------------------------------------------------------------------
// Annotation
// ---------------------------------------------------------------------------

function renderAnnotation(pageNum, docClass) {
  return `
    <div class="research-annotation">
      <span class="research-annotation-badge font-mono-data">PAGE. ${pageNum}</span>
      <div class="research-annotation-line"></div>
      <span class="font-label-caps research-annotation-text">[DOCUMENT_CLASS: ${docClass}]</span>
    </div>`;
}

// ---------------------------------------------------------------------------
// Collect all projects into a flat array
// ---------------------------------------------------------------------------

function collectProjects(projects) {
  const all = [];
  if (!projects) return all;
  for (const [key, val] of Object.entries(projects)) {
    if (Array.isArray(val)) {
      val.forEach(p => { all.push({ ...p, _type: key.toUpperCase() }); });
    }
  }
  return all;
}

// ---------------------------------------------------------------------------
// Aggregate all unique tech items across projects
// ---------------------------------------------------------------------------

function aggregateTech(projectsList) {
  const tools = new Set();
  const languages = new Set();
  const concepts = new Set();
  projectsList.forEach(p => {
    const ts = p.techStack || {};
    (ts.tools || []).forEach(t => tools.add(t));
    (ts.languages || []).forEach(l => languages.add(l));
    (ts.concepts || []).forEach(c => concepts.add(c));
  });
  return { tools: [...tools], languages: [...languages], concepts: [...concepts] };
}

// Render a single project card
function renderProjectCard(p, index) {
  // Read technical_specs from profile data (dynamic key-value object)
  const rawSpecs = p.technical_specs || null;
  const specs = rawSpecs ? Object.entries(rawSpecs).map(([k, v]) => ({ label: k.toUpperCase().replace(/\s+/g, '_'), value: v })) : [];
  const hasSpecs = specs.length > 0;
  const allTech = [...(p.techStack?.languages || []), ...(p.techStack?.tools || []), ...(p.techStack?.concepts || [])].slice(0, 8);
  const techChips = allTech.map(t => `<span class="proj-chip font-mono-data">${t}</span>`).join('');
  const highlights = (p.highlights || []).slice(0, 4);
  const highlightItems = highlights.map(h => `<li class="font-body-sm proj-highlight-item">${h}</li>`).join('');
  const thumbnail = img(p.thumbnail);
  const hasThumb = !!p.thumbnail;
  const githubLink = p.github || '';
  const resultsObj = p.results || {};
  const resultEntries = Object.entries(resultsObj).filter(([k, v]) => k && v);

  // Specs table — built dynamically from technical_specs object
  const specsHtml = hasSpecs ? `
    <div class="proj-specs-col">
      <h3 class="font-label-caps proj-specs-heading">TECHNICAL_SPECIFICATIONS</h3>
      <ul class="proj-specs-list">
        ${specs.map(s => `<li class="proj-specs-item"><span class="proj-specs-label font-mono-data">${s.label}</span><span class="proj-specs-value font-mono-data">${s.value}</span></li>`).join('')}
      </ul>
    </div>` : `<div class="proj-specs-col proj-specs-col--empty">
      <div class="proj-specs-placeholder">
        <span class="font-mono-data" style="color:var(--outline);font-size:0.625rem;">TECHNICAL_SPECIFICATIONS // NOT_PROVIDED</span>
      </div>
    </div>`;

  // Thumbnail column — zoom to fill with object-fit: cover
  const thumbHtml = hasThumb ? `
    <div class="proj-thumb-col">
      <div class="proj-card-thumb" data-gallery="${index}">
        <div class="proj-thumb-img-wrapper">
          <img src="${thumbnail}" alt="${p.title}" class="proj-thumb-img progressive-image" style="object-fit:cover;width:100%;height:100%;display:block" onload="setTimeout(()=>this.classList.add('progressive-image--loaded'),300)" />
          <div class="proj-thumb-overlay">
            <span class="material-symbols-outlined">search</span>
          </div>
        </div>
      </div>
    </div>` : '';

  // Only render the divider+details section if there are specs or a thumbnail
  const detailsSection = (hasSpecs || hasThumb) ? `
    <div class="proj-card-divider"></div>
    <div class="proj-card-specs-row">
      ${specsHtml}
      ${thumbHtml}
    </div>` : '';

  const hasTech = allTech.length > 0;
  const hasMetrics = (p.metrics || []).length > 0;
  const hasHighlights = (p.highlights || []).length > 0;
  const uid = `proj-${index}`;

  // Collapsible sections (hidden by default)
  const techSection = hasTech ? `<div class="proj-toggle-section" id="${uid}-tech"><div class="proj-tech-chips">${techChips}</div></div>` : '';
  const metricsSection = hasMetrics ? `<div class="proj-toggle-section" id="${uid}-metrics">${`<ul class="proj-metrics-list">${(p.metrics || []).slice(0, 4).map(m => `<li class="font-body-sm proj-metric-chip">${m}</li>`).join('')}</ul>`}</div>` : '';
  const highlightsSection = hasHighlights ? `<div class="proj-toggle-section" id="${uid}-highlights">${highlightItems ? `<ul class="proj-highlights">${highlightItems}</ul>` : ''}</div>` : '';

  const hasAnyToggle = hasTech || hasMetrics || hasHighlights;
  // Toggle icons at top-left of toggle section
  const toggleSection = hasAnyToggle ? `
    <div class="proj-toggle-wrapper">
      <div class="proj-toggle-bar">
        ${hasTech ? `<button class="proj-toggle-btn" data-target="${uid}-tech" title="Tech stack"><span class="material-symbols-outlined">widgets</span></button>` : ''}
        ${hasMetrics ? `<button class="proj-toggle-btn" data-target="${uid}-metrics" title="Metrics"><span class="material-symbols-outlined">bar_chart</span></button>` : ''}
        ${hasHighlights ? `<button class="proj-toggle-btn" data-target="${uid}-highlights" title="Highlights"><span class="material-symbols-outlined">stars</span></button>` : ''}
      </div>
      ${techSection}
      ${metricsSection}
      ${highlightsSection}
    </div>` : '';

  return `
    <article class="proj-card hard-shadow" data-type="${p._type}" data-index="${index}">
      <div class="proj-card-id-box font-mono-data">ID: ${(p.id || '').replace(/\s+/g, '_')}</div>
      <span class="font-label-caps proj-card-category">${p._type} // CATEGORY: ${(p.category || '').toUpperCase().replace(/\s+/g, '_')}</span>
      <h2 class="font-headline-md proj-card-title">${p.title}</h2>
      <p class="font-body-md proj-card-overview">${p.overview || ''}</p>
      ${detailsSection}
      ${toggleSection}
      <div class="proj-card-footer">
        ${githubLink ? `<a href="${githubLink}" target="_blank" rel="noopener noreferrer" class="proj-github-link font-mono-data hard-shadow-sm">
          <span class="material-symbols-outlined" style="font-size:1rem;">code</span>
          GITHUB_REPOSITORY
        </a>` : ''}
        ${resultEntries.map(([name, path]) => {
          const url = img(path);
          const label = name.toUpperCase().replace(/\s+/g, '_');
          return `<a href="${url}" download class="proj-result-link font-mono-data hard-shadow-sm">
            <span class="material-symbols-outlined" style="font-size:1rem;">download</span>
            ${label}
          </a>`;
        }).join('')}
      </div>
    </article>
  `;
}

// ---------------------------------------------------------------------------
// Render filter buttons
// ---------------------------------------------------------------------------

// Extract non-empty project types from the projects object
function getProjectTypes(projects) {
  const types = [];
  if (!projects) return types;
  for (const [key, val] of Object.entries(projects)) {
    if (Array.isArray(val) && val.length > 0) {
      types.push(key.toUpperCase());
    }
  }
  return types;
}

function renderFilterBar(projectTypes) {
  const typeBtns = projectTypes
    .filter(t => t !== 'all')
    .map(t => `<button class="proj-filter-btn font-mono-data" data-filter="${t}">${t.toUpperCase()}</button>`)
    .join('');
  return `
    <div class="proj-filter-bar">
      <button class="proj-filter-btn proj-filter-btn--active font-mono-data" data-filter="all">ALL_CORES</button>
      ${typeBtns}
    </div>
  `;
}

// ---------------------------------------------------------------------------
// Render sidebar
// ---------------------------------------------------------------------------

function renderSidebar(projectsList, allTech, types) {
  const total = projectsList.length;
  const metricItems = types.map(t => {
    const count = projectsList.filter(p => p._type === t).length;
    const label = t === 'VLSI' ? 'VLSI_CORES' : t === 'IoT' ? 'IoT_SYSTEMS' : t + '_PROJECTS';
    return `<div class="proj-metric-item"><span class="font-headline-lg proj-metric-value">${count}</span><span class="font-mono-data proj-metric-label">${label}</span></div>`;
  }).join('');

  const toolChips = allTech.tools.slice(0, 10).map(t => `<span class="proj-skill-chip font-mono-data">${t}</span>`).join('');
  const langChips = allTech.languages.slice(0, 8).map(l => `<span class="proj-skill-chip font-mono-data">${l}</span>`).join('');

  return `
    <aside class="proj-sidebar">
      <div class="proj-sidebar-section">
        <h3 class="font-label-caps proj-sidebar-heading">METRIC_SUMMARY</h3>
        <div class="proj-metrics-strip">
          <div class="proj-metric-item">
            <span class="font-headline-lg proj-metric-value">${total}</span>
            <span class="font-mono-data proj-metric-label">TOTAL_PROJECTS</span>
          </div>
          ${metricItems}
        </div>
      </div>
      ${langChips ? `
      <div class="proj-sidebar-section">
        <h3 class="font-label-caps proj-sidebar-heading">LANGUAGES</h3>
        <div class="proj-skill-chips">${langChips}</div>
      </div>` : ''}
      ${toolChips ? `
      <div class="proj-sidebar-section">
        <h3 class="font-label-caps proj-sidebar-heading">TOOLCHAIN</h3>
        <div class="proj-skill-chips">${toolChips}</div>
      </div>` : ''}
    </aside>
  `;
}

// ---------------------------------------------------------------------------
// Main render
// ---------------------------------------------------------------------------

function projectsRender(profile) {
  if (!profile) return `<div class="container-page" style="padding-top:4rem"><p class="font-mono-data" style="color:var(--error)">No profile data.</p></div>`;

  const projects = profile.projects;
  const all = collectProjects(projects);
  const types = getProjectTypes(projects);
  const tech = aggregateTech(all);
  const cards = all.map((p, i) => renderProjectCard(p, i)).join('');

  return `
    <div class="proj-page">
      <div class="container-page proj-page-inner blueprint-grid-lines">
        <div class="pubs-header">
          ${renderAnnotation('06', 'PROJECT_INDEX')}
          <div class="pubs-header-bottom">
            <h1 class="font-headline-xl pubs-title">Development & Engineering</h1>
            ${renderFilterBar(types)}
          </div>
        </div>

        <div class="proj-grid">
          <div class="proj-cards-col" id="proj-cards-col">
            ${cards}
          </div>
          ${renderSidebar(all, tech, types)}
        </div>
      </div>
    </div>
  `;
}

// ---------------------------------------------------------------------------
// Mount — attach event listeners
// ---------------------------------------------------------------------------

export function mountProjectsPage() {
  // Mark already-loaded progressive images
  document.querySelectorAll('.progressive-image').forEach(img => {
    if (img.complete) img.classList.add('progressive-image--loaded');
  });

  // Toggle buttons — accordion: only one section open at a time
  document.querySelectorAll('.proj-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      const section = document.getElementById(targetId);
      if (!section) return;
      const wasOpen = section.classList.contains('proj-toggle-section--open');
      // Close all sections in this card
      const card = btn.closest('.proj-card');
      if (card) {
        card.querySelectorAll('.proj-toggle-section').forEach(s => s.classList.remove('proj-toggle-section--open'));
        card.querySelectorAll('.proj-toggle-btn').forEach(b => b.classList.remove('proj-toggle-btn--active'));
      }
      // If it wasn't open, open it now
      if (!wasOpen) {
        section.classList.add('proj-toggle-section--open');
        btn.classList.add('proj-toggle-btn--active');
      }
    });
  });

  // Preload all project images (non-blocking, uses browser cache)
  const allProjs = window.__projProjects || [];
  allProjs.forEach(proj => {
    if (proj.thumbnail) { const i = new Image(); i.src = img(proj.thumbnail); }
    if (proj.gallery) proj.gallery.forEach(g => { const i = new Image(); i.src = img(g); });
  });

  // Filter buttons
  document.querySelectorAll('.proj-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.proj-filter-btn').forEach(b => b.classList.remove('proj-filter-btn--active'));
      btn.classList.add('proj-filter-btn--active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.proj-card').forEach(card => {
        if (filter === 'all' || card.dataset.type === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Thumbnail click — gallery lightbox (includes thumbnail as first image)
  document.querySelectorAll('.proj-card-thumb').forEach(el => {
    el.addEventListener('click', () => {
      const idx = parseInt(el.dataset.gallery, 10);
      const all = window.__projProjects || [];
      const proj = all[idx];
      if (!proj) return;
      const images = [];
      if (proj.thumbnail) images.push(proj.thumbnail);
      if (proj.gallery && proj.gallery.length) images.push(...proj.gallery);
      if (!images.length) return;
      showGallery(images, proj.title);
    });
  });
}

// ---------------------------------------------------------------------------
// Gallery lightbox
// ---------------------------------------------------------------------------

function showGallery(images, title) {
  const overlay = document.createElement('div');
  overlay.className = 'proj-gallery-overlay';
  overlay.innerHTML = `
    <div class="proj-gallery-backdrop"></div>
    <div class="proj-gallery-content">
      <button class="proj-gallery-close font-mono-data" type="button">CLOSE [X]</button>
      <h3 class="font-headline-md proj-gallery-title">${title}</h3>
      <div class="proj-gallery-images">
        ${images.map(src => `<img src="${img(src)}" alt="" loading="lazy" class="proj-gallery-img" />`).join('')}
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add('proj-gallery-overlay--open'));

  overlay.querySelector('.proj-gallery-close').addEventListener('click', () => closeGallery(overlay));
  overlay.querySelector('.proj-gallery-backdrop').addEventListener('click', () => closeGallery(overlay));
}

function closeGallery(overlay) {
  overlay.classList.remove('proj-gallery-overlay--open');
  overlay.addEventListener('transitionend', () => overlay.remove(), { once: true });
}

// ---------------------------------------------------------------------------
// Store projects list globally for mount access
// ---------------------------------------------------------------------------

// We patch into the render to store data
const origRender = projectsRender;
projectsRender = function(profile) {
  const all = collectProjects(profile?.projects);
  window.__projProjects = all;
  return origRender(profile);
};

registerRoute('projects', { render: projectsRender, mount: mountProjectsPage });
export default projectsRender;
