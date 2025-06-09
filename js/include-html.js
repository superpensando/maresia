function includeFragment(fileName, selector, callback) {
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

      // Ejecutar callback después de inyectar el fragmento
      if (typeof callback === "function") {
        callback();
      }
    })
    .catch(error => {
      console.error(error);
      target.innerHTML = "<!-- fragment include failed -->";
    });
}