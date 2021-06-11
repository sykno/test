//メインスライド
const thumbs = new Swiper(".gallery-thumbs", {
  slidesPerView: "auto",
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  slideToClickedSlide: true,
  navigation: {
    nextEl: ".swiper_button_next",
    prevEl: ".swiper_button_prev",
  },
});

//4系～
slider.controller.control = thumbs;
thumbs.controller.control = slider;
