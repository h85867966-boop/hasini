// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all month sections and closing section
document.addEventListener('DOMContentLoaded', () => {
    const monthSections = document.querySelectorAll('.month-section');
    const closingSection = document.querySelector('.closing');
    
    monthSections.forEach(section => {
        observer.observe(section);
    });
    
    if (closingSection) {
        observer.observe(closingSection);
    }
});

