//Mousemove
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

// Music
const music = document.querySelector("#music-note");
const mySong = document.querySelector("#mySong");

music.addEventListener("click", () => {
  if (mySong.paused) {
    mySong.play();
    music.style.border = "3px solid #f4c095";
    music.style.borderRadius = "50px";
  } else {
    mySong.pause();
    music.style.border = "none";
  }
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
  });
};

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

  if (scrollTop > (scrollTop + topToTop).toFixed() - clientHeight * 0.5) {
    slideJs.classList.add("active");
  }
});
