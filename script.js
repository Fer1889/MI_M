// Permite reiniciar toda la animación con un toque/clic en la pantalla,
// útil en el móvil si alguien quiere volver a verla desde el inicio.

document.addEventListener('DOMContentLoaded', () => {
  const animatedEls = document.querySelectorAll(
    '.heart-path, .heart-glow, .sparkle, .photo, .message'
  );

  function restartAnimations() {
    animatedEls.forEach((el) => {
      el.style.animation = 'none';
      // Forzar reflow para que el navegador "olvide" el estado anterior
      void el.offsetWidth;
      el.style.animation = '';
    });
  }

  document.body.addEventListener('click', restartAnimations);
  document.body.addEventListener('touchstart', restartAnimations, { passive: true });
});