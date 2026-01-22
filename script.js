function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Ensure buttons and links are hooked up
document.getElementById('menuBtn').addEventListener('click', toggleMenu);
document.getElementById('closeBtn').addEventListener('click', toggleMenu);

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navMenu').classList.remove('active');
    });
});
