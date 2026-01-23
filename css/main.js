window.onload = function() {
    const btn = document.getElementById('menuBtn');
    const menu = document.getElementById('navMenu');
    const close = document.getElementById('closeBtn');

    if (btn && menu) {
        btn.onclick = function() {
            menu.classList.add('active');
        };
    }

    if (close) {
        close.onclick = function() {
            menu.classList.remove('active');
        };
    }
    
    // Check if script is actually running
    console.log("Ziyakha Script Active");
};
