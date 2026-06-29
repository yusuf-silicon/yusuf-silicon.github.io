/* ==========================================================================
   APP ENTRY — Yusuf Silicon Portfolio
   ========================================================================== */

import './styles/tokens.css';
import './styles/base.css';
import './styles/components.css';
import { loadProfile, getProfile } from './lib/dataLoader.js';
import { getRoute, getCurrentRoute } from './lib/router.js';
import { renderHeader, mountHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { renderThemeToggle, mountThemeToggle, syncIcon } from './components/themeToggle.js';

import './pages/home.js';
import './pages/research.js';
import './pages/publications.js';
import './pages/academics.js';
import './pages/experience.js';
import './pages/projects.js';
import { mountHomePage } from './pages/home.js';
import { mountPublicationsPage } from './pages/publications.js';
import { mountProjectsPage } from './pages/projects.js';

const app = document.getElementById('app');

function renderShell() {
  app.innerHTML = `
    <header id="app-header"></header>
    <main id="page-content"></main>
    <footer id="app-footer"></footer>
  `;
}

async function renderCurrentRoute() {
  const page = getCurrentRoute();
  const profile = getProfile();
  const route = getRoute(page);
  const content = document.getElementById('page-content');
  if (!content) return;

  if (route && route.render) {
    const html = await route.render(profile);
    content.innerHTML = html;
    if (route.mount) route.mount();
  } else if (page === 'home') {
    content.innerHTML = `<div class="container-page" style="padding-top: 4rem; padding-bottom: 4rem;"><p class="font-mono-data" style="color: var(--on-surface-variant);">// PAGE: HOME — Coming in Stage C</p></div>`;
  } else {
    content.innerHTML = `<div class="container-page" style="padding-top: 4rem; padding-bottom: 4rem;"><p class="font-mono-data" style="color: var(--on-surface-variant);">// PAGE: ${page.toUpperCase()} — Under construction</p></div>`;
  }

  if (window.__updateActiveNav) window.__updateActiveNav(page);
}

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
  syncIcon();
}

async function init() {
  initTheme();
  renderShell();

  const profile = await loadProfile();
  if (!profile) {
    const content = document.getElementById('page-content');
    if (content) content.innerHTML = '<p style="padding: 2rem; color: var(--error);">Failed to load profile data.</p>';
    return;
  }

  const headerEl = document.getElementById('app-header');
  if (headerEl) { headerEl.innerHTML = renderHeader(profile); mountHeader(); }

  const themeSlot = document.getElementById('theme-toggle-slot');
  if (themeSlot) { themeSlot.innerHTML = renderThemeToggle(); mountThemeToggle(); }

  const footerEl = document.getElementById('app-footer');
  if (footerEl) footerEl.innerHTML = renderFooter(profile);

  mountHomePage();
  mountPublicationsPage();
  mountProjectsPage();

  window.addEventListener('hashchange', renderCurrentRoute);
  renderCurrentRoute();
  console.log('🔧 Yusuf Silicon Portfolio — Ready');
}

init().catch(err => console.error('❌ App initialization failed:', err));
