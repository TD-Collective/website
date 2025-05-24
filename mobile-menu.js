// mobile-menu.js
const menuToggle = document.getElementById('mobile-menu-toggle');
const mobileNav = document.getElementById('mobile-nav-links');

menuToggle.addEventListener('click', () => {
  mobileNav.style.display = (mobileNav.style.display === 'flex') ? 'none' : 'flex';
});
