const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
let autoSlideInterval;

// Function to display the correct slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`; // Move slides based on index
    });

}

// Initialize carousel on page load
showSlide(currentIndex);

// Button functionality for previous slide
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
    resetAutoSlide();
});

// Button functionality for next slide
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
    resetAutoSlide();
});


// Auto-sliding functionality
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    }, 5000); // Auto-slide interval set to 5 seconds
}

// Reset the auto-slide timer when manually interacted with carousel
function resetAutoSlide() {
    clearInterval(autoSlideInterval); // Stop the current auto-slide
    startAutoSlide(); // Restart the auto-slide
}

// Start the auto-slide when page loads
startAutoSlide();
// Get all the navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Add event listeners to each link
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove 'active' class from all links
        navLinks.forEach(link => link.classList.remove('active'));

        // Add 'active' class to the clicked link
        this.classList.add('active');
    });
});
