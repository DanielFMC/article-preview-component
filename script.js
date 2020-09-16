const sharedButton = document.querySelector(".post--profile__shareButton");
const popover = document.querySelector(".post--profile__popover");
const info = document.querySelector(".post--profile__info");
const mobile = window.matchMedia("screen and (max-width: 768px)");

function showPopover() {
  popover.classList.toggle("is-active");
}

function hideInfo() {
  info.classList.toggle("is-not-visible");
  showPopover();
}

mobile.addListener(validation);

function validation(event) {
  if (event.matches) {
    sharedButton.removeEventListener("click", showPopover);
    sharedButton.addEventListener("click", hideInfo);
  } else {
    sharedButton.addEventListener("click", showPopover);
    sharedButton.removeEventListener("click", hideInfo);
  }
}

validation(mobile);
