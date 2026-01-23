/* --- Ziyakha Engineering Sidebar Logic --- */

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');
    const navMenu = document.getElementById('navMenu');

    console.log("Script loaded successfully"); // Check your browser console (F12)

    if (menuBtn && navMenu && closeBtn) {
        
        // OPEN MENU
        menuBtn.onclick = function() {
            console.log("Menu button clicked");
            navMenu.classList.add('active');
        };

        // CLOSE MENU
        closeBtn.onclick = function() {
            console.log("Close button clicked");
            navMenu.classList.remove('active');
        };

        // CLOSE ON LINK CLICK
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.onclick = () => {
                navMenu.classList.remove('active');
            };
        });

    } else {
        console.error("One or more IDs (menuBtn, navMenu, closeBtn) were not found in the HTML.");
    }
});
