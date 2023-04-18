const hamburgerIcon = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");
const navBg = document.querySelector(".show-nav");

hamburgerIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navBg.classList.toggle("active");
});


