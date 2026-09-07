const root=document.documentElement;
const lang=document.getElementById('langToggle');
const panel=document.getElementById('mobilePanel');
const menu=document.getElementById('menuToggle');
function setLang(l){root.dataset.lang=l;document.querySelectorAll('[data-en]').forEach(el=>el.innerHTML=el.dataset[l]);lang?.querySelectorAll('span').forEach((s,i)=>s.classList.toggle('active',(l==='en'&&i===0)||(l==='fr'&&i===1)));}
lang?.addEventListener('click',()=>setLang(root.dataset.lang==='en'?'fr':'en'));
menu?.addEventListener('click',()=>{const open=panel.classList.toggle('open');panel.setAttribute('aria-hidden',String(!open));menu.classList.toggle('open',open)});
panel?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{panel.classList.remove('open');menu.classList.remove('open');panel.setAttribute('aria-hidden','true')}));

const previewMap={love:{src:'https://www.youtube.com/embed/vo0N_i326as?autoplay=1&rel=0',title:'The Love Hypothesis — Official Trailer'},tommy:{src:'https://player.vimeo.com/video/414036040?autoplay=1',title:'How Tommy Lemenchick Became a Grade 7 Legend'},norbourg:{src:'https://www.youtube.com/embed/5qk45pkEL-E?autoplay=1&rel=0',title:'Norbourg — Bande-annonce'},mafia:{src:'https://www.youtube.com/embed/JurXiwWReao?autoplay=1&rel=0',title:'Mafia Inc. — Official Trailer'},hummingbird:{src:'https://www.youtube.com/embed/Gey8_fh3hgQ?autoplay=1&rel=0',title:'The Hummingbird Project — Official Trailer'}};
const loveArt=document.querySelector('.work-card.love .work-art');if(loveArt)loveArt.style.background='url(https://img.youtube.com/vi/vo0N_i326as/maxresdefault.jpg) center/cover no-repeat';
const tommyArt=document.querySelector('.work-card.tommy .work-art');if(tommyArt)tommyArt.style.background='url(https://vumbnail.com/414036040.jpg) center/cover no-repeat';
const bishopCard=document.querySelector('.work-card.bishop'),bishopArt=document.querySelector('.work-card.bishop .work-art');
if(bishopArt)bishopArt.innerHTML='<img class="bishop-photo" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Joel%20Kinnaman%20%2828601032925%29%20%28cropped%29.jpg" alt="Bishop series" referrerpolicy="no-referrer">';
if(bishopCard){bishopCard.href='https://www.imdb.com/title/tt38266508/';const b=bishopCard.querySelector('.preview-badge');if(b){b.textContent='SERIES INFO →';b.classList.remove('preview-pending')}}

const modal=document.createElement('div');modal.className='video-modal';modal.innerHTML='<div class="video-shell"><button class="video-close" aria-label="Close">×</button><div class="video-frame"></div></div>';document.body.appendChild(modal);const frame=modal.querySelector('.video-frame');
function openPreview(item){if(!item)return;modal.classList.add('open');document.body.style.overflow='hidden';frame.innerHTML=`<iframe src="${item.src}" title="${item.title}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`}
function closePreview(){modal.classList.remove('open');frame.innerHTML='';document.body.style.overflow=''}
modal.querySelector('.video-close').onclick=closePreview;modal.onclick=e=>{if(e.target===modal)closePreview()};document.addEventListener('keydown',e=>{if(e.key==='Escape')closePreview()});
document.querySelectorAll('.work-card.love,.work-card.tommy').forEach(card=>card.onclick=e=>{e.preventDefault();openPreview(previewMap[card.classList.contains('love')?'love':'tommy'])});
document.querySelectorAll('.qc-card[data-preview]').forEach(card=>card.onclick=e=>{e.preventDefault();openPreview(previewMap[card.dataset.preview==='tommyqc'?'tommy':card.dataset.preview])});

const trailerLinks={
'The Love Hypothesis':'https://www.youtube.com/watch?v=vo0N_i326as',
'The Sticky':'https://www.youtube.com/watch?v=hvjIKMb5oSc',
'The Naughty Nine':'https://video.disney.com/watch/the-naughty-nine-official-trailer-608750dfcaccaebd6b4f2a72',
'Beau Is Afraid':'https://www.youtube.com/watch?v=PuiWDn976Ek',
'Norbourg':'https://www.elephantcinema.quebec/films/norbourg_85806/',
'Single All the Way':'https://www.netflix.com/ca/title/81148358',
'Chaos Walking':'https://www.youtube.com/watch?v=nRf4ZgzHoVw',
'Home Sweet Home Alone':'https://www.youtube.com/watch?v=2vNQ6GvnT9Y',
'Most Wanted / Suspect numéro un':'https://tv.apple.com/us/clip/most-wanted/umc.cmc.3jzbe1uz176j3ttac3y6f5z3g',
'My Salinger Year':'https://www.youtube.com/watch?v=05jdkAUwGPM',
'Mafia Inc.':'https://www.youtube.com/watch?v=JurXiwWReao',
'Long Shot':'https://www.youtube.com/watch?v=ZKsc2I4Tgsk',
'The Hummingbird Project':'https://www.youtube.com/watch?v=Gey8_fh3hgQ',
'Tom Clancy’s Jack Ryan':'https://www.primevideo.com/detail/0ONGKHWBI6Y2CABWUR56DP08PM',
"Tom Clancy's Jack Ryan":'https://www.primevideo.com/detail/0ONGKHWBI6Y2CABWUR56DP08PM',
'How Tommy Lemenchick Became a Grade 7 Legend':'https://vimeo.com/414036040',
'mother!':'https://www.youtube.com/watch?v=XpICoc65uh0',
'John Wick: Chapter 2':'https://www.youtube.com/watch?v=ChpLV9AMqm4',
'Béliveau':'https://pixcom.com/productions/beliveau/'
};
document.querySelectorAll('.credit-list>div').forEach(row=>{const title=row.querySelector('strong');if(!title)return;const url=trailerLinks[title.textContent.trim()];if(!url)return;const a=document.createElement('a');a.className='credit-preview';a.href=url;a.target='_blank';a.rel='noopener';a.innerHTML='<span class="en-label">▶ PREVIEW</span><span class="fr-label">▶ EXTRAIT</span>';title.insertAdjacentElement('afterend',a)});

const processContent={en:[['SCRIPT','Reading character arcs, period, social context and production needs to establish the costume language.'],['RESEARCH','Building a visual world through period references, social codes, photography and archives.'],['PALETTE & TEXTURE','Defining colour, fabric, wear, silhouette and texture so every costume supports the story.'],['FITTINGS','Testing proportion, movement, continuity and actor comfort while refining each character.'],['CHARACTER','Turning research and fitting choices into a coherent, specific and truthful wardrobe.'],['SCREEN','Maintaining continuity and visual consistency through production for camera and story.']],fr:[['SCÉNARIO','Lecture des personnages, de l’époque, du contexte social et des besoins de production.'],['RECHERCHE','Construction d’un univers visuel à partir d’archives, de références et de codes sociaux.'],['PALETTE & MATIÈRES','Définition des couleurs, tissus, silhouettes et textures au service du récit.'],['ESSAYAGES','Validation des proportions, du mouvement, de la continuité et du confort des interprètes.'],['PERSONNAGE','Transformation des recherches en une garde-robe cohérente, crédible et précise.'],['ÉCRAN','Suivi de la continuité et de la cohérence visuelle pendant le tournage.']]};
const pmodal=document.createElement('div');pmodal.className='process-modal';pmodal.innerHTML='<div class="process-shell"><button class="process-close">×</button><div class="process-kicker">COSTUME DESIGN PROCESS</div><div class="process-number"></div><h3 class="process-title"></h3><p class="process-copy"></p></div>';document.body.appendChild(pmodal);function closeProcess(){pmodal.classList.remove('open');document.body.style.overflow=''}pmodal.querySelector('.process-close').onclick=closeProcess;pmodal.onclick=e=>{if(e.target===pmodal)closeProcess()};
document.querySelectorAll('.process-steps>div').forEach((step,i)=>{step.setAttribute('role','button');step.setAttribute('tabindex','0');const open=()=>{const l=root.dataset.lang==='fr'?'fr':'en',item=processContent[l][i];pmodal.querySelector('.process-kicker').textContent=l==='fr'?'PROCESSUS DE CRÉATION COSTUME':'COSTUME DESIGN PROCESS';pmodal.querySelector('.process-number').textContent=String(i+1).padStart(2,'0');pmodal.querySelector('.process-title').textContent=item[0];pmodal.querySelector('.process-copy').textContent=item[1];pmodal.classList.add('open');document.body.style.overflow='hidden'};step.onclick=open;step.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open()}}});

const ux=document.createElement('style');ux.textContent=`
.video-modal,.process-modal{position:fixed;z-index:1000;inset:0;background:rgba(0,0,0,.95);display:none;align-items:center;justify-content:center;padding:22px}.video-modal.open,.process-modal.open{display:flex}.video-shell,.process-shell{width:min(1100px,100%);position:relative}.video-frame{position:relative;width:100%;aspect-ratio:16/9;background:#000}.video-frame iframe{position:absolute;inset:0;width:100%;height:100%;border:0}.video-close,.process-close{position:absolute;right:0;top:-48px;background:none;border:0;color:#fff;font-size:38px;cursor:pointer}.work-card.bishop .work-art{background:#161616}.bishop-photo{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 25%}.credit-list>div{position:relative}.credit-preview{display:inline-flex;align-items:center;margin-left:18px;padding:6px 9px;border:1px solid rgba(23,21,19,.32);font:500 7px/1 Inter,sans-serif;letter-spacing:.14em;text-decoration:none;color:#171513;vertical-align:middle;transition:.2s}.credit-preview:hover{background:#171513;color:#f2eee7}.fr-label{display:none}html[data-lang="fr"] .credit-preview .en-label{display:none}html[data-lang="fr"] .credit-preview .fr-label{display:inline}.process-steps>div{cursor:pointer}.process-shell{max-width:760px;background:#f2eee7;color:#171513;padding:52px 58px}.process-number{font:500 66px/.8 "Cormorant Garamond",serif}.process-title{font:500 54px/.9 "Cormorant Garamond",serif;margin:16px 0}.process-copy{font:400 20px/1.4 "Cormorant Garamond",serif}
@media(max-width:900px){.credit-preview{margin-left:8px;padding:5px 7px;font-size:6px}.video-modal,.process-modal{padding:14px}.process-shell{padding:38px 24px}.process-title{font-size:42px}.bishop-photo{object-position:50% 18%}}
`;document.head.appendChild(ux);