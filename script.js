function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Optional: Close menu if user clicks outside of it
window.onclick = function(event) {
    const navLinks = document.getElementById('navLinks');
    if (event.target.className === 'section') {
        navLinks.classList.remove('active');
    }
}
