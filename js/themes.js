/* Apply Themes (light, dark... N themes)*/

function themes() {
  const iconDark  = document.querySelector('.icon-dark');
  const iconLight = document.querySelector('.icon-light');


  iconDark.addEventListener('click', () => {
    document.documentElement.setAttribute('class', 'dark');
    console.log('Tema: dark');
  });

  iconLight.addEventListener('click', () => {
    document.documentElement.setAttribute('class', 'light');
    console.log('Tema: light');
  });
}