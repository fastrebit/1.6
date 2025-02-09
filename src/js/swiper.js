import Swiper, { Navigation, Pagination } from "swiper"
Swiper.use([Navigation, Pagination])


// import Swiper styles
let newSwiper = new Swiper('.swiper-container', {
  modules: [Navigation, Pagination],
  loop: true,
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
      loop: false,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

