document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');
    const navMenu = document.getElementById('navMenu');

    // Check if elements exist to avoid console errors
    if (menuBtn && navMenu && closeBtn) {
        
        // OPEN MENU
        menuBtn.addEventListener('click', () => {
            navMenu.classList.add('active');
        });

        // CLOSE MENU
        closeBtn.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });

        // CLOSE WHEN CLICKING A LINK
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
});
