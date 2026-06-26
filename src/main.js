/* ==========================================================================
   APP ENTRY — Yusuf Silicon Portfolio
   Initializes the SPA router, loads profile data, renders the shell.
   ========================================================================== */

import './styles/tokens.css';
import './styles/base.css';

console.log('🔧 Yusuf Silicon Portfolio — Initializing...');

// ---------------------------------------------------------------------------
// DOM References
// ---------------------------------------------------------------------------
const app = document.getElementById('app');

// ---------------------------------------------------------------------------
// Data Loader: Fetch profile.json
// ---------------------------------------------------------------------------
async function loadProfile() {
  try {
    const response = await fetch('/data/profile_data/profile.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('❌ Failed to load profile:', error);
    return null;
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

function toggleTheme() {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// ---------------------------------------------------------------------------
// App Initialization
// ---------------------------------------------------------------------------
async function init() {
  initTheme();

  // Expose toggle globally for header component
  window.__toggleTheme = toggleTheme;

  const profile = await loadProfile();
  if (!profile) {
    app.innerHTML = '<p style="padding: 2rem; color: var(--error);">Failed to load profile data.</p>';
    return;
  }

  // Store profile for global access
  window.__profile = profile;

  console.log('✅ Profile loaded:', profile.personal?.name);
}

// ---------------------------------------------------------------------------
// Start
// ---------------------------------------------------------------------------
init().catch(err => {
  console.error('❌ App initialization failed:', err);
});