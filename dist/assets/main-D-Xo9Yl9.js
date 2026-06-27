(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();let i=null;async function m(){var e;if(i)return i;try{const t=await fetch("/data/profile_data/profile.json");if(!t.ok)throw new Error(`HTTP ${t.status}`);return i=await t.json(),console.log("✅ Profile loaded:",(e=i.personal)==null?void 0:e.name),i}catch(t){return console.error("❌ Failed to load profile:",t),null}}function f(){return i}const p=[{label:"Home",path:"home"},{label:"Research",path:"research"},{label:"Publications",path:"publications"},{label:"Academics",path:"academics"},{label:"Experience",path:"experience"},{label:"Projects",path:"projects"},{label:"Hobbies",path:"hobbies"},{label:"Contact",path:"contact"}];let c="home";function h(e){var o;const t=((o=e==null?void 0:e.personal)==null?void 0:o.nickname)||"YUSUF_SILICON";c=u();const a=p.map(n=>{const r=n.path===c;return`
        <a href="#/${n.path}"
           class="header-nav-link font-label-caps ${r?"header-nav-link--active":""}"
           data-route="${n.path}">
          ${n.label}
        </a>`}).join("");return`
    <div class="header-inner container-page">
      <span class="header-logo font-mono-data">
        [${t}]
      </span>

      <nav class="header-nav" id="header-nav" aria-label="Main navigation">
        ${a}
      </nav>

      <div class="header-actions">
        <div id="theme-toggle-slot"></div>
        <button class="header-hamburger" id="header-hamburger" aria-label="Toggle navigation menu" type="button">
          <span class="material-symbols-outlined">menu</span>
        </button>
      </div>
    </div>
  `}function g(){const e=document.querySelector(".header-inner");if(!e)return;e.addEventListener("click",o=>{const n=o.target.closest("[data-route]");if(n){o.preventDefault();const r=n.dataset.route;L(r)}});const t=document.getElementById("header-hamburger"),a=document.getElementById("header-nav");t&&a&&t.addEventListener("click",()=>{a.classList.toggle("header-nav--open");const o=t.querySelector(".material-symbols-outlined");o&&(o.textContent=a.classList.contains("header-nav--open")?"close":"menu")}),window.__updateActiveNav=o=>{c=o,document.querySelectorAll(".header-nav-link").forEach(n=>{const r=n.dataset.route===o;n.classList.toggle("header-nav-link--active",r)})}}function v(e){if(!e)return`
      <div class="footer-inner container-page">
        <span class="footer-copyright font-label-caps">© 2026 // CORE: COMPUTER_ARCHITECTURE_&_RESEARCH</span>
      </div>
    `;const t=e.contact||{},a=t.resume||"#",o=t.email?`mailto:${t.email}`:"#",n=t.github||"#";return`
    <div class="footer-inner container-page">
      <span class="footer-copyright font-label-caps">
        © 2026 // CORE: COMPUTER_ARCHITECTURE_&_RESEARCH
      </span>
      <div class="footer-links">
        <a href="${a}" class="footer-link font-label-caps" target="_blank" rel="noopener noreferrer">
          CV_DOWNLOAD
        </a>
        <a href="${o}" class="footer-link font-label-caps">
          CONTACT
        </a>
        <a href="${n}" class="footer-link font-label-caps" target="_blank" rel="noopener noreferrer">
          SOURCE_CODE
        </a>
      </div>
    </div>
  `}function b(){return`
    <button class="theme-toggle-btn" id="theme-toggle-btn" type="button" aria-label="Toggle theme">
      <span class="material-symbols-outlined">${document.documentElement.classList.contains("dark")?"dark_mode":"light_mode"}</span>
    </button>
  `}function E(){const e=document.getElementById("theme-toggle-btn");e&&e.addEventListener("click",()=>{_(),d()})}function d(){const e=document.getElementById("theme-toggle-btn");if(!e)return;const t=e.querySelector(".material-symbols-outlined");if(!t)return;const a=document.documentElement.classList.contains("dark");t.textContent=a?"dark_mode":"light_mode"}const y={};function L(e){window.location.hash=`#/${e}`}function u(){return(window.location.hash.slice(1)||"/home").replace(/^\//,"").toLowerCase()}const T=document.getElementById("app");function k(){T.innerHTML=`
    <header id="app-header"></header>
    <main id="page-content"></main>
    <footer id="app-footer"></footer>
  `}function l(){const e=u(),t=f(),a=y[e],o=document.getElementById("page-content");o&&(a&&a.render?o.innerHTML=a.render(t):e==="home"?o.innerHTML=`<div class="container-page" style="padding-top: 4rem; padding-bottom: 4rem;">
      <p class="font-mono-data" style="color: var(--on-surface-variant);">// PAGE: HOME — Coming in Stage C</p>
    </div>`:o.innerHTML=`<div class="container-page" style="padding-top: 4rem; padding-bottom: 4rem;">
      <p class="font-mono-data" style="color: var(--on-surface-variant);">// PAGE: ${e.toUpperCase()} — Under construction</p>
    </div>`,window.__updateActiveNav&&window.__updateActiveNav(e))}function C(){const e=localStorage.getItem("theme"),t=window.matchMedia("(prefers-color-scheme: dark)").matches;e==="dark"||!e&&t?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}function _(){document.documentElement.classList.toggle("dark");const e=document.documentElement.classList.contains("dark");localStorage.setItem("theme",e?"dark":"light"),d()}async function w(){C(),k();const e=await m();if(!e){const n=document.getElementById("page-content");n&&(n.innerHTML='<p style="padding: 2rem; color: var(--error);">Failed to load profile data.</p>');return}const t=document.getElementById("app-header");t&&(t.innerHTML=h(e),g());const a=document.getElementById("theme-toggle-slot");a&&(a.innerHTML=b(),E());const o=document.getElementById("app-footer");o&&(o.innerHTML=v(e)),window.addEventListener("hashchange",l),l(),console.log("🔧 Yusuf Silicon Portfolio — Ready")}w().catch(e=>{console.error("❌ App initialization failed:",e)});
