var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 3.5,
  spaceBetween: 25,
  pagination: {
    el: ".swp1",
    clickable: true,
  },
});


var swiper1 = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 50,
  slidesPerGroup: 1,
  loop: false,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// var swiper1 = new Swiper(".mySwiper1", {
//   cssMode: true,
//   spaceBetween: 25,
//   slidesPerView:2,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   mousewheel: true,
//   keyboard: true,
// });