const root=document.documentElement;
const lang=document.getElementById('langToggle');
const panel=document.getElementById('mobilePanel');
const menu=document.getElementById('menuToggle');
function setLang(l){root.dataset.lang=l;document.querySelectorAll('[data-en]').forEach(el=>el.innerHTML=el.dataset[l]);lang.querySelectorAll('span').forEach((s,i)=>s.classList.toggle('active',(l==='en'&&i===0)||(l==='fr'&&i===1)));}
lang?.addEventListener('click',()=>setLang(root.dataset.lang==='en'?'fr':'en'));
menu?.addEventListener('click',()=>{const open=panel.classList.toggle('open');panel.setAttribute('aria-hidden',String(!open));menu.classList.toggle('open',open)});
panel?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{panel.classList.remove('open');menu.classList.remove('open');panel.setAttribute('aria-hidden','true')}));

const loveArt=document.querySelector('.work-card.love .work-art');
if(loveArt) loveArt.style.background='url(https://img.youtube.com/vi/vo0N_i326as/maxresdefault.jpg) center/cover no-repeat';
const tommyArt=document.querySelector('.work-card.tommy .work-art');
if(tommyArt) tommyArt.style.background='url(https://vumbnail.com/414036040.jpg) center/cover no-repeat';

const ux=document.createElement('style');
ux.textContent=`
.preview-badge{position:absolute;z-index:4;top:16px;left:16px;padding:9px 12px;border:1px solid rgba(255,255,255,.8);background:rgba(0,0,0,.45);backdrop-filter:blur(5px);font-size:8px;letter-spacing:.16em;color:#fff}.preview-pending{opacity:.82}
.video-modal{position:fixed;z-index:1000;inset:0;background:rgba(0,0,0,.95);display:none;align-items:center;justify-content:center;padding:22px}.video-modal.open{display:flex}.video-shell{width:min(1100px,100%);position:relative}.video-frame{position:relative;width:100%;aspect-ratio:16/9;background:#000}.video-frame iframe{position:absolute;inset:0;width:100%;height:100%;border:0}.video-close{position:absolute;right:0;top:-48px;background:none;border:0;color:#fff;font-size:38px;cursor:pointer}.video-note{color:#fff;text-align:center;font:400 19px/1.45 "Cormorant Garamond",serif;padding:55px 20px}
.qc-projects{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:42px}.qc-card{position:relative;display:block;min-height:285px;overflow:hidden;text-decoration:none;color:#fff;background:#171513}.qc-card img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .45s ease}.qc-card:hover img{transform:scale(1.035)}.qc-overlay{position:absolute;inset:0;background:linear-gradient(0deg,rgba(0,0,0,.88),rgba(0,0,0,.05) 64%)}.qc-play{position:absolute;top:14px;left:14px;z-index:2;padding:8px 10px;border:1px solid rgba(255,255,255,.85);background:rgba(0,0,0,.45);font-size:8px;letter-spacing:.14em}.qc-meta{position:absolute;z-index:2;left:16px;right:16px;bottom:16px}.qc-meta h3{font:500 25px/.96 "Cormorant Garamond",serif;margin:0 0 8px}.qc-meta p{font-size:8px;letter-spacing:.14em;margin:0 0 6px}.qc-meta small{font-size:7px;letter-spacing:.12em;opacity:.84}
@media(max-width:900px){.preview-badge{top:12px;left:12px}.video-modal{padding:14px}.video-close{top:-42px}.quebec-section{display:block}.quebec-image{height:220px}.quebec-copy{padding:44px 18px 52px}.quebec-copy h2{font-size:44px;line-height:.88}.quebec-copy>p:not(.eyebrow){font-size:17px}.qc-projects{grid-template-columns:1fr;gap:10px;margin-top:28px}.qc-card{min-height:300px}.qc-meta h3{font-size:30px}.process-section{padding:46px 18px}.process-section .section-title h2{font-size:40px}.process-steps div{min-height:100px;padding:16px 12px}.process-steps b{font-size:30px;margin-bottom:18px}}
`;
document.head.appendChild(ux);

const previewMap={
 love:{src:'https://www.youtube.com/embed/vo0N_i326as?autoplay=1&rel=0',title:'The Love Hypothesis — Official Teaser | Prime Video'},
 tommy:{src:'https://player.vimeo.com/video/414036040?autoplay=1',title:'How Tommy Lemenchick Became a Grade 7 Legend'},
 norbourg:{src:'https://www.youtube.com/embed/5qk45pkEL-E?autoplay=1&rel=0',title:'Norbourg — Bande-annonce officielle'},
 mafia:{src:'https://www.youtube.com/embed/JurXiwWReao?autoplay=1&rel=0',title:'Mafia Inc. — Official Trailer'},
 hummingbird:{src:'https://www.youtube.com/embed/Gey8_fh3hgQ?autoplay=1&rel=0',title:'The Hummingbird Project — Official Trailer'},
 tommyqc:{src:'https://player.vimeo.com/video/414036040?autoplay=1',title:'How Tommy Lemenchick Became a Grade 7 Legend'}
};

const modal=document.createElement('div');
modal.className='video-modal';
modal.setAttribute('aria-hidden','true');
modal.innerHTML='<div class="video-shell"><button class="video-close" aria-label="Close preview">×</button><div class="video-frame"></div></div>';
document.body.appendChild(modal);
const frame=modal.querySelector('.video-frame');
function openPreview(item){if(!item)return;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';frame.innerHTML=`<iframe src="${item.src}" title="${item.title}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;}
function closePreview(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');frame.innerHTML='';document.body.style.overflow='';}
modal.querySelector('.video-close').addEventListener('click',closePreview);
modal.addEventListener('click',e=>{if(e.target===modal)closePreview()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closePreview()});

document.querySelectorAll('.work-card').forEach(card=>card.addEventListener('click',e=>{const key=['love','tommy','bishop'].find(k=>card.classList.contains(k));if(!key)return;e.preventDefault();if(key==='bishop'){modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';frame.innerHTML='<div class="video-note"><strong>BISHOP · SEASON 1</strong><br><br>No official public trailer has been released yet.</div>';return;}openPreview(previewMap[key]);}));

document.querySelectorAll('.qc-card[data-preview]').forEach(card=>card.addEventListener('click',e=>{e.preventDefault();openPreview(previewMap[card.dataset.preview]);}));