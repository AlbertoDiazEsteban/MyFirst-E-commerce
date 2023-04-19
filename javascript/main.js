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


