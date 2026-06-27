/* ==========================================================================
   FOOTER COMPONENT — Yusuf Silicon Portfolio
   Persistent footer: copyright, CV download, contact, source code links.
   All links driven by profile.json data.
   ========================================================================== */

/**
 * Render the footer HTML string.
 * @param {Object} profile — profile data from profile.json
 * @returns {string} Footer HTML
 */
export function renderFooter(profile) {
  if (!profile) {
    return `
      <div class="footer-inner container-page">
        <span class="footer-copyright font-label-caps">© 2026 // CORE: COMPUTER_ARCHITECTURE_&_RESEARCH</span>
      </div>
    `;
  }

  const contact = profile.contact || {};
  const resumePath = contact.resume || '#';
  const emailHref = contact.email ? `mailto:${contact.email}` : '#';
  const githubUrl = contact.github || '#';

  return `
    <div class="footer-inner container-page">
      <span class="footer-copyright font-label-caps">
        © 2026 // CORE: COMPUTER_ARCHITECTURE_&_RESEARCH
      </span>
      <div class="footer-links">
        <a href="${resumePath}" class="footer-link font-label-caps" target="_blank" rel="noopener noreferrer">
          CV_DOWNLOAD
        </a>
        <a href="${emailHref}" class="footer-link font-label-caps">
          CONTACT
        </a>
        <a href="${githubUrl}" class="footer-link font-label-caps" target="_blank" rel="noopener noreferrer">
          SOURCE_CODE
        </a>
      </div>
    </div>
  `;
}
