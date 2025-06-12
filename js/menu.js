
/* Menu Open / Close  */

function menu() {

      const menu= document.querySelector('.menu.only-mobile');

      const btnOpen = document.querySelector('.header__button-menu');
      const btnClose = document.querySelector('.header__button-close');

      btnOpen.addEventListener('click', () => {
        menu.classList.add('menu--open');
      });

      btnClose.addEventListener('click', () => {
        menu.classList.remove('menu--open');
      });
}