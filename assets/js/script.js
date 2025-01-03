

// Add "active" class to current page link in navbar
window.addEventListener("load", (event) => {
    let path = window.location.pathname;
    let page = path.split("/").pop();
    
    if (page === "index.html" || page === "") {
        document.querySelector(".navbar-nav .nav-link").classList.add("active")
    }
  });

// Appear on scroll
function checkVisibility() {
    const sections = document.querySelectorAll('.hidden-section');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('is-visible');
        }
    });
}

// Initial check on page load
checkVisibility();

// Check again on scroll
window.addEventListener('scroll', checkVisibility);

// Event slider functionality
const eventTrack = document.querySelector('#events .event-track');
const eventCards = document.querySelectorAll('#events .event-card');
const eventPrevButton = document.querySelector('#events .slider-control.prev');
const eventNextButton = document.querySelector('#events .slider-control.next');

let eventIndex = 0;

function slideEvents() {
    const cardWidth = eventCards[0].offsetWidth + 40; // Adjust for margin
    const maxIndex = eventCards.length - 1;
    eventIndex = Math.max(0, eventIndex); // Ensure index stays within bounds
    
    const newTransformValue = -eventIndex * cardWidth;
    eventTrack.style.transform = `translateX(${newTransformValue}px)`;
    
    // Enable/disable buttons based on position
    eventPrevButton.disabled = eventIndex === 0;
    eventNextButton.disabled = eventIndex === maxIndex;
}

eventPrevButton.addEventListener('click', () => {
    if (eventIndex > 0) {
        eventIndex--;
        slideEvents();
    }
});

eventNextButton.addEventListener('click', () => {
    if (eventIndex < eventCards.length - 1) {
        eventIndex++;
        slideEvents();
    }
});

// Initialize slider
window.addEventListener('load', slideEvents);
window.addEventListener('resize', slideEvents);

// Testimonials slider functionality
const testimonialsTrack = document.querySelector('#testimonials .testimonials-track');
const testimonialCards = document.querySelectorAll('#testimonials .testimonial-card');
const testimonialsPrevButton = document.querySelector('#testimonials .slider-control.prev');
const testimonialsNextButton = document.querySelector('#testimonials .slider-control.next');

let testimonialsIndex = 0;

function slideTestimonials() {
    const cardWidth = testimonialCards[0].offsetWidth + 40; // Adjust for margin
    const maxIndex = testimonialCards.length - 1;
    testimonialsIndex = Math.max(0, testimonialsIndex); // Ensure index stays within bounds

    const newTransformValue = -testimonialsIndex * cardWidth;
    testimonialsTrack.style.transform = `translateX(${newTransformValue}px)`;

    // Enable/disable buttons based on position
    testimonialsPrevButton.disabled = testimonialsIndex === 0;
    testimonialsNextButton.disabled = testimonialsIndex === maxIndex;
}

if (testimonialsPrevButton && testimonialsNextButton) {
    testimonialsPrevButton.addEventListener('click', () => {/*...*/});
    testimonialsNextButton.addEventListener('click', () => {/*...*/});
}

// Initialize slider
window.addEventListener('load', slideTestimonials);
window.addEventListener('resize', slideTestimonials);