const root=document.documentElement;
const lang=document.getElementById('langToggle');
const panel=document.getElementById('mobilePanel');
const menu=document.getElementById('menuToggle');
function setLang(l){root.dataset.lang=l;document.querySelectorAll('[data-en]').forEach(el=>{el.innerHTML=el.dataset[l]});lang.querySelectorAll('span').forEach((s,i)=>s.classList.toggle('active',(l==='en'&&i===0)||(l==='fr'&&i===1)));}
lang.addEventListener('click',()=>setLang(root.dataset.lang==='en'?'fr':'en'));
menu.addEventListener('click',()=>{const open=panel.classList.toggle('open');panel.setAttribute('aria-hidden',String(!open));menu.classList.toggle('open',open)});
panel.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{panel.classList.remove('open');menu.classList.remove('open');panel.setAttribute('aria-hidden','true')}));

// Reliable remote editorial placeholders for the atelier sections.
const imageMap=[
 ['.hero-image','https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1800&q=85'],
 ['.about-visual img','https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85'],
 ['.about-side img','https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=85'],
 ['.quebec-image img','https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=85']
];
imageMap.forEach(([sel,src])=>{const el=document.querySelector(sel);if(el)el.src=src});

// Project visuals from official/public preview sources.
const loveArt=document.querySelector('.work-card.love .work-art');
if(loveArt){loveArt.style.background='url(https://img.youtube.com/vi/vo0N_i326as/maxresdefault.jpg) center/cover no-repeat';}
const tommyArt=document.querySelector('.work-card.tommy .work-art');
if(tommyArt){tommyArt.style.background='url(https://vumbnail.com/414036040.jpg) center/cover no-repeat';}

const style=document.createElement('style');
style.textContent=`
.preview-badge{position:absolute;z-index:4;top:16px;left:16px;padding:9px 12px;border:1px solid rgba(255,255,255,.78);background:rgba(0,0,0,.42);backdrop-filter:blur(5px);font-size:8px;letter-spacing:.16em;color:#fff}.preview-pending{opacity:.8}.video-modal{position:fixed;z-index:1000;inset:0;background:rgba(0,0,0,.94);display:none;align-items:center;justify-content:center;padding:22px}.video-modal.open{display:flex}.video-shell{width:min(1100px,100%);position:relative}.video-frame{position:relative;width:100%;aspect-ratio:16/9;background:#000}.video-frame iframe{position:absolute;inset:0;width:100%;height:100%;border:0}.video-close{position:absolute;right:0;top:-48px;background:none;border:0;color:#fff;font-size:36px;line-height:1;cursor:pointer}.video-note{color:#fff;text-align:center;font:400 19px/1.45 "Cormorant Garamond",serif;padding:50px 20px}.work-card.love,.work-card.tommy,.work-card.bishop{cursor:pointer}@media(max-width:900px){.preview-badge{top:12px;left:12px}.video-modal{padding:14px}.video-close{top:-42px}}`;
document.head.appendChild(style);

function addBadge(selector,text,pending=false){const card=document.querySelector(selector);if(!card||card.querySelector('.preview-badge'))return;const b=document.createElement('span');b.className='preview-badge'+(pending?' preview-pending':'');b.textContent=text;card.appendChild(b);}
addBadge('.work-card.love','▶ PREVIEW');
addBadge('.work-card.tommy','▶ PREVIEW');
addBadge('.work-card.bishop','PREVIEW COMING SOON',true);

const previewMap={
  love:{src:'https://www.youtube.com/embed/vo0N_i326as?autoplay=1&rel=0',title:'The Love Hypothesis — Official Teaser | Prime Video'},
  tommy:{src:'https://player.vimeo.com/video/414036040?autoplay=1',title:'How Tommy Lemenchick Became a Grade 7 Legend'}
};
const modal=document.createElement('div');
modal.className='video-modal';modal.setAttribute('aria-hidden','true');
modal.innerHTML='<div class="video-shell"><button class="video-close" aria-label="Close preview">×</button><div class="video-frame"></div></div>';
document.body.appendChild(modal);
const frame=modal.querySelector('.video-frame');
function closePreview(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');frame.innerHTML='';document.body.style.overflow='';}
modal.querySelector('.video-close').addEventListener('click',closePreview);
modal.addEventListener('click',e=>{if(e.target===modal)closePreview()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closePreview()});

document.querySelectorAll('.work-card').forEach(card=>{card.addEventListener('click',e=>{
  const key=['love','tommy','bishop'].find(k=>card.classList.contains(k));
  if(!key)return;
  e.preventDefault();
  modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
  if(key==='bishop'){frame.innerHTML='<div class="video-note"><strong>BISHOP · SEASON 1</strong><br><br>No official public trailer has been released yet.<br>Preview will be activated as soon as an official source is available.</div>';return;}
  const item=previewMap[key];frame.innerHTML=`<iframe src="${item.src}" title="${item.title}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
});});
