(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();let l=null;async function L(){var e;if(l)return l;try{const n=await fetch("/data/profile_data/profile.json");if(!n.ok)throw new Error(`HTTP ${n.status}`);return l=await n.json(),console.log("✅ Profile loaded:",(e=l.personal)==null?void 0:e.name),l}catch(n){return console.error("❌ Failed to load profile:",n),null}}function R(){return l}const T={};function A(e,n){T[e.toLowerCase()]=n}function O(e){return T[e.toLowerCase()]}function k(e){window.location.hash=`#/${e}`}function _(){return(window.location.hash.slice(1)||"/home").replace(/^\//,"").toLowerCase()}const w=[{label:"Home",path:"home"},{label:"Research",path:"research"},{label:"Publications",path:"publications"},{label:"Academics",path:"academics"},{label:"Experience",path:"experience"},{label:"Projects",path:"projects"},{label:"Hobbies",path:"hobbies"},{label:"Contact",path:"contact"}];let m="home";function P(e){var a;const n=((a=e==null?void 0:e.personal)==null?void 0:a.nickname)||"YUSUF_SILICON";m=_();const o=w.map(t=>{const s=t.path===m;return`
        <a href="#/${t.path}"
           class="header-nav-link font-label-caps ${s?"header-nav-link--active":""}"
           data-route="${t.path}">
          ${t.label}
        </a>`}).join("");return`
    <div class="header-inner container-page">
      <span class="header-logo font-mono-data">
        [${n}]
      </span>

      <nav class="header-nav" id="header-nav" aria-label="Main navigation">
        ${o}
      </nav>

      <div class="header-actions">
        <div id="theme-toggle-slot"></div>
        <button class="header-hamburger" id="header-hamburger" aria-label="Toggle navigation menu" type="button">
          <span class="material-symbols-outlined">menu</span>
        </button>
      </div>
    </div>
  `}function j(){const e=document.querySelector(".header-inner");if(!e)return;e.addEventListener("click",a=>{const t=a.target.closest("[data-route]");if(t){a.preventDefault();const s=t.dataset.route;k(s)}});const n=document.getElementById("header-hamburger"),o=document.getElementById("header-nav");n&&o&&n.addEventListener("click",()=>{o.classList.toggle("header-nav--open");const a=n.querySelector(".material-symbols-outlined");a&&(a.textContent=o.classList.contains("header-nav--open")?"close":"menu")}),window.__updateActiveNav=a=>{m=a,document.querySelectorAll(".header-nav-link").forEach(t=>{const s=t.dataset.route===a;t.classList.toggle("header-nav-link--active",s)})}}function H(e){if(!e)return`
      <div class="footer-inner container-page">
        <span class="footer-copyright font-label-caps">© 2026 // CORE: COMPUTER_ARCHITECTURE_&_RESEARCH</span>
      </div>
    `;const n=e.contact||{},o=n.resume||"#",a=n.email?`mailto:${n.email}`:"#",t=n.github||"#";return`
    <div class="footer-inner container-page">
      <span class="footer-copyright font-label-caps">
        © 2026 // CORE: COMPUTER_ARCHITECTURE_&_RESEARCH
      </span>
      <div class="footer-links">
        <a href="${o}" class="footer-link font-label-caps" target="_blank" rel="noopener noreferrer">
          CV_DOWNLOAD
        </a>
        <a href="${a}" class="footer-link font-label-caps">
          CONTACT
        </a>
        <a href="${t}" class="footer-link font-label-caps" target="_blank" rel="noopener noreferrer">
          SOURCE_CODE
        </a>
      </div>
    </div>
  `}function N(){return`
    <button class="theme-toggle-btn" id="theme-toggle-btn" type="button" aria-label="Toggle theme">
      <span class="material-symbols-outlined">${document.documentElement.classList.contains("dark")?"dark_mode":"light_mode"}</span>
    </button>
  `}function U(){const e=document.getElementById("theme-toggle-btn");e&&e.addEventListener("click",()=>{K(),S()})}function S(){const e=document.getElementById("theme-toggle-btn");if(!e)return;const n=e.querySelector(".material-symbols-outlined");if(!n)return;const o=document.documentElement.classList.contains("dark");n.textContent=o?"dark_mode":"light_mode"}function u(e){return e?e.replace(/^\.\.\//,"/data/"):""}function D(e,n){const o=(e==null?void 0:e.name)||"",a=(e==null?void 0:e.headline)||"",t=(e==null?void 0:e.description)||"",s=u(e==null?void 0:e.image),r=((n==null?void 0:n.researchInterests)||[]).slice(0,4).map(i=>`<span class="chip">${i.toUpperCase().replace(/\s+/g,"_")}</span>`).join("");return`
    <section class="home-section">
      <div class="home-id-card">
        <div class="home-id-card-text">
          <div class="font-label-caps page-section-label">
            <span class="section-label-dot"></span> [ID_CARD // USER_PROFILE]
          </div>
          <h1 class="font-headline-xl home-name">${o}</h1>
          <p class="font-body-lg home-headline">${a}</p>
          <p class="font-body-md home-description">${t}</p>
          <div class="home-tags">${r}</div>
        </div>
        <div class="home-id-card-image-wrapper">
          <div class="home-id-card-image-border">
            <img class="home-id-card-image" src="${s}" alt="${(e==null?void 0:e.image_name)||o}" />
          </div>
          <div class="home-image-ref font-mono-data">${(e==null?void 0:e.image_name)||"IMG_REF_01.A"}</div>
        </div>
      </div>
    </section>
  `}function M(e){var r,i,d,h,v,p,g,f,b,E,C;const n=((i=(r=e==null?void 0:e.research)==null?void 0:r.publications)==null?void 0:i.length)||0,o=(((h=(d=e==null?void 0:e.projects)==null?void 0:d.vlsi)==null?void 0:h.length)||0)+(((p=(v=e==null?void 0:e.projects)==null?void 0:v.iot)==null?void 0:p.length)||0)+(((f=(g=e==null?void 0:e.projects)==null?void 0:g.software)==null?void 0:f.length)||0),a=((E=(b=e==null?void 0:e.research)==null?void 0:b.theses)==null?void 0:E.length)||0,t=((C=e==null?void 0:e.certifications)==null?void 0:C.length)||0;return`
    <div class="sidebar-section">
      <div class="font-label-caps page-section-label sidebar-section-heading">01 // ANALYTICS_MODULE</div>
      <div class="metrics-grid">${[{label:"PUBLICATIONS",value:n.toString().padStart(2,"0")},{label:"PROJECTS",value:o.toString().padStart(2,"0")},{label:"THESES",value:a.toString().padStart(2,"0")},{label:"CERTIFICATIONS",value:t.toString().padStart(2,"0")}].map(y=>`
      <div class="metric-card">
        <div class="font-label-caps metric-card-label">${y.label}</div>
        <div class="font-headline-md metric-card-value">${y.value}</div>
      </div>
    `).join("")}</div>
    </div>
  `}function B(e,n){if(!e)return"";const a=[{icon:"mail",content:e.email||"",href:e.email?`mailto:${e.email}`:null},{icon:"school",content:"Google Scholar",href:e.google_scholar||null},{icon:"code",content:"github.com/yusuf-silicon",href:e.github||null},{icon:"location_on",content:(n==null?void 0:n.location)||""}].filter(s=>s.content).map(s=>`
      <li class="contact-item">
        <span class="material-symbols-outlined contact-icon">${s.icon}</span>
        ${s.href?`<a class="contact-link" href="${s.href}" target="_blank" rel="noopener noreferrer">${s.content}</a>`:`<span class="contact-text">${s.content}</span>`}
      </li>
    `).join(""),t=e.resume?u(e.resume):"#";return`
    <div class="sidebar-section">
      <div class="font-label-caps page-section-label sidebar-section-heading">02 // COMMUNICATION_BUS</div>
      <ul class="contact-list">${a}</ul>
      <div class="resume-btn-wrapper">
        <a href="${t}" class="resume-btn font-label-caps" target="_blank" rel="noopener noreferrer">
          DOWNLOAD_CV.PDF
        </a>
      </div>
    </div>
  `}function x(e){const n=(e==null?void 0:e.overview)||[];return n.length?`
    <div class="sidebar-section">
      <div class="font-label-caps page-section-label sidebar-section-heading">// RESEARCH_INTERESTS</div>
      <div class="interests-visual">${n.map(a=>{const t=(a.includes||[]).map(s=>`<span class="chip chip-sm">${s}</span>`).join("");return`
        <div class="interest-area">
          <div class="font-label-caps interest-area-name">${a.name.toUpperCase().replace(/\s+/g,"_")}</div>
          <div class="interest-area-chips">${t}</div>
        </div>
      `}).join("")}</div>
    </div>
  `:""}function F(e){return!e||!e.length?"":`
    <div class="content-section">
      <div class="content-section-header">
        <div class="font-label-caps page-section-label">03 // PEER_REVIEWED_ARCHIVE</div>
        <a class="font-mono-data content-section-link" href="#/publications">VIEW_ALL_PUBLICATIONS</a>
      </div>
      <div class="pub-cards">${e.slice(0,2).map(a=>{const t=a.year||"",s=a.month||"",c=a.venue_short||"",r=a.doi||"",i=a.citation||"",d=i?encodeURIComponent(i):"";return`
        <div class="pub-card">
          <div class="font-mono-data pub-card-year">${t}${s?"."+s.substring(0,3).toUpperCase():""}</div>
          <div class="font-label-caps pub-card-venue">${c}</div>
          <h3 class="font-headline-md pub-card-title">${a.title}</h3>
          <p class="font-body-sm pub-card-authors">${(a.authors||[]).join(", ")}</p>
          <p class="font-body-sm pub-card-desc">${a.description||""}</p>
          <div class="pub-card-actions">
            ${r?`<a class="pub-action font-mono-data" href="https://doi.org/${r}" target="_blank" rel="noopener noreferrer">
              <span class="material-symbols-outlined">description</span> PDF
            </a>`:""}
            ${i?`<button class="pub-action font-mono-data citation-btn" type="button" data-citation="${d}">
              <span class="material-symbols-outlined">share</span> CITATION
            </button>`:""}
          </div>
        </div>
      `}).join("")}</div>
    </div>
  `}function V(e){const o=((e==null?void 0:e.vlsi)||[]).filter(t=>t.featured).slice(0,2);return o.length?`
    <div class="content-section">
      <div class="content-section-header">
        <div class="font-label-caps page-section-label">04 // HARDWARE_HARD_REPO</div>
        <a class="font-mono-data content-section-link" href="#/projects">VIEW_PROJECTS</a>
      </div>
      <div class="project-cards">${o.map(t=>{var i;const s=u(t.thumbnail),r=(((i=t.techStack)==null?void 0:i.languages)||[]).slice(0,2).map(d=>`<span class="chip chip-tech">${d.toUpperCase()}</span>`).join("");return`
        <div class="project-card">
          <div class="project-card-thumb">
            <img src="${s}" alt="${t.title}" />
            <div class="project-card-status font-mono-data">STATUS: ${(t.status||"").toUpperCase()}</div>
          </div>
          <div class="project-card-body">
            <div class="font-label-caps project-card-id">${t.id||""}</div>
            <h4 class="font-headline-md project-card-title">${t.title}</h4>
            <p class="font-body-sm project-card-desc">${t.overview||""}</p>
            <div class="project-card-techs">${r}</div>
          </div>
        </div>
      `}).join("")}</div>
    </div>
  `:""}function q(e){var c;if(!e)return`<div class="container-page" style="padding-top: 4rem;">
      <p class="font-mono-data" style="color: var(--error);">No profile data available.</p>
    </div>`;const n=e.personal,o=e.interests,a=e.contact,t=(c=e.research)==null?void 0:c.publications,s=e.projects;return`
    <div class="home-page">
      <div class="container-page home-page-inner blueprint-grid-lines">
        ${D(n,o)}

        <!-- Two-column grid: sidebar + content -->
        <div class="home-grid">
          <!-- Left Sidebar (4 cols) -->
          <aside class="home-sidebar">
            ${M(e)}
            ${B(a,n)}
            ${x(o)}
          </aside>

          <!-- Right Content (8 cols) -->
          <section class="home-content">
            ${F(t)}
            ${V(s)}
          </section>
        </div>

        <!-- Bottom annotation line -->
        <div class="home-bottom-annotation">
          <div class="home-annotation-line"></div>
          <div class="font-mono-data home-annotation-text">
            SID: IN-240626 | REF: 226028 | ACTIVE
          </div>
        </div>
      </div>
    </div>
  `}function W(){const e=document.getElementById("page-content");e&&e.addEventListener("click",n=>{const o=n.target.closest(".citation-btn");if(!o)return;n.preventDefault();const a=decodeURIComponent(o.dataset.citation);a&&navigator.clipboard.writeText(a).then(()=>{$("CITATION_COPIED")}).catch(()=>{const t=document.createElement("textarea");t.value=a,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),$("CITATION_COPIED")})})}function $(e){const n=document.querySelector(".toast-notification");n&&n.remove();const o=document.createElement("div");o.className="toast-notification font-mono-data",o.textContent=e,document.body.appendChild(o),requestAnimationFrame(()=>{o.classList.add("toast-notification--visible")}),setTimeout(()=>{o.classList.remove("toast-notification--visible"),o.addEventListener("transitionend",()=>o.remove(),{once:!0})},2e3)}A("home",{render:q});const G=document.getElementById("app");function Y(){G.innerHTML=`
    <header id="app-header"></header>
    <main id="page-content"></main>
    <footer id="app-footer"></footer>
  `}function I(){const e=_(),n=R(),o=O(e),a=document.getElementById("page-content");a&&(o&&o.render?a.innerHTML=o.render(n):e==="home"?a.innerHTML=`<div class="container-page" style="padding-top: 4rem; padding-bottom: 4rem;">
      <p class="font-mono-data" style="color: var(--on-surface-variant);">// PAGE: HOME — Coming in Stage C</p>
    </div>`:a.innerHTML=`<div class="container-page" style="padding-top: 4rem; padding-bottom: 4rem;">
      <p class="font-mono-data" style="color: var(--on-surface-variant);">// PAGE: ${e.toUpperCase()} — Under construction</p>
    </div>`,window.__updateActiveNav&&window.__updateActiveNav(e))}function J(){const e=localStorage.getItem("theme"),n=window.matchMedia("(prefers-color-scheme: dark)").matches;e==="dark"||!e&&n?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}function K(){document.documentElement.classList.toggle("dark");const e=document.documentElement.classList.contains("dark");localStorage.setItem("theme",e?"dark":"light"),S()}async function z(){J(),Y();const e=await L();if(!e){const t=document.getElementById("page-content");t&&(t.innerHTML='<p style="padding: 2rem; color: var(--error);">Failed to load profile data.</p>');return}const n=document.getElementById("app-header");n&&(n.innerHTML=P(e),j());const o=document.getElementById("theme-toggle-slot");o&&(o.innerHTML=N(),U());const a=document.getElementById("app-footer");a&&(a.innerHTML=H(e)),W(),window.addEventListener("hashchange",I),I(),console.log("🔧 Yusuf Silicon Portfolio — Ready")}z().catch(e=>{console.error("❌ App initialization failed:",e)});
