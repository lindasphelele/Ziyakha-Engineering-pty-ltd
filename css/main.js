window.onload = function() {
    const btn = document.getElementById('menu-btn');   // hamburger icon
    const menu = document.getElementById('navMenu');   // navigation menu

    // Toggle menu when clicking the hamburger icon
    if (btn && menu) {
        btn.onclick = function() {
            menu.classList.toggle('active');
        };
    }

    // Close menu when clicking outside of it
    document.addEventListener('click', function(e) {
        if (menu.classList.contains('active') && !menu.contains(e.target) && e.target !== btn) {
            menu.classList.remove('active');
        }
    });

    console.log("Ziyakha Script Active");
};
