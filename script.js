const root=document.documentElement;
const lang=document.getElementById('langToggle');
const panel=document.getElementById('mobilePanel');
const menu=document.getElementById('menuToggle');
function setLang(l){root.dataset.lang=l;document.querySelectorAll('[data-en]').forEach(el=>el.innerHTML=el.dataset[l]);lang?.querySelectorAll('span').forEach((s,i)=>s.classList.toggle('active',(l==='en'&&i===0)||(l==='fr'&&i===1)));}
lang?.addEventListener('click',()=>setLang(root.dataset.lang==='en'?'fr':'en'));
menu?.addEventListener('click',()=>{const open=panel.classList.toggle('open');panel.setAttribute('aria-hidden',String(!open));menu.classList.toggle('open',open)});
panel?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{panel.classList.remove('open');menu.classList.remove('open');panel.setAttribute('aria-hidden','true')}));

const loveArt=document.querySelector('.work-card.love .work-art');
if(loveArt) loveArt.style.background='url(https://img.youtube.com/vi/vo0N_i326as/maxresdefault.jpg) center/cover no-repeat';
const tommyArt=document.querySelector('.work-card.tommy .work-art');
if(tommyArt) tommyArt.style.background='url(https://vumbnail.com/414036040.jpg) center/cover no-repeat';

const bishopCard=document.querySelector('.work-card.bishop');
const bishopArt=document.querySelector('.work-card.bishop .work-art');
if(bishopArt){
  bishopArt.innerHTML='<img class="bishop-photo" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Joel%20Kinnaman%20%2828601032925%29%20%28cropped%29.jpg" alt="Joel Kinnaman, lead actor in Bishop" referrerpolicy="no-referrer">';
}
if(bishopCard){
  bishopCard.href='https://www.imdb.com/title/tt38266508/';
  bishopCard.removeAttribute('target');
  bishopCard.removeAttribute('rel');
  const badge=bishopCard.querySelector('.preview-badge');
  if(badge){badge.textContent='SERIES INFO →';badge.classList.remove('preview-pending');}
  bishopCard.addEventListener('click',e=>{e.preventDefault();window.location.href='https://www.imdb.com/title/tt38266508/';});
}

const ux=document.createElement('style');
ux.textContent=`
.preview-badge{position:absolute;z-index:4;top:16px;left:16px;padding:9px 12px;border:1px solid rgba(255,255,255,.8);background:rgba(0,0,0,.45);backdrop-filter:blur(5px);font-size:8px;letter-spacing:.16em;color:#fff}.preview-pending{opacity:.82}
.work-card.bishop .work-art{background:#161616}.bishop-photo{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 25%;filter:saturate(.85) contrast(1.05)}
.video-modal,.process-modal{position:fixed;z-index:1000;inset:0;background:rgba(0,0,0,.95);display:none;align-items:center;justify-content:center;padding:22px}.video-modal.open,.process-modal.open{display:flex}.video-shell,.process-shell{width:min(1100px,100%);position:relative}.video-frame{position:relative;width:100%;aspect-ratio:16/9;background:#000}.video-frame iframe{position:absolute;inset:0;width:100%;height:100%;border:0}.video-close,.process-close{position:absolute;right:0;top:-48px;background:none;border:0;color:#fff;font-size:38px;cursor:pointer}.video-note{color:#fff;text-align:center;font:400 19px/1.45 "Cormorant Garamond",serif;padding:55px 20px}
.qc-projects{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:42px}.qc-card{position:relative;display:block;min-height:285px;overflow:hidden;text-decoration:none;color:#fff;background:#171513}.qc-card img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .45s ease}.qc-card:hover img{transform:scale(1.035)}.qc-overlay{position:absolute;inset:0;background:linear-gradient(0deg,rgba(0,0,0,.88),rgba(0,0,0,.05) 64%)}.qc-play{position:absolute;top:14px;left:14px;z-index:2;padding:8px 10px;border:1px solid rgba(255,255,255,.85);background:rgba(0,0,0,.45);font-size:8px;letter-spacing:.14em}.qc-meta{position:absolute;z-index:2;left:16px;right:16px;bottom:16px}.qc-meta h3{font:500 25px/.96 "Cormorant Garamond",serif;margin:0 0 8px}.qc-meta p{font-size:8px;letter-spacing:.14em;margin:0 0 6px}.qc-meta small{font-size:7px;letter-spacing:.12em;opacity:.84}
.process-steps>div{cursor:pointer;position:relative;transition:background .25s,color .25s,transform .25s}.process-steps>div:after{content:'VIEW →';position:absolute;left:12px;bottom:12px;font-size:7px;letter-spacing:.14em;opacity:.4;transition:.25s}.process-steps>div:hover{background:#191816;color:#f2eee7;transform:translateY(-2px)}.process-steps>div:hover:after{opacity:1}.process-shell{max-width:760px;background:#f2eee7;color:#171513;padding:52px 58px 46px}.process-shell .process-close{color:#fff}.process-kicker{font-size:9px;letter-spacing:.18em;margin-bottom:18px}.process-number{font:500 66px/.8 "Cormorant Garamond",serif;margin-bottom:14px}.process-title{font:500 54px/.88 "Cormorant Garamond",serif;margin:0 0 22px}.process-copy{font:400 20px/1.4 "Cormorant Garamond",serif;margin:0}.process-hint{text-align:center;margin:20px 0 0;font-size:8px;letter-spacing:.15em;opacity:.55}
@media(max-width:900px){.preview-badge{top:12px;left:12px}.video-modal,.process-modal{padding:14px}.video-close,.process-close{top:-42px}.bishop-photo{object-position:50% 18%}.quebec-section{display:block}.quebec-image{height:220px}.quebec-copy{padding:44px 18px 52px}.quebec-copy h2{font-size:44px;line-height:.88}.quebec-copy>p:not(.eyebrow){font-size:17px}.qc-projects{grid-template-columns:1fr;gap:10px;margin-top:28px}.qc-card{min-height:300px}.qc-meta h3{font-size:30px}.process-section{padding:42px 18px}.process-section .section-title h2{font-size:40px}.process-steps div{min-height:96px;padding:15px 12px}.process-steps b{font-size:28px;margin-bottom:16px}.process-steps>div:after{opacity:.65}.process-shell{padding:38px 24px 32px}.process-number{font-size:54px}.process-title{font-size:42px}.process-copy{font-size:18px}}
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
modal.className='video-modal';modal.setAttribute('aria-hidden','true');
modal.innerHTML='<div class="video-shell"><button class="video-close" aria-label="Close preview">×</button><div class="video-frame"></div></div>';
document.body.appendChild(modal);
const frame=modal.querySelector('.video-frame');
function openPreview(item){if(!item)return;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';frame.innerHTML=`<iframe src="${item.src}" title="${item.title}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;}
function closePreview(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');frame.innerHTML='';document.body.style.overflow='';}
modal.querySelector('.video-close').addEventListener('click',closePreview);modal.addEventListener('click',e=>{if(e.target===modal)closePreview()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closePreview()});
document.querySelectorAll('.work-card.love,.work-card.tommy').forEach(card=>card.addEventListener('click',e=>{e.preventDefault();openPreview(previewMap[card.classList.contains('love')?'love':'tommy']);}));
document.querySelectorAll('.qc-card[data-preview]').forEach(card=>card.addEventListener('click',e=>{e.preventDefault();openPreview(previewMap[card.dataset.preview]);}));

const processContent={en:[['SCRIPT','Reading character arcs, period, social context and production needs to establish the costume language before any sourcing begins.'],['RESEARCH','Building a visual world through period references, social codes, photography, archives, real people and location-specific detail.'],['PALETTE & TEXTURE','Defining colour, fabric, wear, silhouette and texture so every costume supports story, hierarchy and emotional tone.'],['FITTINGS','Testing proportion, movement, continuity and actor comfort while refining the visual identity of each character.'],['CHARACTER','Turning research and fitting choices into a coherent wardrobe that feels lived-in, specific and truthful to the person on screen.'],['SCREEN','Maintaining continuity and visual consistency through production so the costume work serves performance, camera and final storytelling.']],fr:[['SCÉNARIO','Lecture des arcs des personnages, de l’époque, du contexte social et des besoins de production afin de définir le langage costume avant les recherches et achats.'],['RECHERCHE','Construction d’un univers visuel à partir d’archives, de références d’époque, de codes sociaux, de photographies et de détails propres aux lieux.'],['PALETTE & MATIÈRES','Définition des couleurs, tissus, usure, silhouettes et textures afin que chaque costume soutienne le récit, la hiérarchie et le ton émotionnel.'],['ESSAYAGES','Validation des proportions, du mouvement, de la continuité et du confort des interprètes tout en affinant l’identité visuelle de chaque personnage.'],['PERSONNAGE','Transformation des recherches et des essayages en une garde-robe cohérente, crédible, précise et profondément liée au personnage.'],['ÉCRAN','Suivi de la continuité et de la cohérence visuelle pendant le tournage afin que le costume serve le jeu, la caméra et le récit final.']]};
const pmodal=document.createElement('div');pmodal.className='process-modal';pmodal.setAttribute('aria-hidden','true');pmodal.innerHTML='<div class="process-shell"><button class="process-close" aria-label="Close">×</button><div class="process-kicker">COSTUME DESIGN PROCESS</div><div class="process-number"></div><h3 class="process-title"></h3><p class="process-copy"></p><div class="process-hint">CLICK OUTSIDE OR × TO CLOSE</div></div>';document.body.appendChild(pmodal);
function closeProcess(){pmodal.classList.remove('open');pmodal.setAttribute('aria-hidden','true');document.body.style.overflow='';}
pmodal.querySelector('.process-close').addEventListener('click',closeProcess);pmodal.addEventListener('click',e=>{if(e.target===pmodal)closeProcess()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeProcess()});
document.querySelectorAll('.process-steps>div').forEach((step,i)=>{step.setAttribute('role','button');step.setAttribute('tabindex','0');step.setAttribute('aria-label',`Open process step ${i+1}`);const open=()=>{const l=root.dataset.lang==='fr'?'fr':'en';const item=processContent[l][i];pmodal.querySelector('.process-kicker').textContent=l==='fr'?'PROCESSUS DE CRÉATION COSTUME':'COSTUME DESIGN PROCESS';pmodal.querySelector('.process-number').textContent=String(i+1).padStart(2,'0');pmodal.querySelector('.process-title').textContent=item[0];pmodal.querySelector('.process-copy').textContent=item[1];pmodal.querySelector('.process-hint').textContent=l==='fr'?'CLIQUER À L’EXTÉRIEUR OU × POUR FERMER':'CLICK OUTSIDE OR × TO CLOSE';pmodal.classList.add('open');pmodal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';};step.addEventListener('click',open);step.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}});});