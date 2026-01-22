function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Close the menu if a user clicks outside of it
window.addEventListener('click', function(e) {
    const navLinks = document.getElementById('navLinks');
    const menuIcon = document.querySelector('.menu-icon');
    
    if (navLinks.classList.contains('active') && 
        !navLinks.contains(e.target) && 
        !menuIcon.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// Ensure every time a "page" is clicked, we start at the top
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        window.scrollTo(0, 0);
    });
});
