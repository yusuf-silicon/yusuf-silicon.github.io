/* ==========================================================================
   DATA LOADER — Yusuf Silicon Portfolio
   Fetches, caches, and provides access to profile.json data.
   Single source of truth for all page content.
   ========================================================================== */

/** @type {Object|null} */
let cachedProfile = null;

/**
 * Fetch and cache profile.json data.
 * Subsequent calls return cached data — no redundant network requests.
 * @returns {Promise<Object|null>} The profile data object, or null on failure.
 */
export async function loadProfile() {
  if (cachedProfile) return cachedProfile;

  try {
    const response = await fetch('/data/profile_data/profile.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    cachedProfile = await response.json();
    console.log('✅ Profile loaded:', cachedProfile.personal?.name);
    return cachedProfile;
  } catch (error) {
    console.error('❌ Failed to load profile:', error);
    return null;
  }
}

/**
 * Synchronously access the cached profile data.
 * @returns {Object|null} The cached profile object, or null if not yet loaded.
 */
export function getProfile() {
  return cachedProfile;
}
