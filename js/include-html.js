/* Include HTML  */

function includeFragment(url, selector, ...callbacks) {
  const target = document.querySelector(selector);

  if (!target) {
    console.warn(`Selector "${selector}" not found`);
    return;
  }

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error(`Error loading ${url}`);
      return response.text();
    })
    .then(html => {
      target.innerHTML = html;

      callbacks.forEach(cb => {
        if (typeof cb === "function") cb();
      });
    })
    .catch(error => {
      console.error(error);
      target.innerHTML = "Failed";
    });
}
