/* ========================= */
/* CURSOR                    */
/* ========================= */
const cursor   = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{
  mx=e.clientX; my=e.clientY;
  cursor.style.transform=`translate(${mx-5}px,${my-5}px)`;
});
(function animRing(){
  rx+=(mx-rx)*.13; ry+=(my-ry)*.13;
  cursorRing.style.transform=`translate(${rx-16}px,${ry-16}px)`;
  requestAnimationFrame(animRing);
})();
document.querySelectorAll('a,button,.menu-icon,.close-btn,.hero-dot,.affil-card,.partner-card').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cursorRing.style.width='54px';cursorRing.style.height='54px';});
  el.addEventListener('mouseleave',()=>{cursorRing.style.width='32px';cursorRing.style.height='32px';});
});

/* ========================= */
/* PAGE ROUTING              */
/* ========================= */
function showPage(name, linkEl){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-menu a').forEach(a=>a.classList.remove('active'));
  document.getElementById('page-'+name).classList.add('active');
  if(linkEl) linkEl.classList.add('active');
  toggleMenu();
  window.scrollTo({top:0,behavior:'smooth'});
  setTimeout(triggerReveals,120);
}
function navTo(name){
  const link = document.querySelector(`.nav-menu a[onclick*="'${name}'"]`);
  showPage(name, link);
}

/* ========================= */
/* NAV TOGGLE                */
/* ========================= */
function toggleMenu(){
  document.getElementById('navMenu').classList.toggle('active');
  document.getElementById('navOverlay').classList.toggle('active');
}

/* ========================= */
/* HERO SLIDESHOW            */
/* ========================= */
let heroIdx   = 0;
const heroSlides = document.querySelectorAll('.slide-item');
const heroDotEls = document.querySelectorAll('.hero-dot');
const heroCounter = document.getElementById('heroCounter');
const counters = ['<span>01</span> / 03','<span>02</span> / 03','<span>03</span> / 03'];

function goSlideHero(n){
  heroSlides[heroIdx].classList.remove('active');
  heroDotEls[heroIdx].classList.remove('active');
  heroIdx = (n + heroSlides.length) % heroSlides.length;
  heroSlides[heroIdx].classList.add('active');
  heroDotEls[heroIdx].classList.add('active');
  heroCounter.innerHTML = counters[heroIdx];
}

// Auto-advance every 4.5s
setInterval(()=>goSlideHero(heroIdx+1), 4500);

/* ========================= */
/* SCROLL REVEAL             */
/* ========================= */
function triggerReveals(){
  const activePage = document.querySelector('.page.active');
  if(!activePage) return;
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
  },{threshold:.1});
  activePage.querySelectorAll('.reveal').forEach(el=>{
    el.classList.remove('visible');
    obs.observe(el);
  });
}
window.addEventListener('scroll', triggerReveals);
triggerReveals();

/* ========================= */
/* BTN TAGS                  */
/* ========================= */
document.querySelectorAll('.btn-tag').forEach(btn=>{
  btn.addEventListener('click',function(){
    this.classList.toggle('active');
    this.style.transform='scale(1.06)';
    setTimeout(()=>this.style.transform='',180);
  });
});

/* ========================= */
/* CONTACT FORM              */
/* ========================= */
document.addEventListener('DOMContentLoaded',()=>{
  const form = document.getElementById('contactForm');
  const resp = document.getElementById('formResponse');
  if(!form) return;
  form.addEventListener('submit',async function(e){
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    btn.textContent='Sending...';
    try{
      const res = await fetch(form.action,{
        method:'POST',
        body:new FormData(form),
        headers:{Accept:'application/json'}
      });
      if(res.ok){
        resp.style.color='var(--green)';
        resp.textContent='✓ Message sent. We will be in touch shortly.';
        form.reset();
      } else {
        resp.style.color='#c0392b';
        resp.textContent='✗ Something went wrong. Please try again.';
      }
    } catch(err){
      resp.style.color='#c0392b';
      resp.textContent='✗ Network error. Please try again.';
    }
    btn.textContent='Send Enquiry →';
  });
});
