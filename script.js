// PKA — interactions légères
(function() {
  'use strict';

  // Burger menu mobile
  const burger = document.querySelector('.nav__burger');
  if (burger) {
    burger.addEventListener('click', () => {
      document.body.classList.toggle('menu-open');
    });
    // Close on link click
    document.querySelectorAll('.nav__links a').forEach(link => {
      link.addEventListener('click', () => document.body.classList.remove('menu-open'));
    });
  }

  // Reveal on scroll (IntersectionObserver)
  const revealElements = document.querySelectorAll('.pillar, .work, .stat, .project-section, .tour-card, .manifesto__body');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = `fadeUp 0.7s ${i * 0.06}s ease-out both`;
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => {
      el.style.opacity = '0';
      io.observe(el);
    });
  }

  // Date year in footer if needed
  const yearEl = document.querySelector('[data-current-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Lien discret vers v2 beta (injecté sur toutes les pages v1)
  if (!document.querySelector('.v2-beta-link')) {
    const link = document.createElement('a');
    link.href = 'v2/index.html';
    link.className = 'v2-beta-link';
    link.setAttribute('aria-label', 'Voir la version beta v2 (nouveau design)');
    link.innerHTML = '<span>v2 beta</span><span aria-hidden="true">→</span>';
    document.body.appendChild(link);
  }
})();
