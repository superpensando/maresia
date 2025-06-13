/* Inject Icons SVG */

function injectIcons(basePath = "../assets/icons", prefix = "i-") {
  const icons = document.querySelectorAll("[data-icon]");

  icons.forEach(el => {
    const name = el.dataset.icon;
    const url = `${basePath}/${prefix}${name}.svg`;

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`Icon "${name}" not found at ${url}`);
        return res.text();
      })
      .then(svg => {
        el.innerHTML = svg;
        el.classList.add("icon-loaded");
        el.setAttribute('aria-hidden', 'true');
      })
      .catch(err => {
        console.error(err);
        el.innerHTML = "<!-- icon not found -->";
      });
  });
}

document.addEventListener("DOMContentLoaded", () => injectIcons());

