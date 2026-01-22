const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const navMenu = document.getElementById('navMenu');

// Open Menu
menuBtn.addEventListener('click', () => {
    navMenu.classList.add('active');
});

// Close Menu
closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('active');
});

// Close menu when any link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});
