export default function () {
  const tabs = document.querySelectorAll(".js-tab");

  tabs.forEach((tab) => {
    const tab_buttons = document.querySelectorAll(".js-tab__button");
    const tab_contents = document.querySelectorAll(".js-tab__content");

    function tab_toggle() {
      tab_buttons.forEach((tab_button) => {
        tab_button.classList.remove("is-active");
      });

      tab_contents.forEach((tab_content) => {
        tab_content.classList.remove("is-show");
      });

      //クリックした要素の順番を取得
      const arrayButton = Array.prototype.slice.call(tab_buttons),
        index = arrayButton.indexOf(this);

      //該当するコンテンツを表示
      tab_contents[index].classList.add("is-show");
      tab_buttons[index].classList.add("is-active");
    }

    tab_buttons.forEach((tab_button) => {
      tab_button.addEventListener("click", tab_toggle);
    });
  });
}
