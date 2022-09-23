const botaoAbrirMenu = document.querySelector(".header__menu-icon");
const botaoFecharMenu = document.querySelector(".header__close-menu-icon");
const nav = document.querySelector(".header__nav-screen");
const ul = document.querySelectorAll(".header__container-nav-bar");

botaoAbrirMenu.addEventListener("click", () => {
  botaoAbrirMenu.classList.add("invisible");
  nav.classList.remove("invisible");
});

botaoFecharMenu.addEventListener("click", () => {
  nav.classList.add("invisible");
  botaoAbrirMenu.classList.remove("invisible");
});

ul.forEach((li) => {
  li.addEventListener("click", () => {
    nav.classList.add("invisible");
    botaoAbrirMenu.classList.remove("invisible");
  });
});
