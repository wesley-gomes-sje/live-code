/* abrir o menu no mobile */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* esconder menu quando clicar nos links */
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* mudando com scroll */
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

/* muda o fundo do nosso site */
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".footer__button");
  const dataSections = document.querySelectorAll(".footer__data");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const target = this.getAttribute("data-target");
      const targetSection = document.querySelector(target);

      buttons.forEach((btn) => btn.classList.remove("active"));
      dataSections.forEach((section) => (section.style.display = "none"));

      this.classList.add("active");
      targetSection.style.display = "grid";
    });
  });
});
