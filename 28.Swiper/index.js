const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  //   autoplay: {
  //     delay: 500,
  //   },
  //   effect: "cards",
  //   cardsEffect: {
  //     // ...
  //   },
  //   effect: "coverflow",
  //   coverflowEffect: {
  //     rotate: 30,
  //     slideShadows: false,
  //   },

  //   effect: "creative",
  //   creativeEffect: {
  //     prev: {
  //       // will set `translateZ(-400px)` on previous slides
  //       translate: [0, 0, -400],
  //     },
  //     next: {
  //       // will set `translateX(100%)` on next slides
  //       translate: ["100%", 0, 0],
  //     },
  //   },

  effect: "cube",
  cubeEffect: {
    slideShadows: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
