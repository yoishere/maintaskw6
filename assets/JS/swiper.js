// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Navigation, Pagination } from "../../node_modules/swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// init Swiper:
const swiper1 = new Swiper(".chosenSwiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  modules: [Navigation, Pagination],

  // If we need pagination(數字分頁)
  pagination: {
    el: ".swiper-pagination-chosen",
    type: "fraction",
  },

  // Navigation arrows(左右箭頭)
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  // Default parameters
  slidesPerView: 1,
  spaceBetween: 0,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 640px
    992: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});
