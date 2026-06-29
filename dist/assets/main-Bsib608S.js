(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();let j=null;async function Z(){var e;if(j)return j;try{const t=await fetch("/data/profile_data/profile.json");if(!t.ok)throw new Error(`HTTP ${t.status}`);return j=await t.json(),console.log("✅ Profile loaded:",(e=j.personal)==null?void 0:e.name),j}catch(t){return console.error("❌ Failed to load profile:",t),null}}function Q(){return j}const q={};function S(e,t){q[e.toLowerCase()]=t}function ee(e){return q[e.toLowerCase()]}function te(e){window.location.hash=`#/${e}`}function V(){return(window.location.hash.slice(1)||"/home").replace(/^\//,"").toLowerCase()}const ae=[{label:"Home",path:"home"},{label:"Research",path:"research"},{label:"Publications",path:"publications"},{label:"Academics",path:"academics"},{label:"Experience",path:"experience"},{label:"Projects",path:"projects"},{label:"Hobbies",path:"hobbies"},{label:"Contact",path:"contact"}];let R="home";function se(e){var a;const t=((a=e==null?void 0:e.personal)==null?void 0:a.nickname)||"YUSUF_SILICON";R=V();const s=ae.map(n=>{const i=n.path===R;return`
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
  `}function ne(){const e=document.querySelector(".header-inner");if(!e)return;e.addEventListener("click",a=>{const n=a.target.closest("[data-route]");if(n){a.preventDefault();const i=n.dataset.route,o=document.getElementById("header-nav"),c=document.getElementById("header-hamburger");if(o&&o.classList.contains("header-nav--open")&&(o.classList.remove("header-nav--open"),c)){const r=c.querySelector(".material-symbols-outlined");r&&(r.textContent="menu")}te(i)}});const t=document.getElementById("header-hamburger"),s=document.getElementById("header-nav");t&&s&&t.addEventListener("click",()=>{s.classList.toggle("header-nav--open");const a=t.querySelector(".material-symbols-outlined");a&&(a.textContent=s.classList.contains("header-nav--open")?"close":"menu")}),window.__updateActiveNav=a=>{R=a,document.querySelectorAll(".header-nav-link").forEach(n=>{const i=n.dataset.route===a;n.classList.toggle("header-nav-link--active",i)})}}function ie(e){if(!e)return`
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
  `}function oe(){return`
    <button class="theme-toggle-btn" id="theme-toggle-btn" type="button" aria-label="Toggle theme">
      <span class="material-symbols-outlined">${document.documentElement.classList.contains("dark")?"dark_mode":"light_mode"}</span>
    </button>
  `}function ce(){const e=document.getElementById("theme-toggle-btn");e&&e.addEventListener("click",()=>{ot(),z()})}function z(){const e=document.getElementById("theme-toggle-btn");if(!e)return;const t=e.querySelector(".material-symbols-outlined");if(!t)return;const s=document.documentElement.classList.contains("dark");t.textContent=s?"dark_mode":"light_mode"}function O(e){return e?e.replace(/^\.\.\//,"/data/"):""}function re(e,t){const s=(e==null?void 0:e.name)||"",a=(e==null?void 0:e.headline)||"",n=(e==null?void 0:e.description)||"",i=(e==null?void 0:e.description_highlight)||[],o=O(e==null?void 0:e.image),r=((t==null?void 0:t.description_mentions)||[]).map(d=>`<span class="chip">${d.toUpperCase().replace(/\s+/g,"_")}</span>`).join("");let l=n;if(i.length){const d=[...i].sort((u,p)=>p.length-u.length);for(const u of d){const p=u.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");l=l.replace(new RegExp(`(${p})`,"gi"),'<span class="home-highlight">$1</span>')}}return`
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
            <img class="home-id-card-image progressive-image" src="${o}" alt="${(e==null?void 0:e.image_name)||s}" onload="this.classList.add('progressive-image--loaded')" />
            <div class="home-image-ref font-mono-data">${(e==null?void 0:e.image_name)||"IMG_REF_01.A"}</div>
          </div>
        </div>
      </div>
    </section>
  `}function le(e){var c,r,l,d,u,p,m,v,h,y,g;const t=((r=(c=e==null?void 0:e.research)==null?void 0:c.publications)==null?void 0:r.length)||0,s=(((d=(l=e==null?void 0:e.projects)==null?void 0:l.vlsi)==null?void 0:d.length)||0)+(((p=(u=e==null?void 0:e.projects)==null?void 0:u.iot)==null?void 0:p.length)||0)+(((v=(m=e==null?void 0:e.projects)==null?void 0:m.software)==null?void 0:v.length)||0),a=((y=(h=e==null?void 0:e.research)==null?void 0:h.theses)==null?void 0:y.length)||0,n=((g=e==null?void 0:e.certifications)==null?void 0:g.length)||0;return`
    <div class="sidebar-section">
      <div class="font-label-caps page-section-label sidebar-section-heading">01 // ANALYTICS_MODULE</div>
      <div class="metrics-grid">${[{label:"PUBLICATIONS",value:t.toString().padStart(2,"0")},{label:"PROJECTS",value:s.toString().padStart(2,"0")},{label:"THESES",value:a.toString().padStart(2,"0")},{label:"CERTIFICATIONS",value:n.toString().padStart(2,"0")}].map($=>`
      <div class="metric-card">
        <div class="font-label-caps metric-card-label">${$.label}</div>
        <div class="font-headline-md metric-card-value">${$.value}</div>
      </div>
    `).join("")}</div>
    </div>
  `}function de(e,t){if(!e)return"";const a=[{icon:"mail",content:e.email||"",href:e.email?`mailto:${e.email}`:null},{icon:"school",content:"Google Scholar",href:e.google_scholar||null},{icon:"code",content:"github.com/yusuf-silicon",href:e.github||null},{icon:"location_on",content:(t==null?void 0:t.location)||""}].filter(i=>i.content).map(i=>`
      <li class="contact-item">
        <span class="material-symbols-outlined contact-icon">${i.icon}</span>
        ${i.href?`<a class="contact-link" href="${i.href}" target="_blank" rel="noopener noreferrer">${i.content}</a>`:`<span class="contact-text">${i.content}</span>`}
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
  `}function pe(e){const t=(e==null?void 0:e.overview)||[];return t.length?`
    <div class="sidebar-section">
      <div class="font-label-caps page-section-label sidebar-section-heading">// RESEARCH_INTERESTS</div>
      <div class="interests-visual">${t.map(a=>{const n=(a.includes||[]).map(i=>`<span class="chip chip-sm">${i}</span>`).join("");return`
        <div class="interest-area">
          <div class="font-label-caps interest-area-name">${a.name.toUpperCase().replace(/\s+/g,"_")}</div>
          <div class="interest-area-chips">${n}</div>
        </div>
      `}).join("")}</div>
    </div>
  `:""}function ue(e){return!e||!e.length?"":`
    <div class="content-section">
      <div class="content-section-header">
        <div class="font-label-caps page-section-label">03 // PEER_REVIEWED_ARCHIVE</div>
        <a class="font-mono-data content-section-link" href="#/publications">VIEW_ALL_PUBLICATIONS</a>
      </div>
      <div class="pub-cards">${e.slice(0,2).map(a=>{const n=a.year||"",i=a.month||"",o=a.venue_short||"",c=a.doi||"",r=a.citation||"",l=r?encodeURIComponent(r):"";return`
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
            ${r?`<button class="pub-action font-mono-data citation-btn" type="button" data-citation="${l}">
              <span class="material-symbols-outlined">share</span> CITATION
            </button>`:""}
          </div>
        </div>
      `}).join("")}</div>
    </div>
  `}function me(e){const s=((e==null?void 0:e.vlsi)||[]).filter(n=>n.featured).slice(0,2);return s.length?`
    <div class="content-section">
      <div class="content-section-header">
        <div class="font-label-caps page-section-label">04 // HARDWARE_REPO</div>
        <a class="font-mono-data content-section-link" href="#/projects">VIEW_PROJECTS</a>
      </div>
      <div class="project-cards">${s.map(n=>{var r;const i=O(n.thumbnail),c=(((r=n.techStack)==null?void 0:r.languages)||[]).slice(0,2).map(l=>`<span class="chip chip-tech">${l.toUpperCase()}</span>`).join("");return`
        <div class="project-card">
          <div class="project-card-thumb">
            <img src="${i}" alt="${n.title}" class="progressive-image" onload="setTimeout(()=>this.classList.add('progressive-image--loaded'),300)" />
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
  `:""}function ve(e){var o;if(!e)return`<div class="container-page" style="padding-top: 4rem;">
      <p class="font-mono-data" style="color: var(--error);">No profile data available.</p>
    </div>`;const t=e.personal,s=e.interests,a=e.contact,n=(o=e.research)==null?void 0:o.publications,i=e.projects;return`
    <div class="home-page">
      <div class="container-page home-page-inner blueprint-grid-lines">
        ${re(t,s)}

        <!-- Two-column grid: sidebar + content -->
        <div class="home-grid">
          <!-- Left Sidebar (4 cols) -->
          <aside class="home-sidebar">
            ${le(e)}
            ${de(a,t)}
            ${pe(s)}
          </aside>

          <!-- Right Content (8 cols) -->
          <section class="home-content">
            ${ue(n)}
            ${me(i)}
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
  `}function he(){const e=document.getElementById("page-content");e&&(document.querySelectorAll(".progressive-image").forEach(t=>{t.complete&&t.classList.add("progressive-image--loaded")}),e.addEventListener("click",t=>{const s=t.target.closest(".citation-btn");if(!s)return;t.preventDefault();const a=decodeURIComponent(s.dataset.citation);a&&navigator.clipboard.writeText(a).then(()=>{H("CITATION_COPIED")}).catch(()=>{const n=document.createElement("textarea");n.value=a,n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n),H("CITATION_COPIED")})}))}function H(e){const t=document.querySelector(".toast-notification");t&&t.remove();const s=document.createElement("div");s.className="toast-notification font-mono-data",s.textContent=e,document.body.appendChild(s),requestAnimationFrame(()=>{s.classList.add("toast-notification--visible")}),setTimeout(()=>{s.classList.remove("toast-notification--visible"),s.addEventListener("transitionend",()=>s.remove(),{once:!0})},2e3)}S("home",{render:ve});function ge(e){const t=(e||"").toLowerCase();return t.includes("architecture")||t.includes("memory")||t.includes("processor")?"developer_board":t.includes("ai")||t.includes("acceleration")||t.includes("cryptographic")?"neurology":t.includes("energy")||t.includes("high-perform")||t.includes("security")?"bolt":"science"}function fe(e,t){const s=a=>a?new Date(a).toLocaleDateString("en-US",{year:"numeric",month:"short"}):"";return`${s(e)} — ${s(t)||"PRESENT"}`}function be(e,t){return`
    <div class="research-annotation">
      <span class="research-annotation-badge font-mono-data">PAGE. ${e}</span>
      <div class="research-annotation-line"></div>
      <span class="font-label-caps research-annotation-text">[DOCUMENT_CLASS: ${t}]</span>
    </div>
  `}function ye(e){const t=(e==null?void 0:e.overview)||[];return t.length?`
    <div class="sidebar-section">
      <div class="font-label-caps research-section-heading">[RESEARCH_AREAS_V2.0]</div>
      <ul class="research-area-list">${t.map(a=>`
        <li class="research-area-item">
          <div class="research-area-item-inner">
            <span class="material-symbols-outlined research-area-icon">${ge(a.name)}</span>
            <div class="research-area-content">
              <h3 class="font-headline-md research-area-name">${a.name}</h3>
              <p class="font-body-sm research-area-desc research-text-justify">${a.description||""}</p>
            </div>
          </div>
        </li>
      `).join("")}</ul>
    </div>
  `:""}function $e(e){var o,c,r,l,d,u;const t=((c=(o=e==null?void 0:e.interests)==null?void 0:o.overview)==null?void 0:c.length)||0,s=((l=(r=e==null?void 0:e.research)==null?void 0:r.publications)==null?void 0:l.length)||0,a=((u=(d=e==null?void 0:e.research)==null?void 0:d.theses)==null?void 0:u.length)||0;return`
    <div class="sidebar-section">
      <div class="font-label-caps research-section-heading">[SYSTEM_METRICS]</div>
      <div class="metrics-table">${[{label:"RESEARCH_INTERESTS",value:t.toString().padStart(2,"0")},{label:"PUBLICATIONS",value:s.toString().padStart(2,"0")},{label:"THESES",value:a.toString().padStart(2,"0")}].map(p=>`
      <div class="metric-row">
        <span class="font-mono-data metric-row-label">${p.label}</span>
        <span class="font-mono-data metric-row-value">${p.value}</span>
      </div>
    `).join("")}</div>
    </div>
  `}function Ee(e){const t=(e||[]).filter(a=>a.status==="active");return t.length?`
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
    `}function Ce(e,t){const s=(t==null?void 0:t.research)||[];if(!s.length)return"";const a=(e==null?void 0:e.length)||0;return`
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
  `}function je(e){const t=(e||[]).filter(a=>a.status!=="active");return t.length?`
    <section class="content-section research-section">
      <div class="font-label-caps research-section-heading content-section-label">[EVOLUTION_TIMELINE]</div>
      <div class="timeline">
        <div class="timeline-line"></div>
        ${t.map((a,n)=>{const i=fe(a.start_date,a.end_date);return`
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
  `:""}function Se(e){var n;if(!e)return`<div class="container-page" style="padding-top: 4rem;">
      <p class="font-mono-data" style="color: var(--error);">No profile data available.</p>
    </div>`;const t=e.interests,s=(n=e.research)==null?void 0:n.theses,a=e.future_projects;return`
    <div class="research-page">
      <div class="container-page research-page-inner blueprint-grid-lines">
        <div class="pubs-header">
          ${be("02","RESEARCH_MANIFESTO")}
          <div class="pubs-header-bottom" style="margin-bottom: 0;">
            <h1 class="font-headline-xl pubs-title">Research Repository</h1>
          </div>
        </div>

        <div class="research-grid">
          <aside class="research-sidebar">
            ${ye(t)}
            ${$e(e)}
          </aside>

          <section class="research-content">
            ${Ee(s)}
            ${Ce(s,a)}
            ${je(s)}
          </section>
        </div>
      </div>
    </div>
  `}S("research",{render:Se});function Ie(e,t){return`
    <div class="research-annotation">
      <span class="research-annotation-badge font-mono-data">PAGE. ${e}</span>
      <div class="research-annotation-line"></div>
      <span class="font-label-caps research-annotation-text">[DOCUMENT_CLASS: ${t}]</span>
    </div>
  `}let _=null;async function Te(){if(_!==null)return _;try{const t=await(await fetch("https://api.allorigins.win/raw?url="+encodeURIComponent("https://scholar.google.com/citations?user=EJitK1IAAAAJ&hl=en&pagesize=100"),{signal:AbortSignal.timeout(5e3)})).text(),s=/citedby\s*=\s*['"](\d+)['"]/gi;let a;const n=[];for(;(a=s.exec(t))!==null;)n.push(parseInt(a[1],10));_=n.length?n:null}catch{_=null}return _}function _e(){return`
    <div class="pubs-header">
      ${Ie("03","PUBLICATION_ARCHIVE")}
      <div class="pubs-header-bottom">
        <h1 class="font-headline-xl pubs-title">Scientific Publications</h1>
        <div class="pubs-search">
          <span class="material-symbols-outlined pubs-search-icon">search</span>
          <input class="pubs-search-input font-mono-data" type="text" id="pubSearchInput" placeholder="Filter by Venue, Keyword, or Year..." />
        </div>
      </div>
    </div>
  `}function Ae(e,t){var u;if(!e||!e.length)return"";const s=e.map(()=>0),n=[...e.map((p,m)=>({...p,citations:s[m]||0}))].sort((p,m)=>m.citations-p.citations),i=((u=n[0])==null?void 0:u.citations)||0,o=n.filter(p=>p.citations===i),c=e.filter(p=>p.featured),r=(p,m)=>p.map((v,h)=>`
      <div class="selected-work-entry">
        ${h>0?'<div class="selected-work-divider"></div>':""}
        <div class="font-mono-data selected-work-fig">${m} ${String(h+1).padStart(2,"0")}</div>
        <h3 class="font-headline-md selected-work-title">${v.title}</h3>
        <p class="font-body-sm selected-work-venue">${v.venue_short||v.venue||""}</p>
        ${v.citations!==void 0?`<div class="font-mono-data selected-work-cites">CITATIONS: ${v.citations}</div>`:""}
      </div>
    `).join(""),l=o.length?r(o,"// TOP_CITED"):"",d=c.length?r(c,"// FEATURED"):"";return`
    <div class="sidebar-section pubs-selected-works">
      <div class="research-section-heading">SELECTED_WORKS</div>
      ${l?`<div class="selected-works-list">${l}</div>`:""}
      ${d?`<div class="selected-works-list" style="${l?"margin-top: 1.5rem;":""}">${d}</div>`:""}
    </div>
  `}function Le(e,t){return e!=null&&e.length,`
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
  `}function we(e){if(!e||!e.length)return`
      <div class="content-section">
        <div class="research-section-heading">FULL_BIBLIOGRAPHY</div>
        <p class="font-body-sm" style="color: var(--on-surface-variant);">No publications found.</p>
      </div>
    `;const t={};for(const n of e){const i=n.year||"Unknown";t[i]||(t[i]=[]),t[i].push(n)}return`
    <div class="content-section">
      <div class="research-section-heading">FULL_BIBLIOGRAPHY</div>
      <div class="pub-bibliography-list" id="bibliographyList">${Object.keys(t).sort((n,i)=>i-n).map(n=>{const i=t[n].map((o,c)=>{const r=o.doi||"",l=o.citation||"",d=l?encodeURIComponent(l):"",u=`abstract-${n}-${c}`;return`
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
                  ${l?`<button class="pub-entry-btn pub-entry-cite-btn font-mono-data" type="button" data-citation="${d}">[CITATION]</button>`:""}
                  <button class="pub-entry-btn pub-entry-abstract-toggle font-mono-data" type="button" data-target="${u}" aria-label="Toggle abstract">
                    [ABSTRACT] <span class="material-symbols-outlined">expand_more</span>
                  </button>
                </div>
                <div class="pub-abstract" id="${u}">
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
  `}function xe(e){var s;if(!e)return`<div class="container-page" style="padding-top: 4rem;">
      <p class="font-mono-data" style="color: var(--error);">No profile data available.</p>
    </div>`;const t=((s=e.research)==null?void 0:s.publications)||[];return`
    <div class="pubs-page">
      <div class="container-page pubs-page-inner blueprint-grid-lines">
        ${_e()}

        <div class="pubs-grid">
          <aside class="pubs-sidebar">
            ${Ae(t)}
            ${Le(t)}
          </aside>

          <section class="pubs-content">
            ${we(t)}
          </section>
        </div>
      </div>
    </div>
  `}function J(){var n;const e=window.__profile;(((n=e==null?void 0:e.research)==null?void 0:n.publications)||[]).length&&Te().then(i=>{if(!i)return;const o=document.querySelectorAll(".pubs-metric-value");if(o.length>=2){const c=i.reduce((r,l)=>r+l,0);o[0].textContent=c}});const s=document.getElementById("pubSearchInput"),a=document.getElementById("bibliographyList");s&&s.addEventListener("input",()=>{const i=s.value.toLowerCase().trim(),o=(a==null?void 0:a.querySelectorAll(".pub-entry"))||[],c=(a==null?void 0:a.querySelectorAll(".pub-year-group"))||[];o.forEach(r=>{const l=r.dataset.search||"";r.style.display=!i||l.includes(i)?"":"none"}),c.forEach(r=>{const l=[...r.querySelectorAll(".pub-entry")].some(d=>d.style.display!=="none");r.style.display=l?"":"none"})}),document.querySelectorAll(".pub-entry-abstract-toggle").forEach(i=>{i.addEventListener("click",()=>{const o=i.dataset.target,c=document.getElementById(o);if(!c)return;const r=c.classList.contains("pub-abstract--open");document.querySelectorAll(".pub-abstract--open").forEach(d=>{if(d.id!==o){d.classList.remove("pub-abstract--open");const u=document.querySelector(`[data-target="${d.id}"]`);if(u){const p=u.querySelector(".material-symbols-outlined");p&&(p.textContent="expand_more")}}}),c.classList.toggle("pub-abstract--open");const l=i.querySelector(".material-symbols-outlined");l&&(l.textContent=r?"expand_more":"expand_less")})}),document.querySelectorAll(".pub-entry-cite-btn").forEach(i=>{i.addEventListener("click",()=>{const o=decodeURIComponent(i.dataset.citation);o&&navigator.clipboard.writeText(o).then(()=>D("CITATION_COPIED")).catch(()=>{const c=document.createElement("textarea");c.value=o,c.style.cssText="position:fixed;opacity:0",document.body.appendChild(c),c.select(),document.execCommand("copy"),document.body.removeChild(c),D("CITATION_COPIED")})})})}function D(e){const t=document.querySelector(".toast-notification");t&&t.remove();const s=document.createElement("div");s.className="toast-notification font-mono-data",s.textContent=e,document.body.appendChild(s),requestAnimationFrame(()=>s.classList.add("toast-notification--visible")),setTimeout(()=>{s.classList.remove("toast-notification--visible"),s.addEventListener("transitionend",()=>s.remove(),{once:!0})},2e3)}S("publications",{render:xe,mount:J});function Re(e,t){return`
    <div class="research-annotation">
      <span class="research-annotation-badge font-mono-data">PAGE. ${e}</span>
      <div class="research-annotation-line"></div>
      <span class="font-label-caps research-annotation-text">[DOCUMENT_CLASS: ${t}]</span>
    </div>
  `}function Oe(e){var s;const t=((s=e==null?void 0:e.find(a=>a.enrolment_number))==null?void 0:s.program)||"ELECTRONICS & COMMUNICATION ENGINEERING";return`
    <header class="academics-header">
      ${Re("04","ACADEMIC_RECORD")}
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
  `}function ke(e){return!e||!e.length?"":`
    <section class="academics-section">
      <div class="academics-section-header">
        <h2 class="font-headline-lg academics-section-title">[01 // EDUCATION]</h2>
        <div class="academics-section-line"></div>
      </div>
      <div class="edu-entries">${[...e].sort((a,n)=>(n.graduation_year||0)-(a.graduation_year||0)).map((a,n)=>{const i=!a.graduation_year,o=a.cgpa||a.percentage,c=a.max_cgpa||a.max_percentage||"",r=a.cgpa?`${a.cgpa}${c?" / "+Number(c).toFixed(2):""}`:a.percentage?`${a.percentage}${c?" / "+Number(c).toFixed(2):""}%`:"",l=a.start_year?`${a.start_year} — ${a.graduation_year||"PRESENT"}`:`${a.graduation_year||""}`,d=a.coursework||[];return`
        <div class="edu-card ${i?"edu-card--current":""}">
          ${i?'<div class="edu-card-badge font-mono-data">CURRENT</div>':""}
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
              ${o?`<div><p class="font-mono-data edu-card-metric-label">${a.cgpa?"CGPA":"PERCENTAGE"}</p><p class="font-headline-md edu-card-metric-value">${r}</p></div>`:""}
              ${a.advisor?`<div><p class="font-mono-data edu-card-metric-label">ADVISOR</p><p class="font-body-lg edu-card-metric-text">${a.advisor}</p></div>`:""}
              ${a.rank?`<div><p class="font-mono-data edu-card-metric-label">RANK</p><p class="font-body-lg edu-card-metric-text">${a.rank}</p></div>`:""}
            </div>
            ${d.length?`
            <div class="edu-card-coursework">
              <p class="font-mono-data edu-card-coursework-label">SELECTED_COURSEWORK // ${(a.short_form||a.degree||"").toUpperCase()}</p>
              <div class="edu-card-coursework-grid">
                ${d.map((u,p)=>`
                  <div class="edu-card-coursework-item font-mono-data">
                    <span class="edu-card-coursework-num">${String(p+1).padStart(2,"0")}</span> ${u}
                  </div>
                `).join("")}
              </div>
            </div>`:""}
          </div>
        </div>
      `}).join("")}</div>
    </section>
  `}function Ne(e){return!e||!e.length?"":`
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
          ${s.advisor||s.research_lab?`
          <div class="thesis-card-divider"></div>
          <div class="thesis-card-footer">
            ${s.advisor?`<div class="font-mono-data thesis-card-advisor">ADVISOR: ${s.advisor}</div>`:""}
            ${s.research_lab?`<div class="font-mono-data thesis-card-lab">LAB: ${s.research_lab}</div>`:""}
          </div>`:""}
        </div>
      `}).join("")}</div>
    </section>
  `}function Pe(e){if(!e||!e.length)return"";const t=e.filter(a=>a.featured!==!1);return t.length?`
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
  `:""}function Me(e){if(!e||!e.length)return"";const t=e.filter(a=>a.featured!==!1);return t.length?`
    <div class="academics-sidebar-section">
      <h2 class="font-label-caps academics-sidebar-heading">CERTIFICATIONS</h2>
      <div class="certs-list">${t.map(a=>`
      <div class="cert-item">
        <span class="font-mono-data cert-name">${a.title||""}</span>
        <span class="material-symbols-outlined cert-icon">verified</span>
      </div>
    `).join("")}</div>
    </div>
  `:""}function Ue(e){var i;if(!e)return`<div class="container-page" style="padding-top: 4rem;">
      <p class="font-mono-data" style="color: var(--error);">No profile data available.</p>
    </div>`;const t=e.education||[],s=((i=e.research)==null?void 0:i.theses)||[],a=e.achievements||[],n=e.certifications||[];return`
    <div class="academics-page">
      <div class="container-page academics-page-inner blueprint-grid-lines">
        ${Oe(t)}

        <div class="academics-grid">
          <!-- Left Column (8 cols) -->
          <div class="academics-primary">
            ${ke(t)}
            ${Ne(s)}
          </div>

          <!-- Right Sidebar (4 cols) -->
          <aside class="academics-sidebar">
            ${Pe(a)}
            ${Me(n)}
          </aside>
        </div>
      </div>
    </div>
  `}S("academics",{render:Ue});function He(e,t){return`<div class="research-annotation"><span class="research-annotation-badge font-mono-data">PAGE. ${e}</span><div class="research-annotation-line"></div><span class="font-label-caps research-annotation-text">[DOCUMENT_CLASS: ${t}]</span></div>`}function x(e){return e?e.toLowerCase()==="present"?"Present":new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short"}):""}function G(e){return e?e.replace(/^\.\.\//,"/data/"):""}function De(e,t){const s=[],a={};return e&&Object.keys(e).forEach(n=>{(e[n]||[]).forEach(i=>{const o=x(i.start_date),c=x(i.end_date),r=`${o}${c?" — "+c:""}`;s.push({...i,_type:n,_label:`${r} // ${(i.type||n).toUpperCase()}`,_dateLabel:r}),a[n]=!0})}),(t||[]).forEach(n=>{const i=x(n.start_date),o=x(n.end_date),c=`${i}${o?" — "+o:""}`;s.push({...n,_type:"Community Outreach",_label:`${c} // ${(n.type||"OUTREACH").toUpperCase()}`,_dateLabel:c}),a["Community Outreach"]=!0}),{entries:s,typeMap:a}}function Ge(e){return e.length?`<div class="exp-timeline-col" id="exp-timeline-col">${e.map((s,a)=>{const n=(s.description||[]).map((c,r)=>`<div class="exp-timeline-item"><span class="font-mono-data exp-item-num">[${String(r+1).padStart(2,"0")}]</span><p class="font-body-sm exp-item-text exp-text-justify">${c}</p></div>`).join(""),i=s.mentions?Object.entries(s.mentions).map(([c,r])=>`<div class="font-mono-data exp-timeline-mention">${c.replace(/_/g," ").toUpperCase()}: ${r}</div>`).join(""):"",o=`data-exp-idx="${a}" data-tech="${encodeURIComponent(JSON.stringify(s.tech_stack||[]))}" data-skills="${encodeURIComponent(JSON.stringify(s.skills||[]))}"`;return`<div class="exp-timeline-entry exp-card-clickable" data-exp-type="${s._type.toLowerCase()}" ${o}><div class="exp-timeline-line"></div><div class="exp-timeline-node"></div><div class="exp-timeline-content"><div class="font-label-caps exp-timeline-label">${s._label}</div><div class="font-mono-data exp-timeline-role">${s.role||""}</div><h2 class="font-headline-lg exp-timeline-title exp-card-title">${s.title||""}</h2><h3 class="font-headline-md exp-timeline-org">${s.organization||""}</h3><div class="exp-timeline-items">${n}</div>${i}</div></div>`}).join("")}</div>`:""}function Be(e){return`<div class="exp-sidebar-card"><h4 class="font-label-caps exp-sidebar-heading">LOG_NAVIGATOR</h4><ul class="exp-nav-list">${Object.keys(e).map(a=>{const n=a.toLowerCase(),i=n.includes("intern")?"terminal":n.includes("research")?"biotech":n.includes("outreach")?"groups":"work";return`<li><a class="exp-nav-link font-mono-data exp-nav-filter" href="#" data-filter="${n}"><span class="material-symbols-outlined">${i}</span> ${a}</a></li>`}).join("")}</ul></div>`}function Fe(){return'<div class="exp-tech-card"><h4 class="font-label-caps exp-sidebar-heading">TECH_STACK // UTILIZED</h4><div id="exp-tech-stack-content" class="exp-tech-stack-content"><p class="font-body-sm exp-tech-placeholder">Click an experience entry to view tech stack.</p></div></div>'}function qe(e){return e.length?'<div id="exp-image-rotator-card"><div id="exp-image-container"><div style="color:var(--on-surface-variant);opacity:0.6;text-align:center;padding:1rem;font-size:var(--text-body-sm)">Loading media...</div></div></div>':""}function Ve(e,t){var a,n,i,o,c,r;return`<div class="exp-metric-section"><h3 class="font-label-caps exp-metric-title">[METRIC_SUMMARY // AGGREGATED]</h3><div class="exp-metrics-grid"><div class="exp-metric-card"><span class="font-mono-data exp-metric-label">PROJECTS COMPLETED</span><div class="font-headline-xl exp-metric-value">${(((n=(a=e.projects)==null?void 0:a.vlsi)==null?void 0:n.length)||0)+(((o=(i=e.projects)==null?void 0:i.iot)==null?void 0:o.length)||0)+(((r=(c=e.projects)==null?void 0:c.software)==null?void 0:r.length)||0)}+</div></div><div class="exp-metric-card"><span class="font-mono-data exp-metric-label">TOTAL POSITIONS</span><div class="font-headline-xl exp-metric-value">${t.length}</div></div></div></div>`}function ze(e){if(!e)return'<div class="container-page" style="padding-top:4rem"><p class="font-mono-data" style="color:var(--error)">No profile data.</p></div>';const{entries:t,typeMap:s}=De(e.experience,e.communityOutreach),a=[],n={};return t.forEach(i=>{const o=i.pictures;if(!o)return;const c=i.title||i.organization||"U";n[c]||(n[c]={IMG:0,FIG:0}),o.images&&Object.entries(o.images).forEach(([r,l])=>{n[c].IMG++,a.push({type:"IMG",num:n[c].IMG,name:r,url:G(l),source:c})}),o.figures&&Object.entries(o.figures).forEach(([r,l])=>{n[c].FIG++,a.push({type:"FIG",num:n[c].FIG,name:r,url:G(l),source:c})})}),window.__expPictures=a,`<div class="exp-page"><div class="exp-bg-overlay"></div><div class="container-page exp-page-inner blueprint-grid-lines"><div class="pubs-header">${He("05","EXPERIENCE_LOG")}<div class="pubs-header-bottom"><h1 class="font-headline-xl pubs-title">Professional Experience</h1></div></div><div class="exp-grid">${Ge(t)}<aside class="exp-sidebar">${Be(s)}${Fe()}${qe(a)}</aside></div>${Ve(e,t)}</div></div>`}function Je(){const e=document.getElementById("exp-tech-stack-content");document.querySelectorAll(".exp-card-clickable").forEach(r=>{r.addEventListener("click",()=>{let l=[],d=[];try{l=JSON.parse(decodeURIComponent(r.dataset.tech))}catch{}try{d=JSON.parse(decodeURIComponent(r.dataset.skills))}catch{}e&&(e.innerHTML=l.map(u=>`<span class="exp-skill-chip font-mono-data">${u}</span>`).join(""),d.length&&(e.innerHTML+=`<div class="exp-tech-divider"></div>${d.map(u=>`<span class="exp-skill-chip font-mono-data">${u}</span>`).join("")}`))})});let t="";document.querySelectorAll(".exp-nav-filter").forEach(r=>{r.addEventListener("click",l=>{l.preventDefault(),t=t===r.dataset.filter?"":r.dataset.filter,document.querySelectorAll(".exp-timeline-entry").forEach(d=>{d.style.display=!t||d.dataset.expType===t?"":"none"})})});const s=window.__expPictures||[];let a=2;s.forEach(r=>{const l=Math.max(1,Math.ceil(r.name.length/35)),d=Math.max(1,Math.ceil(r.source.length/35));a=Math.max(a,l+d)});const n=a*.875+"em",i=document.getElementById("exp-image-container");if(i&&s.length){let d=function(p){return`<div style="border:1px solid var(--outline-variant);padding:0.5rem;background:var(--surface-container-lowest)"><div style="aspect-ratio:1/1;overflow:hidden;background:var(--surface-container);margin-bottom:0.5rem"><img src="${p.url}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.onerror=null;this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;padding:1rem;text-align:center;color:var(--on-surface-variant);font-size:var(--text-body-sm)'>'+this.alt+'</div>'" /></div><div style="height:${n};overflow:hidden;display:flex;flex-direction:column;justify-content:space-between"><p style="font-family:var(--font-mono);font-size:0.625rem;color:var(--on-surface-variant);line-height:1.4;margin:0;overflow:hidden" id="exp-rotator-line1"></p><p style="font-family:var(--font-mono);font-size:0.625rem;color:var(--outline);line-height:1.4;margin:0;overflow:hidden;font-style:italic" id="exp-rotator-line2"></p></div></div>`},u=function(p){const m=`${p.type}.${String(p.num).padStart(2,"0")}: ${p.name}`,v=`— ${p.source}`,h=document.getElementById("exp-rotator-line1"),y=document.getElementById("exp-rotator-line2");if(!h||!y)return;let g=0;function $(){g<=m.length?(h.innerHTML=m.substring(0,g)+r,g++,setTimeout($,15)):(g=0,h.innerHTML=m,setTimeout(C,200))}function C(){g<=v.length?(y.innerHTML=v.substring(0,g),g++,setTimeout(C,15)):(y.innerHTML=v,setTimeout(()=>{let f=v.length;function L(){if(f>=0)y.innerHTML=v.substring(0,f),f--,setTimeout(L,10);else{let I=function(){f>=0?(h.innerHTML=m.substring(0,f),f--,setTimeout(I,10)):(h.innerHTML="",y.innerHTML="",h.innerHTML=r,setTimeout(()=>{let E;do E=s[Math.floor(Math.random()*s.length)];while(E===p&&s.length>1);const w=new Image;w.onload=()=>{i.style.opacity="0",setTimeout(()=>{l=E,i.innerHTML=d(E),i.style.opacity="1",u(E)},200)},w.src=E.url},500))};var N=I;f=m.length,y.innerHTML="",setTimeout(I,100)}}setTimeout(L,3e3)},1500))}$()};var o=d,c=u;const r='<span class="exp-loc-cursor">|</span>';s.forEach(p=>{const m=new Image;m.src=p.url});let l=s[0];i.innerHTML=d(l),u(l)}}S("experience",{render:ze,mount:Je});function A(e){return e?e.replace(/^\.\.\//,"/data/"):""}function Ye(e,t){return`
    <div class="research-annotation">
      <span class="research-annotation-badge font-mono-data">PAGE. ${e}</span>
      <div class="research-annotation-line"></div>
      <span class="font-label-caps research-annotation-text">[DOCUMENT_CLASS: ${t}]</span>
    </div>`}function Y(e){const t=[];if(!e)return t;for(const[s,a]of Object.entries(e))Array.isArray(a)&&a.forEach(n=>{t.push({...n,_type:s.toUpperCase()})});return t}function We(e){const t=new Set,s=new Set,a=new Set;return e.forEach(n=>{const i=n.techStack||{};(i.tools||[]).forEach(o=>t.add(o)),(i.languages||[]).forEach(o=>s.add(o)),(i.concepts||[]).forEach(o=>a.add(o))}),{tools:[...t],languages:[...s],concepts:[...a]}}function Ke(e,t){var P,M,U;const s=e.technical_specs||null,a=s?Object.entries(s).map(([b,T])=>({label:b.toUpperCase().replace(/\s+/g,"_"),value:T})):[],n=a.length>0,i=[...((P=e.techStack)==null?void 0:P.languages)||[],...((M=e.techStack)==null?void 0:M.tools)||[],...((U=e.techStack)==null?void 0:U.concepts)||[]].slice(0,8),o=i.map(b=>`<span class="proj-chip font-mono-data">${b}</span>`).join(""),r=(e.highlights||[]).slice(0,4).map(b=>`<li class="font-body-sm proj-highlight-item">${b}</li>`).join(""),l=A(e.thumbnail),d=!!e.thumbnail,u=e.github||"",p=e.results||{},m=Object.entries(p).filter(([b,T])=>b&&T),v=n?`
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
    </div>`:"",g=i.length>0,$=(e.metrics||[]).length>0,C=(e.highlights||[]).length>0,f=`proj-${t}`,L=g?`<div class="proj-toggle-section" id="${f}-tech"><div class="proj-tech-chips">${o}</div></div>`:"",N=$?`<div class="proj-toggle-section" id="${f}-metrics">${`<ul class="proj-metrics-list">${(e.metrics||[]).slice(0,4).map(b=>`<li class="font-body-sm proj-metric-chip">${b}</li>`).join("")}</ul>`}</div>`:"",I=C?`<div class="proj-toggle-section" id="${f}-highlights">${r?`<ul class="proj-highlights">${r}</ul>`:""}</div>`:"",w=g||$||C?`
    <div class="proj-toggle-wrapper">
      <div class="proj-toggle-bar">
        ${g?`<button class="proj-toggle-btn" data-target="${f}-tech" title="Tech stack"><span class="material-symbols-outlined">widgets</span></button>`:""}
        ${$?`<button class="proj-toggle-btn" data-target="${f}-metrics" title="Metrics"><span class="material-symbols-outlined">bar_chart</span></button>`:""}
        ${C?`<button class="proj-toggle-btn" data-target="${f}-highlights" title="Highlights"><span class="material-symbols-outlined">stars</span></button>`:""}
      </div>
      ${L}
      ${N}
      ${I}
    </div>`:"";return`
    <article class="proj-card hard-shadow" data-type="${e._type}" data-index="${t}">
      <div class="proj-card-id-box font-mono-data">ID: ${(e.id||"").replace(/\s+/g,"_")}</div>
      <span class="font-label-caps proj-card-category">${e._type} // CATEGORY: ${(e.category||"").toUpperCase().replace(/\s+/g,"_")}</span>
      <h2 class="font-headline-md proj-card-title">${e.title}</h2>
      <p class="font-body-md proj-card-overview">${e.overview||""}</p>
      ${y}
      ${w}
      <div class="proj-card-footer">
        ${u?`<a href="${u}" target="_blank" rel="noopener noreferrer" class="proj-github-link font-mono-data hard-shadow-sm">
          <span class="material-symbols-outlined" style="font-size:1rem;">code</span>
          GITHUB_REPOSITORY
        </a>`:""}
        ${m.map(([b,T])=>{const K=A(T),X=b.toUpperCase().replace(/\s+/g,"_");return`<a href="${K}" download class="proj-result-link font-mono-data hard-shadow-sm">
            <span class="material-symbols-outlined" style="font-size:1rem;">download</span>
            ${X}
          </a>`}).join("")}
      </div>
    </article>
  `}function Xe(e){const t=[];if(!e)return t;for(const[s,a]of Object.entries(e))Array.isArray(a)&&a.length>0&&t.push(s.toUpperCase());return t}function Ze(e){return`
    <div class="proj-filter-bar">
      <button class="proj-filter-btn proj-filter-btn--active font-mono-data" data-filter="all">ALL_CORES</button>
      ${e.filter(s=>s!=="all").map(s=>`<button class="proj-filter-btn font-mono-data" data-filter="${s}">${s.toUpperCase()}</button>`).join("")}
    </div>
  `}function Qe(e,t,s){const a=e.length,n=s.map(c=>{const r=e.filter(d=>d._type===c).length,l=c==="VLSI"?"VLSI_CORES":c==="IoT"?"IoT_SYSTEMS":c+"_PROJECTS";return`<div class="proj-metric-item"><span class="font-headline-lg proj-metric-value">${r}</span><span class="font-mono-data proj-metric-label">${l}</span></div>`}).join(""),i=t.tools.slice(0,10).map(c=>`<span class="proj-skill-chip font-mono-data">${c}</span>`).join(""),o=t.languages.slice(0,8).map(c=>`<span class="proj-skill-chip font-mono-data">${c}</span>`).join("");return`
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
      ${o?`
      <div class="proj-sidebar-section">
        <h3 class="font-label-caps proj-sidebar-heading">LANGUAGES</h3>
        <div class="proj-skill-chips">${o}</div>
      </div>`:""}
      ${i?`
      <div class="proj-sidebar-section">
        <h3 class="font-label-caps proj-sidebar-heading">TOOLCHAIN</h3>
        <div class="proj-skill-chips">${i}</div>
      </div>`:""}
      <div class="proj-sidebar-section" id="proj-commit-section">
        <h3 class="font-label-caps proj-sidebar-heading">COMMIT_LOG // RECENT</h3>
        <div id="proj-commit-content" class="font-mono-data" style="font-size:0.625rem;color:var(--outline)">Fetching latest commit...</div>
      </div>
    </aside>
  `}function k(e){if(!e)return'<div class="container-page" style="padding-top:4rem"><p class="font-mono-data" style="color:var(--error)">No profile data.</p></div>';const t=e.projects,s=Y(t),a=Xe(t),n=We(s),i=s.map((o,c)=>Ke(o,c)).join("");return`
    <div class="proj-page">
      <div class="container-page proj-page-inner blueprint-grid-lines">
        <div class="pubs-header">
          ${Ye("06","PROJECT_INDEX")}
          <div class="pubs-header-bottom">
            <h1 class="font-headline-xl pubs-title">Development & Engineering</h1>
            ${Ze(a)}
          </div>
        </div>

        <div class="proj-grid">
          <div class="proj-cards-col" id="proj-cards-col">
            ${i}
          </div>
          ${Qe(s,n,a)}
        </div>
      </div>
    </div>
  `}async function et(){const e=document.getElementById("proj-commit-content");if(e)try{const t=await fetch("https://api.github.com/users/yusuf-silicon/repos?sort=updated&per_page=1&direction=desc");if(!t.ok)throw new Error("API error");const s=await t.json();if(!s.length)throw new Error("No repos");const a=s[0].name,n=await fetch(`https://api.github.com/repos/yusuf-silicon/${a}/commits?per_page=3`);if(!n.ok)throw new Error("API error");const i=await n.json();if(!i.length)throw new Error("No commits");e.innerHTML=i.map(o=>{const c=new Date(o.commit.author.date).toISOString().split("T")[0],r=o.commit.message.split(`
`)[0].substring(0,60),l=o.sha.substring(0,7);return`<div style="border-left:2px solid var(--primary);padding-left:0.5rem;margin-bottom:0.5rem"><div style="color:var(--primary)">${c}</div><div style="color:var(--on-surface-variant);margin-top:0.25rem">${r}</div><div style="color:var(--outline);margin-top:0.25rem;font-size:0.5625rem">${a} @ ${l}</div></div>`}).join("")}catch{e.textContent="Unable to fetch latest commits."}}function W(){et(),document.querySelectorAll(".progressive-image").forEach(t=>{t.complete&&t.classList.add("progressive-image--loaded")}),document.querySelectorAll(".proj-toggle-btn").forEach(t=>{t.addEventListener("click",()=>{const s=t.dataset.target,a=document.getElementById(s);if(!a)return;const n=a.classList.contains("proj-toggle-section--open"),i=t.closest(".proj-card");i&&(i.querySelectorAll(".proj-toggle-section").forEach(o=>o.classList.remove("proj-toggle-section--open")),i.querySelectorAll(".proj-toggle-btn").forEach(o=>o.classList.remove("proj-toggle-btn--active"))),n||(a.classList.add("proj-toggle-section--open"),t.classList.add("proj-toggle-btn--active"))})}),(window.__projProjects||[]).forEach(t=>{if(t.thumbnail){const s=new Image;s.src=A(t.thumbnail)}t.gallery&&t.gallery.forEach(s=>{const a=new Image;a.src=A(s)})}),document.querySelectorAll(".proj-filter-btn").forEach(t=>{t.addEventListener("click",()=>{document.querySelectorAll(".proj-filter-btn").forEach(a=>a.classList.remove("proj-filter-btn--active")),t.classList.add("proj-filter-btn--active");const s=t.dataset.filter;document.querySelectorAll(".proj-card").forEach(a=>{s==="all"||a.dataset.type===s?a.style.display="":a.style.display="none"})})}),document.querySelectorAll(".proj-card-thumb").forEach(t=>{t.addEventListener("click",()=>{const s=parseInt(t.dataset.gallery,10),n=(window.__projProjects||[])[s];if(!n)return;const i=[];n.thumbnail&&i.push(n.thumbnail),n.gallery&&n.gallery.length&&i.push(...n.gallery),i.length&&tt(i,n.title)})})}function tt(e,t){const s=document.createElement("div");s.className="proj-gallery-overlay",s.innerHTML=`
    <div class="proj-gallery-backdrop"></div>
    <div class="proj-gallery-content">
      <button class="proj-gallery-close font-mono-data" type="button">CLOSE [X]</button>
      <h3 class="font-headline-md proj-gallery-title">${t}</h3>
      <div class="proj-gallery-images">
        ${e.map(a=>`<img src="${A(a)}" alt="" loading="lazy" class="proj-gallery-img" />`).join("")}
      </div>
    </div>
  `,document.body.appendChild(s),requestAnimationFrame(()=>s.classList.add("proj-gallery-overlay--open")),s.querySelector(".proj-gallery-close").addEventListener("click",()=>B(s)),s.querySelector(".proj-gallery-backdrop").addEventListener("click",()=>B(s))}function B(e){e.classList.remove("proj-gallery-overlay--open"),e.addEventListener("transitionend",()=>e.remove(),{once:!0})}const at=k;k=function(e){const t=Y(e==null?void 0:e.projects);return window.__projProjects=t,at(e)};S("projects",{render:k,mount:W});const st=document.getElementById("app");function nt(){st.innerHTML=`
    <header id="app-header"></header>
    <main id="page-content"></main>
    <footer id="app-footer"></footer>
  `}async function F(){const e=V(),t=Q(),s=ee(e),a=document.getElementById("page-content");if(a){if(s&&s.render){const n=await s.render(t);a.innerHTML=n,s.mount&&s.mount()}else e==="home"?a.innerHTML='<div class="container-page" style="padding-top: 4rem; padding-bottom: 4rem;"><p class="font-mono-data" style="color: var(--on-surface-variant);">// PAGE: HOME — Coming in Stage C</p></div>':a.innerHTML=`<div class="container-page" style="padding-top: 4rem; padding-bottom: 4rem;"><p class="font-mono-data" style="color: var(--on-surface-variant);">// PAGE: ${e.toUpperCase()} — Under construction</p></div>`;window.__updateActiveNav&&window.__updateActiveNav(e)}}function it(){const e=localStorage.getItem("theme"),t=window.matchMedia("(prefers-color-scheme: dark)").matches;e==="dark"||!e&&t?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}function ot(){document.documentElement.classList.toggle("dark");const e=document.documentElement.classList.contains("dark");localStorage.setItem("theme",e?"dark":"light"),z()}async function ct(){it(),nt();const e=await Z();if(!e){const n=document.getElementById("page-content");n&&(n.innerHTML='<p style="padding: 2rem; color: var(--error);">Failed to load profile data.</p>');return}const t=document.getElementById("app-header");t&&(t.innerHTML=se(e),ne());const s=document.getElementById("theme-toggle-slot");s&&(s.innerHTML=oe(),ce());const a=document.getElementById("app-footer");a&&(a.innerHTML=ie(e)),he(),J(),W(),window.addEventListener("hashchange",F),F(),console.log("🔧 Yusuf Silicon Portfolio — Ready")}ct().catch(e=>console.error("❌ App initialization failed:",e));
