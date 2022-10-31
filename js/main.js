const slideshowContent = document.querySelectorAll('#highlights .slideshow')

const nextSlideDelay = 3000;
const currentSlide = 0;

slideshowContent[currentSlide].style.display = 'block';

setInterval(nextSlide, nextContentDelay);

function nextSlide() {
    slideshowContent[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % slideshowContent.length;
    slideshowContent[currentSlide].style.display = 'block';
}
