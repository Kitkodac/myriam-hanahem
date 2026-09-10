const root=document.documentElement;
const lang=document.getElementById('langToggle');
const panel=document.getElementById('mobilePanel');
const menu=document.getElementById('menuToggle');
function setLang(l){root.dataset.lang=l;document.querySelectorAll('[data-en]').forEach(el=>{const v=el.dataset[l];if(v)el.innerHTML=v});lang?.querySelectorAll('span').forEach((s,i)=>s.classList.toggle('active',(l==='en'&&i===0)||(l==='fr'&&i===1)));localStorage.setItem('mh-lang',l)}
setLang(localStorage.getItem('mh-lang')||'en');
lang?.addEventListener('click',()=>setLang(root.dataset.lang==='en'?'fr':'en'));
menu?.addEventListener('click',()=>{const open=panel.classList.toggle('open');panel.setAttribute('aria-hidden',String(!open));menu.classList.toggle('open',open)});
panel?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{panel.classList.remove('open');menu.classList.remove('open');panel.setAttribute('aria-hidden','true')}));
