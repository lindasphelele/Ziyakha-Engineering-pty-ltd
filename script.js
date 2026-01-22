const slides = document.querySelectorAll(".slide");
let current = 0;

function changeSlide() {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[current].classList.add("active");
  current = (current + 1) % slides.length;
}

setInterval(changeSlide, 4000);
