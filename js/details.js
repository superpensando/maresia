/* Details Open by Responsive */

window.addEventListener("resize", () => updateFooterNavState(768));

function updateFooterNavState(breakpoint = 768) {
  const isDesktop = window.innerWidth >= breakpoint;

  document.querySelectorAll('.details__wrapper').forEach((el) => {
    if (isDesktop) {
      el.open = true; // only Desktop open
    } else {
      el.open = false; // only Mobile close
    }
  });
}




