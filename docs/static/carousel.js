function showSlide(carouselId, dotsId, index) {
    const slides = document.querySelectorAll(`#${carouselId} .carousel-slide`);
    const dots = document.querySelectorAll(`#${dotsId} .carousel-dot`);

    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
        dots[i].classList.toggle("active", i === index);
    });

    window[`${carouselId}Index`] = index;
}

function nextSlide(carouselId, dotsId) {
    const slides = document.querySelectorAll(`#${carouselId} .carousel-slide`);
    const currentIndex = window[`${carouselId}Index`] || 0;
    showSlide(carouselId, dotsId, (currentIndex + 1) % slides.length);
}

function prevSlide(carouselId, dotsId) {
    const slides = document.querySelectorAll(`#${carouselId} .carousel-slide`);
    const currentIndex = window[`${carouselId}Index`] || 0;
    showSlide(carouselId, dotsId, (currentIndex - 1 + slides.length) % slides.length);
}

function currentSlide(carouselId, dotsId, index) {
    showSlide(carouselId, dotsId, index);
}

setInterval(() => nextSlide('carousel1', 'dots1'), 10000);
setInterval(() => nextSlide('carousel2', 'dots2'), 10000);