let currentSlide = 0;
const slides = document.querySelectorAll('#slider-container .slide');
const totalSlides = slides.length;
let slideInterval;

function startSlideShow() {
    slideInterval = setInterval(() => {
        moveSlide((currentSlide + 1) % totalSlides);
    }, 4000);
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

slides.forEach(slide => {
    slide.addEventListener('mouseenter', stopSlideShow);
    slide.addEventListener('mouseleave', startSlideShow);
});

document.getElementById('prev').addEventListener('click', () => {
    moveSlide(currentSlide - 1);
});

document.getElementById('next').addEventListener('click', () => {
    moveSlide(currentSlide + 1);
});

function moveSlide(nextSlide) {
    if (nextSlide >= 0 && nextSlide < totalSlides) {
        slides[currentSlide].style.left = "-800px";
        slides[nextSlide].style.left = "0";
        currentSlide = nextSlide;
    }
}

startSlideShow();
function togglePlay(videoId, overlayId) {
    var video = document.getElementById(videoId);
    var overlay = document.getElementById(overlayId);

    if (video.paused) {
        video.play();
        overlay.style.display = "none";
    } else {
        video.pause();
        overlay.style.display = "block";
    }
}


document.querySelectorAll('.video-container video').forEach(function(video) {
    video.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});

