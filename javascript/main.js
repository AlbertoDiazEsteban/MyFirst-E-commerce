const hamburgerIcon = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");
const navBg = document.querySelector(".show-nav");

hamburgerIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navBg.classList.toggle("active");
});


// juego crispies
const crispies = document.querySelectorAll('.crispy');

crispies.forEach(crispy => {
  crispy.addEventListener('click', () => {
    crispy.remove();
  });
});

window.addEventListener('scroll', () => {
  crispies.forEach((container) => {
    const top = container.getBoundingClientRect().top;
    container.style.transform = `translateY(${top * 0.5}px)`;
  });
});







