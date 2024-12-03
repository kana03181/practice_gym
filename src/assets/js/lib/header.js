export default function () {
  const header = document.querySelector(".js-header");
  const target = document.querySelector(".js-about__copy");

  // console.log(targetOffsetTop);

  window.addEventListener("scroll", () => {
    const targetRect = target.getBoundingClientRect();

    if (targetRect.top <= 0) {
      header.classList.add("is-active");
    } else {
      header.classList.remove("is-active");
    }
  });
}
