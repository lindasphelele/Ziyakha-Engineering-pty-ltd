function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Reset page view on link click
window.addEventListener("hashchange", function() {
    window.scrollTo(0, 0);
});
