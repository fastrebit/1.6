import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

let newSwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  spaceBetween: 16,
  slidesPerView: 'auto',
  initialSlide: 0,
  updateOnWindowResize: true,
  breakpoints: {
    768: {
      updateOnWindowResize: true,
      initialSlide: 0,
      slidesPerView: 'auto',
      enabled: false,
      spaceBetween: 0,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

let content__list = document.querySelector(".content__list");
let showButtons = document.querySelector('.show-button');

showButtons.addEventListener('click', () => {

  content__list.classList.toggle('open');

  if (showButtons.textContent === "Показать все") {
    showButtons.textContent = "Скрыть";
  } else {
    showButtons.textContent = "Показать все";
  }

  showButtons.classList.toggle('rotate');
})
