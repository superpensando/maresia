window.addEventListener("resize", () => updateFooterNavState(768));

// Responsive only for Footer
function updateFooterNavState(breakpoint = 768) {
  const isDesktop = window.innerWidth >= breakpoint;

  document.querySelectorAll('.details__wrapper').forEach((el) => {
    if (isDesktop) {
      el.open = true;
    } else {
      el.open = false; 
    }
  });
}




