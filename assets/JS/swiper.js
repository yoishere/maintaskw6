// 然後繼續初始化 Swiper
import Swiper from "swiper";

function initSwiper() {
  // 銷毀現有的 Swiper 實例（如果存在）
  if (window.currentSwiper) {
    window.currentSwiper.destroy(true, true);
  }

  var swiper;
  if (window.innerWidth >= 992) {
    //電腦版的Swiper
    swiper = new Swiper(".chosenSwiper", {
      slidesPerView: 2,
      // ***(一次呈現幾張),
      slidesPerGroup: 2,
      // ***(一個群組內有幾張投影片),
      spaceBetween: 48,
      navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
      // ***(分頁),
      pagination: {
        el: ".swiper-pagination-chosen",
        type: "fraction",
      },
    });
  } else {
    //手機版的Swiper
    swiper = new Swiper(".chosenSwiper", {
      slidesPerView: 1,
      // ***(一次呈現幾張),
      slidesPerGroup: 1,
      // ***(一個群組內有幾張投影片),
      spaceBetween: 0,
      navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
      // ***(分頁),
      pagination: {
        el: ".swiper-pagination-chosen",
        type: "fraction",
      },
    });
  }

  // 將 swiper 實例保存到全域變數中，以便在下次銷毀
  window.currentSwiper = swiper;
}

// 初始化 Swiper
initSwiper();

// 當視窗大小改變時，重新初始化 Swiper
window.addEventListener("resize", function () {
  initSwiper();
});
