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
  } else {
    mySong.pause();
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
