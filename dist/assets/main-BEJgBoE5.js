(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=a(n);fetch(n.href,o)}})();let p=null;async function O(){var e;if(p)return p;try{const t=await fetch("/data/profile_data/profile.json");if(!t.ok)throw new Error(`HTTP ${t.status}`);return p=await t.json(),console.log("✅ Profile loaded:",(e=p.personal)==null?void 0:e.name),p}catch(t){return console.error("❌ Failed to load profile:",t),null}}function k(){return p}const A={};function y(e,t){A[e.toLowerCase()]=t}function N(e){return A[e.toLowerCase()]}function P(e){window.location.hash=`#/${e}`}function R(){return(window.location.hash.slice(1)||"/home").replace(/^\//,"").toLowerCase()}const j=[{label:"Home",path:"home"},{label:"Research",path:"research"},{label:"Publications",path:"publications"},{label:"Academics",path:"academics"},{label:"Experience",path:"experience"},{label:"Projects",path:"projects"},{label:"Hobbies",path:"hobbies"},{label:"Contact",path:"contact"}];let f="home";function D(e){var s;const t=((s=e==null?void 0:e.personal)==null?void 0:s.nickname)||"YUSUF_SILICON";f=R();const a=j.map(n=>{const o=n.path===f;return`
        <a href="#/${n.path}"
           class="header-nav-link font-label-caps ${o?"header-nav-link--active":""}"
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
  `}function x(){const e=document.querySelector(".header-inner");if(!e)return;e.addEventListener("click",s=>{const n=s.target.closest("[data-route]");if(n){s.preventDefault();const o=n.dataset.route;P(o)}});const t=document.getElementById("header-hamburger"),a=document.getElementById("header-nav");t&&a&&t.addEventListener("click",()=>{a.classList.toggle("header-nav--open");const s=t.querySelector(".material-symbols-outlined");s&&(s.textContent=a.classList.contains("header-nav--open")?"close":"menu")}),window.__updateActiveNav=s=>{f=s,document.querySelectorAll(".header-nav-link").forEach(n=>{const o=n.dataset.route===s;n.classList.toggle("header-nav-link--active",o)})}}function U(e){if(!e)return`
      <div class="footer-inner container-page">
        <span class="footer-copyright font-label-caps">© 2026 // CORE: COMPUTER_ARCHITECTURE_&_RESEARCH</span>
      </div>
    `;const t=e.contact||{},a=t.resume||"#",s=t.email?`mailto:${t.email}`:"#",n=t.github||"#";return`
    <div class="footer-inner container-page">
      <span class="footer-copyright font-label-caps">
        © 2026 // CORE: COMPUTER_ARCHITECTURE_&_RESEARCH
      </span>
      <div class="footer-links">
        <a href="${a}" class="footer-link font-label-caps" target="_blank" rel="noopener noreferrer">
          CV_DOWNLOAD
        </a>
        <a href="${s}" class="footer-link font-label-caps">
          CONTACT
        </a>
        <a href="${n}" class="footer-link font-label-caps" target="_blank" rel="noopener noreferrer">
          SOURCE_CODE
        </a>
      </div>
    </div>
  `}function H(){return`
    <button class="theme-toggle-btn" id="theme-toggle-btn" type="button" aria-label="Toggle theme">
      <span class="material-symbols-outlined">${document.documentElement.classList.contains("dark")?"dark_mode":"light_mode"}</span>
    </button>
  `}function B(){const e=document.getElementById("theme-toggle-btn");e&&e.addEventListener("click",()=>{he(),L()})}function L(){const e=document.getElementById("theme-toggle-btn");if(!e)return;const t=e.querySelector(".material-symbols-outlined");if(!t)return;const a=document.documentElement.classList.contains("dark");t.textContent=a?"dark_mode":"light_mode"}function $(e){return e?e.replace(/^\.\.\//,"/data/"):""}function M(e,t){const a=(e==null?void 0:e.name)||"",s=(e==null?void 0:e.headline)||"",n=(e==null?void 0:e.description)||"",o=(e==null?void 0:e.description_highlight)||[],i=$(e==null?void 0:e.image),r=((t==null?void 0:t.researchInterests)||[]).slice(0,4).map(m=>`<span class="chip">${m.toUpperCase().replace(/\s+/g,"_")}</span>`).join("");let d=n;if(o.length){const m=[...o].sort((u,l)=>l.length-u.length);for(const u of m){const l=u.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");d=d.replace(new RegExp(`(${l})`,"gi"),'<span class="home-highlight">$1</span>')}}return`
    <section class="home-section">
      <div class="home-id-card">
        <div class="home-id-card-text">
          <div class="font-label-caps page-section-label id-card-label">
            <span class="section-label-dot"></span> [ID_CARD // USER_PROFILE]
          </div>
          <h1 class="font-headline-xl home-name">${a}</h1>
          <p class="font-body-lg home-headline">${s}</p>
          <p class="font-body-md home-description">${d}</p>
          <div class="home-tags">${r}</div>
        </div>
        <div class="home-id-card-image-wrapper">
          <div class="home-id-card-image-border">
            <img class="home-id-card-image" src="${i}" alt="${(e==null?void 0:e.image_name)||a}" />
          </div>
          <div class="home-image-ref font-mono-data">${(e==null?void 0:e.image_name)||"IMG_REF_01.A"}</div>
        </div>
      </div>
    </section>
  `}function F(e){var c,r,d,m,u,l,v,h,b,E,C;const t=((r=(c=e==null?void 0:e.research)==null?void 0:c.publications)==null?void 0:r.length)||0,a=(((m=(d=e==null?void 0:e.projects)==null?void 0:d.vlsi)==null?void 0:m.length)||0)+(((l=(u=e==null?void 0:e.projects)==null?void 0:u.iot)==null?void 0:l.length)||0)+(((h=(v=e==null?void 0:e.projects)==null?void 0:v.software)==null?void 0:h.length)||0),s=((E=(b=e==null?void 0:e.research)==null?void 0:b.theses)==null?void 0:E.length)||0,n=((C=e==null?void 0:e.certifications)==null?void 0:C.length)||0;return`
    <div class="sidebar-section">
      <div class="font-label-caps page-section-label sidebar-section-heading">01 // ANALYTICS_MODULE</div>
      <div class="metrics-grid">${[{label:"PUBLICATIONS",value:t.toString().padStart(2,"0")},{label:"PROJECTS",value:a.toString().padStart(2,"0")},{label:"THESES",value:s.toString().padStart(2,"0")},{label:"CERTIFICATIONS",value:n.toString().padStart(2,"0")}].map(I=>`
      <div class="metric-card">
        <div class="font-label-caps metric-card-label">${I.label}</div>
        <div class="font-headline-md metric-card-value">${I.value}</div>
      </div>
    `).join("")}</div>
    </div>
  `}function q(e,t){if(!e)return"";const s=[{icon:"mail",content:e.email||"",href:e.email?`mailto:${e.email}`:null},{icon:"school",content:"Google Scholar",href:e.google_scholar||null},{icon:"code",content:"github.com/yusuf-silicon",href:e.github||null},{icon:"location_on",content:(t==null?void 0:t.location)||""}].filter(o=>o.content).map(o=>`
      <li class="contact-item">
        <span class="material-symbols-outlined contact-icon">${o.icon}</span>
        ${o.href?`<a class="contact-link" href="${o.href}" target="_blank" rel="noopener noreferrer">${o.content}</a>`:`<span class="contact-text">${o.content}</span>`}
      </li>
    `).join(""),n=e.resume?$(e.resume):"#";return`
    <div class="sidebar-section">
      <div class="font-label-caps page-section-label sidebar-section-heading">02 // COMMUNICATION_BUS</div>
      <ul class="contact-list">${s}</ul>
      <div class="resume-btn-wrapper">
        <a href="${n}" class="resume-btn font-label-caps" target="_blank" rel="noopener noreferrer">
          DOWNLOAD_CV.PDF
        </a>
      </div>
    </div>
  `}function V(e){const t=(e==null?void 0:e.overview)||[];return t.length?`
    <div class="sidebar-section">
      <div class="font-label-caps page-section-label sidebar-section-heading">// RESEARCH_INTERESTS</div>
      <div class="interests-visual">${t.map(s=>{const n=(s.includes||[]).map(o=>`<span class="chip chip-sm">${o}</span>`).join("");return`
        <div class="interest-area">
          <div class="font-label-caps interest-area-name">${s.name.toUpperCase().replace(/\s+/g,"_")}</div>
          <div class="interest-area-chips">${n}</div>
        </div>
      `}).join("")}</div>
    </div>
  `:""}function G(e){return!e||!e.length?"":`
    <div class="content-section">
      <div class="content-section-header">
        <div class="font-label-caps page-section-label">03 // PEER_REVIEWED_ARCHIVE</div>
        <a class="font-mono-data content-section-link" href="#/publications">VIEW_ALL_PUBLICATIONS</a>
      </div>
      <div class="pub-cards">${e.slice(0,2).map(s=>{const n=s.year||"",o=s.month||"",i=s.venue_short||"",c=s.doi||"",r=s.citation||"",d=r?encodeURIComponent(r):"";return`
        <div class="pub-card">
          <div class="font-mono-data pub-card-year">${n}${o?"."+o.substring(0,3).toUpperCase():""}</div>
          <div class="font-label-caps pub-card-venue">${i}</div>
          <h3 class="font-headline-md pub-card-title">${s.title}</h3>
          <p class="font-body-sm pub-card-authors">${(s.authors||[]).join(", ")}</p>
          <p class="font-body-sm pub-card-desc">${s.description||""}</p>
          <div class="pub-card-actions">
            ${c?`<a class="pub-action font-mono-data" href="https://doi.org/${c}" target="_blank" rel="noopener noreferrer">
              <span class="material-symbols-outlined">description</span> PDF
            </a>`:""}
            ${r?`<button class="pub-action font-mono-data citation-btn" type="button" data-citation="${d}">
              <span class="material-symbols-outlined">share</span> CITATION
            </button>`:""}
          </div>
        </div>
      `}).join("")}</div>
    </div>
  `}function W(e){const a=((e==null?void 0:e.vlsi)||[]).filter(n=>n.featured).slice(0,2);return a.length?`
    <div class="content-section">
      <div class="content-section-header">
        <div class="font-label-caps page-section-label">04 // HARDWARE_HARD_REPO</div>
        <a class="font-mono-data content-section-link" href="#/projects">VIEW_PROJECTS</a>
      </div>
      <div class="project-cards">${a.map(n=>{var r;const o=$(n.thumbnail),c=(((r=n.techStack)==null?void 0:r.languages)||[]).slice(0,2).map(d=>`<span class="chip chip-tech">${d.toUpperCase()}</span>`).join("");return`
        <div class="project-card">
          <div class="project-card-thumb">
            <img src="${o}" alt="${n.title}" />
            <div class="project-card-status font-mono-data">STATUS: ${(n.status||"").toUpperCase()}</div>
          </div>
          <div class="project-card-body">
            <div class="font-label-caps project-card-id">${n.id||""}</div>
            <h4 class="font-headline-md project-card-title">${n.title}</h4>
            <p class="font-body-sm project-card-desc">${n.overview||""}</p>
            <div class="project-card-techs">${c}</div>
          </div>
        </div>
      `}).join("")}</div>
    </div>
  `:""}function Y(e){var i;if(!e)return`<div class="container-page" style="padding-top: 4rem;">
      <p class="font-mono-data" style="color: var(--error);">No profile data available.</p>
    </div>`;const t=e.personal,a=e.interests,s=e.contact,n=(i=e.research)==null?void 0:i.publications,o=e.projects;return`
    <div class="home-page">
      <div class="container-page home-page-inner blueprint-grid-lines">
        ${M(t,a)}

        <!-- Two-column grid: sidebar + content -->
        <div class="home-grid">
          <!-- Left Sidebar (4 cols) -->
          <aside class="home-sidebar">
            ${F(e)}
            ${q(s,t)}
            ${V(a)}
          </aside>

          <!-- Right Content (8 cols) -->
          <section class="home-content">
            ${G(n)}
            ${W(o)}
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
  `}function J(){const e=document.getElementById("page-content");e&&e.addEventListener("click",t=>{const a=t.target.closest(".citation-btn");if(!a)return;t.preventDefault();const s=decodeURIComponent(a.dataset.citation);s&&navigator.clipboard.writeText(s).then(()=>{S("CITATION_COPIED")}).catch(()=>{const n=document.createElement("textarea");n.value=s,n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n),S("CITATION_COPIED")})})}function S(e){const t=document.querySelector(".toast-notification");t&&t.remove();const a=document.createElement("div");a.className="toast-notification font-mono-data",a.textContent=e,document.body.appendChild(a),requestAnimationFrame(()=>{a.classList.add("toast-notification--visible")}),setTimeout(()=>{a.classList.remove("toast-notification--visible"),a.addEventListener("transitionend",()=>a.remove(),{once:!0})},2e3)}y("home",{render:Y});function K(e){const t=(e||"").toLowerCase();return t.includes("architecture")||t.includes("memory")||t.includes("processor")?"developer_board":t.includes("ai")||t.includes("acceleration")||t.includes("cryptographic")?"neurology":t.includes("energy")||t.includes("high-perform")||t.includes("security")?"bolt":"science"}function z(e,t){const a=s=>s?new Date(s).toLocaleDateString("en-US",{year:"numeric",month:"short"}):"";return`${a(e)} — ${a(t)||"PRESENT"}`}function Q(e,t){return`
    <div class="research-annotation">
      <span class="research-annotation-badge font-mono-data">PAGE. ${e}</span>
      <div class="research-annotation-line"></div>
      <span class="font-label-caps research-annotation-text">[DOCUMENT_CLASS: ${t}]</span>
    </div>
  `}function X(e){const t=(e==null?void 0:e.overview)||[];return t.length?`
    <div class="sidebar-section">
      <div class="font-label-caps research-section-heading">[RESEARCH_AREAS_V2.0]</div>
      <ul class="research-area-list">${t.map(s=>`
        <li class="research-area-item">
          <div class="research-area-item-inner">
            <span class="material-symbols-outlined research-area-icon">${K(s.name)}</span>
            <div class="research-area-content">
              <h3 class="font-headline-md research-area-name">${s.name}</h3>
              <p class="font-body-sm research-area-desc research-text-justify">${s.description||""}</p>
            </div>
          </div>
        </li>
      `).join("")}</ul>
    </div>
  `:""}function Z(e){var i,c,r,d,m,u;const t=((c=(i=e==null?void 0:e.interests)==null?void 0:i.overview)==null?void 0:c.length)||0,a=((d=(r=e==null?void 0:e.research)==null?void 0:r.publications)==null?void 0:d.length)||0,s=((u=(m=e==null?void 0:e.research)==null?void 0:m.theses)==null?void 0:u.length)||0;return`
    <div class="sidebar-section">
      <div class="font-label-caps research-section-heading">[SYSTEM_METRICS]</div>
      <div class="metrics-table">${[{label:"RESEARCH_INTERESTS",value:t.toString().padStart(2,"0")},{label:"PUBLICATIONS",value:a.toString().padStart(2,"0")},{label:"THESES",value:s.toString().padStart(2,"0")}].map(l=>`
      <div class="metric-row">
        <span class="font-mono-data metric-row-label">${l.label}</span>
        <span class="font-mono-data metric-row-value">${l.value}</span>
      </div>
    `).join("")}</div>
    </div>
  `}function ee(e){const t=(e==null?void 0:e.overview)||[];return t.length?`
    <section class="content-section research-section">
      <div class="font-label-caps research-section-heading content-section-label">
        <span class="section-label-dot"></span> [CURRENT_INVESTIGATIONS]
      </div>
      <div class="investigations-grid">${t.map((s,n)=>`
        <div class="investigation-card">
          <span class="investigation-card-number font-mono-data">#${String(n+1).padStart(3,"0")}</span>
          <h3 class="font-headline-md investigation-card-title">${s.name}</h3>
          <p class="font-body-sm investigation-card-desc research-text-justify">${s.description||""}</p>
        </div>
      `).join("")}</div>
    </section>
  `:""}function te(e,t){const a=(t==null?void 0:t.research)||[];if(!a.length)return"";const s=(e==null?void 0:e.length)||0;return`
    <section class="content-section research-section future-section">
      <div class="font-label-caps research-section-heading content-section-label">[FUTURE_DIRECTIONS_ROADMAP]</div>
      <div class="future-directions">${a.map((o,i)=>{const c=s+i+1;return`
        <div class="future-direction-item">
          <span class="font-mono-data future-direction-id">${`PROJECT_${String(c).padStart(3,"0")}`}</span>
          <div>
            <h4 class="font-headline-md future-direction-title">${o.title}</h4>
            <p class="font-body-sm future-direction-desc research-text-justify">${o.description||""}</p>
          </div>
        </div>
      `}).join("")}</div>
    </section>
  `}function ne(e){return!e||!e.length?"":`
    <section class="content-section research-section">
      <div class="font-label-caps research-section-heading content-section-label">[EVOLUTION_TIMELINE]</div>
      <div class="timeline">
        <div class="timeline-line"></div>
        ${e.map((a,s)=>{const n=z(a.start_date,a.end_date);return`
        <div class="timeline-entry">
          <div class="timeline-node-col">
            <div class="timeline-node ${s===0?"timeline-node--active":""}"></div>
          </div>
          <div class="timeline-content">
            <div class="timeline-header">
              <span class="font-mono-data timeline-date">${n}</span>
              <span class="font-label-caps timeline-tag">${a.institution||""}</span>
            </div>
            <h3 class="font-headline-md timeline-title">${a.title}</h3>
            <p class="font-body-sm timeline-desc research-text-justify">${a.description||""}</p>
            ${a.advisor?`<div class="font-mono-data timeline-advisor">ADVISOR: ${a.advisor}</div>`:""}
          </div>
        </div>
      `}).join("")}
      </div>
    </section>
  `}function ae(e){var n;if(!e)return`<div class="container-page" style="padding-top: 4rem;">
      <p class="font-mono-data" style="color: var(--error);">No profile data available.</p>
    </div>`;const t=e.interests,a=(n=e.research)==null?void 0:n.theses,s=e.future_projects;return`
    <div class="research-page">
      <div class="container-page research-page-inner blueprint-grid-lines">
        ${Q("02","RESEARCH_MANIFESTO")}

        <div class="research-grid">
          <aside class="research-sidebar">
            ${X(t)}
            ${Z(e)}
          </aside>

          <section class="research-content">
            ${ee(t)}
            ${te(a,s)}
            ${ne(a)}
          </section>
        </div>
      </div>
    </div>
  `}y("research",{render:ae});function se(e,t){return`
    <div class="research-annotation">
      <span class="research-annotation-badge font-mono-data">PAGE. ${e}</span>
      <div class="research-annotation-line"></div>
      <span class="font-label-caps research-annotation-text">[DOCUMENT_CLASS: ${t}]</span>
    </div>
  `}let g=null;async function oe(){if(g!==null)return g;try{const t=await(await fetch("https://api.allorigins.win/raw?url="+encodeURIComponent("https://scholar.google.com/citations?user=EJitK1IAAAAJ&hl=en&pagesize=100"),{signal:AbortSignal.timeout(5e3)})).text(),a=/citedby\s*=\s*['"](\d+)['"]/gi;let s;const n=[];for(;(s=a.exec(t))!==null;)n.push(parseInt(s[1],10));g=n.length?n:null}catch{g=null}return g}function ie(){return`
    <div class="pubs-header">
      ${se("03","PUBLICATION_ARCHIVE")}
      <div class="pubs-header-bottom">
        <h1 class="font-headline-xl pubs-title">Scientific Publications</h1>
        <div class="pubs-search">
          <span class="material-symbols-outlined pubs-search-icon">search</span>
          <input class="pubs-search-input font-mono-data" type="text" id="pubSearchInput" placeholder="Filter by Venue, Keyword, or Year..." />
        </div>
      </div>
    </div>
  `}function ce(e,t){var u;if(!e||!e.length)return"";const a=t||e.map(()=>0),n=[...e.map((l,v)=>({...l,citations:a[v]||0}))].sort((l,v)=>v.citations-l.citations),o=((u=n[0])==null?void 0:u.citations)||0,i=n.filter(l=>l.citations===o),c=e.filter(l=>l.featured),r=(l,v)=>l.map((h,b)=>`
      <div class="selected-work-entry">
        ${b>0?'<div class="selected-work-divider"></div>':""}
        <div class="font-mono-data selected-work-fig">${v} ${String(b+1).padStart(2,"0")}</div>
        <h3 class="font-headline-md selected-work-title">${h.title}</h3>
        <p class="font-body-sm selected-work-venue">${h.venue_short||h.venue||""}</p>
        ${h.citations!==void 0?`<div class="font-mono-data selected-work-cites">CITATIONS: ${h.citations}</div>`:""}
      </div>
    `).join(""),d=i.length?r(i,"// TOP_CITED"):"",m=c.length?r(c,"// FEATURED"):"";return`
    <div class="sidebar-section pubs-selected-works">
      <div class="research-section-heading">SELECTED_WORKS</div>
      ${d?`<div class="selected-works-list">${d}</div>`:""}
      ${m?`<div class="selected-works-list" style="${d?"margin-top: 1.5rem;":""}">${m}</div>`:""}
    </div>
  `}function re(e,t){e!=null&&e.length;const a=(e==null?void 0:e.filter(n=>n.peer_reviewed).length)||0;return`
    <div class="pubs-metrics">
      <div class="font-mono-data pubs-metrics-header">METRICS_LOG</div>
      <div class="pubs-metrics-grid">
        <div class="pubs-metric">
          <div class="font-headline-md pubs-metric-value">${t?t.reduce((n,o)=>n+o,0):0}</div>
          <div class="font-label-caps pubs-metric-label">CITATIONS</div>
        </div>
        <div class="pubs-metric">
          <div class="font-headline-md pubs-metric-value">${a}</div>
          <div class="font-label-caps pubs-metric-label">PEER_REVIEWED</div>
        </div>
      </div>
    </div>
  `}function de(e){if(!e||!e.length)return`
      <div class="content-section">
        <div class="research-section-heading">FULL_BIBLIOGRAPHY</div>
        <p class="font-body-sm" style="color: var(--on-surface-variant);">No publications found.</p>
      </div>
    `;const t={};for(const n of e){const o=n.year||"Unknown";t[o]||(t[o]=[]),t[o].push(n)}return`
    <div class="content-section">
      <div class="research-section-heading">FULL_BIBLIOGRAPHY</div>
      <div class="pub-bibliography-list" id="bibliographyList">${Object.keys(t).sort((n,o)=>o-n).map(n=>{const o=t[n].map((i,c)=>{const r=i.doi||"",d=i.citation||"",m=d?encodeURIComponent(d):"",u=`abstract-${n}-${c}`;return`
            <article class="pub-entry" data-year="${n}" data-search="${(i.title+" "+i.venue_short+" "+i.venue+" "+n).toLowerCase()}">
              <div class="pub-entry-inner">
                <div class="pub-entry-header">
                  <h3 class="font-body-lg pub-entry-title">${i.title}</h3>
                  <span class="font-mono-data pub-entry-venue-tag">${i.venue_short||n}</span>
                </div>
                <p class="font-body-sm pub-entry-authors">${(i.authors||[]).join(", ")}</p>
                <p class="font-mono-data pub-entry-source">${i.venue||""}</p>
                <div class="pub-entry-actions">
                  ${r?`<a class="pub-entry-btn font-mono-data" href="https://doi.org/${r}" target="_blank" rel="noopener noreferrer">[PDF]</a>`:""}
                  ${d?`<button class="pub-entry-btn pub-entry-cite-btn font-mono-data" type="button" data-citation="${m}">[CITATION]</button>`:""}
                  <button class="pub-entry-btn pub-entry-abstract-toggle font-mono-data" type="button" data-target="${u}" aria-label="Toggle abstract">
                    [ABSTRACT] <span class="material-symbols-outlined">expand_more</span>
                  </button>
                </div>
                <div class="pub-abstract" id="${u}">
                  <div class="pub-abstract-inner">${i.abstract||i.description||""}</div>
                </div>
              </div>
            </article>
          `}).join("");return`
        <div class="pub-year-group" data-year="${n}">
          <div class="pub-year-header">
            <span class="font-mono-data pub-year-label">${n}</span>
            <div class="pub-year-line"></div>
          </div>
          <div class="pub-year-entries">${o}</div>
        </div>
      `}).join("")}</div>
    </div>
  `}async function le(e){var s;if(!e)return`<div class="container-page" style="padding-top: 4rem;">
      <p class="font-mono-data" style="color: var(--error);">No profile data available.</p>
    </div>`;const t=((s=e.research)==null?void 0:s.publications)||[];let a=null;try{a=await oe()}catch{}return`
    <div class="pubs-page">
      <div class="container-page pubs-page-inner blueprint-grid-lines">
        ${ie()}

        <div class="pubs-grid">
          <aside class="pubs-sidebar">
            ${ce(t,a)}
            ${re(t,a)}
          </aside>

          <section class="pubs-content">
            ${de(t)}
          </section>
        </div>
      </div>
    </div>
  `}function w(){const e=document.getElementById("pubSearchInput"),t=document.getElementById("bibliographyList");e&&e.addEventListener("input",()=>{const a=e.value.toLowerCase().trim(),s=(t==null?void 0:t.querySelectorAll(".pub-entry"))||[],n=(t==null?void 0:t.querySelectorAll(".pub-year-group"))||[];s.forEach(o=>{const i=o.dataset.search||"";o.style.display=!a||i.includes(a)?"":"none"}),n.forEach(o=>{const i=[...o.querySelectorAll(".pub-entry")].some(c=>c.style.display!=="none");o.style.display=i?"":"none"})}),document.querySelectorAll(".pub-entry-abstract-toggle").forEach(a=>{a.addEventListener("click",()=>{const s=a.dataset.target,n=document.getElementById(s);if(!n)return;const o=n.classList.contains("pub-abstract--open");document.querySelectorAll(".pub-abstract--open").forEach(c=>{if(c.id!==s){c.classList.remove("pub-abstract--open");const r=document.querySelector(`[data-target="${c.id}"]`);if(r){const d=r.querySelector(".material-symbols-outlined");d&&(d.textContent="expand_more")}}}),n.classList.toggle("pub-abstract--open");const i=a.querySelector(".material-symbols-outlined");i&&(i.textContent=o?"expand_more":"expand_less")})}),document.querySelectorAll(".pub-entry-cite-btn").forEach(a=>{a.addEventListener("click",()=>{const s=decodeURIComponent(a.dataset.citation);s&&navigator.clipboard.writeText(s).then(()=>T("CITATION_COPIED")).catch(()=>{const n=document.createElement("textarea");n.value=s,n.style.cssText="position:fixed;opacity:0",document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n),T("CITATION_COPIED")})})})}function T(e){const t=document.querySelector(".toast-notification");t&&t.remove();const a=document.createElement("div");a.className="toast-notification font-mono-data",a.textContent=e,document.body.appendChild(a),requestAnimationFrame(()=>a.classList.add("toast-notification--visible")),setTimeout(()=>{a.classList.remove("toast-notification--visible"),a.addEventListener("transitionend",()=>a.remove(),{once:!0})},2e3)}y("publications",{render:le,mount:w});const ue=document.getElementById("app");function me(){ue.innerHTML=`
    <header id="app-header"></header>
    <main id="page-content"></main>
    <footer id="app-footer"></footer>
  `}async function _(){const e=R(),t=k(),a=N(e),s=document.getElementById("page-content");if(s){if(a&&a.render){const n=await a.render(t);s.innerHTML=n,a.mount&&a.mount()}else e==="home"?s.innerHTML=`<div class="container-page" style="padding-top: 4rem; padding-bottom: 4rem;">
      <p class="font-mono-data" style="color: var(--on-surface-variant);">// PAGE: HOME — Coming in Stage C</p>
    </div>`:s.innerHTML=`<div class="container-page" style="padding-top: 4rem; padding-bottom: 4rem;">
      <p class="font-mono-data" style="color: var(--on-surface-variant);">// PAGE: ${e.toUpperCase()} — Under construction</p>
    </div>`;window.__updateActiveNav&&window.__updateActiveNav(e)}}function ve(){const e=localStorage.getItem("theme"),t=window.matchMedia("(prefers-color-scheme: dark)").matches;e==="dark"||!e&&t?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}function he(){document.documentElement.classList.toggle("dark");const e=document.documentElement.classList.contains("dark");localStorage.setItem("theme",e?"dark":"light"),L()}async function pe(){ve(),me();const e=await O();if(!e){const n=document.getElementById("page-content");n&&(n.innerHTML='<p style="padding: 2rem; color: var(--error);">Failed to load profile data.</p>');return}const t=document.getElementById("app-header");t&&(t.innerHTML=D(e),x());const a=document.getElementById("theme-toggle-slot");a&&(a.innerHTML=H(),B());const s=document.getElementById("app-footer");s&&(s.innerHTML=U(e)),J(),w(),window.addEventListener("hashchange",_),_(),console.log("🔧 Yusuf Silicon Portfolio — Ready")}pe().catch(e=>{console.error("❌ App initialization failed:",e)});
