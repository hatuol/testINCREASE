const burger = document.querySelector(".burger");
const headerMobile = document.querySelector(".header-mobile__container");

document.addEventListener("DOMContentLoaded", () => {
  burger.addEventListener("click", () => {
    burger.classList.toggle("opened");
    headerMobile.classList.toggle("header-mobile__container--opened");
  });
});
