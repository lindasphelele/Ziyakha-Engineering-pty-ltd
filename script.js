function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Close sidebar if user clicks outside of it
window.addEventListener('click', function(e) {
    const navLinks = document.getElementById('navLinks');
    const menuIcon = document.querySelector('.menu-icon');
    
    if (navLinks.classList.contains('active') && 
        !navLinks.contains(e.target) && 
        !menuIcon.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});
