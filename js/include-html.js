function includeFragment(fileName, selector) {
  const target = document.querySelector(selector);

  if (!target) {
    console.warn(`Selector "${selector}" not found`);
    return;
  }

  fetch(fileName)
    .then(response => {
      if (!response.ok) throw new Error(`Error loading ${fileName}`);
      return response.text();
    })
    .then(html => {
      target.innerHTML = html;
    })
    .catch(error => {
      console.error(error);
      target.innerHTML = "<!-- include failed -->";
    });
}