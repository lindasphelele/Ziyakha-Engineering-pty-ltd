// Wait for the page to load
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');
    const navMenu = document.getElementById('navMenu');

    // Check if elements exist to avoid errors
    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => {
            navMenu.classList.add('active');
            console.log("Menu Opened");
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            navMenu.classList.remove('active');
            console.log("Menu Closed");
        });
    }

    // Close menu when clicking links
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
});
