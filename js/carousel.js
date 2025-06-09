/* Carousel */

// Get carousel elements
const track = document.querySelector("#carousel .carousel__track");
const dots = document.querySelectorAll("#carouselPaginator .carousel-paginator__dot");
const slides = document.querySelectorAll("#carousel .carousel__item");

let currentIndex = 0; // Keeps track of the current slide index

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    currentIndex = parseInt(dot.dataset.index);
    updateCarousel();
  });
});


window.addEventListener("resize", updateCarousel);


function updateCarousel() {
  const slideWidth = slides[0].offsetWidth; // Get the current width of a single slide
  const offset = -currentIndex * slideWidth; // Calculate horizontal offset
  track.style.transform = `translateX(${offset}px)`; // Apply slide transition

  // Update active dot state
  dots.forEach(d => d.classList.remove("isActive"));
  if (dots[currentIndex]) {
    dots[currentIndex].classList.add("isActive");
  }
}
