// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('is-open');
  hamburger.setAttribute('aria-expanded', isOpen);
  hamburger.classList.toggle('is-active');
});

// Close mobile menu when a link is clicked
menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// Tap-to-open dropdown on mobile (Products menu)
const dropdown = document.querySelector('.menu__dropdown > a');
if (dropdown) {
  dropdown.addEventListener('click', (e) => {
    if (window.innerWidth <= 860) {
      e.preventDefault();
      dropdown.parentElement.classList.toggle('is-open');
    }
  });
}

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
