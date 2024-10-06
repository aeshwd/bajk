document.addEventListener("DOMContentLoaded", () => {
    const memberBoxes = document.querySelectorAll('.member-box');

    memberBoxes.forEach((box, index) => {
        // Delay the animation based on the index
        setTimeout(() => {
            box.style.opacity = '1';  // Fade in
            box.style.transform = 'translateY(0)';  // Move to position
        }, index * 300);  // 300ms delay for each subsequent box
    });
});


/* Carousel */

let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-image');
    const totalSlides = slides.length;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}
