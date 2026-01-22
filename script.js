function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Resets scroll position to top when "switching" pages
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        window.scrollTo(0, 0);
    });
});
