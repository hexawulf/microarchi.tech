document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once visible if you only want it to animate once
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up');
    animatedElements.forEach(el => observer.observe(el));

    // Staggered delay for cards in the grid
    const cards = document.querySelectorAll('.card-grid .slide-up');
    cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.15}s`;
    });

    // Staggered delay for feature tiles
    const tiles = document.querySelectorAll('.feature-tiles .fade-in');
    tiles.forEach((tile, index) => {
        tile.style.transitionDelay = `${index * 0.15}s`;
    });
});