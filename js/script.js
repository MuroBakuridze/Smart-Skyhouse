//// First swiper

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 2,
  spaceBetween: 25,
  pagination: {
    el: ".swp1",
    clickable: true,
  },
  breakpoints: {
    850: {
      slidesPerView: 3.5,
      spaceBetweenSlides: 25,
  }
  }
});

//?? Second swiper

var swiper1 = new Swiper(".mySwiper", {
  slidesPerView: 1.5,
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

//// Hamburger Toggler

const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');


hamburger.addEventListener('click', () =>{
  navigation.classList.toggle("open");
})

function myFunction(x) {
  x.classList.toggle("change");
}