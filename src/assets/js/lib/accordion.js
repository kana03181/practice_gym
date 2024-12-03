export default function () {
  document.addEventListener("DOMContentLoaded", () => {
    setUpAccordion(".js-accordion", ".js-accordion__items", ".js-accordion__box", animTiming1, animTiming1);
    // setUpAccordion(".js-accordion__sm2", ".js-accordion__items__sm2", ".js-accordion__box__sm2", animTiming2, animTiming2);
    // setUpAccordion(".js-accordion__sm3", ".js-accordion__items__sm3", ".js-accordion__box__sm3", animTiming3, animTiming3);
  });

  const setUpAccordion = (accordionSelector, itemSelector, boxSelector, animTimingOpen, animTimingClose) => {
    const accordions = document.querySelectorAll(accordionSelector);
    const RUNNING_VALUE = "running";
    const IS_OPENED_CLASS = "is-opened";

    accordions.forEach((el) => {
      const accordionItems = el.querySelector(itemSelector);
      const accordionBox = el.querySelector(boxSelector);

      accordionItems.addEventListener("click", (event) => {
        event.preventDefault();

        if (el.dataset.animStatus === RUNNING_VALUE) {
          return;
        }

        if (el.open) {
          el.classList.toggle(IS_OPENED_CLASS);

          const closingAnim = accordionBox.animate(closingAnimKeyframes(accordionBox), animTimingClose);
          el.dataset.animStatus = RUNNING_VALUE;

          closingAnim.onfinish = () => {
            el.removeAttribute("open");
            el.dataset.animStatus = "";
          };
        } else {
          el.setAttribute("open", "true");
          el.classList.toggle(IS_OPENED_CLASS);

          const openingAnim = accordionBox.animate(openingAnimKeyframes(accordionBox), animTimingOpen);
          el.dataset.animStatus = RUNNING_VALUE;

          openingAnim.onfinish = () => {
            el.dataset.animStatus = "";
          };
        }
      });
    });
  };

  //アニメーションの時間とイージング
  const animTiming1 = {
    duration: 300,
    easing: "cubic-bezier(.14,.34,.59,.95)",
  };

  // アコーディオンを開くとき
  const openingAnimKeyframes = (accordionBox) => [
    {
      height: 0,
      opacity: 0,
    },
    {
      height: accordionBox.scrollHeight + "px",
      opacity: 1,
    },
  ];

  // アコーディオンを閉じるとき
  const closingAnimKeyframes = (accordionBox) => [
    {
      height: accordionBox.scrollHeight + "px",
      opacity: 1,
    },
    {
      height: 0,
      opacity: 0,
    },
  ];
}
