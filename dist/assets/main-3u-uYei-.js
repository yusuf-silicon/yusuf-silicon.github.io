(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();let h=null;async function O(){var e;if(h)return h;try{const t=await fetch("/data/profile_data/profile.json");if(!t.ok)throw new Error(`HTTP ${t.status}`);return h=await t.json(),console.log("✅ Profile loaded:",(e=h.personal)==null?void 0:e.name),h}catch(t){return console.error("❌ Failed to load profile:",t),null}}function N(){return h}const A={};function b(e,t){A[e.toLowerCase()]=t}function P(e){return A[e.toLowerCase()]}function k(e){window.location.hash=`#/${e}`}function _(){return(window.location.hash.slice(1)||"/home").replace(/^\//,"").toLowerCase()}const j=[{label:"Home",path:"home"},{label:"Research",path:"research"},{label:"Publications",path:"publications"},{label:"Academics",path:"academics"},{label:"Experience",path:"experience"},{label:"Projects",path:"projects"},{label:"Hobbies",path:"hobbies"},{label:"Contact",path:"contact"}];let y="home";function D(e){var a;const t=((a=e==null?void 0:e.personal)==null?void 0:a.nickname)||"YUSUF_SILICON";y=_();const s=j.map(n=>{const i=n.path===y;return`
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
  `}function U(){const e=document.querySelector(".header-inner");if(!e)return;e.addEventListener("click",a=>{const n=a.target.closest("[data-route]");if(n){a.preventDefault();const i=n.dataset.route;k(i)}});const t=document.getElementById("header-hamburger"),s=document.getElementById("header-nav");t&&s&&t.addEventListener("click",()=>{s.classList.toggle("header-nav--open");const a=t.querySelector(".material-symbols-outlined");a&&(a.textContent=s.classList.contains("header-nav--open")?"close":"menu")}),window.__updateActiveNav=a=>{y=a,document.querySelectorAll(".header-nav-link").forEach(n=>{const i=n.dataset.route===a;n.classList.toggle("header-nav-link--active",i)})}}function x(e){if(!e)return`
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
  `}function H(){return`
    <button class="theme-toggle-btn" id="theme-toggle-btn" type="button" aria-label="Toggle theme">
      <span class="material-symbols-outlined">${document.documentElement.classList.contains("dark")?"dark_mode":"light_mode"}</span>
    </button>
  `}function M(){const e=document.getElementById("theme-toggle-btn");e&&e.addEventListener("click",()=>{Ee(),w()})}function w(){const e=document.getElementById("theme-toggle-btn");if(!e)return;const t=e.querySelector(".material-symbols-outlined");if(!t)return;const s=document.documentElement.classList.contains("dark");t.textContent=s?"dark_mode":"light_mode"}function $(e){return e?e.replace(/^\.\.\//,"/data/"):""}function B(e,t){const s=(e==null?void 0:e.name)||"",a=(e==null?void 0:e.headline)||"",n=(e==null?void 0:e.description)||"",i=(e==null?void 0:e.description_highlight)||[],o=$(e==null?void 0:e.image),r=((t==null?void 0:t.researchInterests)||[]).slice(0,4).map(u=>`<span class="chip">${u.toUpperCase().replace(/\s+/g,"_")}</span>`).join("");let d=n;if(i.length){const u=[...i].sort((m,l)=>l.length-m.length);for(const m of u){const l=m.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");d=d.replace(new RegExp(`(${l})`,"gi"),'<span class="home-highlight">$1</span>')}}return`
    <section class="home-section">
      <div class="home-id-card">
        <div class="home-id-card-text">
          <div class="font-label-caps page-section-label id-card-label">
            <span class="section-label-dot"></span> [ID_CARD // USER_PROFILE]
          </div>
          <h1 class="font-headline-xl home-name">${s}</h1>
          <p class="font-body-lg home-headline">${a}</p>
          <p class="font-body-md home-description">${d}</p>
          <div class="home-tags">${r}</div>
        </div>
        <div class="home-id-card-image-wrapper">
          <div class="home-id-card-image-border">
            <img class="home-id-card-image" src="${o}" alt="${(e==null?void 0:e.image_name)||s}" />
          </div>
          <div class="home-image-ref font-mono-data">${(e==null?void 0:e.image_name)||"IMG_REF_01.A"}</div>
        </div>
      </div>
    </section>
  `}function F(e){var c,r,d,u,m,l,v,p,g,E,C;const t=((r=(c=e==null?void 0:e.research)==null?void 0:c.publications)==null?void 0:r.length)||0,s=(((u=(d=e==null?void 0:e.projects)==null?void 0:d.vlsi)==null?void 0:u.length)||0)+(((l=(m=e==null?void 0:e.projects)==null?void 0:m.iot)==null?void 0:l.length)||0)+(((p=(v=e==null?void 0:e.projects)==null?void 0:v.software)==null?void 0:p.length)||0),a=((E=(g=e==null?void 0:e.research)==null?void 0:g.theses)==null?void 0:E.length)||0,n=((C=e==null?void 0:e.certifications)==null?void 0:C.length)||0;return`
    <div class="sidebar-section">
      <div class="font-label-caps page-section-label sidebar-section-heading">01 // ANALYTICS_MODULE</div>
      <div class="metrics-grid">${[{label:"PUBLICATIONS",value:t.toString().padStart(2,"0")},{label:"PROJECTS",value:s.toString().padStart(2,"0")},{label:"THESES",value:a.toString().padStart(2,"0")},{label:"CERTIFICATIONS",value:n.toString().padStart(2,"0")}].map(I=>`
      <div class="metric-card">
        <div class="font-label-caps metric-card-label">${I.label}</div>
        <div class="font-headline-md metric-card-value">${I.value}</div>
      </div>
    `).join("")}</div>
    </div>
  `}function G(e,t){if(!e)return"";const a=[{icon:"mail",content:e.email||"",href:e.email?`mailto:${e.email}`:null},{icon:"school",content:"Google Scholar",href:e.google_scholar||null},{icon:"code",content:"github.com/yusuf-silicon",href:e.github||null},{icon:"location_on",content:(t==null?void 0:t.location)||""}].filter(i=>i.content).map(i=>`
      <li class="contact-item">
        <span class="material-symbols-outlined contact-icon">${i.icon}</span>
        ${i.href?`<a class="contact-link" href="${i.href}" target="_blank" rel="noopener noreferrer">${i.content}</a>`:`<span class="contact-text">${i.content}</span>`}
      </li>
    `).join(""),n=e.resume?$(e.resume):"#";return`
    <div class="sidebar-section">
      <div class="font-label-caps page-section-label sidebar-section-heading">02 // COMMUNICATION_BUS</div>
      <ul class="contact-list">${a}</ul>
      <div class="resume-btn-wrapper">
        <a href="${n}" class="resume-btn font-label-caps" target="_blank" rel="noopener noreferrer">
          DOWNLOAD_CV.PDF
        </a>
      </div>
    </div>
  `}function q(e){const t=(e==null?void 0:e.overview)||[];return t.length?`
    <div class="sidebar-section">
      <div class="font-label-caps page-section-label sidebar-section-heading">// RESEARCH_INTERESTS</div>
      <div class="interests-visual">${t.map(a=>{const n=(a.includes||[]).map(i=>`<span class="chip chip-sm">${i}</span>`).join("");return`
        <div class="interest-area">
          <div class="font-label-caps interest-area-name">${a.name.toUpperCase().replace(/\s+/g,"_")}</div>
          <div class="interest-area-chips">${n}</div>
        </div>
      `}).join("")}</div>
    </div>
  `:""}function V(e){return!e||!e.length?"":`
    <div class="content-section">
      <div class="content-section-header">
        <div class="font-label-caps page-section-label">03 // PEER_REVIEWED_ARCHIVE</div>
        <a class="font-mono-data content-section-link" href="#/publications">VIEW_ALL_PUBLICATIONS</a>
      </div>
      <div class="pub-cards">${e.slice(0,2).map(a=>{const n=a.year||"",i=a.month||"",o=a.venue_short||"",c=a.doi||"",r=a.citation||"",d=r?encodeURIComponent(r):"";return`
        <div class="pub-card">
          <div class="font-mono-data pub-card-year">${n}${i?"."+i.substring(0,3).toUpperCase():""}</div>
          <div class="font-label-caps pub-card-venue">${o}</div>
          <h3 class="font-headline-md pub-card-title">${a.title}</h3>
          <p class="font-body-sm pub-card-authors">${(a.authors||[]).join(", ")}</p>
          <p class="font-body-sm pub-card-desc">${a.description||""}</p>
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
  `}function W(e){const s=((e==null?void 0:e.vlsi)||[]).filter(n=>n.featured).slice(0,2);return s.length?`
    <div class="content-section">
      <div class="content-section-header">
        <div class="font-label-caps page-section-label">04 // HARDWARE_HARD_REPO</div>
        <a class="font-mono-data content-section-link" href="#/projects">VIEW_PROJECTS</a>
      </div>
      <div class="project-cards">${s.map(n=>{var r;const i=$(n.thumbnail),c=(((r=n.techStack)==null?void 0:r.languages)||[]).slice(0,2).map(d=>`<span class="chip chip-tech">${d.toUpperCase()}</span>`).join("");return`
        <div class="project-card">
          <div class="project-card-thumb">
            <img src="${i}" alt="${n.title}" loading="lazy" />
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
  `:""}function Y(e){var o;if(!e)return`<div class="container-page" style="padding-top: 4rem;">
      <p class="font-mono-data" style="color: var(--error);">No profile data available.</p>
    </div>`;const t=e.personal,s=e.interests,a=e.contact,n=(o=e.research)==null?void 0:o.publications,i=e.projects;return`
    <div class="home-page">
      <div class="container-page home-page-inner blueprint-grid-lines">
        ${B(t,s)}

        <!-- Two-column grid: sidebar + content -->
        <div class="home-grid">
          <!-- Left Sidebar (4 cols) -->
          <aside class="home-sidebar">
            ${F(e)}
            ${G(a,t)}
            ${q(s)}
          </aside>

          <!-- Right Content (8 cols) -->
          <section class="home-content">
            ${V(n)}
            ${W(i)}
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
  `}function K(){const e=document.getElementById("page-content");e&&e.addEventListener("click",t=>{const s=t.target.closest(".citation-btn");if(!s)return;t.preventDefault();const a=decodeURIComponent(s.dataset.citation);a&&navigator.clipboard.writeText(a).then(()=>{S("CITATION_COPIED")}).catch(()=>{const n=document.createElement("textarea");n.value=a,n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n),S("CITATION_COPIED")})})}function S(e){const t=document.querySelector(".toast-notification");t&&t.remove();const s=document.createElement("div");s.className="toast-notification font-mono-data",s.textContent=e,document.body.appendChild(s),requestAnimationFrame(()=>{s.classList.add("toast-notification--visible")}),setTimeout(()=>{s.classList.remove("toast-notification--visible"),s.addEventListener("transitionend",()=>s.remove(),{once:!0})},2e3)}b("home",{render:Y});function J(e){const t=(e||"").toLowerCase();return t.includes("architecture")||t.includes("memory")||t.includes("processor")?"developer_board":t.includes("ai")||t.includes("acceleration")||t.includes("cryptographic")?"neurology":t.includes("energy")||t.includes("high-perform")||t.includes("security")?"bolt":"science"}function z(e,t){const s=a=>a?new Date(a).toLocaleDateString("en-US",{year:"numeric",month:"short"}):"";return`${s(e)} — ${s(t)||"PRESENT"}`}function Q(e,t){return`
    <div class="research-annotation">
      <span class="research-annotation-badge font-mono-data">PAGE. ${e}</span>
      <div class="research-annotation-line"></div>
      <span class="font-label-caps research-annotation-text">[DOCUMENT_CLASS: ${t}]</span>
    </div>
  `}function X(e){const t=(e==null?void 0:e.overview)||[];return t.length?`
    <div class="sidebar-section">
      <div class="font-label-caps research-section-heading">[RESEARCH_AREAS_V2.0]</div>
      <ul class="research-area-list">${t.map(a=>`
        <li class="research-area-item">
          <div class="research-area-item-inner">
            <span class="material-symbols-outlined research-area-icon">${J(a.name)}</span>
            <div class="research-area-content">
              <h3 class="font-headline-md research-area-name">${a.name}</h3>
              <p class="font-body-sm research-area-desc research-text-justify">${a.description||""}</p>
            </div>
          </div>
        </li>
      `).join("")}</ul>
    </div>
  `:""}function Z(e){var o,c,r,d,u,m;const t=((c=(o=e==null?void 0:e.interests)==null?void 0:o.overview)==null?void 0:c.length)||0,s=((d=(r=e==null?void 0:e.research)==null?void 0:r.publications)==null?void 0:d.length)||0,a=((m=(u=e==null?void 0:e.research)==null?void 0:u.theses)==null?void 0:m.length)||0;return`
    <div class="sidebar-section">
      <div class="font-label-caps research-section-heading">[SYSTEM_METRICS]</div>
      <div class="metrics-table">${[{label:"RESEARCH_INTERESTS",value:t.toString().padStart(2,"0")},{label:"PUBLICATIONS",value:s.toString().padStart(2,"0")},{label:"THESES",value:a.toString().padStart(2,"0")}].map(l=>`
      <div class="metric-row">
        <span class="font-mono-data metric-row-label">${l.label}</span>
        <span class="font-mono-data metric-row-value">${l.value}</span>
      </div>
    `).join("")}</div>
    </div>
  `}function ee(e){const t=(e||[]).filter(a=>a.status==="active");return t.length?`
    <section class="content-section research-section">
      <div class="font-label-caps research-section-heading content-section-label">
        <span class="section-label-dot"></span> [CURRENT_INVESTIGATIONS]
      </div>
      <div class="investigations-grid">${t.map((a,n)=>{const i=(a.category||[]).map(o=>`<span class="chip chip-sm chip-investigation">${o.toUpperCase().replace(/\s+/g,"_")}</span>`).join("");return`
        <div class="investigation-card">
          <span class="investigation-card-number font-mono-data">#${String(n+1).padStart(3,"0")}</span>
          <h3 class="font-headline-md investigation-card-title">${a.title||""}</h3>
          <p class="font-body-sm investigation-card-desc research-text-justify">${a.description||""}</p>
          ${i?`<div class="investigation-card-chips">${i}</div>`:""}
        </div>
      `}).join("")}</div>
    </section>
  `:`
      <section class="content-section research-section">
        <div class="font-label-caps research-section-heading content-section-label">
          <span class="section-label-dot"></span> [CURRENT_INVESTIGATIONS]
        </div>
        <div class="investigations-empty">
          <p class="font-body-md investigations-empty-text">No active research in progress. Interested in collaborating? Feel free to reach out.</p>
        </div>
      </section>
    `}function te(e,t){const s=(t==null?void 0:t.research)||[];if(!s.length)return"";const a=(e==null?void 0:e.length)||0;return`
    <section class="content-section research-section future-section">
      <div class="font-label-caps research-section-heading content-section-label">[FUTURE_DIRECTIONS_ROADMAP]</div>
      <div class="future-directions">${s.map((i,o)=>{const c=a+o+1;return`
        <div class="future-direction-item">
          <span class="font-mono-data future-direction-id">${`PROJECT_${String(c).padStart(3,"0")}`}</span>
          <div>
            <h4 class="font-headline-md future-direction-title">${i.title}</h4>
            <p class="font-body-sm future-direction-desc research-text-justify">${i.description||""}</p>
          </div>
        </div>
      `}).join("")}</div>
    </section>
  `}function ae(e){const t=(e||[]).filter(a=>a.status!=="active");return t.length?`
    <section class="content-section research-section">
      <div class="font-label-caps research-section-heading content-section-label">[EVOLUTION_TIMELINE]</div>
      <div class="timeline">
        <div class="timeline-line"></div>
        ${t.map((a,n)=>{const i=z(a.start_date,a.end_date);return`
        <div class="timeline-entry">
          <div class="timeline-node-col">
            <div class="timeline-node ${n===0?"timeline-node--active":""}"></div>
          </div>
          <div class="timeline-content">
            <div class="timeline-header">
              <span class="font-mono-data timeline-date">${i}</span>
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
  `:""}function ne(e){var n;if(!e)return`<div class="container-page" style="padding-top: 4rem;">
      <p class="font-mono-data" style="color: var(--error);">No profile data available.</p>
    </div>`;const t=e.interests,s=(n=e.research)==null?void 0:n.theses,a=e.future_projects;return`
    <div class="research-page">
      <div class="container-page research-page-inner blueprint-grid-lines">
        <div class="pubs-header">
          ${Q("02","RESEARCH_MANIFESTO")}
          <div class="pubs-header-bottom" style="margin-bottom: 0;">
            <h1 class="font-headline-xl pubs-title">Research Repository</h1>
          </div>
        </div>

        <div class="research-grid">
          <aside class="research-sidebar">
            ${X(t)}
            ${Z(e)}
          </aside>

          <section class="research-content">
            ${ee(s)}
            ${te(s,a)}
            ${ae(s)}
          </section>
        </div>
      </div>
    </div>
  `}b("research",{render:ne});function se(e,t){return`
    <div class="research-annotation">
      <span class="research-annotation-badge font-mono-data">PAGE. ${e}</span>
      <div class="research-annotation-line"></div>
      <span class="font-label-caps research-annotation-text">[DOCUMENT_CLASS: ${t}]</span>
    </div>
  `}let f=null;async function ie(){if(f!==null)return f;try{const t=await(await fetch("https://api.allorigins.win/raw?url="+encodeURIComponent("https://scholar.google.com/citations?user=EJitK1IAAAAJ&hl=en&pagesize=100"),{signal:AbortSignal.timeout(5e3)})).text(),s=/citedby\s*=\s*['"](\d+)['"]/gi;let a;const n=[];for(;(a=s.exec(t))!==null;)n.push(parseInt(a[1],10));f=n.length?n:null}catch{f=null}return f}function oe(){return`
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
  `}function ce(e,t){var m;if(!e||!e.length)return"";const s=e.map(()=>0),n=[...e.map((l,v)=>({...l,citations:s[v]||0}))].sort((l,v)=>v.citations-l.citations),i=((m=n[0])==null?void 0:m.citations)||0,o=n.filter(l=>l.citations===i),c=e.filter(l=>l.featured),r=(l,v)=>l.map((p,g)=>`
      <div class="selected-work-entry">
        ${g>0?'<div class="selected-work-divider"></div>':""}
        <div class="font-mono-data selected-work-fig">${v} ${String(g+1).padStart(2,"0")}</div>
        <h3 class="font-headline-md selected-work-title">${p.title}</h3>
        <p class="font-body-sm selected-work-venue">${p.venue_short||p.venue||""}</p>
        ${p.citations!==void 0?`<div class="font-mono-data selected-work-cites">CITATIONS: ${p.citations}</div>`:""}
      </div>
    `).join(""),d=o.length?r(o,"// TOP_CITED"):"",u=c.length?r(c,"// FEATURED"):"";return`
    <div class="sidebar-section pubs-selected-works">
      <div class="research-section-heading">SELECTED_WORKS</div>
      ${d?`<div class="selected-works-list">${d}</div>`:""}
      ${u?`<div class="selected-works-list" style="${d?"margin-top: 1.5rem;":""}">${u}</div>`:""}
    </div>
  `}function re(e,t){return e!=null&&e.length,`
    <div class="pubs-metrics">
      <div class="font-mono-data pubs-metrics-header">METRICS_LOG</div>
      <div class="pubs-metrics-grid">
        <div class="pubs-metric">
          <div class="font-headline-md pubs-metric-value">0</div>
          <div class="font-label-caps pubs-metric-label">CITATIONS</div>
        </div>
        <div class="pubs-metric">
          <div class="font-headline-md pubs-metric-value">${(e==null?void 0:e.filter(n=>n.peer_reviewed).length)||0}</div>
          <div class="font-label-caps pubs-metric-label">PEER_REVIEWED</div>
        </div>
      </div>
    </div>
  `}function de(e){if(!e||!e.length)return`
      <div class="content-section">
        <div class="research-section-heading">FULL_BIBLIOGRAPHY</div>
        <p class="font-body-sm" style="color: var(--on-surface-variant);">No publications found.</p>
      </div>
    `;const t={};for(const n of e){const i=n.year||"Unknown";t[i]||(t[i]=[]),t[i].push(n)}return`
    <div class="content-section">
      <div class="research-section-heading">FULL_BIBLIOGRAPHY</div>
      <div class="pub-bibliography-list" id="bibliographyList">${Object.keys(t).sort((n,i)=>i-n).map(n=>{const i=t[n].map((o,c)=>{const r=o.doi||"",d=o.citation||"",u=d?encodeURIComponent(d):"",m=`abstract-${n}-${c}`;return`
            <article class="pub-entry" data-year="${n}" data-search="${(o.title+" "+o.venue_short+" "+o.venue+" "+n).toLowerCase()}">
              <div class="pub-entry-inner">
                <div class="pub-entry-header">
                  <h3 class="font-body-lg pub-entry-title">${o.title}</h3>
                  <span class="font-mono-data pub-entry-venue-tag">${o.venue_short||n}</span>
                </div>
                <p class="font-body-sm pub-entry-authors">${(o.authors||[]).join(", ")}</p>
                <p class="font-mono-data pub-entry-source">${o.venue||""}</p>
                <div class="pub-entry-actions">
                  ${r?`<a class="pub-entry-btn font-mono-data" href="https://doi.org/${r}" target="_blank" rel="noopener noreferrer">[PDF]</a>`:""}
                  ${d?`<button class="pub-entry-btn pub-entry-cite-btn font-mono-data" type="button" data-citation="${u}">[CITATION]</button>`:""}
                  <button class="pub-entry-btn pub-entry-abstract-toggle font-mono-data" type="button" data-target="${m}" aria-label="Toggle abstract">
                    [ABSTRACT] <span class="material-symbols-outlined">expand_more</span>
                  </button>
                </div>
                <div class="pub-abstract" id="${m}">
                  <div class="pub-abstract-inner">${o.abstract||o.description||""}</div>
                </div>
              </div>
            </article>
          `}).join("");return`
        <div class="pub-year-group" data-year="${n}">
          <div class="pub-year-header">
            <span class="font-mono-data pub-year-label">${n}</span>
            <div class="pub-year-line"></div>
          </div>
          <div class="pub-year-entries">${i}</div>
        </div>
      `}).join("")}</div>
    </div>
  `}function le(e){var s;if(!e)return`<div class="container-page" style="padding-top: 4rem;">
      <p class="font-mono-data" style="color: var(--error);">No profile data available.</p>
    </div>`;const t=((s=e.research)==null?void 0:s.publications)||[];return`
    <div class="pubs-page">
      <div class="container-page pubs-page-inner blueprint-grid-lines">
        ${oe()}

        <div class="pubs-grid">
          <aside class="pubs-sidebar">
            ${ce(t)}
            ${re(t)}
          </aside>

          <section class="pubs-content">
            ${de(t)}
          </section>
        </div>
      </div>
    </div>
  `}function L(){var n;const e=window.__profile;(((n=e==null?void 0:e.research)==null?void 0:n.publications)||[]).length&&ie().then(i=>{if(!i)return;const o=document.querySelectorAll(".pubs-metric-value");if(o.length>=2){const c=i.reduce((r,d)=>r+d,0);o[0].textContent=c}});const s=document.getElementById("pubSearchInput"),a=document.getElementById("bibliographyList");s&&s.addEventListener("input",()=>{const i=s.value.toLowerCase().trim(),o=(a==null?void 0:a.querySelectorAll(".pub-entry"))||[],c=(a==null?void 0:a.querySelectorAll(".pub-year-group"))||[];o.forEach(r=>{const d=r.dataset.search||"";r.style.display=!i||d.includes(i)?"":"none"}),c.forEach(r=>{const d=[...r.querySelectorAll(".pub-entry")].some(u=>u.style.display!=="none");r.style.display=d?"":"none"})}),document.querySelectorAll(".pub-entry-abstract-toggle").forEach(i=>{i.addEventListener("click",()=>{const o=i.dataset.target,c=document.getElementById(o);if(!c)return;const r=c.classList.contains("pub-abstract--open");document.querySelectorAll(".pub-abstract--open").forEach(u=>{if(u.id!==o){u.classList.remove("pub-abstract--open");const m=document.querySelector(`[data-target="${u.id}"]`);if(m){const l=m.querySelector(".material-symbols-outlined");l&&(l.textContent="expand_more")}}}),c.classList.toggle("pub-abstract--open");const d=i.querySelector(".material-symbols-outlined");d&&(d.textContent=r?"expand_more":"expand_less")})}),document.querySelectorAll(".pub-entry-cite-btn").forEach(i=>{i.addEventListener("click",()=>{const o=decodeURIComponent(i.dataset.citation);o&&navigator.clipboard.writeText(o).then(()=>R("CITATION_COPIED")).catch(()=>{const c=document.createElement("textarea");c.value=o,c.style.cssText="position:fixed;opacity:0",document.body.appendChild(c),c.select(),document.execCommand("copy"),document.body.removeChild(c),R("CITATION_COPIED")})})})}function R(e){const t=document.querySelector(".toast-notification");t&&t.remove();const s=document.createElement("div");s.className="toast-notification font-mono-data",s.textContent=e,document.body.appendChild(s),requestAnimationFrame(()=>s.classList.add("toast-notification--visible")),setTimeout(()=>{s.classList.remove("toast-notification--visible"),s.addEventListener("transitionend",()=>s.remove(),{once:!0})},2e3)}b("publications",{render:le,mount:L});function ue(e,t){return`
    <div class="research-annotation">
      <span class="research-annotation-badge font-mono-data">PAGE. ${e}</span>
      <div class="research-annotation-line"></div>
      <span class="font-label-caps research-annotation-text">[DOCUMENT_CLASS: ${t}]</span>
    </div>
  `}function me(e){var s;const t=((s=e==null?void 0:e.find(a=>a.enrolment_number))==null?void 0:s.program)||"ELECTRONICS & COMMUNICATION ENGINEERING";return`
    <header class="academics-header">
      ${ue("01","ACADEMIC_RECORD")}
      <div class="pubs-header-bottom">
        <h1 class="font-headline-xl pubs-title">Academic History</h1>
      </div>
      <div class="academics-tags">
        <div class="academics-tag">
          <span class="font-mono-data academics-tag-label">UID:</span>
          <span class="font-mono-data academics-tag-value">2026-BT-2002</span>
        </div>
        <div class="academics-tag">
          <span class="font-mono-data academics-tag-label">PROG:</span>
          <span class="font-mono-data academics-tag-value">${t}</span>
        </div>
      </div>
    </header>
  `}function ve(e){return!e||!e.length?"":`
    <section class="academics-section">
      <div class="academics-section-header">
        <h2 class="font-headline-lg academics-section-title">[01 // EDUCATION]</h2>
        <div class="academics-section-line"></div>
      </div>
      <div class="edu-entries">${[...e].sort((a,n)=>(n.graduation_year||0)-(a.graduation_year||0)).map((a,n)=>{const i=n===0,o=a.cgpa||a.percentage,c=a.start_year?`${a.start_year} — ${a.graduation_year||"PRESENT"}`:`${a.graduation_year||""}`;return`
        <div class="edu-card ${i?"edu-card--current":""}">
          ${i?'<div class="edu-card-badge font-mono-data">CURRENT</div>':""}
          <div class="edu-card-inner">
            <div class="edu-card-header">
              <div>
                <h3 class="font-headline-md edu-card-degree">${a.degree||""}</h3>
                <p class="font-body-lg edu-card-institution">${a.institution||""}</p>
              </div>
              <div class="edu-card-dates">
                <span class="font-mono-data edu-card-year">${c}</span>
                ${a.enrolment_number?`<p class="font-mono-data edu-card-enrolment">ENROL: ${a.enrolment_number}</p>`:""}
              </div>
            </div>
            <div class="edu-card-metrics">
              ${o?`<div><p class="font-mono-data edu-card-metric-label">${a.cgpa?"CGPA":"PERCENTAGE"}</p><p class="font-headline-md edu-card-metric-value">${a.cgpa||a.percentage+"%"||""}</p></div>`:""}
              ${a.advisor?`<div><p class="font-mono-data edu-card-metric-label">ADVISOR</p><p class="font-body-lg edu-card-metric-text">${a.advisor}</p></div>`:""}
              ${a.rank?`<div><p class="font-mono-data edu-card-metric-label">RANK</p><p class="font-body-lg edu-card-metric-text">${a.rank}</p></div>`:""}
            </div>
          </div>
        </div>
      `}).join("")}</div>
    </section>
  `}function pe(e){return!e||!e.length?"":`
    <section class="academics-section">
      <div class="academics-section-header">
        <h2 class="font-headline-lg academics-section-title">[02 // RESEARCH & THESIS]</h2>
        <div class="academics-section-line"></div>
      </div>
      <div class="thesis-grid">${e.map(s=>{var i,o;const a=(s.category||[]).map(c=>`<span class="chip chip-sm chip-investigation">${c.toUpperCase().replace(/\s+/g,"_")}</span>`).join(""),n=s.start_date?`${((i=s.start_date)==null?void 0:i.substring(0,4))||""} — ${((o=s.end_date)==null?void 0:o.substring(0,4))||"PRESENT"}`:"";return`
        <div class="thesis-card">
          <div class="thesis-card-header">
            <span class="font-mono-data thesis-card-code">${s.institution||""}</span>
            <span class="font-mono-data thesis-card-year">${n}</span>
          </div>
          <h4 class="font-headline-md thesis-card-title">${s.title||""}</h4>
          <p class="font-body-sm thesis-card-desc">${s.description||""}</p>
          ${a?`<div class="thesis-card-chips">${a}</div>`:""}
          ${s.advisor?`<div class="font-mono-data thesis-card-advisor">ADVISOR: ${s.advisor}</div>`:""}
        </div>
      `}).join("")}</div>
    </section>
  `}function he(e){return!e||!e.length?"":`
    <div class="academics-sidebar-section">
      <h2 class="font-label-caps academics-sidebar-heading">AWARDS // HONORS</h2>
      <div class="awards-list">${e.map(s=>`
      <div class="award-item">
        <div class="award-dot"></div>
        <p class="font-mono-data award-year">${s.year||""}</p>
        <h4 class="font-body-md award-title">${s.title||""}</h4>
        <p class="font-body-sm award-desc">${s.description||""}</p>
      </div>
    `).join("")}</div>
    </div>
  `}function ge(e){return!e||!e.length?"":`
    <div class="academics-sidebar-section">
      <h2 class="font-label-caps academics-sidebar-heading">CERTIFICATIONS</h2>
      <div class="certs-list">${e.map(s=>`
      <div class="cert-item">
        <span class="font-mono-data cert-name">${s.title||""}</span>
        <span class="material-symbols-outlined cert-icon">verified</span>
      </div>
    `).join("")}</div>
    </div>
  `}function fe(e){var i;if(!e)return`<div class="container-page" style="padding-top: 4rem;">
      <p class="font-mono-data" style="color: var(--error);">No profile data available.</p>
    </div>`;const t=e.education||[],s=((i=e.research)==null?void 0:i.theses)||[],a=e.achievements||[],n=e.certifications||[];return`
    <div class="academics-page">
      <div class="container-page academics-page-inner blueprint-grid-lines">
        ${me(t)}

        <div class="academics-grid">
          <!-- Left Column (8 cols) -->
          <div class="academics-primary">
            ${ve(t)}
            ${pe(s)}
          </div>

          <!-- Right Sidebar (4 cols) -->
          <aside class="academics-sidebar">
            ${he(a)}
            ${ge(n)}
          </aside>
        </div>
      </div>
    </div>
  `}b("academics",{render:fe});const be=document.getElementById("app");function ye(){be.innerHTML=`
    <header id="app-header"></header>
    <main id="page-content"></main>
    <footer id="app-footer"></footer>
  `}async function T(){const e=_(),t=N(),s=P(e),a=document.getElementById("page-content");if(a){if(s&&s.render){const n=await s.render(t);a.innerHTML=n,s.mount&&s.mount()}else e==="home"?a.innerHTML=`<div class="container-page" style="padding-top: 4rem; padding-bottom: 4rem;">
      <p class="font-mono-data" style="color: var(--on-surface-variant);">// PAGE: HOME — Coming in Stage C</p>
    </div>`:a.innerHTML=`<div class="container-page" style="padding-top: 4rem; padding-bottom: 4rem;">
      <p class="font-mono-data" style="color: var(--on-surface-variant);">// PAGE: ${e.toUpperCase()} — Under construction</p>
    </div>`;window.__updateActiveNav&&window.__updateActiveNav(e)}}function $e(){const e=localStorage.getItem("theme"),t=window.matchMedia("(prefers-color-scheme: dark)").matches;e==="dark"||!e&&t?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}function Ee(){document.documentElement.classList.toggle("dark");const e=document.documentElement.classList.contains("dark");localStorage.setItem("theme",e?"dark":"light"),w()}async function Ce(){$e(),ye();const e=await O();if(!e){const n=document.getElementById("page-content");n&&(n.innerHTML='<p style="padding: 2rem; color: var(--error);">Failed to load profile data.</p>');return}const t=document.getElementById("app-header");t&&(t.innerHTML=D(e),U());const s=document.getElementById("theme-toggle-slot");s&&(s.innerHTML=H(),M());const a=document.getElementById("app-footer");a&&(a.innerHTML=x(e)),K(),L(),window.addEventListener("hashchange",T),T(),console.log("🔧 Yusuf Silicon Portfolio — Ready")}Ce().catch(e=>{console.error("❌ App initialization failed:",e)});
