let expandButtons = document.querySelectorAll(".jsBtn");

let isClicked = false;
expandButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!isClicked) {
      button.parentElement.nextElementSibling.classList.add(
        "question-text-show"
      );
      button.innerHTML = `<i class="fa-solid fa-minus"></i>`;
      isClicked = true;
    } else {
      button.parentElement.nextElementSibling.classList.remove(
        "question-text-show"
      );
      button.innerHTML = `<i class="fa-solid fa-plus"></i>`;
      isClicked = false;
    }
  });
});
