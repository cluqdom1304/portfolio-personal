/* ═══════════════════════════════════════════════
   main.js — Portfolio Cristian Luque
   ═══════════════════════════════════════════════ */

/**
 * Animación de aparición al hacer scroll (fade-in).
 * Añade la clase .visible a cada elemento con .fade-in
 * cuando entra en el viewport.
 */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => observer.observe(el));
}

/* ─── Punto de entrada ─── */
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
});
