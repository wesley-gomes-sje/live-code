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

/* Animacoes do nosso site https://gsap.com/ */
/* imagem da mulher na home */
gsap.from(".home__cover", 1.5, { opacity: 0, y: 10, delay: 0.1 });

/* dados da home */
gsap.from(".home__data", 1.8, { opacity: 0, x: -100, delay: 0.2 });

/* grid de vantagens */
gsap.from(".advantages__item", 1.5, { opacity: 0, y: 150, delay: 0.2 });
/* cartoes */
gsap.from(".advantages__blue", 1.5, { opacity: 0, y: 150, delay: 0.2 });
gsap.from(".advantages__pink", 1.5, { opacity: 0, y: 150, delay: 0.1 });
gsap.from(".advantages__gray", 1.5, { opacity: 0, y: 150, delay: 0.4 });
gsap.from(".advantages__gold", 1.5, { opacity: 0, y: 150, delay: 0.6 });

/* animar o footer */
gsap.from(".footer__header", 1.5, { opacity: 0, y: 150, delay: 0.2 });
gsap.from(".footer__data", 1.5, { opacity: 0, y: 150, delay: 0.8 });
