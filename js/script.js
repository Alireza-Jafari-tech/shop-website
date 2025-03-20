
  var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 4,   // Show 1 product at a time
    spaceBetween: 10,   // Space between slides
    loop: true,         // Infinite looping
    navigation: {       // Next/Prev buttons
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {       // Dots below the slider
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  
  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 5,   // Show 1 product at a time
    spaceBetween: 10,   // Space between slides
    loop: true,         // Infinite looping
    navigation: {       // Next/Prev buttons
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
    pagination: {       // Dots below the slider
      el: ".swiper-pagination2",
      clickable: true,
    },
  });