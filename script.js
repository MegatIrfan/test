let currentSlide1 = 0;
let currentSlide2 = 0;

function moveSlide(step, sliderId) {
    const slides = document.querySelector(`#${sliderId} .slides`);
    const totalSlides = slides.children.length;
    
    if (sliderId === 'slider1') {
        currentSlide1 = (currentSlide1 + step + totalSlides) % totalSlides;
        slides.style.transform = `translateX(-${currentSlide1 * 100}%)`;
    } else if (sliderId === 'slider2') {
        currentSlide2 = (currentSlide2 + step + totalSlides) % totalSlides;
        slides.style.transform = `translateX(-${currentSlide2 * 100}%)`;
    }
}

// Auto slide function for both sliders
function autoSlide() {
    moveSlide(1, 'slider1');
    moveSlide(1, 'slider2');
}


