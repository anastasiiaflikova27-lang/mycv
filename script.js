const glow = document.querySelector('.cursor-glow');
const progress = document.querySelector('.scroll-progress');

window.addEventListener('pointermove', (e) => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${(scrollY / max) * 100}%`;
}, { passive: true });

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('visible');
  })
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const menu = document.querySelector('.mobile-menu');
document.querySelector('.menu-btn').addEventListener('click',()=>menu.classList.add('open'));
document.querySelector('.menu-close').addEventListener('click',()=>menu.classList.remove('open'));
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));

document.querySelectorAll('.folder-tab').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.folder-tab').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.folder-panel').forEach(p=>p.classList.remove('active'));
    btn.classList.add('active');
    document.querySelector(`[data-panel="${btn.dataset.folder}"]`).classList.add('active');
  });
});

document.querySelectorAll('.tab').forEach(tab=>{
  tab.addEventListener('click',()=>{
    document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c=>c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

document.querySelectorAll('.repo-card').forEach(card=>{
  card.addEventListener('pointermove',(e)=>{
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(245,189,201,.16), rgba(255,255,255,.045) 36%, rgba(255,255,255,.025) 100%)`;
  });
  card.addEventListener('pointerleave',()=>{ card.style.background = ''; });
});

document.querySelectorAll('.tilt').forEach(card => {
  card.addEventListener('pointermove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - .5;
    const y = (e.clientY - rect.top) / rect.height - .5;
    card.style.transform = `perspective(900px) rotateX(${y * -4}deg) rotateY(${x * 4}deg) translateY(-4px)`;
  });
  card.addEventListener('pointerleave', () => { card.style.transform = ''; });
});

const projects = {
  lianna: {
    title: 'Lianna Psychologist Site',
    type: 'Client website · Psychology / Personal brand',
    image: 'assets/lianna.svg',
    intro: 'A personal-brand psychology website built around trust, clear services and a content journey that feels human rather than corporate.',
    role: 'UI/UX, structure, visual direction, front-end',
    focus: 'Trust, services, content hierarchy',
    stack: 'HTML, CSS, JavaScript, responsive design',
    story: 'I structured the website around a clear first impression, service explanation, visual credibility and a calm user journey from interest to contact.',
    impact: 'This project proves I can work with real expert branding and combine web design, content logic and front-end execution.',
    live: 'http://www.lianapsychologist.online',
    repo: 'https://github.com/anastasiiaflikova27-lang/lianna-psychologist-site'
  },
  woodservice: {
    title: 'Woodservice Website',
    type: 'Client website · Premium service business',
    image: 'assets/woodservice.svg',
    intro: 'A premium website for custom wood services, focused on portfolio presentation, business credibility and conversion-ready structure.',
    role: 'Web design, front-end, page structure',
    focus: 'Portfolio, services, premium visual language',
    stack: 'HTML, CSS, responsive layout',
    story: 'I built a more serious service-business presentation: strong hero, clear service blocks, portfolio logic and direct contact flow.',
    impact: 'It shows that my style can adapt beyond feminine visuals into a solid, practical business website.',
    live: 'https://woodservice.vercel.app/',
    repo: 'https://github.com/anastasiiaflikova27-lang/Woodservice'
  },
  ars: {
    title: 'ARS DeStudio',
    type: 'Client website · Interior / renovation studio',
    image: 'assets/ars.svg',
    intro: 'A clean commercial website for an interior and investment renovation studio with a premium, trustworthy look.',
    role: 'Web design, content structure, visual presentation',
    focus: 'Commercial clarity, credibility, project showcase',
    stack: 'HTML, CSS, responsive design',
    story: 'The site presents services, realized projects and a more expensive studio feeling while staying simple and understandable.',
    impact: 'This case is strong for recruiters because it looks like real commercial web work, not just a student concept.',
    live: 'https://ars-destudio.ru',
    repo: 'https://github.com/anastasiiaflikova27-lang/ars-site-final'
  },
  pilaze: {
    title: 'Pilaze Society',
    type: 'Full concept · Luxury pilates / wellness brand',
    image: 'assets/pilaze.svg',
    intro: 'A full luxury wellness website concept created completely by me and deployed as a live project: idea, naming direction, visual language, page structure, copy tone and front-end implementation.',
    role: 'Full concept, art direction, UI, copy structure, code',
    focus: 'Luxury brand, interaction, emotional conversion',
    stack: 'HTML, CSS, JavaScript, custom cursor, responsive layout',
    story: 'I designed the whole digital world: boutique pilates positioning, elegant typography, membership/service logic, gallery mood, booking flow, custom cursor and refined motion details.',
    impact: 'This project is important because it shows creative ownership. It is not only implementation — I shaped the concept, atmosphere, structure and visual system from zero.',
    live: 'https://pilaze.vercel.app',
    repo: 'https://github.com/anastasiiaflikova27-lang/pilaze-society'
  },
  jobtracker: {
    title: 'Job Tracker App',
    type: 'Front-end / App concept · Productivity',
    image: 'assets/jobtracker.svg',
    intro: 'A product-style app concept for organizing job applications, roles and job-search progress.',
    role: 'App UI, UX flow, front-end concept',
    focus: 'Dashboard logic, usability, productivity',
    stack: 'HTML, CSS, JavaScript',
    story: 'This project focuses on interface logic: statuses, cards, progress, user actions and practical information structure.',
    impact: 'It supports my front-end direction because it shows I can think in product screens, states and useful workflows.',
    live: 'assets/jobtracker.svg',
    repo: 'https://github.com/anastasiiaflikova27-lang/job-tracker-app'
  },
  blush: {
    title: 'Blush & Thorn',
    type: 'Creative concept · Beauty / brand identity',
    image: 'assets/blush-thorn.svg',
    intro: 'A bold beauty/web concept with stronger editorial energy, dark-pink visual identity and memorable brand mood.',
    role: 'Branding, art direction, web concept',
    focus: 'Visual identity, mood, storytelling',
    stack: 'HTML, CSS, visual design',
    story: 'I used this project to explore a stronger brand world: contrast, color, editorial layout and a personality-led concept.',
    impact: 'It adds creative range to the portfolio and shows that I can design more expressive brand systems.',
    live: 'https://blush-thorn.vercel.app',
    repo: 'https://github.com/anastasiiaflikova27-lang/blush-thorn'
  }
};

const modal = document.getElementById('projectModal');
const keys = Object.keys(projects);
let currentProject = 'lianna';

function openProject(key) {
  const p = projects[key];
  currentProject = key;
  document.getElementById('modalImage').src = p.image;
  document.getElementById('modalImage').alt = p.title + ' preview';
  document.getElementById('modalType').textContent = p.type;
  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalIntro').textContent = p.intro;
  document.getElementById('modalRole').textContent = p.role;
  document.getElementById('modalFocus').textContent = p.focus;
  document.getElementById('modalStack').textContent = p.stack;
  document.getElementById('modalStory').textContent = p.story;
  document.getElementById('modalImpact').textContent = p.impact;
  document.getElementById('modalLive').href = p.live;
  document.getElementById('modalLive').textContent = key === 'jobtracker' ? 'View preview →' : 'View live site →';
  document.getElementById('modalRepo').href = p.repo;
  modal.showModal();
}

document.querySelectorAll('.open-project').forEach(card => {
  card.addEventListener('click', () => openProject(card.dataset.project));
});

document.querySelector('.modal-close').addEventListener('click', () => modal.close());
modal.addEventListener('click', (e) => { if (e.target === modal) modal.close(); });
document.querySelector('.modal-next').addEventListener('click', () => {
  const idx = keys.indexOf(currentProject);
  openProject(keys[(idx + 1) % keys.length]);
});
