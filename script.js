function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Ensure "page" starts at the top when switching
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        window.scrollTo(0, 0);
    });
});
