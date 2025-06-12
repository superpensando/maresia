/* Details Open by Responsive */

window.addEventListener("resize", () => updateDetailsState(768));

function updateDetailsState(breakpoint = 768) {
  const isDesktop = window.innerWidth >= breakpoint;

  document.querySelectorAll('.details__wrapper').forEach((el) => {
    if (isDesktop) {
      el.open = true; // only Desktop open
    } else {
      el.open = false; // only Mobile close
    }
  });
}




