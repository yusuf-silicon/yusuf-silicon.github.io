(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}})();let $=null;async function H(){var e;if($)return $;try{const n=await fetch("/data/profile_data/profile.json");if(!n.ok)throw new Error(`HTTP ${n.status}`);return $=await n.json(),console.log("✅ Profile loaded:",(e=$.personal)==null?void 0:e.name),$}catch(n){return console.error("❌ Failed to load profile:",n),null}}function D(){return $}const j={};function I(e,n){j[e.toLowerCase()]=n}function B(e){return j[e.toLowerCase()]}function G(e){window.location.hash=`#/${e}`}function M(){return(window.location.hash.slice(1)||"/home").replace(/^\//,"").toLowerCase()}const F=[{label:"Home",path:"home"},{label:"Research",path:"research"},{label:"Publications",path:"publications"},{label:"Academics",path:"academics"},{label:"Experience",path:"experience"},{label:"Projects",path:"projects"},{label:"Hobbies",path:"hobbies"},{label:"Contact",path:"contact"}];let x="home";function q(e){var t;const n=((t=e==null?void 0:e.personal)==null?void 0:t.nickname)||"YUSUF_SILICON";x=M();const s=F.map(a=>{const i=a.path===x;return`
        <a href="#/${a.path}"
           class="header-nav-link font-label-caps ${i?"header-nav-link--active":""}"
           data-route="${a.path}">
          ${a.label}
        </a>`}).join("");return`
    <div class="header-inner container-page">
      <span class="header-logo font-mono-data">
        [${n}]
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
  `}function V(){const e=document.querySelector(".header-inner");if(!e)return;e.addEventListener("click",t=>{const a=t.target.closest("[data-route]");if(a){t.preventDefault();const i=a.dataset.route,o=document.getElementById("header-nav"),c=document.getElementById("header-hamburger");if(o&&o.classList.contains("header-nav--open")&&(o.classList.remove("header-nav--open"),c)){const r=c.querySelector(".material-symbols-outlined");r&&(r.textContent="menu")}G(i)}});const n=document.getElementById("header-hamburger"),s=document.getElementById("header-nav");n&&s&&n.addEventListener("click",()=>{s.classList.toggle("header-nav--open");const t=n.querySelector(".material-symbols-outlined");t&&(t.textContent=s.classList.contains("header-nav--open")?"close":"menu")}),window.__updateActiveNav=t=>{x=t,document.querySelectorAll(".header-nav-link").forEach(a=>{const i=a.dataset.route===t;a.classList.toggle("header-nav-link--active",i)})}}function W(e){if(!e)return`
      <div class="footer-inner container-page">
        <span class="footer-copyright font-label-caps">© 2026 // CORE: COMPUTER_ARCHITECTURE_&_RESEARCH</span>
      </div>
    `;const n=e.contact||{},s=n.resume||"#",t=n.email?`mailto:${n.email}`:"#",a=n.github||"#";return`
    <div class="footer-inner container-page">
      <span class="footer-copyright font-label-caps">
        © 2026 // CORE: COMPUTER_ARCHITECTURE_&_RESEARCH
      </span>
      <div class="footer-links">
        <a href="${s}" class="footer-link font-label-caps" target="_blank" rel="noopener noreferrer">
          CV_DOWNLOAD
        </a>
        <a href="${t}" class="footer-link font-label-caps">
          CONTACT
        </a>
        <a href="${a}" class="footer-link font-label-caps" target="_blank" rel="noopener noreferrer">
          SOURCE_CODE
        </a>
      </div>
    </div>
  `}function J(){return`
    <button class="theme-toggle-btn" id="theme-toggle-btn" type="button" aria-label="Toggle theme">
      <span class="material-symbols-outlined">${document.documentElement.classList.contains("dark")?"dark_mode":"light_mode"}</span>
    </button>
  `}function z(){const e=document.getElementById("theme-toggle-btn");e&&e.addEventListener("click",()=>{Ue(),P()})}function P(){const e=document.getElementById("theme-toggle-btn");if(!e)return;const n=e.querySelector(".material-symbols-outlined");if(!n)return;const s=document.documentElement.classList.contains("dark");n.textContent=s?"dark_mode":"light_mode"}function _(e){return e?e.replace(/^\.\.\//,"/data/"):""}function K(e,n){const s=(e==null?void 0:e.name)||"",t=(e==null?void 0:e.headline)||"",a=(e==null?void 0:e.description)||"",i=(e==null?void 0:e.description_highlight)||[],o=_(e==null?void 0:e.image),r=((n==null?void 0:n.description_mentions)||[]).map(l=>`<span class="chip">${l.toUpperCase().replace(/\s+/g,"_")}</span>`).join("");let d=a;if(i.length){const l=[...i].sort((m,u)=>u.length-m.length);for(const m of l){const u=m.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");d=d.replace(new RegExp(`(${u})`,"gi"),'<span class="home-highlight">$1</span>')}}return`
    <section class="home-section">
      <div class="home-id-card">
        <div class="home-id-card-text">
          <div class="font-label-caps page-section-label id-card-label">
            <span class="section-label-dot"></span> [ID_CARD // USER_PROFILE]
          </div>
          <h1 class="font-headline-xl home-name">${s}</h1>
          <p class="font-body-lg home-headline">${t}</p>
          <p class="font-body-md home-description">${d}</p>
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
  `}function Y(e){var c,r,d,l,m,u,p,v,h,g,f;const n=((r=(c=e==null?void 0:e.research)==null?void 0:c.publications)==null?void 0:r.length)||0,s=(((l=(d=e==null?void 0:e.projects)==null?void 0:d.vlsi)==null?void 0:l.length)||0)+(((u=(m=e==null?void 0:e.projects)==null?void 0:m.iot)==null?void 0:u.length)||0)+(((v=(p=e==null?void 0:e.projects)==null?void 0:p.software)==null?void 0:v.length)||0),t=((g=(h=e==null?void 0:e.research)==null?void 0:h.theses)==null?void 0:g.length)||0,a=((f=e==null?void 0:e.certifications)==null?void 0:f.length)||0;return`
    <div class="sidebar-section">
      <div class="font-label-caps page-section-label sidebar-section-heading">01 // ANALYTICS_MODULE</div>
      <div class="metrics-grid">${[{label:"PUBLICATIONS",value:n.toString().padStart(2,"0")},{label:"PROJECTS",value:s.toString().padStart(2,"0")},{label:"THESES",value:t.toString().padStart(2,"0")},{label:"CERTIFICATIONS",value:a.toString().padStart(2,"0")}].map(E=>`
      <div class="metric-card">
        <div class="font-label-caps metric-card-label">${E.label}</div>
        <div class="font-headline-md metric-card-value">${E.value}</div>
      </div>
    `).join("")}</div>
    </div>
  `}function X(e,n){if(!e)return"";const t=[{icon:"mail",content:e.email||"",href:e.email?`mailto:${e.email}`:null},{icon:"school",content:"Google Scholar",href:e.google_scholar||null},{icon:"code",content:"github.com/yusuf-silicon",href:e.github||null},{icon:"location_on",content:(n==null?void 0:n.location)||""}].filter(i=>i.content).map(i=>`
      <li class="contact-item">
        <span class="material-symbols-outlined contact-icon">${i.icon}</span>
        ${i.href?`<a class="contact-link" href="${i.href}" target="_blank" rel="noopener noreferrer">${i.content}</a>`:`<span class="contact-text">${i.content}</span>`}
      </li>
    `).join(""),a=e.resume?_(e.resume):"#";return`
    <div class="sidebar-section">
      <div class="font-label-caps page-section-label sidebar-section-heading">02 // COMMUNICATION_BUS</div>
      <ul class="contact-list">${t}</ul>
      <div class="resume-btn-wrapper">
        <a href="${a}" class="resume-btn font-label-caps" target="_blank" rel="noopener noreferrer">
          DOWNLOAD_CV.PDF
        </a>
      </div>
    </div>
  `}function Z(e){const n=(e==null?void 0:e.overview)||[];return n.length?`
    <div class="sidebar-section">
      <div class="font-label-caps page-section-label sidebar-section-heading">// RESEARCH_INTERESTS</div>
      <div class="interests-visual">${n.map(t=>{const a=(t.includes||[]).map(i=>`<span class="chip chip-sm">${i}</span>`).join("");return`
        <div class="interest-area">
          <div class="font-label-caps interest-area-name">${t.name.toUpperCase().replace(/\s+/g,"_")}</div>
          <div class="interest-area-chips">${a}</div>
        </div>
      `}).join("")}</div>
    </div>
  `:""}function Q(e){return!e||!e.length?"":`
    <div class="content-section">
      <div class="content-section-header">
        <div class="font-label-caps page-section-label">03 // PEER_REVIEWED_ARCHIVE</div>
        <a class="font-mono-data content-section-link" href="#/publications">VIEW_ALL_PUBLICATIONS</a>
      </div>
      <div class="pub-cards">${e.slice(0,2).map(t=>{const a=t.year||"",i=t.month||"",o=t.venue_short||"",c=t.doi||"",r=t.citation||"",d=r?encodeURIComponent(r):"";return`
        <div class="pub-card">
          <div class="font-mono-data pub-card-year">${a}${i?"."+i.substring(0,3).toUpperCase():""}</div>
          <div class="font-label-caps pub-card-venue">${o}</div>
          <h3 class="font-headline-md pub-card-title">${t.title}</h3>
          <p class="font-body-sm pub-card-authors">${(t.authors||[]).join(", ")}</p>
          <p class="font-body-sm pub-card-desc">${t.description||""}</p>
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
  `}function ee(e){const s=((e==null?void 0:e.vlsi)||[]).filter(a=>a.featured).slice(0,2);return s.length?`
    <div class="content-section">
      <div class="content-section-header">
        <div class="font-label-caps page-section-label">04 // HARDWARE_HARD_REPO</div>
        <a class="font-mono-data content-section-link" href="#/projects">VIEW_PROJECTS</a>
      </div>
      <div class="project-cards">${s.map(a=>{var r;const i=_(a.thumbnail),c=(((r=a.techStack)==null?void 0:r.languages)||[]).slice(0,2).map(d=>`<span class="chip chip-tech">${d.toUpperCase()}</span>`).join("");return`
        <div class="project-card">
          <div class="project-card-thumb">
            <img src="${i}" alt="${a.title}" loading="lazy" />
            <div class="project-card-status font-mono-data">STATUS: ${(a.status||"").toUpperCase()}</div>
          </div>
          <div class="project-card-body">
            <div class="font-label-caps project-card-id">${a.id||""}</div>
            <h4 class="font-headline-md project-card-title">${a.title}</h4>
            <p class="font-body-sm project-card-desc">${a.overview||""}</p>
            <div class="project-card-techs">${c}</div>
          </div>
        </div>
      `}).join("")}</div>
    </div>
  `:""}function te(e){var o;if(!e)return`<div class="container-page" style="padding-top: 4rem;">
      <p class="font-mono-data" style="color: var(--error);">No profile data available.</p>
    </div>`;const n=e.personal,s=e.interests,t=e.contact,a=(o=e.research)==null?void 0:o.publications,i=e.projects;return`
    <div class="home-page">
      <div class="container-page home-page-inner blueprint-grid-lines">
        ${K(n,s)}

        <!-- Two-column grid: sidebar + content -->
        <div class="home-grid">
          <!-- Left Sidebar (4 cols) -->
          <aside class="home-sidebar">
            ${Y(e)}
            ${X(t,n)}
            ${Z(s)}
          </aside>

          <!-- Right Content (8 cols) -->
          <section class="home-content">
            ${Q(a)}
            ${ee(i)}
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
  `}function ne(){const e=document.getElementById("page-content");e&&e.addEventListener("click",n=>{const s=n.target.closest(".citation-btn");if(!s)return;n.preventDefault();const t=decodeURIComponent(s.dataset.citation);t&&navigator.clipboard.writeText(t).then(()=>{w("CITATION_COPIED")}).catch(()=>{const a=document.createElement("textarea");a.value=t,a.style.position="fixed",a.style.opacity="0",document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a),w("CITATION_COPIED")})})}function w(e){const n=document.querySelector(".toast-notification");n&&n.remove();const s=document.createElement("div");s.className="toast-notification font-mono-data",s.textContent=e,document.body.appendChild(s),requestAnimationFrame(()=>{s.classList.add("toast-notification--visible")}),setTimeout(()=>{s.classList.remove("toast-notification--visible"),s.addEventListener("transitionend",()=>s.remove(),{once:!0})},2e3)}I("home",{render:te});function ae(e){const n=(e||"").toLowerCase();return n.includes("architecture")||n.includes("memory")||n.includes("processor")?"developer_board":n.includes("ai")||n.includes("acceleration")||n.includes("cryptographic")?"neurology":n.includes("energy")||n.includes("high-perform")||n.includes("security")?"bolt":"science"}function se(e,n){const s=t=>t?new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"short"}):"";return`${s(e)} — ${s(n)||"PRESENT"}`}function ie(e,n){return`
    <div class="research-annotation">
      <span class="research-annotation-badge font-mono-data">PAGE. ${e}</span>
      <div class="research-annotation-line"></div>
      <span class="font-label-caps research-annotation-text">[DOCUMENT_CLASS: ${n}]</span>
    </div>
  `}function oe(e){const n=(e==null?void 0:e.overview)||[];return n.length?`
    <div class="sidebar-section">
      <div class="font-label-caps research-section-heading">[RESEARCH_AREAS_V2.0]</div>
      <ul class="research-area-list">${n.map(t=>`
        <li class="research-area-item">
          <div class="research-area-item-inner">
            <span class="material-symbols-outlined research-area-icon">${ae(t.name)}</span>
            <div class="research-area-content">
              <h3 class="font-headline-md research-area-name">${t.name}</h3>
              <p class="font-body-sm research-area-desc research-text-justify">${t.description||""}</p>
            </div>
          </div>
        </li>
      `).join("")}</ul>
    </div>
  `:""}function ce(e){var o,c,r,d,l,m;const n=((c=(o=e==null?void 0:e.interests)==null?void 0:o.overview)==null?void 0:c.length)||0,s=((d=(r=e==null?void 0:e.research)==null?void 0:r.publications)==null?void 0:d.length)||0,t=((m=(l=e==null?void 0:e.research)==null?void 0:l.theses)==null?void 0:m.length)||0;return`
    <div class="sidebar-section">
      <div class="font-label-caps research-section-heading">[SYSTEM_METRICS]</div>
      <div class="metrics-table">${[{label:"RESEARCH_INTERESTS",value:n.toString().padStart(2,"0")},{label:"PUBLICATIONS",value:s.toString().padStart(2,"0")},{label:"THESES",value:t.toString().padStart(2,"0")}].map(u=>`
      <div class="metric-row">
        <span class="font-mono-data metric-row-label">${u.label}</span>
        <span class="font-mono-data metric-row-value">${u.value}</span>
      </div>
    `).join("")}</div>
    </div>
  `}function re(e){const n=(e||[]).filter(t=>t.status==="active");return n.length?`
    <section class="content-section research-section">
      <div class="font-label-caps research-section-heading content-section-label">
        <span class="section-label-dot"></span> [CURRENT_INVESTIGATIONS]
      </div>
      <div class="investigations-grid">${n.map((t,a)=>{const i=(t.category||[]).map(o=>`<span class="chip chip-sm chip-investigation">${o.toUpperCase().replace(/\s+/g,"_")}</span>`).join("");return`
        <div class="investigation-card">
          <span class="investigation-card-number font-mono-data">#${String(a+1).padStart(3,"0")}</span>
          <h3 class="font-headline-md investigation-card-title">${t.title||""}</h3>
          <p class="font-body-sm investigation-card-desc research-text-justify">${t.description||""}</p>
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
    `}function de(e,n){const s=(n==null?void 0:n.research)||[];if(!s.length)return"";const t=(e==null?void 0:e.length)||0;return`
    <section class="content-section research-section future-section">
      <div class="font-label-caps research-section-heading content-section-label">[FUTURE_DIRECTIONS_ROADMAP]</div>
      <div class="future-directions">${s.map((i,o)=>{const c=t+o+1;return`
        <div class="future-direction-item">
          <span class="font-mono-data future-direction-id">${`PROJECT_${String(c).padStart(3,"0")}`}</span>
          <div>
            <h4 class="font-headline-md future-direction-title">${i.title}</h4>
            <p class="font-body-sm future-direction-desc research-text-justify">${i.description||""}</p>
          </div>
        </div>
      `}).join("")}</div>
    </section>
  `}function le(e){const n=(e||[]).filter(t=>t.status!=="active");return n.length?`
    <section class="content-section research-section">
      <div class="font-label-caps research-section-heading content-section-label">[EVOLUTION_TIMELINE]</div>
      <div class="timeline">
        <div class="timeline-line"></div>
        ${n.map((t,a)=>{const i=se(t.start_date,t.end_date);return`
        <div class="timeline-entry">
          <div class="timeline-node-col">
            <div class="timeline-node ${a===0?"timeline-node--active":""}"></div>
          </div>
          <div class="timeline-content">
            <div class="timeline-header">
              <span class="font-mono-data timeline-date">${i}</span>
              <span class="font-label-caps timeline-tag">${t.institution||""}</span>
            </div>
            <h3 class="font-headline-md timeline-title">${t.title}</h3>
            <p class="font-body-sm timeline-desc research-text-justify">${t.description||""}</p>
            ${t.advisor?`<div class="font-mono-data timeline-advisor">ADVISOR: ${t.advisor}</div>`:""}
          </div>
        </div>
      `}).join("")}
      </div>
    </section>
  `:""}function ue(e){var a;if(!e)return`<div class="container-page" style="padding-top: 4rem;">
      <p class="font-mono-data" style="color: var(--error);">No profile data available.</p>
    </div>`;const n=e.interests,s=(a=e.research)==null?void 0:a.theses,t=e.future_projects;return`
    <div class="research-page">
      <div class="container-page research-page-inner blueprint-grid-lines">
        <div class="pubs-header">
          ${ie("02","RESEARCH_MANIFESTO")}
          <div class="pubs-header-bottom" style="margin-bottom: 0;">
            <h1 class="font-headline-xl pubs-title">Research Repository</h1>
          </div>
        </div>

        <div class="research-grid">
          <aside class="research-sidebar">
            ${oe(n)}
            ${ce(e)}
          </aside>

          <section class="research-content">
            ${re(s)}
            ${de(s,t)}
            ${le(s)}
          </section>
        </div>
      </div>
    </div>
  `}I("research",{render:ue});function me(e,n){return`
    <div class="research-annotation">
      <span class="research-annotation-badge font-mono-data">PAGE. ${e}</span>
      <div class="research-annotation-line"></div>
      <span class="font-label-caps research-annotation-text">[DOCUMENT_CLASS: ${n}]</span>
    </div>
  `}let C=null;async function pe(){if(C!==null)return C;try{const n=await(await fetch("https://api.allorigins.win/raw?url="+encodeURIComponent("https://scholar.google.com/citations?user=EJitK1IAAAAJ&hl=en&pagesize=100"),{signal:AbortSignal.timeout(5e3)})).text(),s=/citedby\s*=\s*['"](\d+)['"]/gi;let t;const a=[];for(;(t=s.exec(n))!==null;)a.push(parseInt(t[1],10));C=a.length?a:null}catch{C=null}return C}function ve(){return`
    <div class="pubs-header">
      ${me("03","PUBLICATION_ARCHIVE")}
      <div class="pubs-header-bottom">
        <h1 class="font-headline-xl pubs-title">Scientific Publications</h1>
        <div class="pubs-search">
          <span class="material-symbols-outlined pubs-search-icon">search</span>
          <input class="pubs-search-input font-mono-data" type="text" id="pubSearchInput" placeholder="Filter by Venue, Keyword, or Year..." />
        </div>
      </div>
    </div>
  `}function he(e,n){var m;if(!e||!e.length)return"";const s=e.map(()=>0),a=[...e.map((u,p)=>({...u,citations:s[p]||0}))].sort((u,p)=>p.citations-u.citations),i=((m=a[0])==null?void 0:m.citations)||0,o=a.filter(u=>u.citations===i),c=e.filter(u=>u.featured),r=(u,p)=>u.map((v,h)=>`
      <div class="selected-work-entry">
        ${h>0?'<div class="selected-work-divider"></div>':""}
        <div class="font-mono-data selected-work-fig">${p} ${String(h+1).padStart(2,"0")}</div>
        <h3 class="font-headline-md selected-work-title">${v.title}</h3>
        <p class="font-body-sm selected-work-venue">${v.venue_short||v.venue||""}</p>
        ${v.citations!==void 0?`<div class="font-mono-data selected-work-cites">CITATIONS: ${v.citations}</div>`:""}
      </div>
    `).join(""),d=o.length?r(o,"// TOP_CITED"):"",l=c.length?r(c,"// FEATURED"):"";return`
    <div class="sidebar-section pubs-selected-works">
      <div class="research-section-heading">SELECTED_WORKS</div>
      ${d?`<div class="selected-works-list">${d}</div>`:""}
      ${l?`<div class="selected-works-list" style="${d?"margin-top: 1.5rem;":""}">${l}</div>`:""}
    </div>
  `}function fe(e,n){return e!=null&&e.length,`
    <div class="pubs-metrics">
      <div class="font-mono-data pubs-metrics-header">METRICS_LOG</div>
      <div class="pubs-metrics-grid">
        <div class="pubs-metric">
          <div class="font-headline-md pubs-metric-value">0</div>
          <div class="font-label-caps pubs-metric-label">CITATIONS</div>
        </div>
        <div class="pubs-metric">
          <div class="font-headline-md pubs-metric-value">${(e==null?void 0:e.filter(a=>a.peer_reviewed).length)||0}</div>
          <div class="font-label-caps pubs-metric-label">PEER_REVIEWED</div>
        </div>
      </div>
    </div>
  `}function ge(e){if(!e||!e.length)return`
      <div class="content-section">
        <div class="research-section-heading">FULL_BIBLIOGRAPHY</div>
        <p class="font-body-sm" style="color: var(--on-surface-variant);">No publications found.</p>
      </div>
    `;const n={};for(const a of e){const i=a.year||"Unknown";n[i]||(n[i]=[]),n[i].push(a)}return`
    <div class="content-section">
      <div class="research-section-heading">FULL_BIBLIOGRAPHY</div>
      <div class="pub-bibliography-list" id="bibliographyList">${Object.keys(n).sort((a,i)=>i-a).map(a=>{const i=n[a].map((o,c)=>{const r=o.doi||"",d=o.citation||"",l=d?encodeURIComponent(d):"",m=`abstract-${a}-${c}`;return`
            <article class="pub-entry" data-year="${a}" data-search="${(o.title+" "+o.venue_short+" "+o.venue+" "+a).toLowerCase()}">
              <div class="pub-entry-inner">
                <div class="pub-entry-header">
                  <h3 class="font-body-lg pub-entry-title">${o.title}</h3>
                  <span class="font-mono-data pub-entry-venue-tag">${o.venue_short||a}</span>
                </div>
                <p class="font-body-sm pub-entry-authors">${(o.authors||[]).join(", ")}</p>
                <p class="font-mono-data pub-entry-source">${o.venue||""}</p>
                <div class="pub-entry-actions">
                  ${r?`<a class="pub-entry-btn font-mono-data" href="https://doi.org/${r}" target="_blank" rel="noopener noreferrer">[PDF]</a>`:""}
                  ${d?`<button class="pub-entry-btn pub-entry-cite-btn font-mono-data" type="button" data-citation="${l}">[CITATION]</button>`:""}
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
        <div class="pub-year-group" data-year="${a}">
          <div class="pub-year-header">
            <span class="font-mono-data pub-year-label">${a}</span>
            <div class="pub-year-line"></div>
          </div>
          <div class="pub-year-entries">${i}</div>
        </div>
      `}).join("")}</div>
    </div>
  `}function be(e){var s;if(!e)return`<div class="container-page" style="padding-top: 4rem;">
      <p class="font-mono-data" style="color: var(--error);">No profile data available.</p>
    </div>`;const n=((s=e.research)==null?void 0:s.publications)||[];return`
    <div class="pubs-page">
      <div class="container-page pubs-page-inner blueprint-grid-lines">
        ${ve()}

        <div class="pubs-grid">
          <aside class="pubs-sidebar">
            ${he(n)}
            ${fe(n)}
          </aside>

          <section class="pubs-content">
            ${ge(n)}
          </section>
        </div>
      </div>
    </div>
  `}function U(){var a;const e=window.__profile;(((a=e==null?void 0:e.research)==null?void 0:a.publications)||[]).length&&pe().then(i=>{if(!i)return;const o=document.querySelectorAll(".pubs-metric-value");if(o.length>=2){const c=i.reduce((r,d)=>r+d,0);o[0].textContent=c}});const s=document.getElementById("pubSearchInput"),t=document.getElementById("bibliographyList");s&&s.addEventListener("input",()=>{const i=s.value.toLowerCase().trim(),o=(t==null?void 0:t.querySelectorAll(".pub-entry"))||[],c=(t==null?void 0:t.querySelectorAll(".pub-year-group"))||[];o.forEach(r=>{const d=r.dataset.search||"";r.style.display=!i||d.includes(i)?"":"none"}),c.forEach(r=>{const d=[...r.querySelectorAll(".pub-entry")].some(l=>l.style.display!=="none");r.style.display=d?"":"none"})}),document.querySelectorAll(".pub-entry-abstract-toggle").forEach(i=>{i.addEventListener("click",()=>{const o=i.dataset.target,c=document.getElementById(o);if(!c)return;const r=c.classList.contains("pub-abstract--open");document.querySelectorAll(".pub-abstract--open").forEach(l=>{if(l.id!==o){l.classList.remove("pub-abstract--open");const m=document.querySelector(`[data-target="${l.id}"]`);if(m){const u=m.querySelector(".material-symbols-outlined");u&&(u.textContent="expand_more")}}}),c.classList.toggle("pub-abstract--open");const d=i.querySelector(".material-symbols-outlined");d&&(d.textContent=r?"expand_more":"expand_less")})}),document.querySelectorAll(".pub-entry-cite-btn").forEach(i=>{i.addEventListener("click",()=>{const o=decodeURIComponent(i.dataset.citation);o&&navigator.clipboard.writeText(o).then(()=>O("CITATION_COPIED")).catch(()=>{const c=document.createElement("textarea");c.value=o,c.style.cssText="position:fixed;opacity:0",document.body.appendChild(c),c.select(),document.execCommand("copy"),document.body.removeChild(c),O("CITATION_COPIED")})})})}function O(e){const n=document.querySelector(".toast-notification");n&&n.remove();const s=document.createElement("div");s.className="toast-notification font-mono-data",s.textContent=e,document.body.appendChild(s),requestAnimationFrame(()=>s.classList.add("toast-notification--visible")),setTimeout(()=>{s.classList.remove("toast-notification--visible"),s.addEventListener("transitionend",()=>s.remove(),{once:!0})},2e3)}I("publications",{render:be,mount:U});function ye(e,n){return`
    <div class="research-annotation">
      <span class="research-annotation-badge font-mono-data">PAGE. ${e}</span>
      <div class="research-annotation-line"></div>
      <span class="font-label-caps research-annotation-text">[DOCUMENT_CLASS: ${n}]</span>
    </div>
  `}function $e(e){var s;const n=((s=e==null?void 0:e.find(t=>t.enrolment_number))==null?void 0:s.program)||"ELECTRONICS & COMMUNICATION ENGINEERING";return`
    <header class="academics-header">
      ${ye("04","ACADEMIC_RECORD")}
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
          <span class="font-mono-data academics-tag-value">${n}</span>
        </div>
      </div>
    </header>
  `}function Ee(e){return!e||!e.length?"":`
    <section class="academics-section">
      <div class="academics-section-header">
        <h2 class="font-headline-lg academics-section-title">[01 // EDUCATION]</h2>
        <div class="academics-section-line"></div>
      </div>
      <div class="edu-entries">${[...e].sort((t,a)=>(a.graduation_year||0)-(t.graduation_year||0)).map((t,a)=>{const i=!t.graduation_year,o=t.cgpa||t.percentage,c=t.max_cgpa||t.max_percentage||"",r=t.cgpa?`${t.cgpa}${c?" / "+Number(c).toFixed(2):""}`:t.percentage?`${t.percentage}${c?" / "+Number(c).toFixed(2):""}%`:"",d=t.start_year?`${t.start_year} — ${t.graduation_year||"PRESENT"}`:`${t.graduation_year||""}`,l=t.coursework||[];return`
        <div class="edu-card ${i?"edu-card--current":""}">
          ${i?'<div class="edu-card-badge font-mono-data">CURRENT</div>':""}
          <div class="edu-card-inner">
            <div class="edu-card-header">
              <div>
                <h3 class="font-headline-md edu-card-degree">${t.degree||""}</h3>
                <p class="font-body-lg edu-card-institution">${t.institution||""}</p>
              </div>
              <div class="edu-card-dates">
                <span class="font-mono-data edu-card-year">${d}</span>
                ${t.enrolment_number?`<p class="font-mono-data edu-card-enrolment">ENROL: ${t.enrolment_number}</p>`:""}
              </div>
            </div>
            <div class="edu-card-metrics">
              ${o?`<div><p class="font-mono-data edu-card-metric-label">${t.cgpa?"CGPA":"PERCENTAGE"}</p><p class="font-headline-md edu-card-metric-value">${r}</p></div>`:""}
              ${t.advisor?`<div><p class="font-mono-data edu-card-metric-label">ADVISOR</p><p class="font-body-lg edu-card-metric-text">${t.advisor}</p></div>`:""}
              ${t.rank?`<div><p class="font-mono-data edu-card-metric-label">RANK</p><p class="font-body-lg edu-card-metric-text">${t.rank}</p></div>`:""}
            </div>
            ${l.length?`
            <div class="edu-card-coursework">
              <p class="font-mono-data edu-card-coursework-label">SELECTED_COURSEWORK // ${(t.short_form||t.degree||"").toUpperCase()}</p>
              <div class="edu-card-coursework-grid">
                ${l.map((m,u)=>`
                  <div class="edu-card-coursework-item font-mono-data">
                    <span class="edu-card-coursework-num">${String(u+1).padStart(2,"0")}</span> ${m}
                  </div>
                `).join("")}
              </div>
            </div>`:""}
          </div>
        </div>
      `}).join("")}</div>
    </section>
  `}function Ce(e){return!e||!e.length?"":`
    <section class="academics-section">
      <div class="academics-section-header">
        <h2 class="font-headline-lg academics-section-title">[02 // RESEARCH & THESIS]</h2>
        <div class="academics-section-line"></div>
      </div>
      <div class="thesis-grid">${e.map(s=>{var i,o;const t=(s.category||[]).map(c=>`<span class="chip chip-sm chip-investigation">${c.toUpperCase().replace(/\s+/g,"_")}</span>`).join(""),a=s.start_date?`${((i=s.start_date)==null?void 0:i.substring(0,4))||""} — ${((o=s.end_date)==null?void 0:o.substring(0,4))||"PRESENT"}`:"";return`
        <div class="thesis-card">
          <div class="thesis-card-header">
            <span class="font-mono-data thesis-card-code">${s.institution||""}</span>
            <span class="font-mono-data thesis-card-year">${a}</span>
          </div>
          <h4 class="font-headline-md thesis-card-title">${s.title||""}</h4>
          <p class="font-body-sm thesis-card-desc">${s.description||""}</p>
          ${t?`<div class="thesis-card-chips">${t}</div>`:""}
          ${s.advisor||s.research_lab?`
          <div class="thesis-card-divider"></div>
          <div class="thesis-card-footer">
            ${s.advisor?`<div class="font-mono-data thesis-card-advisor">ADVISOR: ${s.advisor}</div>`:""}
            ${s.research_lab?`<div class="font-mono-data thesis-card-lab">LAB: ${s.research_lab}</div>`:""}
          </div>`:""}
        </div>
      `}).join("")}</div>
    </section>
  `}function Ie(e){if(!e||!e.length)return"";const n=e.filter(t=>t.featured!==!1);return n.length?`
    <div class="academics-sidebar-section">
      <h2 class="font-label-caps academics-sidebar-heading">AWARDS // HONORS</h2>
      <div class="awards-list">${n.map(t=>`
      <div class="award-item">
        <div class="award-dot"></div>
        <p class="font-mono-data award-year">${t.year||""}</p>
        <h4 class="font-body-md award-title">${t.title||""}</h4>
        <p class="font-body-sm award-desc">${t.description||""}</p>
      </div>
    `).join("")}</div>
    </div>
  `:""}function Te(e){if(!e||!e.length)return"";const n=e.filter(t=>t.featured!==!1);return n.length?`
    <div class="academics-sidebar-section">
      <h2 class="font-label-caps academics-sidebar-heading">CERTIFICATIONS</h2>
      <div class="certs-list">${n.map(t=>`
      <div class="cert-item">
        <span class="font-mono-data cert-name">${t.title||""}</span>
        <span class="material-symbols-outlined cert-icon">verified</span>
      </div>
    `).join("")}</div>
    </div>
  `:""}function Se(e){var i;if(!e)return`<div class="container-page" style="padding-top: 4rem;">
      <p class="font-mono-data" style="color: var(--error);">No profile data available.</p>
    </div>`;const n=e.education||[],s=((i=e.research)==null?void 0:i.theses)||[],t=e.achievements||[],a=e.certifications||[];return`
    <div class="academics-page">
      <div class="container-page academics-page-inner blueprint-grid-lines">
        ${$e(n)}

        <div class="academics-grid">
          <!-- Left Column (8 cols) -->
          <div class="academics-primary">
            ${Ee(n)}
            ${Ce(s)}
          </div>

          <!-- Right Sidebar (4 cols) -->
          <aside class="academics-sidebar">
            ${Ie(t)}
            ${Te(a)}
          </aside>
        </div>
      </div>
    </div>
  `}I("academics",{render:Se});function xe(e,n){return`<div class="research-annotation"><span class="research-annotation-badge font-mono-data">PAGE. ${e}</span><div class="research-annotation-line"></div><span class="font-label-caps research-annotation-text">[DOCUMENT_CLASS: ${n}]</span></div>`}function T(e){return e?e.toLowerCase()==="present"?"Present":new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short"}):""}function N(e){return e?e.replace(/^\.\.\//,"/data/"):""}function _e(e,n){const s=[],t={};return e&&Object.keys(e).forEach(a=>{(e[a]||[]).forEach(i=>{const o=T(i.start_date),c=T(i.end_date),r=`${o}${c?" — "+c:""}`;s.push({...i,_type:a,_label:`${r} // ${(i.type||a).toUpperCase()}`,_dateLabel:r}),t[a]=!0})}),(n||[]).forEach(a=>{const i=T(a.start_date),o=T(a.end_date),c=`${i}${o?" — "+o:""}`;s.push({...a,_type:"Community Outreach",_label:`${c} // ${(a.type||"OUTREACH").toUpperCase()}`,_dateLabel:c}),t["Community Outreach"]=!0}),{entries:s,typeMap:t}}function Re(e){return e.length?`<div class="exp-timeline-col" id="exp-timeline-col">${e.map((s,t)=>{const a=(s.description||[]).map((c,r)=>`<div class="exp-timeline-item"><span class="font-mono-data exp-item-num">[${String(r+1).padStart(2,"0")}]</span><p class="font-body-sm exp-item-text exp-text-justify">${c}</p></div>`).join(""),i=s.mentions?Object.entries(s.mentions).map(([c,r])=>`<div class="font-mono-data exp-timeline-mention">${c.replace(/_/g," ").toUpperCase()}: ${r}</div>`).join(""):"",o=`data-exp-idx="${t}" data-tech="${encodeURIComponent(JSON.stringify(s.tech_stack||[]))}" data-skills="${encodeURIComponent(JSON.stringify(s.skills||[]))}"`;return`<div class="exp-timeline-entry exp-card-clickable" data-exp-type="${s._type.toLowerCase()}" ${o}><div class="exp-timeline-line"></div><div class="exp-timeline-node"></div><div class="exp-timeline-content"><div class="font-label-caps exp-timeline-label">${s._label}</div><div class="font-mono-data exp-timeline-role">${s.role||""}</div><h2 class="font-headline-lg exp-timeline-title exp-card-title">${s.title||""}</h2><h3 class="font-headline-md exp-timeline-org">${s.organization||""}</h3><div class="exp-timeline-items">${a}</div>${i}</div></div>`}).join("")}</div>`:""}function Ae(e){return`<div class="exp-sidebar-card"><h4 class="font-label-caps exp-sidebar-heading">LOG_NAVIGATOR</h4><ul class="exp-nav-list">${Object.keys(e).map(t=>{const a=t.toLowerCase(),i=a.includes("intern")?"terminal":a.includes("research")?"biotech":a.includes("outreach")?"groups":"work";return`<li><a class="exp-nav-link font-mono-data exp-nav-filter" href="#" data-filter="${a}"><span class="material-symbols-outlined">${i}</span> ${t}</a></li>`}).join("")}</ul></div>`}function Le(){return'<div class="exp-tech-card"><h4 class="font-label-caps exp-sidebar-heading">TECH_STACK // UTILIZED</h4><div id="exp-tech-stack-content" class="exp-tech-stack-content"><p class="font-body-sm exp-tech-placeholder">Click an experience entry to view tech stack.</p></div></div>'}function we(e){return e.length?'<div id="exp-image-rotator-card"><div id="exp-image-container"><div style="color:var(--on-surface-variant);opacity:0.6;text-align:center;padding:1rem;font-size:var(--text-body-sm)">Loading media...</div></div></div>':""}function Oe(e,n){var t,a,i,o,c,r;return`<div class="exp-metric-section"><h3 class="font-label-caps exp-metric-title">[METRIC_SUMMARY // AGGREGATED]</h3><div class="exp-metrics-grid"><div class="exp-metric-card"><span class="font-mono-data exp-metric-label">PROJECTS COMPLETED</span><div class="font-headline-xl exp-metric-value">${(((a=(t=e.projects)==null?void 0:t.vlsi)==null?void 0:a.length)||0)+(((o=(i=e.projects)==null?void 0:i.iot)==null?void 0:o.length)||0)+(((r=(c=e.projects)==null?void 0:c.software)==null?void 0:r.length)||0)}+</div></div><div class="exp-metric-card"><span class="font-mono-data exp-metric-label">TOTAL POSITIONS</span><div class="font-headline-xl exp-metric-value">${n.length}</div></div></div></div>`}function Ne(e){if(!e)return'<div class="container-page" style="padding-top:4rem"><p class="font-mono-data" style="color:var(--error)">No profile data.</p></div>';const{entries:n,typeMap:s}=_e(e.experience,e.communityOutreach),t=[],a={};return n.forEach(i=>{const o=i.pictures;if(!o)return;const c=i.title||i.organization||"U";a[c]||(a[c]={IMG:0,FIG:0}),o.images&&Object.entries(o.images).forEach(([r,d])=>{a[c].IMG++,t.push({type:"IMG",num:a[c].IMG,name:r,url:N(d),source:c})}),o.figures&&Object.entries(o.figures).forEach(([r,d])=>{a[c].FIG++,t.push({type:"FIG",num:a[c].FIG,name:r,url:N(d),source:c})})}),window.__expPictures=t,`<div class="exp-page"><div class="exp-bg-overlay"></div><div class="container-page exp-page-inner"><div class="pubs-header">${xe("05","EXPERIENCE_LOG")}<div class="pubs-header-bottom"><h1 class="font-headline-xl pubs-title">Professional Experience</h1></div></div><div class="exp-grid">${Re(n)}<aside class="exp-sidebar">${Ae(s)}${Le()}${we(t)}</aside></div>${Oe(e,n)}</div></div>`}function ke(){const e=document.getElementById("exp-tech-stack-content");document.querySelectorAll(".exp-card-clickable").forEach(r=>{r.addEventListener("click",()=>{let d=[],l=[];try{d=JSON.parse(decodeURIComponent(r.dataset.tech))}catch{}try{l=JSON.parse(decodeURIComponent(r.dataset.skills))}catch{}e&&(e.innerHTML=d.map(m=>`<span class="exp-skill-chip font-mono-data">${m}</span>`).join(""),l.length&&(e.innerHTML+=`<div class="exp-tech-divider"></div>${l.map(m=>`<span class="exp-skill-chip font-mono-data">${m}</span>`).join("")}`))})});let n="";document.querySelectorAll(".exp-nav-filter").forEach(r=>{r.addEventListener("click",d=>{d.preventDefault(),n=n===r.dataset.filter?"":r.dataset.filter,document.querySelectorAll(".exp-timeline-entry").forEach(l=>{l.style.display=!n||l.dataset.expType===n?"":"none"})})});const s=window.__expPictures||[];let t=2;s.forEach(r=>{const d=Math.max(1,Math.ceil(r.name.length/35)),l=Math.max(1,Math.ceil(r.source.length/35));t=Math.max(t,d+l)});const a=t*.875+"em",i=document.getElementById("exp-image-container");if(i&&s.length){let l=function(u){return`<div style="border:1px solid var(--outline-variant);padding:0.5rem;background:var(--surface-container-lowest)"><div style="aspect-ratio:1/1;overflow:hidden;background:var(--surface-container);margin-bottom:0.5rem"><img src="${u.url}" alt="${u.name}" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.onerror=null;this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;padding:1rem;text-align:center;color:var(--on-surface-variant);font-size:var(--text-body-sm)'>'+this.alt+'</div>'" /></div><div style="height:${a};overflow:hidden;display:flex;flex-direction:column;justify-content:space-between"><p style="font-family:var(--font-mono);font-size:0.625rem;color:var(--on-surface-variant);line-height:1.4;margin:0;overflow:hidden" id="exp-rotator-line1"></p><p style="font-family:var(--font-mono);font-size:0.625rem;color:var(--outline);line-height:1.4;margin:0;overflow:hidden;font-style:italic" id="exp-rotator-line2"></p></div></div>`},m=function(u){const p=`${u.type}.${String(u.num).padStart(2,"0")}: ${u.name}`,v=`— ${u.source}`,h=document.getElementById("exp-rotator-line1"),g=document.getElementById("exp-rotator-line2");if(!h||!g)return;let f=0;function E(){f<=p.length?(h.innerHTML=p.substring(0,f)+r,f++,setTimeout(E,15)):(f=0,h.innerHTML=p,setTimeout(R,200))}function R(){f<=v.length?(g.innerHTML=v.substring(0,f),f++,setTimeout(R,15)):(g.innerHTML=v,setTimeout(()=>{let b=v.length;function A(){if(b>=0)g.innerHTML=v.substring(0,b),b--,setTimeout(A,10);else{let S=function(){b>=0?(h.innerHTML=p.substring(0,b),b--,setTimeout(S,10)):(h.innerHTML="",g.innerHTML="",h.innerHTML=r,setTimeout(()=>{let y;do y=s[Math.floor(Math.random()*s.length)];while(y===u&&s.length>1);const L=new Image;L.onload=()=>{i.style.opacity="0",setTimeout(()=>{d=y,i.innerHTML=l(y),i.style.opacity="1",m(y)},200)},L.src=y.url},500))};var De=S;b=p.length,g.innerHTML="",setTimeout(S,100)}}setTimeout(A,3e3)},1500))}E()};var o=l,c=m;const r='<span class="exp-loc-cursor">|</span>';s.forEach(u=>{const p=new Image;p.src=u.url});let d=s[0];i.innerHTML=l(d),m(d)}}I("experience",{render:Ne,mount:ke});const je=document.getElementById("app");function Me(){je.innerHTML=`
    <header id="app-header"></header>
    <main id="page-content"></main>
    <footer id="app-footer"></footer>
  `}async function k(){const e=M(),n=D(),s=B(e),t=document.getElementById("page-content");if(t){if(s&&s.render){const a=await s.render(n);t.innerHTML=a,s.mount&&s.mount()}else e==="home"?t.innerHTML='<div class="container-page" style="padding-top: 4rem; padding-bottom: 4rem;"><p class="font-mono-data" style="color: var(--on-surface-variant);">// PAGE: HOME — Coming in Stage C</p></div>':t.innerHTML=`<div class="container-page" style="padding-top: 4rem; padding-bottom: 4rem;"><p class="font-mono-data" style="color: var(--on-surface-variant);">// PAGE: ${e.toUpperCase()} — Under construction</p></div>`;window.__updateActiveNav&&window.__updateActiveNav(e)}}function Pe(){const e=localStorage.getItem("theme"),n=window.matchMedia("(prefers-color-scheme: dark)").matches;e==="dark"||!e&&n?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}function Ue(){document.documentElement.classList.toggle("dark");const e=document.documentElement.classList.contains("dark");localStorage.setItem("theme",e?"dark":"light"),P()}async function He(){Pe(),Me();const e=await H();if(!e){const a=document.getElementById("page-content");a&&(a.innerHTML='<p style="padding: 2rem; color: var(--error);">Failed to load profile data.</p>');return}const n=document.getElementById("app-header");n&&(n.innerHTML=q(e),V());const s=document.getElementById("theme-toggle-slot");s&&(s.innerHTML=J(),z());const t=document.getElementById("app-footer");t&&(t.innerHTML=W(e)),ne(),U(),window.addEventListener("hashchange",k),k(),console.log("🔧 Yusuf Silicon Portfolio — Ready")}He().catch(e=>console.error("❌ App initialization failed:",e));
