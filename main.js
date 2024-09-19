var swiper = new Swiper(".home", {
  slidesPerView: 1, // Show only one slide at a time
  spaceBetween: 0, // No space between slides
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});