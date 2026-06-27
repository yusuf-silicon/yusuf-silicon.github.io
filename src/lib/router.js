/* ==========================================================================
   ROUTER — Yusuf Silicon Portfolio
   Lightweight hash-based SPA router.
   Pages register themselves via registerRoute(); main.js drives the shell.
   ========================================================================== */

// ---------------------------------------------------------------------------
// Route Registry
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
 * Get a registered route config by path.
 * @param {string} path
 * @returns {{render: (profile: Object) => string}|undefined}
 */
export function getRoute(path) {
  return routes[path.toLowerCase()];
}

/**
 * Get all registered route paths.
 * @returns {string[]}
 */
export function getRegisteredRoutes() {
  return Object.keys(routes);
}

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

/**
 * Navigate to a given route by updating the URL hash.
 * @param {string} path — route path (e.g., 'home', 'projects')
 */
export function navigateTo(path) {
  window.location.hash = `#/${path}`;
}

/**
 * Get the current route from the URL hash.
 * Defaults to 'home' if no hash.
 * @returns {string} Current route path
 */
export function getCurrentRoute() {
  const hash = window.location.hash.slice(1) || '/home';
  return hash.replace(/^\//, '').toLowerCase();
}
