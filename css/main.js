window.onload = function() {
    const btn = document.querySelector('.menu-icon'); // matches your HTML
    const menu = document.getElementById('navMenu');  // already correct
    const close = document.getElementById('closeBtn'); // optional if you add a close button

    if (btn && menu) {
        btn.onclick = function() {
            menu.classList.add('active');
        };
    }

    if (close && menu) {
        close.onclick = function() {
            menu.classList.remove('active');
        };
    }

    // Allow clicking outside menu to close it
    document.addEventListener('click', function(e) {
        if (menu.classList.contains('active') && !menu.contains(e.target) && !btn.contains(e.target)) {
            menu.classList.remove('active');
        }
    });

    console.log("Ziyakha Script Active");
};
