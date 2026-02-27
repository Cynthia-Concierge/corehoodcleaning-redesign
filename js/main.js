// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Before/After Carousel
let currentSlide = 0;
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');

function updateCarousel() {
    if (!track || !slides.length) return;

    const slideWidth = slides[0].offsetWidth;
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function moveCarousel(direction) {
    const totalSlides = slides.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

// Auto-advance carousel every 5 seconds
let autoAdvance = setInterval(() => moveCarousel(1), 5000);

// Pause auto-advance on hover
if (track) {
    const container = track.closest('.carousel-container');
    container.addEventListener('mouseenter', () => clearInterval(autoAdvance));
    container.addEventListener('mouseleave', () => {
        autoAdvance = setInterval(() => moveCarousel(1), 5000);
    });
}

// Handle window resize
window.addEventListener('resize', updateCarousel);

// Initialize carousel
updateCarousel();

// Reviews Carousel
let currentReviewPage = 0;
const reviewsTrack = document.querySelector('.reviews-track');
const reviewCards = document.querySelectorAll('.review-card');
const reviewDots = document.querySelectorAll('.review-dot');
const cardsPerPage = 3;
const totalReviewPages = Math.ceil(reviewCards.length / cardsPerPage);

function updateReviews() {
    if (!reviewsTrack || !reviewCards.length) return;

    const cardWidth = reviewCards[0].offsetWidth;
    const gap = 32; // 2rem gap
    const offset = currentReviewPage * (cardWidth * cardsPerPage + gap * cardsPerPage);
    reviewsTrack.style.transform = `translateX(-${offset}px)`;

    // Update dots
    reviewDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentReviewPage);
    });
}

function moveReviews(direction) {
    currentReviewPage = (currentReviewPage + direction + totalReviewPages) % totalReviewPages;
    updateReviews();
}

function goToReview(page) {
    currentReviewPage = page;
    updateReviews();
}

// Auto-scroll reviews every 6 seconds
let reviewAutoScroll = setInterval(() => moveReviews(1), 6000);

// Pause auto-scroll on hover
if (reviewsTrack) {
    const reviewContainer = reviewsTrack.closest('.reviews-carousel-container');
    reviewContainer.addEventListener('mouseenter', () => clearInterval(reviewAutoScroll));
    reviewContainer.addEventListener('mouseleave', () => {
        reviewAutoScroll = setInterval(() => moveReviews(1), 6000);
    });
}

// Handle window resize for reviews
window.addEventListener('resize', updateReviews);

// Initialize reviews
updateReviews();