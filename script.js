/* ============================================
   josuepires.com.br — Scripts
   - FAQ accordion (expand/collapse)
   - Smooth scroll para âncoras internas
   - Header sticky com sombra ao rolar
   ============================================ */

(function () {
  'use strict';

  /* ---------- FAQ accordion ---------- */
  function initFAQ() {
    const questions = document.querySelectorAll('.faq-q');

    questions.forEach((q) => {
      q.addEventListener('click', () => {
        const item = q.parentElement;
        const isOpen = item.classList.contains('open');

        // Fecha todos os outros items abertos
        document.querySelectorAll('.faq-item.open').forEach((openItem) => {
          openItem.classList.remove('open');
          const btn = openItem.querySelector('.faq-q');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        });

        // Abre o item clicado, se não estava aberto
        if (!isOpen) {
          item.classList.add('open');
          q.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  /* ---------- Smooth scroll para anchors internos ---------- */
  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');

        // Ignora links como href="#" (que voltam para o topo)
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    });
  }

  /* ---------- Sombra no header ao rolar ---------- */
  function initStickyHeader() {
    const nav = document.querySelector('.nav');
    if (!nav) return;

    let lastScroll = 0;

    window.addEventListener(
      'scroll',
      () => {
        const currentScroll = window.scrollY;

        if (currentScroll > 8) {
          nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
        } else {
          nav.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
      },
      { passive: true }
    );
  }

  /* ---------- Inicialização ---------- */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initFAQ();
      initSmoothScroll();
      initStickyHeader();
    });
  } else {
    initFAQ();
    initSmoothScroll();
    initStickyHeader();
  }
})();
