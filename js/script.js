var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 3.5,
  spaceBetween: 25,
  pagination: {
    el: ".swp1",
    clickable: true,
  },
});



var swiper1 = new Swiper(".mySwiper1", {
  cssMode: true,
  spaceBetween: 25,
  slidesPerView:2,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});