/* ==========================================================================
   APP ENTRY — Yusuf Silicon Portfolio
   Initializes the SPA router, loads profile data, renders the shell,
   and manages theme state.
   ========================================================================== */

import './styles/tokens.css';
import './styles/base.css';
import './styles/components.css';
import { loadProfile, getProfile } from './lib/dataLoader.js';
import { renderHeader, mountHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { renderThemeToggle, mountThemeToggle, syncIcon } from './components/themeToggle.js';

// ---------------------------------------------------------------------------
// Route Registry — pages register themselves via registerRoute()
// ---------------------------------------------------------------------------
/** @type {Object<string, {render: (profile: Object) => string}>} */
const routes = {};

/**
 * Register a page route for SPA navigation.
 * Called by each page module during initialization.
 * @param {string} path  — route path (e.g., 'home', 'research')
 * @param {{render: (profile: Object) => string}} config — page config with render function
 */
export function registerRoute(path, config) {
  routes[path.toLowerCase()] = config;
}

/**
 * Navigate to a given route by updating the URL hash.
 * @param {string} path — route path (e.g., 'home', 'projects')
 */
export function navigateTo(path) {
  window.location.hash = `#/${path}`;
}

/**
 * Get the current route from the URL hash.
 * Defaults to 'home' if no hash or unrecognised path.
 * @returns {string} Current route path
 */
export function getCurrentRoute() {
  const hash = window.location.hash.slice(1) || '/home';
  return hash.replace(/^\//, '').toLowerCase();
}

// ---------------------------------------------------------------------------
// DOM References
// ---------------------------------------------------------------------------
const app = document.getElementById('app');

// ---------------------------------------------------------------------------
// Render the App Shell
// ---------------------------------------------------------------------------
function renderShell() {
  app.innerHTML = `
    <header id="app-header"></header>
    <main id="page-content"></main>
    <footer id="app-footer"></footer>
  `;
}

// ---------------------------------------------------------------------------
// Route Renderer
// ---------------------------------------------------------------------------
function renderCurrentRoute() {
  const page = getCurrentRoute();
  const profile = getProfile();
  const route = routes[page];
  const content = document.getElementById('page-content');

  if (!content) return;

  if (route && route.render) {
    content.innerHTML = route.render(profile);
  } else if (page === 'home') {
    // Home is default — render a placeholder until Stage C
    content.innerHTML = `<div class="container-page" style="padding-top: 4rem; padding-bottom: 4rem;">
      <p class="font-mono-data" style="color: var(--on-surface-variant);">// PAGE: HOME — Coming in Stage C</p>
    </div>`;
  } else {
    // Unknown route — fallback
    content.innerHTML = `<div class="container-page" style="padding-top: 4rem; padding-bottom: 4rem;">
      <p class="font-mono-data" style="color: var(--on-surface-variant);">// PAGE: ${page.toUpperCase()} — Under construction</p>
    </div>`;
  }

  // Notify header to update active nav link
  if (window.__updateActiveNav) {
    window.__updateActiveNav(page);
  }
}

// ---------------------------------------------------------------------------
// Theme Management
// ---------------------------------------------------------------------------
function initTheme() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (saved === 'dark' || (!saved && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

export function toggleTheme() {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  // Keep the toggle icon in sync
  syncIcon();
}

// ---------------------------------------------------------------------------
// App Initialization
// ---------------------------------------------------------------------------
async function init() {
  // 1. Restore saved theme
  initTheme();

  // 2. Render the app shell (header, page-content, footer)
  renderShell();

  // 3. Load profile data
  const profile = await loadProfile();
  if (!profile) {
    const content = document.getElementById('page-content');
    if (content) {
      content.innerHTML = '<p style="padding: 2rem; color: var(--error);">Failed to load profile data.</p>';
    }
    return;
  }

  // 4. Render persistent components into the shell
  //    Header
  const headerEl = document.getElementById('app-header');
  if (headerEl) {
    headerEl.innerHTML = renderHeader(profile);
    mountHeader();
  }

  //    Theme Toggle (inside header)
  const themeSlot = document.getElementById('theme-toggle-slot');
  if (themeSlot) {
    themeSlot.innerHTML = renderThemeToggle();
    mountThemeToggle();
  }

  //    Footer
  const footerEl = document.getElementById('app-footer');
  if (footerEl) {
    footerEl.innerHTML = renderFooter(profile);
  }

  // 5. Set up SPA routing
  window.addEventListener('hashchange', renderCurrentRoute);

  // 6. Render the initial route (defaults to home)
  renderCurrentRoute();

  console.log('🔧 Yusuf Silicon Portfolio — Ready');
}

// ---------------------------------------------------------------------------
// Start
// ---------------------------------------------------------------------------
init().catch(err => {
  console.error('❌ App initialization failed:', err);
});
