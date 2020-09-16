const sharedButton = document.querySelector(".post--profile__shareButton");
const popover = document.querySelector(".post--profile__popover");

sharedButton.addEventListener("click", function () {
  popover.classList.toggle("is-active");
});
