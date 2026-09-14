// Hero image rotation (spice flat-lay <-> Cargo)
(function () {
  const wrap = document.getElementById('heroSlides');
  if (!wrap) return;
  const slides = [...wrap.querySelectorAll('.hero__slide')];
  const dots = [...wrap.querySelectorAll('.hero__dot')];
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let i = 0, timer = null;

  function show(n) {
    i = (n + slides.length) % slides.length;
    slides.forEach((s, x) => s.classList.toggle('is-active', x === i));
    dots.forEach((d, x) => d.classList.toggle('is-active', x === i));
  }
  function start() { if (reduce) return; stop(); timer = setInterval(() => show(i + 1), 5500); }
  function stop() { clearInterval(timer); timer = null; }

  dots.forEach((d, x) => d.addEventListener('click', () => { show(x); start(); }));
  wrap.addEventListener('mouseenter', stop);
  wrap.addEventListener('mouseleave', start);
  start();
})();

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('is-open');
  hamburger.setAttribute('aria-expanded', isOpen);
});

menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('.menu > a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});
