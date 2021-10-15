// ABRE E FECHA O MENU QUANDO CLICAR NO ICONE
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

// QUANDO CLICAR NUM ITEM DO MENU, ESCONDER O MENU
const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

// MUDAR O HEADER DA PÁGINA QUANDO DER SCROLL

function changeHeaderWhenScroll() {
  const header = document.querySelector("#header");
  const navHeight = header.offsetHeight;
  if (window.scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
}

// TESTIMONIALS CAROUSEL SLIDER SWIPER
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767:{
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
});

// SCROLLREVEAL: MOSTRAR ELEMENTOS QUANDO DER SCROLL NA PÁGINA
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `,
  { nterval: 100 }
);

// BOTÃO VOLTAR PARA O TOPO

function backToTop() {
  const backToTopButton = document.querySelector(".back-to-top");

  if (window.scrollY >= 560) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}


// WHEN SCROLL
window.addEventListener("scroll", function () {
  changeHeaderWhenScroll();
  backToTop();
});

// MENU ATIVO CONFORME A SEÇÃO VISIVEL NA PÁGINA 
