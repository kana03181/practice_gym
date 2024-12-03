export default function () {
  document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    /*------------------------------
      about テキストをfadeInで表示
    ---------------------------------*/

    const fadeIn_items = gsap.utils.toArray(".js-fadeIn");

    fadeIn_items.forEach((fadeIn_item) => {
      gsap.fromTo(
        fadeIn_item,
        {
          y: 30,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          scrollTrigger: {
            trigger: fadeIn_item,
            start: "top, 90%",
            // markers: true,
          },
        },
      );
    });

    /*------------------------------
      swiper スクロール表示部分
    -------------------------------*/
    const windowSize = gsap.matchMedia();

    windowSize.add("(max-width:1023px)", () => {
      // gsap.to(".js-swiper__scroll__img", {
      //   x: 10,
      //   duration: 0.3,
      //   ease: "power2.out",
      //   scrollTrigger: {
      //     trigger: ".js-swiper__scroll__img",
      //     start: "top 90%",
      //     markers: true,
      //   },
      // });
      // gsap.from(".js-swiper__scroll__img", {
      //   x: 0,
      //   duration: 0.3,
      //   ease: "power2.out",
      //   scrollTrigger: {
      //     trigger: ".js-swiper__scroll__img",
      //     start: "top 90%",
      //     markers: true,
      //   },
      // });

      gsap.fromTo(
        ".js-swiper__scroll__img",
        {
          x: 0,
          duration: 0.17,
          ease: "power2.out",
          yoyo: true,
          repeat: 1,
        },
        {
          x: 5,
          duration: 0.17,
          ease: "power2.out",
          yoyo: true,
          repeat: 1,

          scrollTrigger: {
            trigger: ".js-swiper__scroll__img",
            start: "top 90%",
            // markers: true,
          },
        },
      );
    });
  });
}
