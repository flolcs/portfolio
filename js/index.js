// Music
const music = document.querySelector("#music-note");
const mySong = document.querySelector("#mySong");

music.addEventListener("click", () => {
  if (mySong.paused) {
    mySong.play();
    music.classList.add("musicActive");
  } else {
    mySong.pause();
    music.classList.remove("musicActive");
  }
});

// Typing
const typed = new Typed("h2", {
  strings: ["Développeur Web Front-End"],
  typeSpeed: 75,
});

//Navbar
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("header nav ul li");
let current = "";

//Navbar
window.onscroll = () => {
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });
  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.className === current) {
      li.classList.add("active");
    }
    if (document.documentElement.clientWidth < 768) {
      btnClose.style.display = "none";
      sousMenu.style.display = "none";
      btnMenu.style.display = "block";
    }
  });
};

// Sous Menu
const sousMenu = document.querySelector("#sous-menu");
const btnMenu = document.querySelector(".ri-menu-line");
const btnClose = document.querySelector(".ri-close-line");
const liSousMenu = document.querySelectorAll(".liSousMenu");

btnMenu.addEventListener("click", () => {
  btnMenu.style.display = "none";
  btnClose.style.display = "block";
  sousMenu.style.display = "flex";
});

btnClose.addEventListener("click", () => {
  btnClose.style.display = "none";
  sousMenu.style.display = "none";
  btnMenu.style.display = "block";
});

// HTML
const slideHtml = document.querySelector("#sous-container1");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;
  const topToTop = slideHtml.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topToTop).toFixed() - clientHeight * 0.5) {
    slideHtml.classList.add("active");
  }
});

// CSS
const slideCss = document.querySelector("#sous-container2");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;
  const topToTop = slideCss.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topToTop).toFixed() - clientHeight * 0.5) {
    slideCss.classList.add("active");
  }
});

// JS
const slideJs = document.querySelector("#sous-container3");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;
  const topToTop = slideJs.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topToTop).toFixed() - clientHeight * 0.6) {
    slideJs.classList.add("active");
  }
});

// ScrollReveal
const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 1000,
  delay: 200,
  //reset: true
});

sr.reveal("#downloadcv", { delay: 500, origin: "bottom" });
sr.reveal(".aboutme-description", { origin: "left" });
sr.reveal(".skills-outils", { origin: "bottom" });
sr.reveal("#contact-description", { origin: "top" });

//Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3.3,
  grid: {
    rows: 2,
  },
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3.3,
      spaceBetween: 20,
    },
    450: {
      slidesPerView: 2.3,
      spaceBetween: 20,
    },
    1: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
  },
});
