document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        const mainSection = document.getElementById('mainSection');
        const navbar = document.getElementById('navigation-bar');
        // Get the section's position relative to the viewport
        const rect = mainSection.getBoundingClientRect();

        // Calculate the point at 50% of the mainSection's height
        const halfwayPoint = rect.height / 2;

        // Only toggle the class if the off-canvas is not open
        if (rect.top <= -halfwayPoint) {
            navbar.classList.add('blur-nav'); // Add the blur-nav class
        } else {
            navbar.classList.remove('blur-nav'); // Remove the class if scrolling back above the halfway point
        }
    });
});
