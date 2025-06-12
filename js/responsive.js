// Responsive Only-mobile / Only Desktop

window.addEventListener("resize", () => updateResponsiveVisibility(1024));
window.addEventListener("load", () => updateResponsiveVisibility(1024));

function updateResponsiveVisibility(breakpoint = 1024) {
  const isDesktop = window.innerWidth >= breakpoint;

  // Only mobile
  document.querySelectorAll('.only-mobile').forEach(el => {
    if (isDesktop) {
      el.setAttribute('aria-hidden', 'true');
      el.setAttribute('tabindex', '-1');
      el.classList.add('is-hidden');
    } else {
      el.removeAttribute('aria-hidden');
      el.removeAttribute('tabindex');
      el.classList.remove('is-hidden');
    }
  });

  // Only desktop
  document.querySelectorAll('.only-desktop').forEach(el => {
    if (!isDesktop) {
      el.setAttribute('aria-hidden', 'true');
      el.setAttribute('tabindex', '-1');
      el.classList.add('is-hidden');
    } else {
      el.removeAttribute('aria-hidden');
      el.removeAttribute('tabindex');
      el.classList.remove('is-hidden');
    }
  });
}