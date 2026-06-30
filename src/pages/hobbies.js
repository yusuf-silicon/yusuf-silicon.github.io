/* ==========================================================================
   HOBBIES PAGE — Yusuf Silicon Portfolio
   Sections: PAGE ANNOTATION, TAB BAR, GALLERY GRID.
   Data from profile.json → hobbies
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
// Collect hobby categories and their gallery items
// ---------------------------------------------------------------------------

function collectCategories(hobbies) {
  const cats = [];
  if (!hobbies) return cats;
  for (const [key, val] of Object.entries(hobbies)) {
    if (val && val.Gallery && val.Gallery.length > 0) {
      cats.push({ name: key, description: val.description || '', items: val.Gallery });
    }
  }
  return cats;
}

// ---------------------------------------------------------------------------
// Extract image path from a gallery item
// ---------------------------------------------------------------------------

function getItemImage(item) {
  // Items can be { "Title": "path", "description": "..." } or { "image": "path", "description": "..." }
  if (item.image) return item.image;
  // Find the first value that looks like a path
  for (const val of Object.values(item)) {
    if (typeof val === 'string' && (val.startsWith('../') || val.startsWith('/data/'))) return val;
  }
  return '';
}

function getItemName(item) {
  // Find the first key whose value is an image path — that key is the item name
  for (const [k, v] of Object.entries(item)) {
    if (k === 'description' || k === 'image') continue;
    if (typeof v === 'string' && (v.startsWith('../') || v.startsWith('/data/'))) return k;
  }
  // Fallback: extract filename from the "image" path
  if (item.image) {
    const parts = item.image.split('/');
    const file = parts[parts.length - 1] || '';
    return file.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ');
  }
  return 'Untitled';
}

function getItemDesc(item) {
  return item.description || '';
}

// ---------------------------------------------------------------------------
// Render the gallery card grid for a category
// ---------------------------------------------------------------------------

function renderGallery(category, catIndex) {
  const items = category.items || [];
  const cards = items.map((item, i) => {
    const path = getItemImage(item);
    const name = getItemName(item);
    const desc = getItemDesc(item);
    const url = img(path);
    const itemId = `${catIndex}-${i}`;
    return `
      <div class="hobby-card">
        <div class="hobby-card-img-wrap">
          <img src="${url}" alt="${name}" class="hobby-card-img progressive-image" onload="setTimeout(()=>this.classList.add('progressive-image--loaded'),300)" />
          <div class="hobby-card-badge font-mono-data">${(category.name || '').toUpperCase().replace(/\s+/g, '_')}</div>
        </div>
        <div class="hobby-card-body">
          <h3 class="font-headline-md hobby-card-title">${name}</h3>
          ${desc ? `<p class="font-body-sm hobby-card-desc">${desc}</p>` : ''}
        </div>
      </div>`;
  }).join('');

  return `<div class="hobby-gallery" id="hobby-gallery-${catIndex}">${cards}</div>`;
}

// ---------------------------------------------------------------------------
// Main render
// ---------------------------------------------------------------------------

function hobbiesRender(profile) {
  if (!profile) return `<div class="container-page" style="padding-top:4rem"><p class="font-mono-data" style="color:var(--error)">No profile data.</p></div>`;

  const hobbies = profile.hobbies;
  const categories = collectCategories(hobbies);
  const title = 'Creative Explorasion';

  // Tabs
  const tabs = categories.map((cat, i) =>
    `<button class="hobby-tab font-mono-data ${i === 0 ? 'hobby-tab--active' : ''}" data-cat="${i}">${(cat.name || '').toUpperCase().replace(/\s+/g, '_')}</button>`
  ).join('');

  // Default first gallery
  const firstGallery = categories.length ? renderGallery(categories[0], 0) : '<p class="font-body-md" style="color:var(--on-surface-variant)">No hobby data available.</p>';

  // Store categories globally for tab switching
  window.__hobbyCats = categories;

  return `
    <div class="hobby-page">
      <div class="container-page hobby-page-inner blueprint-grid-lines">
        <div class="pubs-header">
          ${renderAnnotation('07', 'HOBBY_ARCHIVE')}
          <div class="pubs-header-bottom">
            <h1 class="font-headline-xl pubs-title">${title}</h1>
          </div>
        </div>
        ${tabs ? `<div class="hobby-tab-bar">${tabs}</div>` : ''}
        <div id="hobby-gallery-container">
          ${firstGallery}
        </div>
      </div>
    </div>
  `;
}

// ---------------------------------------------------------------------------
// Mount
// ---------------------------------------------------------------------------

export function mountHobbiesPage() {
  // Mark already-loaded progressive images
  document.querySelectorAll('.progressive-image').forEach(img => {
    if (img.complete) img.classList.add('progressive-image--loaded');
  });

  // Tab switching
  document.querySelectorAll('.hobby-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.hobby-tab').forEach(t => t.classList.remove('hobby-tab--active'));
      tab.classList.add('hobby-tab--active');
      const catIndex = parseInt(tab.dataset.cat, 10);
      const cats = window.__hobbyCats || [];
      const container = document.getElementById('hobby-gallery-container');
      if (!container || !cats[catIndex]) return;
      container.innerHTML = renderGallery(cats[catIndex], catIndex);
      // Re-apply progressive image check
      requestAnimationFrame(() => {
        document.querySelectorAll('.progressive-image').forEach(img => {
          if (img.complete) img.classList.add('progressive-image--loaded');
        });
      });
    });
  });

  // Click to show full image
  document.querySelectorAll('.hobby-card-img-wrap').forEach(wrap => {
    wrap.addEventListener('click', () => {
      const img = wrap.querySelector('.hobby-card-img');
      if (!img) return;
      showHobbyLightbox(img.src, img.alt);
    });
  });
}

function showHobbyLightbox(src, alt) {
  const overlay = document.createElement('div');
  overlay.className = 'proj-gallery-overlay';
  overlay.innerHTML = `
    <div class="proj-gallery-backdrop"></div>
    <div class="proj-gallery-content" style="text-align:center">
      <button class="proj-gallery-close font-mono-data" type="button">CLOSE [X]</button>
      <img src="${src}" alt="${alt}" style="max-width:100%;max-height:80vh;height:auto;display:block;margin:0 auto" />
      <p class="font-body-sm" style="color:var(--on-surface-variant);margin-top:1rem">${alt}</p>
    </div>`;
  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add('proj-gallery-overlay--open'));
  overlay.querySelector('.proj-gallery-close').addEventListener('click', () => {
    overlay.classList.remove('proj-gallery-overlay--open');
    overlay.addEventListener('transitionend', () => overlay.remove(), { once: true });
  });
  overlay.querySelector('.proj-gallery-backdrop').addEventListener('click', () => {
    overlay.classList.remove('proj-gallery-overlay--open');
    overlay.addEventListener('transitionend', () => overlay.remove(), { once: true });
  });
}

registerRoute('hobbies', { render: hobbiesRender, mount: mountHobbiesPage });
export default hobbiesRender;
