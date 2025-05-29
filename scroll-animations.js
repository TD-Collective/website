// scroll-animations.js

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  document.querySelectorAll('.fade-in-section').forEach(section => {
    section.classList.add('is-visible');
  });
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  });

  document.querySelectorAll('.fade-in-section').forEach(section => {
    observer.observe(section);
  });
}
  
