// Function to open/close the navigation sidebar
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    
    // Toggle the 'active' class on the navigation links
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

// Optional: Close the menu if a user clicks outside of it
window.addEventListener('click', function(e) {
    const navLinks = document.getElementById('navLinks');
    const menuIcon = document.querySelector('.menu-icon');
    
    // If the menu is open and the click is NOT on the menu or the icon
    if (navLinks.classList.contains('active') && 
        !navLinks.contains(e.target) && 
        !menuIcon.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});
