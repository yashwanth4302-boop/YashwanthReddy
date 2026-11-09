const projects={architecture:{title:'Architecture & Interior Website Design',url:'https://www.figma.com/proto/fAIfPF09mzlH2JGEuuFP70/Architecture---Interior-Website-Design--Community-?node-id=0-3&t=P311qYTQCjDBHc5Y-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1'},ishi:{title:'ISHI — Anime Cinematic Dashboard',url:'https://www.figma.com/design/Rl5NicoiMoSESFSE1BeCin/ISHI-%E2%80%94-Anime-Cinematic-Dashboard?node-id=1-233&t=P311qYTQCjDBHc5Y-0'},watch:{title:'Which Is Better — Design Testing',url:'https://www.figma.com/design/J4W02QIHFwCFk4NfdF9HII/Which-is-Better-%E2%80%94-Design-Testing?node-id=0-1&p=f&t=oE7Ku8ipGSk9T5oH-0'}};
const modal=document.querySelector('#project-modal'),content=document.querySelector('#modal-content'),title=document.querySelector('#modal-title');
function openModal(name){const p=projects[name];title.textContent=name==='technova'?'TechNova — Premium E-commerce UI':(name==='watch-card'?'Natasha Romanoff — Interactive Watch Card':(p?.title|| (name==='interactions'?'Micro-interactions':'Login UI')));modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';content.innerHTML='';if(name==='technova'){content.innerHTML='<div class="technova-preview"><iframe title="TechNova premium ecommerce website preview" src="projects/technova.html"></iframe><div class="technova-preview-actions"><a href="projects/technova.html" target="_blank" rel="noopener">Open site in new tab ↗</a></div></div>'; }else if(name==='watch'){content.innerHTML='<div class="watch-prototype"><img src="which-is-better-preview.png" alt="Which Is Better design showing two anime watch cards with Save and Watch buttons"><button class="watch-prototype-hit save-hit" type="button" aria-label="Save card" aria-pressed="false"></button><button class="watch-prototype-hit watch-hit" type="button" aria-label="Watch now" aria-pressed="false"></button><p class="watch-prototype-status" aria-live="polite"></p></div>';const demo=content.querySelector('.watch-prototype');const save=demo.querySelector('.save-hit'),watch=demo.querySelector('.watch-hit'),status=demo.querySelector('.watch-prototype-status');save.addEventListener('click',()=>{const saved=save.getAttribute('aria-pressed')!=='true';save.setAttribute('aria-pressed',String(saved));save.setAttribute('aria-label',saved?'Remove saved card':'Save card');status.textContent=saved?'Card saved':'Card removed from saved';});watch.addEventListener('click',()=>{const active=watch.getAttribute('aria-pressed')!=='true';watch.setAttribute('aria-pressed',String(active));status.textContent=active?'Watch now selected':'Watch selection cleared';});}else if(name==='watch-card'){const source=document.querySelector('[data-watch-card]');const preview=document.createElement('div');preview.className='watch-card-modal-preview';if(source){const clone=source.cloneNode(true);clone.classList.add('modal-watch-card');preview.append(clone);}const note=document.createElement('p');note.className='modal-hint';note.textContent='Hover or focus the card to reveal the full-poster state. Save is remembered on this browser. “Watch now” opens the related Figma prototype.';content.append(preview,note);}else if(p){const wrap=document.createElement('div');wrap.className='figma-preview-wrap';const frame=document.createElement('iframe');frame.title=p.title+' Figma design preview';frame.allow='fullscreen; clipboard-read; clipboard-write';frame.src='https://www.figma.com/embed?embed_host=share&url='+encodeURIComponent(p.url);const actions=document.createElement('div');actions.className='figma-preview-actions';const link=document.createElement('a');link.href=p.url;link.target='_blank';link.rel='noopener';link.textContent='Open in Figma ↗';actions.append(link);wrap.append(frame,actions);content.append(wrap);}else if(name==='interactions'){content.innerHTML='<div class="modal-hint">Try the button hover animation and toggle switch on the project card. These are live interactive UI components, built directly into this portfolio page.</div>';}else if(name==='delete-logout'){content.innerHTML='<div class="delete-logout-modal"><button class="delete-demo" type="button" aria-label="Delete demo"><svg viewBox="0 0 448 512" class="delete-svg" aria-hidden="true"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button><button class="logout-demo" type="button" aria-label="Logout demo"><span class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg></span><span class="text">Logout</span></button></div><p class="delete-demo-feedback" aria-live="polite">Delete and Logout button demos — no action is performed.</p>';const d=content.querySelector('.delete-demo'),l=content.querySelector('.logout-demo');d.addEventListener('click',()=>{content.querySelector('.delete-demo-feedback').textContent='Delete button clicked — demo only; nothing was deleted.';});l.addEventListener('click',()=>{content.querySelector('.delete-demo-feedback').textContent='Logout button clicked — demo only; no session was ended.';});}else if(name==='delete'){content.innerHTML='<div class="delete-modal-demo"><button class="delete-demo" type="button" aria-label="Delete demo"><svg viewBox="0 0 448 512" class="delete-svg" aria-hidden="true"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button></div><p class="delete-demo-feedback" aria-live="polite">Hover to reveal the Delete label. This is a visual component demo.</p>';const btn=content.querySelector('.delete-demo');btn.addEventListener('click',()=>{content.querySelector('.delete-demo-feedback').textContent='Delete button clicked — demo only; nothing was deleted.';});}else if(['theme-toggles','login-welcome','login-signin','navbar','search-boxes','username'].includes(name)){const card=document.querySelector('[data-project="'+name+'"]')?.closest('.work-card');const preview=card?.querySelector('.ui-lab-preview');if(preview){content.append(preview.cloneNode(true));content.querySelectorAll('form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const msg=document.createElement('p');msg.textContent='Demo only — no data is sent.';f.append(msg);}));content.querySelectorAll('.demo-toggle').forEach(b=>b.addEventListener('click',()=>b.setAttribute('aria-pressed',b.getAttribute('aria-pressed')!=='true')));content.querySelectorAll('.radio-tabs input').forEach(r=>r.addEventListener('change',()=>{}));content.querySelectorAll('.search-demo').forEach(f=>f.addEventListener('reset',()=>setTimeout(()=>f.querySelector('input').focus(),0)));}}else{const form=document.querySelector('.login-demo').cloneNode(true);form.querySelector('.login-feedback').textContent='Demo form — no account or data is sent.';content.append(form);form.addEventListener('submit',e=>{e.preventDefault();form.querySelector('.login-feedback').textContent='Demo sign-in complete — this is a visual prototype.';});}}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';content.innerHTML='';}
document.querySelectorAll('[data-project]').forEach(b=>b.addEventListener('click',()=>openModal(b.dataset.project)));document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',closeModal));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.toggle('active',x===b));document.querySelectorAll('.work-card').forEach(card=>card.hidden=b.dataset.filter!=='all'&&card.dataset.category!==b.dataset.filter)}));
const demoSwitch = document.querySelector('.demo-switch');
if (demoSwitch) demoSwitch.addEventListener('click', e => {
  const button = e.currentTarget;
  button.setAttribute('aria-pressed', button.getAttribute('aria-pressed') !== 'true');
});
const demoAnimated = document.querySelector('.demo-animated');
if (demoAnimated) demoAnimated.addEventListener('click', e => {
  e.currentTarget.innerHTML = 'Nice interaction <b>✓</b>';
});
const loginDemo = document.querySelector('.login-demo');
if (loginDemo) loginDemo.addEventListener('submit', e => {
  e.preventDefault();
  const feedback = e.currentTarget.querySelector('.login-feedback');
  if (feedback) feedback.textContent = 'Demo sign-in complete — no data sent.';
});
// Component preview interactions
document.querySelectorAll('.demo-toggle').forEach(b=>b.addEventListener('click',()=>b.setAttribute('aria-pressed',b.getAttribute('aria-pressed')!=='true')));
document.querySelectorAll('.search-demo').forEach(f=>f.addEventListener('reset',()=>setTimeout(()=>f.querySelector('input').focus(),0)));
document.querySelectorAll('.login-demo-ui').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();let note=f.querySelector('.demo-feedback');if(!note){note=document.createElement('p');note.className='demo-feedback';f.append(note)}note.textContent='Demo only — no data is sent.';}));


// Natasha Romanoff watch-card interactions: saved state persists in this browser.
(function initNatashaWatchCard(){
  const storageKey = 'portfolio:natasha-romanoff:saved';
  let isSaved = false;
  try { isSaved = localStorage.getItem(storageKey) === 'true'; } catch (_) {}
  const syncSaveButtons = () => {
    document.querySelectorAll('[data-watch-save]').forEach(button => {
      button.setAttribute('aria-pressed', String(isSaved));
      button.setAttribute('aria-label', isSaved ? 'Remove Natasha Romanoff from saved' : 'Save Natasha Romanoff');
      button.title = isSaved ? 'Remove from saved' : 'Save to watchlist';
    });
  };
  syncSaveButtons();

  document.addEventListener('click', event => {
    const saveButton = event.target.closest('[data-watch-save]');
    if (saveButton) {
      isSaved = !isSaved;
      try { localStorage.setItem(storageKey, String(isSaved)); } catch (_) {}
      syncSaveButtons();
      document.querySelectorAll('[data-watch-card]').forEach(card => {
        const feedback = card.querySelector('.watch-card-feedback');
        if (feedback) feedback.textContent = isSaved ? 'Saved to your watchlist' : 'Removed from your watchlist';
      });
      return;
    }

    const watchButton = event.target.closest('[data-watch-now]');
    if (watchButton) {
      const prototypeUrl = projects.watch.url;
      const opened = window.open(prototypeUrl, '_blank', 'noopener,noreferrer');
      const card = watchButton.closest('[data-watch-card]');
      const feedback = card && card.querySelector('.watch-card-feedback');
      if (feedback) feedback.textContent = opened ? 'Opening the Figma watch-card prototype…' : 'Allow pop-ups to open the Figma prototype.';
    }
  });
})();
