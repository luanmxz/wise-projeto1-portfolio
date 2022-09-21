var botaoAbrirMenu = document.querySelector(".menu-icon");
var botaoFecharMenu = document.querySelector(".close-menu-icon");
var nav = document.querySelector(".nav-menu-screen");

botaoAbrirMenu.addEventListener("click", () => {
  botaoAbrirMenu.classList.add("invisible");
  nav.classList.remove("invisible");
});

botaoFecharMenu.addEventListener("click", () => {
  nav.classList.add("invisible");
  botaoAbrirMenu.classList.remove("invisible");
});
