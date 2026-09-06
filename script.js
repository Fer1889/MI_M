
document.addEventListener('DOMContentLoaded', () => {
  const animatedEls = document.querySelectorAll(
    '.heart-path, .heart-glow, .sparkle, .photo, .message'
  );

  function restartAnimations() {
    animatedEls.forEach((el) => {
      el.style.animation = 'none';

      void el.offsetWidth;
      el.style.animation = '';
    });
  }

  document.body.addEventListener('click', restartAnimations);
  document.body.addEventListener('touchstart', restartAnimations, { passive: true });
});