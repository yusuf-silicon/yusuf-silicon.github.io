/* ==========================================================================
   CONTACT PAGE — Yusuf Silicon Portfolio
   Sections: PAGE ANNOTATION, COMMUNICATION_PORTS, NETWORK_NODES.
   Data from profile.json → contact
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
// Main render
// ---------------------------------------------------------------------------

function contactRender(profile) {
  if (!profile) return `<div class="container-page" style="padding-top:4rem"><p class="font-mono-data" style="color:var(--error)">No profile data.</p></div>`;

  const c = profile.contact || {};

  // --- Communication Ports ---
  const ports = [];
  let portNum = 1;

  // Professional email (only if non-empty)
  if (c.professional_email) {
    ports.push(`
      <div class="cont-port-card">
        <div class="cont-port-header">
          <span class="font-label-caps cont-port-num">PORT_${String(portNum++).padStart(2,'0')}</span>
          <span class="material-symbols-outlined cont-port-icon">badge</span>
        </div>
        <p class="font-label-caps cont-port-label">${c.professional_email_name || 'Professional'} Email</p>
        <a class="font-mono-data cont-port-value" href="mailto:${c.professional_email}">${c.professional_email}</a>
      </div>`);
  }

  // Professional location (only if non-empty)
  if (c.professional_location) {
    const locLabel = (c.professional_location_name || 'Professional') + ' Location';
    ports.push(`
      <div class="cont-port-card">
        <div class="cont-port-header">
          <span class="font-label-caps cont-port-num">PORT_${String(portNum++).padStart(2,'0')}</span>
          <span class="material-symbols-outlined cont-port-icon">location_on</span>
        </div>
        <p class="font-label-caps cont-port-label">${locLabel}</p>
        <p class="font-body-sm cont-port-value">${c.professional_location.replace(/\n/g, '<br/>')}</p>
      </div>`);
  }

  const portsHtml = ports.join('');

  // --- Network Nodes ---
  const nodes = [];
  if (c.email) nodes.push({ label: 'Email', icon: 'mail', url: `mailto:${c.email}` });
  if (c.linkedin) nodes.push({ label: 'LinkedIn', icon: 'share', url: c.linkedin });
  if (c.github) nodes.push({ label: 'GitHub', icon: 'terminal', url: c.github });
  if (c.google_scholar) nodes.push({ label: 'Google Scholar', icon: 'school', url: c.google_scholar });

  const nodesHtml = nodes.map(n => `
    <a class="cont-node-link" href="${n.url}" target="_blank" rel="noopener noreferrer">
      <div class="cont-node-left">
        <span class="material-symbols-outlined cont-node-icon">${n.icon}</span>
        <span class="font-mono-data cont-node-label">${n.label}</span>
      </div>
      <span class="material-symbols-outlined cont-node-arrow">north_east</span>
    </a>
  `).join('');

  // --- Resume download ---
  const spreadsheetUrl = c.spreadsheet_url || '';
  const resumeHtml = c.resume ? `
    <a href="${img(c.resume)}" download class="cont-resume-link font-mono-data">
      <span class="material-symbols-outlined" style="font-size:1rem;">download</span>
      DOWNLOAD_CV
    </a>` : '';

  return `
    <div class="cont-page">
      <div class="container-page cont-page-inner blueprint-grid-lines">
        <div class="pubs-header">
          ${renderAnnotation('08', 'CONTACT_MODULE')}
          <div class="pubs-header-bottom">
            <h1 class="font-headline-xl pubs-title">Contact Information</h1>
          </div>
        </div>

        <div class="cont-grid">
          <aside class="cont-sidebar">
            <section>
              <h2 class="font-label-caps cont-section-label">[COMMUNICATION_PORTS]</h2>
              <div class="cont-ports-list">${portsHtml}</div>
            </section>

            <section class="cont-nodes-section">
              <h2 class="font-label-caps cont-section-label">[NETWORK_NODES]</h2>
              <div class="cont-nodes-list">${nodesHtml}</div>
            </section>

            ${resumeHtml ? `<div class="cont-resume-section">${resumeHtml}</div>` : ''}
          </aside>

          <section class="cont-form-section">
            <div class="cont-form-card">
              <div class="cont-form-header">
                <h2 class="font-headline-md cont-form-title">[DATA_TRANSMISSION_PROTOCOL]</h2>
                <p class="font-label-caps cont-form-id">FORM_ID: TR-892 // STATUS: READY</p>
              </div>
              <form class="cont-form" id="cont-form" data-url="${spreadsheetUrl}">
                <div class="cont-form-grid">
                  <div class="cont-field">
                    <label class="font-label-caps cont-field-label">01 // Participant Name</label>
                    <input class="cont-input font-mono-data" type="text" id="cont-name" placeholder="Full name or entity ID" />
                  </div>
                  <div class="cont-field">
                    <label class="font-label-caps cont-field-label">02 // Return Address</label>
                    <input class="cont-input font-mono-data" type="email" id="cont-email" placeholder="contact@address.ext" />
                  </div>
                </div>
                <div class="cont-field">
                  <label class="font-label-caps cont-field-label">03 // Protocol Classification</label>
                  <select class="cont-input font-mono-data" id="cont-class">
                    <option>INQUIRY: ACADEMIC_RESEARCH</option>
                    <option>PROPOSAL: COLLABORATIVE_PROJECT</option>
                    <option>REQUEST: DATA_VERIFICATION</option>
                    <option>GENERAL: TELEMETRY_PING</option>
                  </select>
                </div>
                <div class="cont-field">
                  <label class="font-label-caps cont-field-label">04 // Record Payload [2048_CHAR_LIMIT]</label>
                  <textarea class="cont-input cont-textarea font-mono-data" id="cont-msg" placeholder="Initialize message body here..." rows="6"></textarea>
                </div>
                <button class="cont-submit font-label-caps" type="button" id="cont-submit-btn">
                  EXECUTE_TRANSMIT
                  <span class="material-symbols-outlined" style="font-size:1.125rem;">send</span>
                </button>
              </form>
              <div class="cont-status">
                <span class="cont-status-dot"></span>
                <span class="font-mono-data cont-status-text">System_Ready // Awaiting_User_Input</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  `;
}

export function mountContactPage() {
  const btn = document.getElementById('cont-submit-btn');
  if (!btn) return;
  btn.addEventListener('click', async () => {
    const name = document.getElementById('cont-name')?.value || '';
    const email = document.getElementById('cont-email')?.value || '';
    const classification = document.getElementById('cont-class')?.value || '';
    const message = document.getElementById('cont-msg')?.value || '';
    const url = document.getElementById('cont-form')?.dataset?.url || '';
    if (!url) return;
    const params = new URLSearchParams({ name, email, classification, message });
    try {
      btn.textContent = 'TRANSMITTING...';
      await fetch(url, { method: 'POST', body: params, mode: 'no-cors' });
      btn.textContent = 'TRANSMISSION_SENT';
      setTimeout(() => { btn.innerHTML = 'EXECUTE_TRANSMIT <span class="material-symbols-outlined" style="font-size:1.125rem;">send</span>'; }, 2000);
    } catch (e) {
      btn.textContent = 'TRANSMISSION_FAILED';
      setTimeout(() => { btn.innerHTML = 'EXECUTE_TRANSMIT <span class="material-symbols-outlined" style="font-size:1.125rem;">send</span>'; }, 2000);
    }
  });
}

registerRoute('contact', { render: contactRender, mount: mountContactPage });
export default contactRender;
