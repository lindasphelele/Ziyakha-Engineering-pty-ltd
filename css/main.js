// main.js - ZIYAKHA ENGINEERING Website Logic

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Mobile Navbar Toggle ---
    const menuBtn = document.querySelector('#menu-bars'); // Ensure your HTML has <i id="menu-bars" class="fas fa-bars"></i>
    const navbar = document.querySelector('.navbar');

    if (menuBtn && navbar) {
        menuBtn.onclick = () => {
            menuBtn.classList.toggle('fa-times');
            navbar.classList.toggle('active');
        };

        // Close menu when a link is clicked
        window.onscroll = () => {
            menuBtn.classList.remove('fa-times');
            navbar.classList.remove('active');
        };
    }

    // --- 2. Home Page Image Slider Logic ---
    // This supports the "3x pictures slides" requirement [cite: 2]
    const slides = document.querySelectorAll('.home-slider .slide');
    let currentSlide = 0;

    function nextSlide() {
        if (slides.length > 0) {
            slides[currentSlide].style.opacity = '0';
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].style.opacity = '1';
        }
    }

    // Initialize slider if using JS-based transitions instead of pure CSS
    if (slides.length > 0) {
        slides[0].style.opacity = '1';
        setInterval(nextSlide, 6000); // Change image every 6 seconds
    }

    // --- 3. Accordion Logic for FAQ/Services ---
    // Useful for the detailed "Construction Materials Consultancy" lists [cite: 18-38]
    const accordions = document.querySelectorAll('.accordion-container .accordion');

    accordions.forEach(acco => {
        acco.onclick = () => {
            accordions.forEach(subAcco => subAcco.classList.remove('active'));
            acco.classList.add('active');
        };
    });

    // --- 4. Smooth Scrolling for Menu Links ---
    // Links to About Us, Services, and Contact Details [cite: 4, 9, 61]
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 5. Contact Form Submission ---
    // Handles the "CONTACT DETAILS" section 
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for contacting Ziyakha Engineering. We will get back to you shortly!');
            contactForm.reset();
        });
    }
});
