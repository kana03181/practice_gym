/* --------- 　ここから編集禁止  ------------- */
console.info("\n %c Orelop Static - https://github.com/hilosiva/orelop-static \n", "color: #66ffa5; background: #001010; padding:8px 0;");
import.meta.glob(["../img/**"]);
/* --------- 　ここまで編集禁止  ------------- */

import Swiper from "swiper/bundle";
// import "swiper/css/bundle";
import tab from "./lib/tab.js";
import toTop from "./lib/toTop.js";
import accordion from "./lib/accordion.js";
import gsap from "./lib/gsap.js";
import header from "./lib/header.js";

new tab();
new toTop();
new accordion();
new gsap();
new header();

/*-------------
  swiper
---------------*/

const swiper_studio = new Swiper(".swiper.-studio", {
  slidesPerView: 1,
  speed: 400,
  spaceBetween: 30,

  breakpoints: {
    1024: {
      spaceBetween: 60,
    },
  },

  pagination: {
    el: ".swiper-pagination.-studio",
    clickable: true,
  },

  navigation: {
    nextEl: ".c-swiper-button-next.-studio",
    prevEl: ".c-swiper-button-prev.-studio",
  },
});

const targetSwiper = document.querySelector(".swiper.-price");
const breakPoint = 1024; // Swiperを破棄するブレークポイント
let priceSwiper = null; // Swiperインスタンスを保持する変数

// Swiperを生成/破棄する関数
function manageSwiper() {
  const windowWidth = window.innerWidth;

  if (targetSwiper) {
    if (windowWidth >= breakPoint) {
      // 1024px以上の場合
      if (priceSwiper) {
        // Swiperインスタンスが存在するなら
        priceSwiper.destroy(true, true); // Swiperを破棄
        priceSwiper = null; // インスタンスをリセット
      }
    } else {
      // 1024px未満の場合
      if (!priceSwiper) {
        // Swiperインスタンスが存在しないなら
        priceSwiper = new Swiper(".swiper.-price", {
          loop: false,
          slidesPerView: 0.968,

          breakpoints: {
            768: {
              slidesPerView: 2.2,
            },
          },

          on: {
            slideChange: function () {
              const scroll_texts = document.querySelector(".js-swiper__scroll");
              if (scroll_texts) {
                scroll_texts.classList.add("is-hidden");
              }
            },
          },
        });
      }
    }
  }
}
window.addEventListener("load", manageSwiper); // ページロード時に実行
window.addEventListener("resize", manageSwiper); // ウィンドウリサイズ時に実行

manageSwiper(); // 初期状態でSwiperを管理
