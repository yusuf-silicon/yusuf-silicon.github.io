(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();let I=null;async function te(){var e;if(I)return I;try{const t=await fetch("/data/profile_data/profile.json");if(!t.ok)throw new Error(`HTTP ${t.status}`);return I=await t.json(),console.log("✅ Profile loaded:",(e=I.personal)==null?void 0:e.name),I}catch(t){return console.error("❌ Failed to load profile:",t),null}}function ae(){return I}const F={};function E(e,t){F[e.toLowerCase()]=t}function se(e){return F[e.toLowerCase()]}function ne(e){window.location.hash=`#/${e}`}function V(){return(window.location.hash.slice(1)||"/home").replace(/^\//,"").toLowerCase()}const oe=[{label:"Home",path:"home"},{label:"Research",path:"research"},{label:"Publications",path:"publications"},{label:"Academics",path:"academics"},{label:"Experience",path:"experience"},{label:"Projects",path:"projects"},{label:"Hobbies",path:"hobbies"},{label:"Contact",path:"contact"}];let w="home";function ie(e){var a;const t=((a=e==null?void 0:e.personal)==null?void 0:a.nickname)||"YUSUF_SILICON";w=V();const s=oe.map(n=>{const o=n.path===w;return`
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
        ${s}
      </nav>

      <div class="header-actions">
        <div id="theme-toggle-slot"></div>
        <button class="header-hamburger" id="header-hamburger" aria-label="Toggle navigation menu" type="button">
          <span class="material-symbols-outlined">menu</span>
        </button>
      </div>
    </div>
  `}function ce(){const e=document.querySelector(".header-inner");if(!e)return;e.addEventListener("click",a=>{const n=a.target.closest("[data-route]");if(n){a.preventDefault();const o=n.dataset.route,i=document.getElementById("header-nav"),c=document.getElementById("header-hamburger");if(i&&i.classList.contains("header-nav--open")&&(i.classList.remove("header-nav--open"),c)){const r=c.querySelector(".material-symbols-outlined");r&&(r.textContent="menu")}ne(o)}});const t=document.getElementById("header-hamburger"),s=document.getElementById("header-nav");t&&s&&t.addEventListener("click",()=>{s.classList.toggle("header-nav--open");const a=t.querySelector(".material-symbols-outlined");a&&(a.textContent=s.classList.contains("header-nav--open")?"close":"menu")}),window.__updateActiveNav=a=>{w=a,document.querySelectorAll(".header-nav-link").forEach(n=>{const o=n.dataset.route===a;n.classList.toggle("header-nav-link--active",o)})}}function re(e){if(!e)return`
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
  `}function le(){return`
    <button class="theme-toggle-btn" id="theme-toggle-btn" type="button" aria-label="Toggle theme">
      <span class="material-symbols-outlined">${document.documentElement.classList.contains("dark")?"dark_mode":"light_mode"}</span>
    </button>
  `}function de(){const e=document.getElementById("theme-toggle-btn");e&&e.addEventListener("click",()=>{$t(),z()})}function z(){const e=document.getElementById("theme-toggle-btn");if(!e)return;const t=e.querySelector(".material-symbols-outlined");if(!t)return;const s=document.documentElement.classList.contains("dark");t.textContent=s?"dark_mode":"light_mode"}function O(e){return e?e.replace(/^\.\.\//,"/data/"):""}function pe(e,t){const s=(e==null?void 0:e.name)||"",a=(e==null?void 0:e.headline)||"",n=(e==null?void 0:e.description)||"",o=(e==null?void 0:e.description_highlight)||[],i=O(e==null?void 0:e.image),r=((t==null?void 0:t.description_mentions)||[]).map(d=>`<span class="chip">${d.toUpperCase().replace(/\s+/g,"_")}</span>`).join("");let l=n;if(o.length){const d=[...o].sort((m,p)=>p.length-m.length);for(const m of d){const p=m.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");l=l.replace(new RegExp(`(${p})`,"gi"),'<span class="home-highlight">$1</span>')}}return`
    <section class="home-section">
      <div class="home-id-card">
        <div class="home-id-card-text">
          <div class="font-label-caps page-section-label id-card-label">
            <span class="section-label-dot"></span> [ID_CARD // USER_PROFILE]
          </div>
          <h1 class="font-headline-xl home-name">${s}</h1>
          <p class="font-body-lg home-headline">${a}</p>
          <p class="font-body-md home-description">${l}</p>
          <div class="home-tags">${r}</div>
        </div>
        <div class="home-id-card-image-wrapper">
          <div class="home-id-card-image-border">
            <img class="home-id-card-image progressive-image" src="${i}" alt="${(e==null?void 0:e.image_name)||s}" onload="this.classList.add('progressive-image--loaded')" />
            <div class="home-image-ref font-mono-data">${(e==null?void 0:e.image_name)||"IMG_REF_01.A"}</div>
          </div>
        </div>
      </div>
    </section>
  `}function me(e){var c,r,l,d,m,p,u,v,h,y,g;const t=((r=(c=e==null?void 0:e.research)==null?void 0:c.publications)==null?void 0:r.length)||0,s=(((d=(l=e==null?void 0:e.projects)==null?void 0:l.vlsi)==null?void 0:d.length)||0)+(((p=(m=e==null?void 0:e.projects)==null?void 0:m.iot)==null?void 0:p.length)||0)+(((v=(u=e==null?void 0:e.projects)==null?void 0:u.software)==null?void 0:v.length)||0),a=((y=(h=e==null?void 0:e.research)==null?void 0:h.theses)==null?void 0:y.length)||0,n=((g=e==null?void 0:e.certifications)==null?void 0:g.length)||0;return`
    <div class="sidebar-section">
      <div class="font-label-caps page-section-label sidebar-section-heading">01 // ANALYTICS_MODULE</div>
      <div class="metrics-grid">${[{label:"PUBLICATIONS",value:t.toString().padStart(2,"0")},{label:"PROJECTS",value:s.toString().padStart(2,"0")},{label:"THESES",value:a.toString().padStart(2,"0")},{label:"CERTIFICATIONS",value:n.toString().padStart(2,"0")}].map($=>`
      <div class="metric-card">
        <div class="font-label-caps metric-card-label">${$.label}</div>
        <div class="font-headline-md metric-card-value">${$.value}</div>
      </div>
    `).join("")}</div>
    </div>
  `}function ue(e,t){if(!e)return"";const a=[{icon:"mail",content:e.email||"",href:e.email?`mailto:${e.email}`:null},{icon:"school",content:"Google Scholar",href:e.google_scholar||null},{icon:"code",content:"github.com/yusuf-silicon",href:e.github||null},{icon:"location_on",content:(t==null?void 0:t.location)||""}].filter(o=>o.content).map(o=>`
      <li class="contact-item">
        <span class="material-symbols-outlined contact-icon">${o.icon}</span>
        ${o.href?`<a class="contact-link" href="${o.href}" target="_blank" rel="noopener noreferrer">${o.content}</a>`:`<span class="contact-text">${o.content}</span>`}
      </li>
    `).join(""),n=e.resume?O(e.resume):"#";return`
    <div class="sidebar-section">
      <div class="font-label-caps page-section-label sidebar-section-heading">02 // COMMUNICATION_BUS</div>
      <ul class="contact-list">${a}</ul>
      <div class="resume-btn-wrapper">
        <a href="${n}" class="resume-btn font-label-caps" target="_blank" rel="noopener noreferrer">
          DOWNLOAD_CV.PDF
        </a>
      </div>
    </div>
  `}function ve(e){const t=(e==null?void 0:e.overview)||[];return t.length?`
    <div class="sidebar-section">
      <div class="font-label-caps page-section-label sidebar-section-heading">// RESEARCH_INTERESTS</div>
      <div class="interests-visual">${t.map(a=>{const n=(a.includes||[]).map(o=>`<span class="chip chip-sm">${o}</span>`).join("");return`
        <div class="interest-area">
          <div class="font-label-caps interest-area-name">${a.name.toUpperCase().replace(/\s+/g,"_")}</div>
          <div class="interest-area-chips">${n}</div>
        </div>
      `}).join("")}</div>
    </div>
  `:""}function he(e){return!e||!e.length?"":`
    <div class="content-section">
      <div class="content-section-header">
        <div class="font-label-caps page-section-label">03 // PEER_REVIEWED_ARCHIVE</div>
        <a class="font-mono-data content-section-link" href="#/publications">VIEW_ALL_PUBLICATIONS</a>
      </div>
      <div class="pub-cards">${e.slice(0,2).map(a=>{const n=a.year||"",o=a.month||"",i=a.venue_short||"",c=a.doi||"",r=a.citation||"",l=r?encodeURIComponent(r):"";return`
        <div class="pub-card">
          <div class="font-mono-data pub-card-year">${n}${o?"."+o.substring(0,3).toUpperCase():""}</div>
          <div class="font-label-caps pub-card-venue">${i}</div>
          <h3 class="font-headline-md pub-card-title">${a.title}</h3>
          <p class="font-body-sm pub-card-authors">${(a.authors||[]).join(", ")}</p>
          <p class="font-body-sm pub-card-desc">${a.description||""}</p>
          <div class="pub-card-actions">
            ${c?`<a class="pub-action font-mono-data" href="https://doi.org/${c}" target="_blank" rel="noopener noreferrer">
              <span class="material-symbols-outlined">description</span> PDF
            </a>`:""}
            ${r?`<button class="pub-action font-mono-data citation-btn" type="button" data-citation="${l}">
              <span class="material-symbols-outlined">share</span> CITATION
            </button>`:""}
          </div>
        </div>
      `}).join("")}</div>
    </div>
  `}function ge(e){const s=((e==null?void 0:e.vlsi)||[]).filter(n=>n.featured).slice(0,2);return s.length?`
    <div class="content-section">
      <div class="content-section-header">
        <div class="font-label-caps page-section-label">04 // HARDWARE_REPO</div>
        <a class="font-mono-data content-section-link" href="#/projects">VIEW_PROJECTS</a>
      </div>
      <div class="project-cards">${s.map(n=>{var r;const o=O(n.thumbnail),c=(((r=n.techStack)==null?void 0:r.languages)||[]).slice(0,2).map(l=>`<span class="chip chip-tech">${l.toUpperCase()}</span>`).join("");return`
        <div class="project-card">
          <div class="project-card-thumb">
            <img src="${o}" alt="${n.title}" class="progressive-image" onload="setTimeout(()=>this.classList.add('progressive-image--loaded'),300)" />
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
  `:""}function fe(e){var i;if(!e)return`<div class="container-page" style="padding-top: 4rem;">
      <p class="font-mono-data" style="color: var(--error);">No profile data available.</p>
    </div>`;const t=e.personal,s=e.interests,a=e.contact,n=(i=e.research)==null?void 0:i.publications,o=e.projects;return`
    <div class="home-page">
      <div class="container-page home-page-inner blueprint-grid-lines">
        ${pe(t,s)}

        <!-- Two-column grid: sidebar + content -->
        <div class="home-grid">
          <!-- Left Sidebar (4 cols) -->
          <aside class="home-sidebar">
            ${me(e)}
            ${ue(a,t)}
            ${ve(s)}
          </aside>

          <!-- Right Content (8 cols) -->
          <section class="home-content">
            ${he(n)}
            ${ge(o)}
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
  `}function be(){const e=document.getElementById("page-content");e&&(document.querySelectorAll(".progressive-image").forEach(t=>{t.complete&&t.classList.add("progressive-image--loaded")}),e.addEventListener("click",t=>{const s=t.target.closest(".citation-btn");if(!s)return;t.preventDefault();const a=decodeURIComponent(s.dataset.citation);a&&navigator.clipboard.writeText(a).then(()=>{H("CITATION_COPIED")}).catch(()=>{const n=document.createElement("textarea");n.value=a,n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n),H("CITATION_COPIED")})}))}function H(e){const t=document.querySelector(".toast-notification");t&&t.remove();const s=document.createElement("div");s.className="toast-notification font-mono-data",s.textContent=e,document.body.appendChild(s),requestAnimationFrame(()=>{s.classList.add("toast-notification--visible")}),setTimeout(()=>{s.classList.remove("toast-notification--visible"),s.addEventListener("transitionend",()=>s.remove(),{once:!0})},2e3)}E("home",{render:fe});function ye(e){const t=(e||"").toLowerCase();return t.includes("architecture")||t.includes("memory")||t.includes("processor")?"developer_board":t.includes("ai")||t.includes("acceleration")||t.includes("cryptographic")?"neurology":t.includes("energy")||t.includes("high-perform")||t.includes("security")?"bolt":"science"}function $e(e,t){const s=a=>a?new Date(a).toLocaleDateString("en-US",{year:"numeric",month:"short"}):"";return`${s(e)} — ${s(t)||"PRESENT"}`}function Ee(e,t){return`
    <div class="research-annotation">
      <span class="research-annotation-badge font-mono-data">PAGE. ${e}</span>
      <div class="research-annotation-line"></div>
      <span class="font-label-caps research-annotation-text">[DOCUMENT_CLASS: ${t}]</span>
    </div>
  `}function Ce(e){const t=(e==null?void 0:e.overview)||[];return t.length?`
    <div class="sidebar-section">
      <div class="font-label-caps research-section-heading">[RESEARCH_AREAS_V2.0]</div>
      <ul class="research-area-list">${t.map(a=>`
        <li class="research-area-item">
          <div class="research-area-item-inner">
            <span class="material-symbols-outlined research-area-icon">${ye(a.name)}</span>
            <div class="research-area-content">
              <h3 class="font-headline-md research-area-name">${a.name}</h3>
              <p class="font-body-sm research-area-desc research-text-justify">${a.description||""}</p>
            </div>
          </div>
        </li>
      `).join("")}</ul>
    </div>
  `:""}function Se(e){var i,c,r,l,d,m;const t=((c=(i=e==null?void 0:e.interests)==null?void 0:i.overview)==null?void 0:c.length)||0,s=((l=(r=e==null?void 0:e.research)==null?void 0:r.publications)==null?void 0:l.length)||0,a=((m=(d=e==null?void 0:e.research)==null?void 0:d.theses)==null?void 0:m.length)||0;return`
    <div class="sidebar-section">
      <div class="font-label-caps research-section-heading">[SYSTEM_METRICS]</div>
      <div class="metrics-table">${[{label:"RESEARCH_INTERESTS",value:t.toString().padStart(2,"0")},{label:"PUBLICATIONS",value:s.toString().padStart(2,"0")},{label:"THESES",value:a.toString().padStart(2,"0")}].map(p=>`
      <div class="metric-row">
        <span class="font-mono-data metric-row-label">${p.label}</span>
        <span class="font-mono-data metric-row-value">${p.value}</span>
      </div>
    `).join("")}</div>
    </div>
  `}function Ie(e){const t=(e||[]).filter(a=>a.status==="active");return t.length?`
    <section class="content-section research-section">
      <div class="font-label-caps research-section-heading content-section-label">
        <span class="section-label-dot"></span> [CURRENT_INVESTIGATIONS]
      </div>
      <div class="investigations-grid">${t.map((a,n)=>{const o=(a.category||[]).map(i=>`<span class="chip chip-sm chip-investigation">${i.toUpperCase().replace(/\s+/g,"_")}</span>`).join("");return`
        <div class="investigation-card">
          <span class="investigation-card-number font-mono-data">#${String(n+1).padStart(3,"0")}</span>
          <h3 class="font-headline-md investigation-card-title">${a.title||""}</h3>
          <p class="font-body-sm investigation-card-desc research-text-justify">${a.description||""}</p>
          ${o?`<div class="investigation-card-chips">${o}</div>`:""}
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
    `}function Te(e,t){const s=(t==null?void 0:t.research)||[];if(!s.length)return"";const a=(e==null?void 0:e.length)||0;return`
    <section class="content-section research-section future-section">
      <div class="font-label-caps research-section-heading content-section-label">[FUTURE_DIRECTIONS_ROADMAP]</div>
      <div class="future-directions">${s.map((o,i)=>{const c=a+i+1;return`
        <div class="future-direction-item">
          <span class="font-mono-data future-direction-id">${`PROJECT_${String(c).padStart(3,"0")}`}</span>
          <div>
            <h4 class="font-headline-md future-direction-title">${o.title}</h4>
            <p class="font-body-sm future-direction-desc research-text-justify">${o.description||""}</p>
          </div>
        </div>
      `}).join("")}</div>
    </section>
  `}function _e(e){const t=(e||[]).filter(a=>a.status!=="active");return t.length?`
    <section class="content-section research-section">
      <div class="font-label-caps research-section-heading content-section-label">[EVOLUTION_TIMELINE]</div>
      <div class="timeline">
        <div class="timeline-line"></div>
        ${t.map((a,n)=>{const o=$e(a.start_date,a.end_date);return`
        <div class="timeline-entry">
          <div class="timeline-node-col">
            <div class="timeline-node ${n===0?"timeline-node--active":""}"></div>
          </div>
          <div class="timeline-content">
            <div class="timeline-header">
              <span class="font-mono-data timeline-date">${o}</span>
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
  `:""}function je(e){var n;if(!e)return`<div class="container-page" style="padding-top: 4rem;">
      <p class="font-mono-data" style="color: var(--error);">No profile data available.</p>
    </div>`;const t=e.interests,s=(n=e.research)==null?void 0:n.theses,a=e.future_projects;return`
    <div class="research-page">
      <div class="container-page research-page-inner blueprint-grid-lines">
        <div class="pubs-header">
          ${Ee("02","RESEARCH_MANIFESTO")}
          <div class="pubs-header-bottom" style="margin-bottom: 0;">
            <h1 class="font-headline-xl pubs-title">Research Repository</h1>
          </div>
        </div>

        <div class="research-grid">
          <aside class="research-sidebar">
            ${Ce(t)}
            ${Se(e)}
          </aside>

          <section class="research-content">
            ${Ie(s)}
            ${Te(s,a)}
            ${_e(s)}
          </section>
        </div>
      </div>
    </div>
  `}E("research",{render:je});function Ae(e,t){return`
    <div class="research-annotation">
      <span class="research-annotation-badge font-mono-data">PAGE. ${e}</span>
      <div class="research-annotation-line"></div>
      <span class="font-label-caps research-annotation-text">[DOCUMENT_CLASS: ${t}]</span>
    </div>
  `}let j=null;async function Le(){if(j!==null)return j;try{const t=await(await fetch("https://api.allorigins.win/raw?url="+encodeURIComponent("https://scholar.google.com/citations?user=EJitK1IAAAAJ&hl=en&pagesize=100"),{signal:AbortSignal.timeout(5e3)})).text(),s=/citedby\s*=\s*['"](\d+)['"]/gi;let a;const n=[];for(;(a=s.exec(t))!==null;)n.push(parseInt(a[1],10));j=n.length?n:null}catch{j=null}return j}function Re(){return`
    <div class="pubs-header">
      ${Ae("03","PUBLICATION_ARCHIVE")}
      <div class="pubs-header-bottom">
        <h1 class="font-headline-xl pubs-title">Scientific Publications</h1>
        <div class="pubs-search">
          <span class="material-symbols-outlined pubs-search-icon">search</span>
          <input class="pubs-search-input font-mono-data" type="text" id="pubSearchInput" placeholder="Filter by Venue, Keyword, or Year..." />
        </div>
      </div>
    </div>
  `}function xe(e,t){var m;if(!e||!e.length)return"";const s=e.map(()=>0),n=[...e.map((p,u)=>({...p,citations:s[u]||0}))].sort((p,u)=>u.citations-p.citations),o=((m=n[0])==null?void 0:m.citations)||0,i=n.filter(p=>p.citations===o),c=e.filter(p=>p.featured),r=(p,u)=>p.map((v,h)=>`
      <div class="selected-work-entry">
        ${h>0?'<div class="selected-work-divider"></div>':""}
        <div class="font-mono-data selected-work-fig">${u} ${String(h+1).padStart(2,"0")}</div>
        <h3 class="font-headline-md selected-work-title">${v.title}</h3>
        <p class="font-body-sm selected-work-venue">${v.venue_short||v.venue||""}</p>
        ${v.citations!==void 0?`<div class="font-mono-data selected-work-cites">CITATIONS: ${v.citations}</div>`:""}
      </div>
    `).join(""),l=i.length?r(i,"// TOP_CITED"):"",d=c.length?r(c,"// FEATURED"):"";return`
    <div class="sidebar-section pubs-selected-works">
      <div class="research-section-heading">SELECTED_WORKS</div>
      ${l?`<div class="selected-works-list">${l}</div>`:""}
      ${d?`<div class="selected-works-list" style="${l?"margin-top: 1.5rem;":""}">${d}</div>`:""}
    </div>
  `}function we(e,t){return e!=null&&e.length,`
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
  `}function Oe(e){if(!e||!e.length)return`
      <div class="content-section">
        <div class="research-section-heading">FULL_BIBLIOGRAPHY</div>
        <p class="font-body-sm" style="color: var(--on-surface-variant);">No publications found.</p>
      </div>
    `;const t={};for(const n of e){const o=n.year||"Unknown";t[o]||(t[o]=[]),t[o].push(n)}return`
    <div class="content-section">
      <div class="research-section-heading">FULL_BIBLIOGRAPHY</div>
      <div class="pub-bibliography-list" id="bibliographyList">${Object.keys(t).sort((n,o)=>o-n).map(n=>{const o=t[n].map((i,c)=>{const r=i.doi||"",l=i.citation||"",d=l?encodeURIComponent(l):"",m=`abstract-${n}-${c}`;return`
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
                  ${l?`<button class="pub-entry-btn pub-entry-cite-btn font-mono-data" type="button" data-citation="${d}">[CITATION]</button>`:""}
                  <button class="pub-entry-btn pub-entry-abstract-toggle font-mono-data" type="button" data-target="${m}" aria-label="Toggle abstract">
                    [ABSTRACT] <span class="material-symbols-outlined">expand_more</span>
                  </button>
                </div>
                <div class="pub-abstract" id="${m}">
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
  `}function Ne(e){var s;if(!e)return`<div class="container-page" style="padding-top: 4rem;">
      <p class="font-mono-data" style="color: var(--error);">No profile data available.</p>
    </div>`;const t=((s=e.research)==null?void 0:s.publications)||[];return`
    <div class="pubs-page">
      <div class="container-page pubs-page-inner blueprint-grid-lines">
        ${Re()}

        <div class="pubs-grid">
          <aside class="pubs-sidebar">
            ${xe(t)}
            ${we(t)}
          </aside>

          <section class="pubs-content">
            ${Oe(t)}
          </section>
        </div>
      </div>
    </div>
  `}function W(){var n;const e=window.__profile;(((n=e==null?void 0:e.research)==null?void 0:n.publications)||[]).length&&Le().then(o=>{if(!o)return;const i=document.querySelectorAll(".pubs-metric-value");if(i.length>=2){const c=o.reduce((r,l)=>r+l,0);i[0].textContent=c}});const s=document.getElementById("pubSearchInput"),a=document.getElementById("bibliographyList");s&&s.addEventListener("input",()=>{const o=s.value.toLowerCase().trim(),i=(a==null?void 0:a.querySelectorAll(".pub-entry"))||[],c=(a==null?void 0:a.querySelectorAll(".pub-year-group"))||[];i.forEach(r=>{const l=r.dataset.search||"";r.style.display=!o||l.includes(o)?"":"none"}),c.forEach(r=>{const l=[...r.querySelectorAll(".pub-entry")].some(d=>d.style.display!=="none");r.style.display=l?"":"none"})}),document.querySelectorAll(".pub-entry-abstract-toggle").forEach(o=>{o.addEventListener("click",()=>{const i=o.dataset.target,c=document.getElementById(i);if(!c)return;const r=c.classList.contains("pub-abstract--open");document.querySelectorAll(".pub-abstract--open").forEach(d=>{if(d.id!==i){d.classList.remove("pub-abstract--open");const m=document.querySelector(`[data-target="${d.id}"]`);if(m){const p=m.querySelector(".material-symbols-outlined");p&&(p.textContent="expand_more")}}}),c.classList.toggle("pub-abstract--open");const l=o.querySelector(".material-symbols-outlined");l&&(l.textContent=r?"expand_more":"expand_less")})}),document.querySelectorAll(".pub-entry-cite-btn").forEach(o=>{o.addEventListener("click",()=>{const i=decodeURIComponent(o.dataset.citation);i&&navigator.clipboard.writeText(i).then(()=>D("CITATION_COPIED")).catch(()=>{const c=document.createElement("textarea");c.value=i,c.style.cssText="position:fixed;opacity:0",document.body.appendChild(c),c.select(),document.execCommand("copy"),document.body.removeChild(c),D("CITATION_COPIED")})})})}function D(e){const t=document.querySelector(".toast-notification");t&&t.remove();const s=document.createElement("div");s.className="toast-notification font-mono-data",s.textContent=e,document.body.appendChild(s),requestAnimationFrame(()=>s.classList.add("toast-notification--visible")),setTimeout(()=>{s.classList.remove("toast-notification--visible"),s.addEventListener("transitionend",()=>s.remove(),{once:!0})},2e3)}E("publications",{render:Ne,mount:W});function ke(e,t){return`
    <div class="research-annotation">
      <span class="research-annotation-badge font-mono-data">PAGE. ${e}</span>
      <div class="research-annotation-line"></div>
      <span class="font-label-caps research-annotation-text">[DOCUMENT_CLASS: ${t}]</span>
    </div>
  `}function Pe(e){var s;const t=((s=e==null?void 0:e.find(a=>a.enrolment_number))==null?void 0:s.program)||"ELECTRONICS & COMMUNICATION ENGINEERING";return`
    <header class="academics-header">
      ${ke("04","ACADEMIC_RECORD")}
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
  `}function Me(e){return!e||!e.length?"":`
    <section class="academics-section">
      <div class="academics-section-header">
        <h2 class="font-headline-lg academics-section-title">[01 // EDUCATION]</h2>
        <div class="academics-section-line"></div>
      </div>
      <div class="edu-entries">${[...e].sort((a,n)=>(n.graduation_year||0)-(a.graduation_year||0)).map((a,n)=>{const o=!a.graduation_year,i=a.cgpa||a.percentage,c=a.max_cgpa||a.max_percentage||"",r=a.cgpa?`${a.cgpa}${c?" / "+Number(c).toFixed(2):""}`:a.percentage?`${a.percentage}${c?" / "+Number(c).toFixed(2):""}%`:"",l=a.start_year?`${a.start_year} — ${a.graduation_year||"PRESENT"}`:`${a.graduation_year||""}`,d=a.coursework||[];return`
        <div class="edu-card ${o?"edu-card--current":""}">
          ${o?'<div class="edu-card-badge font-mono-data">CURRENT</div>':""}
          <div class="edu-card-inner">
            <div class="edu-card-header">
              <div>
                <h3 class="font-headline-md edu-card-degree">${a.degree||""}</h3>
                <p class="font-body-lg edu-card-institution">${a.institution||""}</p>
              </div>
              <div class="edu-card-dates">
                <span class="font-mono-data edu-card-year">${l}</span>
                ${a.enrolment_number?`<p class="font-mono-data edu-card-enrolment">ENROL: ${a.enrolment_number}</p>`:""}
              </div>
            </div>
            <div class="edu-card-metrics">
              ${i?`<div><p class="font-mono-data edu-card-metric-label">${a.cgpa?"CGPA":"PERCENTAGE"}</p><p class="font-headline-md edu-card-metric-value">${r}</p></div>`:""}
              ${a.advisor?`<div><p class="font-mono-data edu-card-metric-label">ADVISOR</p><p class="font-body-lg edu-card-metric-text">${a.advisor}</p></div>`:""}
              ${a.rank?`<div><p class="font-mono-data edu-card-metric-label">RANK</p><p class="font-body-lg edu-card-metric-text">${a.rank}</p></div>`:""}
            </div>
            ${d.length?`
            <div class="edu-card-coursework">
              <p class="font-mono-data edu-card-coursework-label">SELECTED_COURSEWORK // ${(a.short_form||a.degree||"").toUpperCase()}</p>
              <div class="edu-card-coursework-grid">
                ${d.map((m,p)=>`
                  <div class="edu-card-coursework-item font-mono-data">
                    <span class="edu-card-coursework-num">${String(p+1).padStart(2,"0")}</span> ${m}
                  </div>
                `).join("")}
              </div>
            </div>`:""}
          </div>
        </div>
      `}).join("")}</div>
    </section>
  `}function Ue(e){return!e||!e.length?"":`
    <section class="academics-section">
      <div class="academics-section-header">
        <h2 class="font-headline-lg academics-section-title">[02 // RESEARCH & THESIS]</h2>
        <div class="academics-section-line"></div>
      </div>
      <div class="thesis-grid">${e.map(s=>{var o,i;const a=(s.category||[]).map(c=>`<span class="chip chip-sm chip-investigation">${c.toUpperCase().replace(/\s+/g,"_")}</span>`).join(""),n=s.start_date?`${((o=s.start_date)==null?void 0:o.substring(0,4))||""} — ${((i=s.end_date)==null?void 0:i.substring(0,4))||"PRESENT"}`:"";return`
        <div class="thesis-card">
          <div class="thesis-card-header">
            <span class="font-mono-data thesis-card-code">${s.institution||""}</span>
            <span class="font-mono-data thesis-card-year">${n}</span>
          </div>
          <h4 class="font-headline-md thesis-card-title">${s.title||""}</h4>
          <p class="font-body-sm thesis-card-desc">${s.description||""}</p>
          ${a?`<div class="thesis-card-chips">${a}</div>`:""}
          ${s.advisor||s.research_lab?`
          <div class="thesis-card-divider"></div>
          <div class="thesis-card-footer">
            ${s.advisor?`<div class="font-mono-data thesis-card-advisor">ADVISOR: ${s.advisor}</div>`:""}
            ${s.research_lab?`<div class="font-mono-data thesis-card-lab">LAB: ${s.research_lab}</div>`:""}
          </div>`:""}
        </div>
      `}).join("")}</div>
    </section>
  `}function He(e){if(!e||!e.length)return"";const t=e.filter(a=>a.featured!==!1);return t.length?`
    <div class="academics-sidebar-section">
      <h2 class="font-label-caps academics-sidebar-heading">AWARDS // HONORS</h2>
      <div class="awards-list">${t.map(a=>`
      <div class="award-item">
        <div class="award-dot"></div>
        <p class="font-mono-data award-year">${a.year||""}</p>
        <h4 class="font-body-md award-title">${a.title||""}</h4>
        <p class="font-body-sm award-desc">${a.description||""}</p>
      </div>
    `).join("")}</div>
    </div>
  `:""}function De(e){if(!e||!e.length)return"";const t=e.filter(a=>a.featured!==!1);return t.length?`
    <div class="academics-sidebar-section">
      <h2 class="font-label-caps academics-sidebar-heading">CERTIFICATIONS</h2>
      <div class="certs-list">${t.map(a=>`
      <div class="cert-item">
        <span class="font-mono-data cert-name">${a.title||""}</span>
        <span class="material-symbols-outlined cert-icon">verified</span>
      </div>
    `).join("")}</div>
    </div>
  `:""}function Ge(e){var o;if(!e)return`<div class="container-page" style="padding-top: 4rem;">
      <p class="font-mono-data" style="color: var(--error);">No profile data available.</p>
    </div>`;const t=e.education||[],s=((o=e.research)==null?void 0:o.theses)||[],a=e.achievements||[],n=e.certifications||[];return`
    <div class="academics-page">
      <div class="container-page academics-page-inner blueprint-grid-lines">
        ${Pe(t)}

        <div class="academics-grid">
          <!-- Left Column (8 cols) -->
          <div class="academics-primary">
            ${Me(t)}
            ${Ue(s)}
          </div>

          <!-- Right Sidebar (4 cols) -->
          <aside class="academics-sidebar">
            ${He(a)}
            ${De(n)}
          </aside>
        </div>
      </div>
    </div>
  `}E("academics",{render:Ge});function Be(e,t){return`<div class="research-annotation"><span class="research-annotation-badge font-mono-data">PAGE. ${e}</span><div class="research-annotation-line"></div><span class="font-label-caps research-annotation-text">[DOCUMENT_CLASS: ${t}]</span></div>`}function x(e){return e?e.toLowerCase()==="present"?"Present":new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short"}):""}function G(e){return e?e.replace(/^\.\.\//,"/data/"):""}function qe(e,t){const s=[],a={};return e&&Object.keys(e).forEach(n=>{(e[n]||[]).forEach(o=>{const i=x(o.start_date),c=x(o.end_date),r=`${i}${c?" — "+c:""}`;s.push({...o,_type:n,_label:`${r} // ${(o.type||n).toUpperCase()}`,_dateLabel:r}),a[n]=!0})}),(t||[]).forEach(n=>{const o=x(n.start_date),i=x(n.end_date),c=`${o}${i?" — "+i:""}`;s.push({...n,_type:"Community Outreach",_label:`${c} // ${(n.type||"OUTREACH").toUpperCase()}`,_dateLabel:c}),a["Community Outreach"]=!0}),{entries:s,typeMap:a}}function Fe(e){return e.length?`<div class="exp-timeline-col" id="exp-timeline-col">${e.map((s,a)=>{const n=(s.description||[]).map((c,r)=>`<div class="exp-timeline-item"><span class="font-mono-data exp-item-num">[${String(r+1).padStart(2,"0")}]</span><p class="font-body-sm exp-item-text exp-text-justify">${c}</p></div>`).join(""),o=s.mentions?Object.entries(s.mentions).map(([c,r])=>`<div class="font-mono-data exp-timeline-mention">${c.replace(/_/g," ").toUpperCase()}: ${r}</div>`).join(""):"",i=`data-exp-idx="${a}" data-tech="${encodeURIComponent(JSON.stringify(s.tech_stack||[]))}" data-skills="${encodeURIComponent(JSON.stringify(s.skills||[]))}"`;return`<div class="exp-timeline-entry exp-card-clickable" data-exp-type="${s._type.toLowerCase()}" ${i}><div class="exp-timeline-line"></div><div class="exp-timeline-node"></div><div class="exp-timeline-content"><div class="font-label-caps exp-timeline-label">${s._label}</div><div class="font-mono-data exp-timeline-role">${s.role||""}</div><h2 class="font-headline-lg exp-timeline-title exp-card-title">${s.title||""}</h2><h3 class="font-headline-md exp-timeline-org">${s.organization||""}</h3><div class="exp-timeline-items">${n}</div>${o}</div></div>`}).join("")}</div>`:""}function Ve(e){return`<div class="exp-sidebar-card"><h4 class="font-label-caps exp-sidebar-heading">LOG_NAVIGATOR</h4><ul class="exp-nav-list">${Object.keys(e).map(a=>{const n=a.toLowerCase(),o=n.includes("intern")?"terminal":n.includes("research")?"biotech":n.includes("outreach")?"groups":"work";return`<li><a class="exp-nav-link font-mono-data exp-nav-filter" href="#" data-filter="${n}"><span class="material-symbols-outlined">${o}</span> ${a}</a></li>`}).join("")}</ul></div>`}function ze(){return'<div class="exp-tech-card"><h4 class="font-label-caps exp-sidebar-heading">TECH_STACK // UTILIZED</h4><div id="exp-tech-stack-content" class="exp-tech-stack-content"><p class="font-body-sm exp-tech-placeholder">Click an experience entry to view tech stack.</p></div></div>'}function We(e){return e.length?'<div id="exp-image-rotator-card"><div id="exp-image-container"><div style="color:var(--on-surface-variant);opacity:0.6;text-align:center;padding:1rem;font-size:var(--text-body-sm)">Loading media...</div></div></div>':""}function Ye(e,t){var a,n,o,i,c,r;return`<div class="exp-metric-section"><h3 class="font-label-caps exp-metric-title">[METRIC_SUMMARY // AGGREGATED]</h3><div class="exp-metrics-grid"><div class="exp-metric-card"><span class="font-mono-data exp-metric-label">PROJECTS COMPLETED</span><div class="font-headline-xl exp-metric-value">${(((n=(a=e.projects)==null?void 0:a.vlsi)==null?void 0:n.length)||0)+(((i=(o=e.projects)==null?void 0:o.iot)==null?void 0:i.length)||0)+(((r=(c=e.projects)==null?void 0:c.software)==null?void 0:r.length)||0)}+</div></div><div class="exp-metric-card"><span class="font-mono-data exp-metric-label">TOTAL POSITIONS</span><div class="font-headline-xl exp-metric-value">${t.length}</div></div></div></div>`}function Je(e){if(!e)return'<div class="container-page" style="padding-top:4rem"><p class="font-mono-data" style="color:var(--error)">No profile data.</p></div>';const{entries:t,typeMap:s}=qe(e.experience,e.communityOutreach),a=[],n={};return t.forEach(o=>{const i=o.pictures;if(!i)return;const c=o.title||o.organization||"U";n[c]||(n[c]={IMG:0,FIG:0}),i.images&&Object.entries(i.images).forEach(([r,l])=>{n[c].IMG++,a.push({type:"IMG",num:n[c].IMG,name:r,url:G(l),source:c})}),i.figures&&Object.entries(i.figures).forEach(([r,l])=>{n[c].FIG++,a.push({type:"FIG",num:n[c].FIG,name:r,url:G(l),source:c})})}),window.__expPictures=a,`<div class="exp-page"><div class="exp-bg-overlay"></div><div class="container-page exp-page-inner blueprint-grid-lines"><div class="pubs-header">${Be("05","EXPERIENCE_LOG")}<div class="pubs-header-bottom"><h1 class="font-headline-xl pubs-title">Professional Experience</h1></div></div><div class="exp-grid">${Fe(t)}<aside class="exp-sidebar">${Ve(s)}${ze()}${We(a)}</aside></div>${Ye(e,t)}</div></div>`}function Ke(){const e=document.getElementById("exp-tech-stack-content");document.querySelectorAll(".exp-card-clickable").forEach(r=>{r.addEventListener("click",()=>{let l=[],d=[];try{l=JSON.parse(decodeURIComponent(r.dataset.tech))}catch{}try{d=JSON.parse(decodeURIComponent(r.dataset.skills))}catch{}e&&(e.innerHTML=l.map(m=>`<span class="exp-skill-chip font-mono-data">${m}</span>`).join(""),d.length&&(e.innerHTML+=`<div class="exp-tech-divider"></div>${d.map(m=>`<span class="exp-skill-chip font-mono-data">${m}</span>`).join("")}`))})});let t="";document.querySelectorAll(".exp-nav-filter").forEach(r=>{r.addEventListener("click",l=>{l.preventDefault(),t=t===r.dataset.filter?"":r.dataset.filter,document.querySelectorAll(".exp-timeline-entry").forEach(d=>{d.style.display=!t||d.dataset.expType===t?"":"none"})})});const s=window.__expPictures||[];let a=2;s.forEach(r=>{const l=Math.max(1,Math.ceil(r.name.length/35)),d=Math.max(1,Math.ceil(r.source.length/35));a=Math.max(a,l+d)});const n=a*.875+"em",o=document.getElementById("exp-image-container");if(o&&s.length){let d=function(p){return`<div style="border:1px solid var(--outline-variant);padding:0.5rem;background:var(--surface-container-lowest)"><div style="aspect-ratio:1/1;overflow:hidden;background:var(--surface-container);margin-bottom:0.5rem"><img src="${p.url}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.onerror=null;this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;padding:1rem;text-align:center;color:var(--on-surface-variant);font-size:var(--text-body-sm)'>'+this.alt+'</div>'" /></div><div style="height:${n};overflow:hidden;display:flex;flex-direction:column;justify-content:space-between"><p style="font-family:var(--font-mono);font-size:0.625rem;color:var(--on-surface-variant);line-height:1.4;margin:0;overflow:hidden" id="exp-rotator-line1"></p><p style="font-family:var(--font-mono);font-size:0.625rem;color:var(--outline);line-height:1.4;margin:0;overflow:hidden;font-style:italic" id="exp-rotator-line2"></p></div></div>`},m=function(p){const u=`${p.type}.${String(p.num).padStart(2,"0")}: ${p.name}`,v=`— ${p.source}`,h=document.getElementById("exp-rotator-line1"),y=document.getElementById("exp-rotator-line2");if(!h||!y)return;let g=0;function $(){g<=u.length?(h.innerHTML=u.substring(0,g)+r,g++,setTimeout($,15)):(g=0,h.innerHTML=u,setTimeout(S,200))}function S(){g<=v.length?(y.innerHTML=v.substring(0,g),g++,setTimeout(S,15)):(y.innerHTML=v,setTimeout(()=>{let f=v.length;function L(){if(f>=0)y.innerHTML=v.substring(0,f),f--,setTimeout(L,10);else{let T=function(){f>=0?(h.innerHTML=u.substring(0,f),f--,setTimeout(T,10)):(h.innerHTML="",y.innerHTML="",h.innerHTML=r,setTimeout(()=>{let C;do C=s[Math.floor(Math.random()*s.length)];while(C===p&&s.length>1);const R=new Image;R.onload=()=>{o.style.opacity="0",setTimeout(()=>{l=C,o.innerHTML=d(C),o.style.opacity="1",m(C)},200)},R.src=C.url},500))};var k=T;f=u.length,y.innerHTML="",setTimeout(T,100)}}setTimeout(L,3e3)},1500))}$()};var i=d,c=m;const r='<span class="exp-loc-cursor">|</span>';s.forEach(p=>{const u=new Image;u.src=p.url});let l=s[0];o.innerHTML=d(l),m(l)}}E("experience",{render:Je,mount:Ke});function A(e){return e?e.replace(/^\.\.\//,"/data/"):""}function Xe(e,t){return`
    <div class="research-annotation">
      <span class="research-annotation-badge font-mono-data">PAGE. ${e}</span>
      <div class="research-annotation-line"></div>
      <span class="font-label-caps research-annotation-text">[DOCUMENT_CLASS: ${t}]</span>
    </div>`}function Y(e){const t=[];if(!e)return t;for(const[s,a]of Object.entries(e))Array.isArray(a)&&a.forEach(n=>{t.push({...n,_type:s.toUpperCase()})});return t}function Qe(e){const t=new Set,s=new Set,a=new Set;return e.forEach(n=>{const o=n.techStack||{};(o.tools||[]).forEach(i=>t.add(i)),(o.languages||[]).forEach(i=>s.add(i)),(o.concepts||[]).forEach(i=>a.add(i))}),{tools:[...t],languages:[...s],concepts:[...a]}}function Ze(e,t){var P,M,U;const s=e.technical_specs||null,a=s?Object.entries(s).map(([b,_])=>({label:b.toUpperCase().replace(/\s+/g,"_"),value:_})):[],n=a.length>0,o=[...((P=e.techStack)==null?void 0:P.languages)||[],...((M=e.techStack)==null?void 0:M.tools)||[],...((U=e.techStack)==null?void 0:U.concepts)||[]].slice(0,8),i=o.map(b=>`<span class="proj-chip font-mono-data">${b}</span>`).join(""),r=(e.highlights||[]).slice(0,4).map(b=>`<li class="font-body-sm proj-highlight-item">${b}</li>`).join(""),l=A(e.thumbnail),d=!!e.thumbnail,m=e.github||"",p=e.results||{},u=Object.entries(p).filter(([b,_])=>b&&_),v=n?`
    <div class="proj-specs-col">
      <h3 class="font-label-caps proj-specs-heading">TECHNICAL_SPECIFICATIONS</h3>
      <ul class="proj-specs-list">
        ${a.map(b=>`<li class="proj-specs-item"><span class="proj-specs-label font-mono-data">${b.label}</span><span class="proj-specs-value font-mono-data">${b.value}</span></li>`).join("")}
      </ul>
    </div>`:`<div class="proj-specs-col proj-specs-col--empty">
      <div class="proj-specs-placeholder">
        <span class="font-mono-data" style="color:var(--outline);font-size:0.625rem;">TECHNICAL_SPECIFICATIONS // NOT_PROVIDED</span>
      </div>
    </div>`,h=d?`
    <div class="proj-thumb-col">
      <div class="proj-card-thumb" data-gallery="${t}">
        <div class="proj-thumb-img-wrapper">
          <img src="${l}" alt="${e.title}" class="proj-thumb-img progressive-image" style="object-fit:cover;width:100%;height:100%;display:block" onload="setTimeout(()=>this.classList.add('progressive-image--loaded'),300)" />
          <div class="proj-thumb-overlay">
            <span class="material-symbols-outlined">search</span>
          </div>
        </div>
      </div>
    </div>`:"",y=n||d?`
    <div class="proj-card-divider"></div>
    <div class="proj-card-specs-row">
      ${v}
      ${h}
    </div>`:"",g=o.length>0,$=(e.metrics||[]).length>0,S=(e.highlights||[]).length>0,f=`proj-${t}`,L=g?`<div class="proj-toggle-section" id="${f}-tech"><div class="proj-tech-chips">${i}</div></div>`:"",k=$?`<div class="proj-toggle-section" id="${f}-metrics">${`<ul class="proj-metrics-list">${(e.metrics||[]).slice(0,4).map(b=>`<li class="font-body-sm proj-metric-chip">${b}</li>`).join("")}</ul>`}</div>`:"",T=S?`<div class="proj-toggle-section" id="${f}-highlights">${r?`<ul class="proj-highlights">${r}</ul>`:""}</div>`:"",R=g||$||S?`
    <div class="proj-toggle-wrapper">
      <div class="proj-toggle-bar">
        ${g?`<button class="proj-toggle-btn" data-target="${f}-tech" title="Tech stack"><span class="material-symbols-outlined">widgets</span></button>`:""}
        ${$?`<button class="proj-toggle-btn" data-target="${f}-metrics" title="Metrics"><span class="material-symbols-outlined">bar_chart</span></button>`:""}
        ${S?`<button class="proj-toggle-btn" data-target="${f}-highlights" title="Highlights"><span class="material-symbols-outlined">stars</span></button>`:""}
      </div>
      ${L}
      ${k}
      ${T}
    </div>`:"";return`
    <article class="proj-card hard-shadow" data-type="${e._type}" data-index="${t}">
      <div class="proj-card-id-box font-mono-data">ID: ${(e.id||"").replace(/\s+/g,"_")}</div>
      <span class="font-label-caps proj-card-category">${e._type} // CATEGORY: ${(e.category||"").toUpperCase().replace(/\s+/g,"_")}</span>
      <h2 class="font-headline-md proj-card-title">${e.title}</h2>
      <p class="font-body-md proj-card-overview">${e.overview||""}</p>
      ${y}
      ${R}
      <div class="proj-card-footer">
        ${m?`<a href="${m}" target="_blank" rel="noopener noreferrer" class="proj-github-link font-mono-data hard-shadow-sm">
          <span class="material-symbols-outlined" style="font-size:1rem;">code</span>
          GITHUB_REPOSITORY
        </a>`:""}
        ${u.map(([b,_])=>{const Z=A(_),ee=b.toUpperCase().replace(/\s+/g,"_");return`<a href="${Z}" download class="proj-result-link font-mono-data hard-shadow-sm">
            <span class="material-symbols-outlined" style="font-size:1rem;">download</span>
            ${ee}
          </a>`}).join("")}
      </div>
    </article>
  `}function et(e){const t=[];if(!e)return t;for(const[s,a]of Object.entries(e))Array.isArray(a)&&a.length>0&&t.push(s.toUpperCase());return t}function tt(e){return`
    <div class="proj-filter-bar">
      <button class="proj-filter-btn proj-filter-btn--active font-mono-data" data-filter="all">ALL_CORES</button>
      ${e.filter(s=>s!=="all").map(s=>`<button class="proj-filter-btn font-mono-data" data-filter="${s}">${s.toUpperCase()}</button>`).join("")}
    </div>
  `}function at(e,t,s){const a=e.length,n=s.map(c=>{const r=e.filter(d=>d._type===c).length,l=c==="VLSI"?"VLSI_CORES":c==="IoT"?"IoT_SYSTEMS":c+"_PROJECTS";return`<div class="proj-metric-item"><span class="font-headline-lg proj-metric-value">${r}</span><span class="font-mono-data proj-metric-label">${l}</span></div>`}).join(""),o=t.tools.slice(0,10).map(c=>`<span class="proj-skill-chip font-mono-data">${c}</span>`).join(""),i=t.languages.slice(0,8).map(c=>`<span class="proj-skill-chip font-mono-data">${c}</span>`).join("");return`
    <aside class="proj-sidebar">
      <div class="proj-sidebar-section">
        <h3 class="font-label-caps proj-sidebar-heading">METRIC_SUMMARY</h3>
        <div class="proj-metrics-strip">
          <div class="proj-metric-item">
            <span class="font-headline-lg proj-metric-value">${a}</span>
            <span class="font-mono-data proj-metric-label">TOTAL_PROJECTS</span>
          </div>
          ${n}
        </div>
      </div>
      ${i?`
      <div class="proj-sidebar-section">
        <h3 class="font-label-caps proj-sidebar-heading">LANGUAGES</h3>
        <div class="proj-skill-chips">${i}</div>
      </div>`:""}
      ${o?`
      <div class="proj-sidebar-section">
        <h3 class="font-label-caps proj-sidebar-heading">TOOLCHAIN</h3>
        <div class="proj-skill-chips">${o}</div>
      </div>`:""}
      <div class="proj-sidebar-section" id="proj-commit-section">
        <h3 class="font-label-caps proj-sidebar-heading">COMMIT_LOG // RECENT</h3>
        <div id="proj-commit-content" class="font-mono-data" style="font-size:0.625rem;color:var(--outline)">Fetching latest commit...</div>
      </div>
    </aside>
  `}function N(e){if(!e)return'<div class="container-page" style="padding-top:4rem"><p class="font-mono-data" style="color:var(--error)">No profile data.</p></div>';const t=e.projects,s=Y(t),a=et(t),n=Qe(s),o=s.map((i,c)=>Ze(i,c)).join("");return`
    <div class="proj-page">
      <div class="container-page proj-page-inner blueprint-grid-lines">
        <div class="pubs-header">
          ${Xe("06","PROJECT_INDEX")}
          <div class="pubs-header-bottom">
            <h1 class="font-headline-xl pubs-title">Development & Engineering</h1>
            ${tt(a)}
          </div>
        </div>

        <div class="proj-grid">
          <div class="proj-cards-col" id="proj-cards-col">
            ${o}
          </div>
          ${at(s,n,a)}
        </div>
      </div>
    </div>
  `}async function st(){const e=document.getElementById("proj-commit-content");if(e)try{const t=await fetch("https://api.github.com/users/yusuf-silicon/repos?sort=updated&per_page=1&direction=desc");if(!t.ok)throw new Error("API error");const s=await t.json();if(!s.length)throw new Error("No repos");const a=s[0].name,n=await fetch(`https://api.github.com/repos/yusuf-silicon/${a}/commits?per_page=3`);if(!n.ok)throw new Error("API error");const o=await n.json();if(!o.length)throw new Error("No commits");e.innerHTML=o.map(i=>{const c=new Date(i.commit.author.date).toISOString().split("T")[0],r=i.commit.message.split(`
`)[0].substring(0,60),l=i.sha.substring(0,7);return`<div style="border-left:2px solid var(--primary);padding-left:0.5rem;margin-bottom:0.5rem"><div style="color:var(--primary)">${c}</div><div style="color:var(--on-surface-variant);margin-top:0.25rem">${r}</div><div style="color:var(--outline);margin-top:0.25rem;font-size:0.5625rem">${a} @ ${l}</div></div>`}).join("")}catch{e.textContent="Unable to fetch latest commits."}}function J(){st(),document.querySelectorAll(".progressive-image").forEach(t=>{t.complete&&t.classList.add("progressive-image--loaded")}),document.querySelectorAll(".proj-toggle-btn").forEach(t=>{t.addEventListener("click",()=>{const s=t.dataset.target,a=document.getElementById(s);if(!a)return;const n=a.classList.contains("proj-toggle-section--open"),o=t.closest(".proj-card");o&&(o.querySelectorAll(".proj-toggle-section").forEach(i=>i.classList.remove("proj-toggle-section--open")),o.querySelectorAll(".proj-toggle-btn").forEach(i=>i.classList.remove("proj-toggle-btn--active"))),n||(a.classList.add("proj-toggle-section--open"),t.classList.add("proj-toggle-btn--active"))})}),(window.__projProjects||[]).forEach(t=>{if(t.thumbnail){const s=new Image;s.src=A(t.thumbnail)}t.gallery&&t.gallery.forEach(s=>{const a=new Image;a.src=A(s)})}),document.querySelectorAll(".proj-filter-btn").forEach(t=>{t.addEventListener("click",()=>{document.querySelectorAll(".proj-filter-btn").forEach(a=>a.classList.remove("proj-filter-btn--active")),t.classList.add("proj-filter-btn--active");const s=t.dataset.filter;document.querySelectorAll(".proj-card").forEach(a=>{s==="all"||a.dataset.type===s?a.style.display="":a.style.display="none"})})}),document.querySelectorAll(".proj-card-thumb").forEach(t=>{t.addEventListener("click",()=>{const s=parseInt(t.dataset.gallery,10),n=(window.__projProjects||[])[s];if(!n)return;const o=[];n.thumbnail&&o.push(n.thumbnail),n.gallery&&n.gallery.length&&o.push(...n.gallery),o.length&&nt(o,n.title)})})}function nt(e,t){const s=document.createElement("div");s.className="proj-gallery-overlay",s.innerHTML=`
    <div class="proj-gallery-backdrop"></div>
    <div class="proj-gallery-content">
      <button class="proj-gallery-close font-mono-data" type="button">CLOSE [X]</button>
      <h3 class="font-headline-md proj-gallery-title">${t}</h3>
      <div class="proj-gallery-images">
        ${e.map(a=>`<img src="${A(a)}" alt="" loading="lazy" class="proj-gallery-img" />`).join("")}
      </div>
    </div>
  `,document.body.appendChild(s),requestAnimationFrame(()=>s.classList.add("proj-gallery-overlay--open")),s.querySelector(".proj-gallery-close").addEventListener("click",()=>B(s)),s.querySelector(".proj-gallery-backdrop").addEventListener("click",()=>B(s))}function B(e){e.classList.remove("proj-gallery-overlay--open"),e.addEventListener("transitionend",()=>e.remove(),{once:!0})}const ot=N;N=function(e){const t=Y(e==null?void 0:e.projects);return window.__projProjects=t,ot(e)};E("projects",{render:N,mount:J});function it(e){return e?e.replace(/^\.\.\//,"/data/"):""}function ct(e,t){return`
    <div class="research-annotation">
      <span class="research-annotation-badge font-mono-data">PAGE. ${e}</span>
      <div class="research-annotation-line"></div>
      <span class="font-label-caps research-annotation-text">[DOCUMENT_CLASS: ${t}]</span>
    </div>`}function rt(e){const t=[];if(!e)return t;for(const[s,a]of Object.entries(e))a&&a.Gallery&&a.Gallery.length>0&&t.push({name:s,description:a.description||"",items:a.Gallery});return t}function lt(e){if(e.image)return e.image;for(const t of Object.values(e))if(typeof t=="string"&&(t.startsWith("../")||t.startsWith("/data/")))return t;return""}function dt(e){for(const[t,s]of Object.entries(e))if(!(t==="description"||t==="image")&&typeof s=="string"&&(s.startsWith("../")||s.startsWith("/data/")))return t;if(e.image){const t=e.image.split("/");return(t[t.length-1]||"").replace(/\.[^.]+$/,"").replace(/[-_]/g," ")}return"Untitled"}function pt(e){return e.description||""}function K(e,t){const a=(e.items||[]).map((n,o)=>{const i=lt(n),c=dt(n),r=pt(n);return`
      <div class="hobby-card">
        <div class="hobby-card-img-wrap">
          <img src="${it(i)}" alt="${c}" class="hobby-card-img progressive-image" onload="setTimeout(()=>this.classList.add('progressive-image--loaded'),300)" />
          <div class="hobby-card-badge font-mono-data">${(e.name||"").toUpperCase().replace(/\s+/g,"_")}</div>
        </div>
        <div class="hobby-card-body">
          <h3 class="font-headline-md hobby-card-title">${c}</h3>
          ${r?`<p class="font-body-sm hobby-card-desc">${r}</p>`:""}
        </div>
      </div>`}).join("");return`<div class="hobby-gallery" id="hobby-gallery-${t}">${a}</div>`}function mt(e){if(!e)return'<div class="container-page" style="padding-top:4rem"><p class="font-mono-data" style="color:var(--error)">No profile data.</p></div>';const t=e.hobbies,s=rt(t),a="Personal Interests",n=s.map((i,c)=>`<button class="hobby-tab font-mono-data ${c===0?"hobby-tab--active":""}" data-cat="${c}">${(i.name||"").toUpperCase().replace(/\s+/g,"_")}</button>`).join(""),o=s.length?K(s[0],0):'<p class="font-body-md" style="color:var(--on-surface-variant)">No hobby data available.</p>';return window.__hobbyCats=s,`
    <div class="hobby-page">
      <div class="container-page hobby-page-inner blueprint-grid-lines">
        <div class="pubs-header">
          ${ct("07","HOBBY_ARCHIVE")}
          <div class="pubs-header-bottom">
            <h1 class="font-headline-xl pubs-title">${a}</h1>
          </div>
        </div>
        ${n?`<div class="hobby-tab-bar">${n}</div>`:""}
        <div id="hobby-gallery-container">
          ${o}
        </div>
      </div>
    </div>
  `}function X(){document.querySelectorAll(".progressive-image").forEach(e=>{e.complete&&e.classList.add("progressive-image--loaded")}),document.querySelectorAll(".hobby-tab").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".hobby-tab").forEach(n=>n.classList.remove("hobby-tab--active")),e.classList.add("hobby-tab--active");const t=parseInt(e.dataset.cat,10),s=window.__hobbyCats||[],a=document.getElementById("hobby-gallery-container");!a||!s[t]||(a.innerHTML=K(s[t],t),requestAnimationFrame(()=>{document.querySelectorAll(".progressive-image").forEach(n=>{n.complete&&n.classList.add("progressive-image--loaded")})}))})}),document.querySelectorAll(".hobby-card-img-wrap").forEach(e=>{e.addEventListener("click",()=>{const t=e.querySelector(".hobby-card-img");t&&ut(t.src,t.alt)})})}function ut(e,t){const s=document.createElement("div");s.className="proj-gallery-overlay",s.innerHTML=`
    <div class="proj-gallery-backdrop"></div>
    <div class="proj-gallery-content" style="text-align:center">
      <button class="proj-gallery-close font-mono-data" type="button">CLOSE [X]</button>
      <img src="${e}" alt="${t}" style="max-width:100%;max-height:80vh;height:auto;display:block;margin:0 auto" />
      <p class="font-body-sm" style="color:var(--on-surface-variant);margin-top:1rem">${t}</p>
    </div>`,document.body.appendChild(s),requestAnimationFrame(()=>s.classList.add("proj-gallery-overlay--open")),s.querySelector(".proj-gallery-close").addEventListener("click",()=>{s.classList.remove("proj-gallery-overlay--open"),s.addEventListener("transitionend",()=>s.remove(),{once:!0})}),s.querySelector(".proj-gallery-backdrop").addEventListener("click",()=>{s.classList.remove("proj-gallery-overlay--open"),s.addEventListener("transitionend",()=>s.remove(),{once:!0})})}E("hobbies",{render:mt,mount:X});function vt(e){return e?e.replace(/^\.\.\//,"/data/"):""}function ht(e,t){return`
    <div class="research-annotation">
      <span class="research-annotation-badge font-mono-data">PAGE. ${e}</span>
      <div class="research-annotation-line"></div>
      <span class="font-label-caps research-annotation-text">[DOCUMENT_CLASS: ${t}]</span>
    </div>`}function gt(e){if(!e)return'<div class="container-page" style="padding-top:4rem"><p class="font-mono-data" style="color:var(--error)">No profile data.</p></div>';const t=e.contact||{},s=[];let a=1;if(t.professional_email&&s.push(`
      <div class="cont-port-card">
        <div class="cont-port-header">
          <span class="font-label-caps cont-port-num">PORT_${String(a++).padStart(2,"0")}</span>
          <span class="material-symbols-outlined cont-port-icon">badge</span>
        </div>
        <p class="font-label-caps cont-port-label">${t.professional_email_name||"Professional"} Email</p>
        <a class="font-mono-data cont-port-value" href="mailto:${t.professional_email}">${t.professional_email}</a>
      </div>`),t.professional_location){const l=(t.professional_location_name||"Professional")+" Location";s.push(`
      <div class="cont-port-card">
        <div class="cont-port-header">
          <span class="font-label-caps cont-port-num">PORT_${String(a++).padStart(2,"0")}</span>
          <span class="material-symbols-outlined cont-port-icon">location_on</span>
        </div>
        <p class="font-label-caps cont-port-label">${l}</p>
        <p class="font-body-sm cont-port-value">${t.professional_location.replace(/\n/g,"<br/>")}</p>
      </div>`)}const n=s.join(""),o=[];t.email&&o.push({label:"Email",icon:"mail",url:`mailto:${t.email}`}),t.linkedin&&o.push({label:"LinkedIn",icon:"share",url:t.linkedin}),t.github&&o.push({label:"GitHub",icon:"terminal",url:t.github}),t.google_scholar&&o.push({label:"Google Scholar",icon:"school",url:t.google_scholar});const i=o.map(l=>`
    <a class="cont-node-link" href="${l.url}" target="_blank" rel="noopener noreferrer">
      <div class="cont-node-left">
        <span class="material-symbols-outlined cont-node-icon">${l.icon}</span>
        <span class="font-mono-data cont-node-label">${l.label}</span>
      </div>
      <span class="material-symbols-outlined cont-node-arrow">north_east</span>
    </a>
  `).join(""),c=t.spreadsheet_url||"",r=t.resume?`
    <a href="${vt(t.resume)}" download class="cont-resume-link font-mono-data">
      <span class="material-symbols-outlined" style="font-size:1rem;">download</span>
      DOWNLOAD_CV
    </a>`:"";return`
    <div class="cont-page">
      <div class="container-page cont-page-inner blueprint-grid-lines">
        <div class="pubs-header">
          ${ht("08","CONTACT_MODULE")}
          <div class="pubs-header-bottom">
            <h1 class="font-headline-xl pubs-title">Contact Information</h1>
          </div>
        </div>

        <div class="cont-grid">
          <aside class="cont-sidebar">
            <section>
              <h2 class="font-label-caps cont-section-label">[COMMUNICATION_PORTS]</h2>
              <div class="cont-ports-list">${n}</div>
            </section>

            <section class="cont-nodes-section">
              <h2 class="font-label-caps cont-section-label">[NETWORK_NODES]</h2>
              <div class="cont-nodes-list">${i}</div>
            </section>

            ${r?`<div class="cont-resume-section">${r}</div>`:""}
          </aside>

          <section class="cont-form-section">
            <div class="cont-form-card">
              <div class="cont-form-header">
                <h2 class="font-headline-md cont-form-title">[DATA_TRANSMISSION_PROTOCOL]</h2>
                <p class="font-label-caps cont-form-id">FORM_ID: TR-892 // STATUS: READY</p>
              </div>
              <form class="cont-form" id="cont-form" data-url="${c}">
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
  `}function Q(){const e=document.getElementById("cont-submit-btn");e&&e.addEventListener("click",async()=>{var c,r,l,d,m,p;const t=((c=document.getElementById("cont-name"))==null?void 0:c.value)||"",s=((r=document.getElementById("cont-email"))==null?void 0:r.value)||"",a=((l=document.getElementById("cont-class"))==null?void 0:l.value)||"",n=((d=document.getElementById("cont-msg"))==null?void 0:d.value)||"",o=((p=(m=document.getElementById("cont-form"))==null?void 0:m.dataset)==null?void 0:p.url)||"";if(!o)return;const i=new URLSearchParams({name:t,email:s,classification:a,message:n});try{e.textContent="TRANSMITTING...",await fetch(o,{method:"POST",body:i,mode:"no-cors"}),e.textContent="TRANSMISSION_SENT",setTimeout(()=>{e.innerHTML='EXECUTE_TRANSMIT <span class="material-symbols-outlined" style="font-size:1.125rem;">send</span>'},2e3)}catch{e.textContent="TRANSMISSION_FAILED",setTimeout(()=>{e.innerHTML='EXECUTE_TRANSMIT <span class="material-symbols-outlined" style="font-size:1.125rem;">send</span>'},2e3)}})}E("contact",{render:gt,mount:Q});const ft=document.getElementById("app");function bt(){ft.innerHTML=`
    <header id="app-header"></header>
    <main id="page-content"></main>
    <footer id="app-footer"></footer>
  `}async function q(){const e=V(),t=ae(),s=se(e),a=document.getElementById("page-content");if(a){if(s&&s.render){const n=await s.render(t);a.innerHTML=n,s.mount&&s.mount()}else e==="home"?a.innerHTML='<div class="container-page" style="padding-top: 4rem; padding-bottom: 4rem;"><p class="font-mono-data" style="color: var(--on-surface-variant);">// PAGE: HOME — Coming in Stage C</p></div>':a.innerHTML=`<div class="container-page" style="padding-top: 4rem; padding-bottom: 4rem;"><p class="font-mono-data" style="color: var(--on-surface-variant);">// PAGE: ${e.toUpperCase()} — Under construction</p></div>`;window.__updateActiveNav&&window.__updateActiveNav(e)}}function yt(){const e=localStorage.getItem("theme"),t=window.matchMedia("(prefers-color-scheme: dark)").matches;e==="dark"||!e&&t?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}function $t(){document.documentElement.classList.toggle("dark");const e=document.documentElement.classList.contains("dark");localStorage.setItem("theme",e?"dark":"light"),z()}async function Et(){yt(),bt();const e=await te();if(!e){const n=document.getElementById("page-content");n&&(n.innerHTML='<p style="padding: 2rem; color: var(--error);">Failed to load profile data.</p>');return}const t=document.getElementById("app-header");t&&(t.innerHTML=ie(e),ce());const s=document.getElementById("theme-toggle-slot");s&&(s.innerHTML=le(),de());const a=document.getElementById("app-footer");a&&(a.innerHTML=re(e)),be(),W(),J(),X(),Q(),window.addEventListener("hashchange",q),q(),console.log("🔧 Yusuf Silicon Portfolio — Ready")}Et().catch(e=>console.error("❌ App initialization failed:",e));
