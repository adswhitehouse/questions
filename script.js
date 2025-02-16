let expandButtons = document.querySelectorAll(".jsBtn");

expandButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.parentElement.nextElementSibling.classList.toggle(
      "question-text-show"
    );
    button.lastElementChild.classList.toggle("hidden");
    button.firstElementChild.classList.toggle("hidden");
  });
});
