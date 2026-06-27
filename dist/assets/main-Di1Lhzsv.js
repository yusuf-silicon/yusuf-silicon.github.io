(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();let h=null;async function A(){var e;if(h)return h;try{const t=await fetch("/data/profile_data/profile.json");if(!t.ok)throw new Error(`HTTP ${t.status}`);return h=await t.json(),console.log("✅ Profile loaded:",(e=h.personal)==null?void 0:e.name),h}catch(t){return console.error("❌ Failed to load profile:",t),null}}function L(){return h}const I={};function T(e,t){I[e.toLowerCase()]=t}function w(e){return I[e.toLowerCase()]}function O(e){window.location.hash=`#/${e}`}function R(){return(window.location.hash.slice(1)||"/home").replace(/^\//,"").toLowerCase()}const j=[{label:"Home",path:"home"},{label:"Research",path:"research"},{label:"Publications",path:"publications"},{label:"Academics",path:"academics"},{label:"Experience",path:"experience"},{label:"Projects",path:"projects"},{label:"Hobbies",path:"hobbies"},{label:"Contact",path:"contact"}];let v="home";function N(e){var a;const t=((a=e==null?void 0:e.personal)==null?void 0:a.nickname)||"YUSUF_SILICON";v=R();const s=j.map(n=>{const i=n.path===v;return`
        <a href="#/${n.path}"
           class="header-nav-link font-label-caps ${i?"header-nav-link--active":""}"
           data-route="${n.path}">
          ${n.label}
        </a>`}).join("");return`
    <div class="header-inner container-page">
      <span class="header-logo font-mono-data">
        [${t}]
      </span>

      <nav class="header-nav" id="header-nav" aria-label="Main navigation">
        ${s}
      </nav>

      <div class="header-actions">
        <div id="theme-toggle-slot"></div>
        <button class="header-hamburger" id="header-hamburger" aria-label="Toggle navigation menu" type="button">
          <span class="material-symbols-outlined">menu</span>
        </button>
      </div>
    </div>
  `}function k(){const e=document.querySelector(".header-inner");if(!e)return;e.addEventListener("click",a=>{const n=a.target.closest("[data-route]");if(n){a.preventDefault();const i=n.dataset.route;O(i)}});const t=document.getElementById("header-hamburger"),s=document.getElementById("header-nav");t&&s&&t.addEventListener("click",()=>{s.classList.toggle("header-nav--open");const a=t.querySelector(".material-symbols-outlined");a&&(a.textContent=s.classList.contains("header-nav--open")?"close":"menu")}),window.__updateActiveNav=a=>{v=a,document.querySelectorAll(".header-nav-link").forEach(n=>{const i=n.dataset.route===a;n.classList.toggle("header-nav-link--active",i)})}}function P(e){if(!e)return`
      <div class="footer-inner container-page">
        <span class="footer-copyright font-label-caps">© 2026 // CORE: COMPUTER_ARCHITECTURE_&_RESEARCH</span>
      </div>
    `;const t=e.contact||{},s=t.resume||"#",a=t.email?`mailto:${t.email}`:"#",n=t.github||"#";return`
    <div class="footer-inner container-page">
      <span class="footer-copyright font-label-caps">
        © 2026 // CORE: COMPUTER_ARCHITECTURE_&_RESEARCH
      </span>
      <div class="footer-links">
        <a href="${s}" class="footer-link font-label-caps" target="_blank" rel="noopener noreferrer">
          CV_DOWNLOAD
        </a>
        <a href="${a}" class="footer-link font-label-caps">
          CONTACT
        </a>
        <a href="${n}" class="footer-link font-label-caps" target="_blank" rel="noopener noreferrer">
          SOURCE_CODE
        </a>
      </div>
    </div>
  `}function D(){return`
    <button class="theme-toggle-btn" id="theme-toggle-btn" type="button" aria-label="Toggle theme">
      <span class="material-symbols-outlined">${document.documentElement.classList.contains("dark")?"dark_mode":"light_mode"}</span>
    </button>
  `}function H(){const e=document.getElementById("theme-toggle-btn");e&&e.addEventListener("click",()=>{se(),_()})}function _(){const e=document.getElementById("theme-toggle-btn");if(!e)return;const t=e.querySelector(".material-symbols-outlined");if(!t)return;const s=document.documentElement.classList.contains("dark");t.textContent=s?"dark_mode":"light_mode"}function p(e){return e?e.replace(/^\.\.\//,"/data/"):""}function U(e,t){const s=(e==null?void 0:e.name)||"",a=(e==null?void 0:e.headline)||"",n=(e==null?void 0:e.description)||"",i=(e==null?void 0:e.description_highlight)||[],o=p(e==null?void 0:e.image),c=((t==null?void 0:t.researchInterests)||[]).slice(0,4).map(l=>`<span class="chip">${l.toUpperCase().replace(/\s+/g,"_")}</span>`).join("");let d=n;if(i.length){const l=[...i].sort((u,m)=>m.length-u.length);for(const u of l){const m=u.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");d=d.replace(new RegExp(`(${m})`,"gi"),'<span class="home-highlight">$1</span>')}}return`
    <section class="home-section">
      <div class="home-id-card">
        <div class="home-id-card-text">
          <div class="font-label-caps page-section-label id-card-label">
            <span class="section-label-dot"></span> [ID_CARD // USER_PROFILE]
          </div>
          <h1 class="font-headline-xl home-name">${s}</h1>
          <p class="font-body-lg home-headline">${a}</p>
          <p class="font-body-md home-description">${d}</p>
          <div class="home-tags">${c}</div>
        </div>
        <div class="home-id-card-image-wrapper">
          <div class="home-id-card-image-border">
            <img class="home-id-card-image" src="${o}" alt="${(e==null?void 0:e.image_name)||s}" />
          </div>
          <div class="home-image-ref font-mono-data">${(e==null?void 0:e.image_name)||"IMG_REF_01.A"}</div>
        </div>
      </div>
    </section>
  `}function M(e){var r,c,d,l,u,m,g,f,b,E,$;const t=((c=(r=e==null?void 0:e.research)==null?void 0:r.publications)==null?void 0:c.length)||0,s=(((l=(d=e==null?void 0:e.projects)==null?void 0:d.vlsi)==null?void 0:l.length)||0)+(((m=(u=e==null?void 0:e.projects)==null?void 0:u.iot)==null?void 0:m.length)||0)+(((f=(g=e==null?void 0:e.projects)==null?void 0:g.software)==null?void 0:f.length)||0),a=((E=(b=e==null?void 0:e.research)==null?void 0:b.theses)==null?void 0:E.length)||0,n=(($=e==null?void 0:e.certifications)==null?void 0:$.length)||0;return`
    <div class="sidebar-section">
      <div class="font-label-caps page-section-label sidebar-section-heading">01 // ANALYTICS_MODULE</div>
      <div class="metrics-grid">${[{label:"PUBLICATIONS",value:t.toString().padStart(2,"0")},{label:"PROJECTS",value:s.toString().padStart(2,"0")},{label:"THESES",value:a.toString().padStart(2,"0")},{label:"CERTIFICATIONS",value:n.toString().padStart(2,"0")}].map(y=>`
      <div class="metric-card">
        <div class="font-label-caps metric-card-label">${y.label}</div>
        <div class="font-headline-md metric-card-value">${y.value}</div>
      </div>
    `).join("")}</div>
    </div>
  `}function x(e,t){if(!e)return"";const a=[{icon:"mail",content:e.email||"",href:e.email?`mailto:${e.email}`:null},{icon:"school",content:"Google Scholar",href:e.google_scholar||null},{icon:"code",content:"github.com/yusuf-silicon",href:e.github||null},{icon:"location_on",content:(t==null?void 0:t.location)||""}].filter(i=>i.content).map(i=>`
      <li class="contact-item">
        <span class="material-symbols-outlined contact-icon">${i.icon}</span>
        ${i.href?`<a class="contact-link" href="${i.href}" target="_blank" rel="noopener noreferrer">${i.content}</a>`:`<span class="contact-text">${i.content}</span>`}
      </li>
    `).join(""),n=e.resume?p(e.resume):"#";return`
    <div class="sidebar-section">
      <div class="font-label-caps page-section-label sidebar-section-heading">02 // COMMUNICATION_BUS</div>
      <ul class="contact-list">${a}</ul>
      <div class="resume-btn-wrapper">
        <a href="${n}" class="resume-btn font-label-caps" target="_blank" rel="noopener noreferrer">
          DOWNLOAD_CV.PDF
        </a>
      </div>
    </div>
  `}function B(e){const t=(e==null?void 0:e.overview)||[];return t.length?`
    <div class="sidebar-section">
      <div class="font-label-caps page-section-label sidebar-section-heading">// RESEARCH_INTERESTS</div>
      <div class="interests-visual">${t.map(a=>{const n=(a.includes||[]).map(i=>`<span class="chip chip-sm">${i}</span>`).join("");return`
        <div class="interest-area">
          <div class="font-label-caps interest-area-name">${a.name.toUpperCase().replace(/\s+/g,"_")}</div>
          <div class="interest-area-chips">${n}</div>
        </div>
      `}).join("")}</div>
    </div>
  `:""}function F(e){return!e||!e.length?"":`
    <div class="content-section">
      <div class="content-section-header">
        <div class="font-label-caps page-section-label">03 // PEER_REVIEWED_ARCHIVE</div>
        <a class="font-mono-data content-section-link" href="#/publications">VIEW_ALL_PUBLICATIONS</a>
      </div>
      <div class="pub-cards">${e.slice(0,2).map(a=>{const n=a.year||"",i=a.month||"",o=a.venue_short||"",r=a.doi||"",c=a.citation||"",d=c?encodeURIComponent(c):"";return`
        <div class="pub-card">
          <div class="font-mono-data pub-card-year">${n}${i?"."+i.substring(0,3).toUpperCase():""}</div>
          <div class="font-label-caps pub-card-venue">${o}</div>
          <h3 class="font-headline-md pub-card-title">${a.title}</h3>
          <p class="font-body-sm pub-card-authors">${(a.authors||[]).join(", ")}</p>
          <p class="font-body-sm pub-card-desc">${a.description||""}</p>
          <div class="pub-card-actions">
            ${r?`<a class="pub-action font-mono-data" href="https://doi.org/${r}" target="_blank" rel="noopener noreferrer">
              <span class="material-symbols-outlined">description</span> PDF
            </a>`:""}
            ${c?`<button class="pub-action font-mono-data citation-btn" type="button" data-citation="${d}">
              <span class="material-symbols-outlined">share</span> CITATION
            </button>`:""}
          </div>
        </div>
      `}).join("")}</div>
    </div>
  `}function V(e){const s=((e==null?void 0:e.vlsi)||[]).filter(n=>n.featured).slice(0,2);return s.length?`
    <div class="content-section">
      <div class="content-section-header">
        <div class="font-label-caps page-section-label">04 // HARDWARE_HARD_REPO</div>
        <a class="font-mono-data content-section-link" href="#/projects">VIEW_PROJECTS</a>
      </div>
      <div class="project-cards">${s.map(n=>{var c;const i=p(n.thumbnail),r=(((c=n.techStack)==null?void 0:c.languages)||[]).slice(0,2).map(d=>`<span class="chip chip-tech">${d.toUpperCase()}</span>`).join("");return`
        <div class="project-card">
          <div class="project-card-thumb">
            <img src="${i}" alt="${n.title}" />
            <div class="project-card-status font-mono-data">STATUS: ${(n.status||"").toUpperCase()}</div>
          </div>
          <div class="project-card-body">
            <div class="font-label-caps project-card-id">${n.id||""}</div>
            <h4 class="font-headline-md project-card-title">${n.title}</h4>
            <p class="font-body-sm project-card-desc">${n.overview||""}</p>
            <div class="project-card-techs">${r}</div>
          </div>
        </div>
      `}).join("")}</div>
    </div>
  `:""}function q(e){var o;if(!e)return`<div class="container-page" style="padding-top: 4rem;">
      <p class="font-mono-data" style="color: var(--error);">No profile data available.</p>
    </div>`;const t=e.personal,s=e.interests,a=e.contact,n=(o=e.research)==null?void 0:o.publications,i=e.projects;return`
    <div class="home-page">
      <div class="container-page home-page-inner blueprint-grid-lines">
        ${U(t,s)}

        <!-- Two-column grid: sidebar + content -->
        <div class="home-grid">
          <!-- Left Sidebar (4 cols) -->
          <aside class="home-sidebar">
            ${M(e)}
            ${x(a,t)}
            ${B(s)}
          </aside>

          <!-- Right Content (8 cols) -->
          <section class="home-content">
            ${F(n)}
            ${V(i)}
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
  `}function G(){const e=document.getElementById("page-content");e&&e.addEventListener("click",t=>{const s=t.target.closest(".citation-btn");if(!s)return;t.preventDefault();const a=decodeURIComponent(s.dataset.citation);a&&navigator.clipboard.writeText(a).then(()=>{C("CITATION_COPIED")}).catch(()=>{const n=document.createElement("textarea");n.value=a,n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n),C("CITATION_COPIED")})})}function C(e){const t=document.querySelector(".toast-notification");t&&t.remove();const s=document.createElement("div");s.className="toast-notification font-mono-data",s.textContent=e,document.body.appendChild(s),requestAnimationFrame(()=>{s.classList.add("toast-notification--visible")}),setTimeout(()=>{s.classList.remove("toast-notification--visible"),s.addEventListener("transitionend",()=>s.remove(),{once:!0})},2e3)}T("home",{render:q});function W(e){const t=(e||"").toLowerCase();return t.includes("architecture")||t.includes("memory")||t.includes("processor")?"developer_board":t.includes("ai")||t.includes("acceleration")||t.includes("cryptographic")?"neurology":t.includes("energy")||t.includes("high-perform")||t.includes("security")?"bolt":"science"}function Y(e,t){const s=a=>a?new Date(a).toLocaleDateString("en-US",{year:"numeric",month:"short"}):"";return`${s(e)} — ${s(t)||"PRESENT"}`}function J(e,t){return`
    <div class="research-annotation">
      <span class="research-annotation-badge font-mono-data">PAGE. ${e}</span>
      <div class="research-annotation-line"></div>
      <span class="font-label-caps research-annotation-text">[DOCUMENT_CLASS: ${t}]</span>
    </div>
  `}function K(e){const t=(e==null?void 0:e.overview)||[];return t.length?`
    <div class="sidebar-section">
      <div class="font-label-caps research-section-heading">[RESEARCH_AREAS_V2.0]</div>
      <ul class="research-area-list">${t.map(a=>`
        <li class="research-area-item">
          <div class="research-area-item-inner">
            <span class="material-symbols-outlined research-area-icon">${W(a.name)}</span>
            <div class="research-area-content">
              <h3 class="font-headline-md research-area-name">${a.name}</h3>
              <p class="font-body-sm research-area-desc research-text-justify">${a.description||""}</p>
            </div>
          </div>
        </li>
      `).join("")}</ul>
    </div>
  `:""}function z(e){var o,r,c,d,l,u;const t=((r=(o=e==null?void 0:e.interests)==null?void 0:o.overview)==null?void 0:r.length)||0,s=((d=(c=e==null?void 0:e.research)==null?void 0:c.publications)==null?void 0:d.length)||0,a=((u=(l=e==null?void 0:e.research)==null?void 0:l.theses)==null?void 0:u.length)||0;return`
    <div class="sidebar-section">
      <div class="font-label-caps research-section-heading">[SYSTEM_METRICS]</div>
      <div class="metrics-table">${[{label:"RESEARCH_INTERESTS",value:t.toString().padStart(2,"0")},{label:"PUBLICATIONS",value:s.toString().padStart(2,"0")},{label:"THESES",value:a.toString().padStart(2,"0")}].map(m=>`
      <div class="metric-row">
        <span class="font-mono-data metric-row-label">${m.label}</span>
        <span class="font-mono-data metric-row-value">${m.value}</span>
      </div>
    `).join("")}</div>
    </div>
  `}function Q(e){const t=(e==null?void 0:e.overview)||[];return t.length?`
    <section class="content-section research-section">
      <div class="font-label-caps research-section-heading content-section-label">
        <span class="section-label-dot"></span> [CURRENT_INVESTIGATIONS]
      </div>
      <div class="investigations-grid">${t.map((a,n)=>`
        <div class="investigation-card">
          <span class="investigation-card-number font-mono-data">#${String(n+1).padStart(3,"0")}</span>
          <h3 class="font-headline-md investigation-card-title">${a.name}</h3>
          <p class="font-body-sm investigation-card-desc research-text-justify">${a.description||""}</p>
        </div>
      `).join("")}</div>
    </section>
  `:""}function X(e,t){const s=(t==null?void 0:t.research)||[];if(!s.length)return"";const a=(e==null?void 0:e.length)||0;return`
    <section class="content-section research-section future-section">
      <div class="font-label-caps research-section-heading content-section-label">[FUTURE_DIRECTIONS_ROADMAP]</div>
      <div class="future-directions">${s.map((i,o)=>{const r=a+o+1;return`
        <div class="future-direction-item">
          <span class="font-mono-data future-direction-id">${`PROJECT_${String(r).padStart(3,"0")}`}</span>
          <div>
            <h4 class="font-headline-md future-direction-title">${i.title}</h4>
            <p class="font-body-sm future-direction-desc research-text-justify">${i.description||""}</p>
          </div>
        </div>
      `}).join("")}</div>
    </section>
  `}function Z(e){return!e||!e.length?"":`
    <section class="content-section research-section">
      <div class="font-label-caps research-section-heading content-section-label">[EVOLUTION_TIMELINE]</div>
      <div class="timeline">
        <div class="timeline-line"></div>
        ${e.map((s,a)=>{const n=Y(s.start_date,s.end_date);return`
        <div class="timeline-entry">
          <div class="timeline-node-col">
            <div class="timeline-node ${a===0?"timeline-node--active":""}"></div>
          </div>
          <div class="timeline-content">
            <div class="timeline-header">
              <span class="font-mono-data timeline-date">${n}</span>
              <span class="font-label-caps timeline-tag">${s.institution||""}</span>
            </div>
            <h3 class="font-headline-md timeline-title">${s.title}</h3>
            <p class="font-body-sm timeline-desc research-text-justify">${s.description||""}</p>
            ${s.advisor?`<div class="font-mono-data timeline-advisor">ADVISOR: ${s.advisor}</div>`:""}
          </div>
        </div>
      `}).join("")}
      </div>
    </section>
  `}function ee(e){var n;if(!e)return`<div class="container-page" style="padding-top: 4rem;">
      <p class="font-mono-data" style="color: var(--error);">No profile data available.</p>
    </div>`;const t=e.interests,s=(n=e.research)==null?void 0:n.theses,a=e.future_projects;return`
    <div class="research-page">
      <div class="container-page research-page-inner blueprint-grid-lines">
        ${J("02","RESEARCH_MANIFESTO")}

        <div class="research-grid">
          <aside class="research-sidebar">
            ${K(t)}
            ${z(e)}
          </aside>

          <section class="research-content">
            ${Q(t)}
            ${X(s,a)}
            ${Z(s)}
          </section>
        </div>
      </div>
    </div>
  `}T("research",{render:ee});const te=document.getElementById("app");function ne(){te.innerHTML=`
    <header id="app-header"></header>
    <main id="page-content"></main>
    <footer id="app-footer"></footer>
  `}function S(){const e=R(),t=L(),s=w(e),a=document.getElementById("page-content");a&&(s&&s.render?a.innerHTML=s.render(t):e==="home"?a.innerHTML=`<div class="container-page" style="padding-top: 4rem; padding-bottom: 4rem;">
      <p class="font-mono-data" style="color: var(--on-surface-variant);">// PAGE: HOME — Coming in Stage C</p>
    </div>`:a.innerHTML=`<div class="container-page" style="padding-top: 4rem; padding-bottom: 4rem;">
      <p class="font-mono-data" style="color: var(--on-surface-variant);">// PAGE: ${e.toUpperCase()} — Under construction</p>
    </div>`,window.__updateActiveNav&&window.__updateActiveNav(e))}function ae(){const e=localStorage.getItem("theme"),t=window.matchMedia("(prefers-color-scheme: dark)").matches;e==="dark"||!e&&t?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}function se(){document.documentElement.classList.toggle("dark");const e=document.documentElement.classList.contains("dark");localStorage.setItem("theme",e?"dark":"light"),_()}async function ie(){ae(),ne();const e=await A();if(!e){const n=document.getElementById("page-content");n&&(n.innerHTML='<p style="padding: 2rem; color: var(--error);">Failed to load profile data.</p>');return}const t=document.getElementById("app-header");t&&(t.innerHTML=N(e),k());const s=document.getElementById("theme-toggle-slot");s&&(s.innerHTML=D(),H());const a=document.getElementById("app-footer");a&&(a.innerHTML=P(e)),G(),window.addEventListener("hashchange",S),S(),console.log("🔧 Yusuf Silicon Portfolio — Ready")}ie().catch(e=>{console.error("❌ App initialization failed:",e)});
