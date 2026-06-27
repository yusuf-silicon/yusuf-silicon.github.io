/* ==========================================================================
   HEADER COMPONENT — Yusuf Silicon Portfolio
   Renders the persistent navigation bar: logo, page links, theme toggle slot.
   Driven by JSON data and the SPA router.
   ========================================================================== */

import { navigateTo, getCurrentRoute } from '../lib/router.js';

// ---------------------------------------------------------------------------
// Navigation Order (mapped from profile.json personal name / fixed order)
// ---------------------------------------------------------------------------
const NAV_LINKS = [
  { label: 'Home',         path: 'home' },
  { label: 'Research',     path: 'research' },
  { label: 'Publications', path: 'publications' },
  { label: 'Academics',    path: 'academics' },
  { label: 'Experience',   path: 'experience' },
  { label: 'Projects',     path: 'projects' },
  { label: 'Hobbies',      path: 'hobbies' },
  { label: 'Contact',      path: 'contact' },
];

// ---------------------------------------------------------------------------
// State
// ---------------------------------------------------------------------------
let currentActive = 'home';

// ---------------------------------------------------------------------------
// Render
// ---------------------------------------------------------------------------

/**
 * Build the header HTML string.
 * @param {Object} profile — profile data (used for logo name)
 * @returns {string} Header HTML
 */
export function renderHeader(profile) {
  const nickname = profile?.personal?.nickname || 'YUSUF_SILICON';
  currentActive = getCurrentRoute();

  const navItems = NAV_LINKS
    .map(link => {
      const isActive = link.path === currentActive;
      return `
        <a href="#/${link.path}"
           class="header-nav-link font-label-caps ${isActive ? 'header-nav-link--active' : ''}"
           data-route="${link.path}">
          ${link.label}
        </a>`;
    })
    .join('');

  return `
    <div class="header-inner container-page">
      <span class="header-logo font-mono-data">
        [${nickname}]
      </span>

      <nav class="header-nav" id="header-nav" aria-label="Main navigation">
        ${navItems}
      </nav>

      <div class="header-actions">
        <div id="theme-toggle-slot"></div>
        <button class="header-hamburger" id="header-hamburger" aria-label="Toggle navigation menu" type="button">
          <span class="material-symbols-outlined">menu</span>
        </button>
      </div>
    </div>
  `;
}

// ---------------------------------------------------------------------------
// Mount — attach event listeners
// ---------------------------------------------------------------------------

/**
 * Mount the header: attach nav click delegation and hamburger toggle.
 */
export function mountHeader() {
  // --- Navigate on nav link clicks (SPA behaviour) ---
  const headerInner = document.querySelector('.header-inner');
  if (!headerInner) return;

  headerInner.addEventListener('click', e => {
    const link = e.target.closest('[data-route]');
    if (link) {
      e.preventDefault();
      const path = link.dataset.route;
      navigateTo(path);
    }
  });

  // --- Hamburger toggle ---
  const hamburger = document.getElementById('header-hamburger');
  const nav = document.getElementById('header-nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('header-nav--open');
      const icon = hamburger.querySelector('.material-symbols-outlined');
      if (icon) {
        icon.textContent = nav.classList.contains('header-nav--open') ? 'close' : 'menu';
      }
    });
  }

  // --- Expose active-nav updater for main.js router ---
  window.__updateActiveNav = (page) => {
    currentActive = page;
    document.querySelectorAll('.header-nav-link').forEach(el => {
      const isActive = el.dataset.route === page;
      el.classList.toggle('header-nav-link--active', isActive);
    });
  };
}
