export default function () {
  const footerButton = document.querySelector(".js-footer__button");

  if (footerButton) {
    document.addEventListener("scroll", () => {
      const footer = document.querySelector(".js-footer");

      const footerTop = footer.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (footerTop < viewportHeight) {
        footerButton.classList.add("is-fadeIn");
      } else {
        footerButton.classList.remove("is-fadeIn");
      }
    });
  }
}
