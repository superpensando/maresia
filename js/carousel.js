/* Carousel */

function initCarousel(carouselId) {
  const carousel = document.querySelector(carouselId);
  if (!carousel) return;

  const track = carousel.querySelector('.carousel__track');
  const items = carousel.querySelectorAll('.carousel__item');
  const dots = carousel.querySelectorAll('.carousel-paginator__dot');
  const paginator = carousel.querySelector('.carousel-paginator');

  if (paginator && items.length <= 1) {
    paginator.style.display = 'none';
  }

  let currentIndex = 0;
  

  function updateCarousel(index) {
    const offset = -index * 100;
    track.style.transform = `translateX(${offset}%)`;

    dots.forEach(dot => dot.classList.remove('isActive'));
    if (dots[index]) dots[index].classList.add('isActive');

    currentIndex = index;
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => updateCarousel(index));
  });

  window.addEventListener("resize", updateCarousel(currentIndex));

  updateCarousel(currentIndex);
}


 document.addEventListener("DOMContentLoaded", () => {
    initCarousel("#carouselHome");
    initCarousel("#carouselPress");
  });