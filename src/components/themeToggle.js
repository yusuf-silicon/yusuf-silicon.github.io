/* ==========================================================================
   THEME TOGGLE — Yusuf Silicon Portfolio
   Dark/light mode toggle button. Renders into #theme-toggle-slot.
   Relies on toggleTheme() from main.js and localStorage
   persistence already set up in main.js initTheme().
   ========================================================================== */

import { toggleTheme } from '../main.js';

/**
 * Render the theme toggle button HTML string.
 * Detects current theme to show the correct icon.
 * @returns {string} Theme toggle button HTML
 */
export function renderThemeToggle() {
  const isDark = document.documentElement.classList.contains('dark');
  const icon = isDark ? 'dark_mode' : 'light_mode';
  return `
    <button class="theme-toggle-btn" id="theme-toggle-btn" type="button" aria-label="Toggle theme">
      <span class="material-symbols-outlined">${icon}</span>
    </button>
  `;
}

/**
 * Mount the theme toggle: attach click listener and sync icon on toggle.
 */
export function mountThemeToggle() {
  const btn = document.getElementById('theme-toggle-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    toggleTheme();
    syncIcon();
  });
}

/**
 * Sync the toggle icon with the current theme state.
 * Called externally when theme changes by other means.
 */
export function syncIcon() {
  const btn = document.getElementById('theme-toggle-btn');
  if (!btn) return;
  const icon = btn.querySelector('.material-symbols-outlined');
  if (!icon) return;
  const isDark = document.documentElement.classList.contains('dark');
  icon.textContent = isDark ? 'dark_mode' : 'light_mode';
}
