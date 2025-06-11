/* Carousel Thumbnails */

const thumbs = document.querySelectorAll('.carousel-thumb__img');
const mainImage = document.getElementById('mainImage');

thumbs.forEach(thumb => {
  thumb.addEventListener('click', () => {
    const fullSrc = thumb.getAttribute('data-full');
    mainImage.setAttribute('src', fullSrc);

    thumbs.forEach(t => t.classList.remove('isActive'));
    thumb.classList.add('isActive');
  });
});
