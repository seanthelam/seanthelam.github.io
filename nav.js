// ── Navigation scroll effect ──────────────────────────────
const nav = document.querySelector('.nav');
const onScroll = () => {
  nav.classList.toggle('scrolled', window.scrollY > 24);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ── Mobile drawer toggle ──────────────────────────────────
const toggle  = document.querySelector('.nav-toggle');
const drawer  = document.querySelector('.nav-drawer');
const drawerLinks = drawer?.querySelectorAll('.nav-link') ?? [];

const openDrawer = () => {
  toggle.classList.add('open');
  drawer.classList.add('open');
  document.body.style.overflow = 'hidden';
};

const closeDrawer = () => {
  toggle.classList.remove('open');
  drawer.classList.remove('open');
  document.body.style.overflow = '';
};

toggle?.addEventListener('click', () => {
  toggle.classList.contains('open') ? closeDrawer() : openDrawer();
});

drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));

// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeDrawer();
});

// ── Active nav link ───────────────────────────────────────
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ── Smooth scroll for anchor links ───────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
