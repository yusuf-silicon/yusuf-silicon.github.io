import { registerRoute } from '../lib/router.js';
import { getProfile } from '../lib/dataLoader.js';

function renderAnnotation(p,c){return `<div class="research-annotation"><span class="research-annotation-badge font-mono-data">PAGE. ${p}</span><div class="research-annotation-line"></div><span class="font-label-caps research-annotation-text">[DOCUMENT_CLASS: ${c}]</span></div>`;}
function fmtDate(s){if(!s)return'';if(s.toLowerCase()==='present')return'Present';const d=new Date(s);return d.toLocaleDateString('en-US',{year:'numeric',month:'short'});}
function img(p){return p?p.replace(/^\.\.\//,'/data/'):'';}

function collectEntries(exp,co){const entries=[],typeMap={};if(exp)Object.keys(exp).forEach(tk=>{(exp[tk]||[]).forEach(item=>{const s=fmtDate(item.start_date),e=fmtDate(item.end_date);const dl=`${s}${e?' — '+e:''}`;entries.push({...item,_type:tk,_label:`${dl} // ${(item.type||tk).toUpperCase()}`,_dateLabel:dl});typeMap[tk]=true;});});(co||[]).forEach(item=>{const s=fmtDate(item.start_date),e=fmtDate(item.end_date);const dl=`${s}${e?' — '+e:''}`;entries.push({...item,_type:'Community Outreach',_label:`${dl} // ${(item.type||'OUTREACH').toUpperCase()}`,_dateLabel:dl});typeMap['Community Outreach']=true;});return{entries,typeMap};}
function renderTimeline(entries){if(!entries.length)return'';const html=entries.map((e,i)=>{const desc=(e.description||[]).map((d,j)=>`<div class="exp-timeline-item"><span class="font-mono-data exp-item-num">[${String(j+1).padStart(2,'0')}]</span><p class="font-body-sm exp-item-text exp-text-justify">${d}</p></div>`).join('');const mh=e.mentions?Object.entries(e.mentions).map(([k,v])=>`<div class="font-mono-data exp-timeline-mention">${k.replace(/_/g,' ').toUpperCase()}: ${v}</div>`).join(''):'';const da=`data-exp-idx="${i}" data-tech="${encodeURIComponent(JSON.stringify(e.tech_stack||[]))}" data-skills="${encodeURIComponent(JSON.stringify(e.skills||[]))}"`;return `<div class="exp-timeline-entry exp-card-clickable" data-exp-type="${e._type.toLowerCase()}" ${da}><div class="exp-timeline-line"></div><div class="exp-timeline-node"></div><div class="exp-timeline-content"><div class="font-label-caps exp-timeline-label">${e._label}</div><div class="font-mono-data exp-timeline-role">${e.role||''}</div><h2 class="font-headline-lg exp-timeline-title exp-card-title">${e.title||''}</h2><h3 class="font-headline-md exp-timeline-org">${e.organization||''}</h3><div class="exp-timeline-items">${desc}</div>${mh}</div></div>`;}).join('');return `<div class="exp-timeline-col" id="exp-timeline-col">${html}</div>`;}
function renderLogNavigator(tm){const types=Object.keys(tm);const links=types.map(t=>{const key=t.toLowerCase();const icon=key.includes('intern')?'terminal':key.includes('research')?'biotech':key.includes('outreach')?'groups':'work';return `<li><a class="exp-nav-link font-mono-data exp-nav-filter" href="#" data-filter="${key}"><span class="material-symbols-outlined">${icon}</span> ${t}</a></li>`;}).join('');return `<div class="exp-sidebar-card"><h4 class="font-label-caps exp-sidebar-heading">LOG_NAVIGATOR</h4><ul class="exp-nav-list">${links}</ul></div>`;}
function renderTechStack(){return `<div class="exp-tech-card"><h4 class="font-label-caps exp-sidebar-heading">TECH_STACK // UTILIZED</h4><div id="exp-tech-stack-content" class="exp-tech-stack-content"><p class="font-body-sm exp-tech-placeholder">Click an experience entry to view tech stack.</p></div></div>`;}
function renderImageRotator(pics){return pics.length?`<div id="exp-image-rotator-card"><div id="exp-image-container"><div style="color:var(--on-surface-variant);opacity:0.6;text-align:center;padding:1rem;font-size:var(--text-body-sm)">Loading media...</div></div></div>`:'';}
function renderMetrics(profile,entries){const pc=(profile.projects?.vlsi?.length||0)+(profile.projects?.iot?.length||0)+(profile.projects?.software?.length||0);return `<div class="exp-metric-section"><h3 class="font-label-caps exp-metric-title">[METRIC_SUMMARY // AGGREGATED]</h3><div class="exp-metrics-grid"><div class="exp-metric-card"><span class="font-mono-data exp-metric-label">PROJECTS COMPLETED</span><div class="font-headline-xl exp-metric-value">${pc}+</div></div><div class="exp-metric-card"><span class="font-mono-data exp-metric-label">TOTAL POSITIONS</span><div class="font-headline-xl exp-metric-value">${entries.length}</div></div></div></div>`;}

function experienceRender(profile){
  if(!profile)return `<div class="container-page" style="padding-top:4rem"><p class="font-mono-data" style="color:var(--error)">No profile data.</p></div>`;
  const{entries,typeMap}=collectEntries(profile.experience,profile.communityOutreach);
  const pics=[],counters={};
  entries.forEach(e=>{const p=e.pictures;if(!p)return;const src=e.title||e.organization||'U';if(!counters[src])counters[src]={IMG:0,FIG:0};if(p.images)Object.entries(p.images).forEach(([n,u])=>{counters[src].IMG++;pics.push({type:'IMG',num:counters[src].IMG,name:n,url:img(u),source:src});});if(p.figures)Object.entries(p.figures).forEach(([n,u])=>{counters[src].FIG++;pics.push({type:'FIG',num:counters[src].FIG,name:n,url:img(u),source:src});});});
  window.__expPictures=pics;
  return `<div class="exp-page"><div class="exp-bg-overlay"></div><div class="container-page exp-page-inner"><div class="pubs-header">${renderAnnotation('05','EXPERIENCE_LOG')}<div class="pubs-header-bottom"><h1 class="font-headline-xl pubs-title">Professional Experience</h1></div></div><div class="exp-grid">${renderTimeline(entries)}<aside class="exp-sidebar">${renderLogNavigator(typeMap)}${renderTechStack()}${renderImageRotator(pics)}</aside></div>${renderMetrics(profile,entries)}</div></div>`;
}

export function mountExperiencePage(){
  const tc=document.getElementById('exp-tech-stack-content');
  document.querySelectorAll('.exp-card-clickable').forEach(card=>{
    card.addEventListener('click',()=>{
      let tech=[],skills=[];
      try{tech=JSON.parse(decodeURIComponent(card.dataset.tech));}catch(e){}
      try{skills=JSON.parse(decodeURIComponent(card.dataset.skills));}catch(e){}
      if(!tc)return;
      tc.innerHTML=tech.map(t=>`<span class="exp-skill-chip font-mono-data">${t}</span>`).join('');
      if(skills.length)tc.innerHTML+=`<div class="exp-tech-divider"></div>${skills.map(s=>`<span class="exp-skill-chip font-mono-data">${s}</span>`).join('')}`;
    });
  });

  let activeFilter='';
  document.querySelectorAll('.exp-nav-filter').forEach(link=>{
    link.addEventListener('click',e=>{
      e.preventDefault();
      activeFilter=activeFilter===link.dataset.filter?'':link.dataset.filter;
      document.querySelectorAll('.exp-timeline-entry').forEach(entry=>{
        entry.style.display=(!activeFilter||entry.dataset.expType===activeFilter)?'':'none';
      });
    });
  });

  const pics=window.__expPictures||[];
  let maxLines=2;
  pics.forEach(p=>{const nl=Math.max(1,Math.ceil(p.name.length/35));const sl=Math.max(1,Math.ceil(p.source.length/35));maxLines=Math.max(maxLines,nl+sl);});
  const fh=(maxLines*0.875)+'em';

  const ic=document.getElementById('exp-image-container');
  if(ic&&pics.length){
    const cursor='<span class="exp-loc-cursor">|</span>';
    pics.forEach(p=>{const img=new Image();img.src=p.url;});
    let currentPic=pics[0];

    function renderPic(p){
      return `<div style="border:1px solid var(--outline-variant);padding:0.5rem;background:var(--surface-container-lowest)"><div style="aspect-ratio:1/1;overflow:hidden;background:var(--surface-container);margin-bottom:0.5rem"><img src="${p.url}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.onerror=null;this.parentElement.innerHTML='<div style=\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;padding:1rem;text-align:center;color:var(--on-surface-variant);font-size:var(--text-body-sm)\'>'+this.alt+'</div>'" /></div><div style="height:${fh};overflow:hidden;display:flex;flex-direction:column;justify-content:space-between"><p style="font-family:var(--font-mono);font-size:0.625rem;color:var(--on-surface-variant);line-height:1.4;margin:0;overflow:hidden" id="exp-rotator-line1"></p><p style="font-family:var(--font-mono);font-size:0.625rem;color:var(--outline);line-height:1.4;margin:0;overflow:hidden;font-style:italic" id="exp-rotator-line2"></p></div></div>`;
    }

    function typeAndCycle(p){
      const line1=`${p.type}.${String(p.num).padStart(2,'0')}: ${p.name}`;
      const line2=`\u2014 ${p.source}`;
      const l1=document.getElementById('exp-rotator-line1');
      const l2=document.getElementById('exp-rotator-line2');
      if(!l1||!l2)return;

      let ci=0;
      // 1) Type description (line1, TOP) first — WITH cursor
      function typeDesc(){
        if(ci<=line1.length){l1.innerHTML=line1.substring(0,ci)+cursor;ci++;setTimeout(typeDesc,15);}
        else{ci=0;l1.innerHTML=line1;setTimeout(typeOrg,200);}
      }
      // 2) Then type title/org (line2, BOTTOM) — WITHOUT cursor
      function typeOrg(){
        if(ci<=line2.length){l2.innerHTML=line2.substring(0,ci);ci++;setTimeout(typeOrg,15);}
        else{l2.innerHTML=line2;
          setTimeout(()=>{
            // 3) Erase title/org (line2, BOTTOM) first — WITHOUT cursor
            let ei=line2.length;
            function eraseOrg(){
              if(ei>=0){l2.innerHTML=line2.substring(0,ei);ei--;setTimeout(eraseOrg,10);}
              else{ei=line1.length;l2.innerHTML='';
                // 4) Then erase description (line1, TOP) — WITHOUT cursor
                function eraseDesc(){
                  if(ei>=0){l1.innerHTML=line1.substring(0,ei);ei--;setTimeout(eraseDesc,10);}
                  else{
                    l1.innerHTML='';
                    l2.innerHTML='';
                    l1.innerHTML=cursor; // 5) Cursor blinks on description line (TOP) — where next description starts
                    setTimeout(()=>{
                      let next;do{next=pics[Math.floor(Math.random()*pics.length)];}while(next===p&&pics.length>1);
                      const pre=new Image();
                      pre.onload=()=>{currentPic=next;ic.innerHTML=renderPic(next);typeAndCycle(next);};
                      pre.src=next.url;
                    },1600);
                  }
                }
                setTimeout(eraseDesc,100);
              }
            }
            setTimeout(eraseOrg,3000);
          },1500);
        }
      }
      typeDesc(); // Start with description (line1, TOP)
    }

    ic.innerHTML=renderPic(currentPic);
    typeAndCycle(currentPic);
  }
}

registerRoute('experience',{render:experienceRender,mount:mountExperiencePage});
export default experienceRender;
