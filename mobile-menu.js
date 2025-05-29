// mobile-menu.js
const menuToggle = document.getElementById('mobile-menu-toggle');
const mobileNav = document.getElementById('mobile-nav-links');
const firstMobileLink = mobileNav ? mobileNav.querySelector('a') : null;

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  const newState = !expanded;
  menuToggle.setAttribute('aria-expanded', newState.toString());
  mobileNav.style.display = newState ? 'flex' : 'none';
  mobileNav.setAttribute('aria-hidden', (!newState).toString());

  if (newState && firstMobileLink) {
    firstMobileLink.focus();
  } else {
    menuToggle.focus();
  }
});
