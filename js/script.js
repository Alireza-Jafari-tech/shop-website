var swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: 4, // Show 1 product at a time
  spaceBetween: 10, // Space between slides
  loop: true, // Infinite looping
  navigation: {
    // Next/Prev buttons
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    // Dots below the slider
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1200: { slidesPerView: 4 }, // Large screens
    992: { slidesPerView: 3 },  // Tablets
    768: { slidesPerView: 2 },  // Small tablets
    576: { slidesPerView: 1 },  // Mobile phones
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 5, // Show 1 product at a time
  spaceBetween: 10, // Space between slides
  loop: true, // Infinite looping
  navigation: {
    // Next/Prev buttons
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  pagination: {
    // Dots below the slider
    el: ".swiper-pagination2",
    clickable: true,
  },
  breakpoints: {
    1200: { slidesPerView: 5 }, // Large screens
    1010: { slidesPerView: 4 },  // Tablets
    960 : { slidesPerView: 3 },  // Small tablets
    900: { slidesPerView: 2 },
    635: { slidesPerView: 1 },  // Mobile phones
  },
});

document.getElementById('menu-toggle').addEventListener('click', function() {
  document.getElementById('website-menu').classList.toggle('show');
});