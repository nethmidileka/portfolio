// Add animations on scroll
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__fadeInUp');
      observer.unobserve(entry.target); // Stop observing after animation
    }
  });
}, {
  threshold: 0.1, // Trigger when 10% of the section is visible
});

sections.forEach((section) => {
  observer.observe(section);
});