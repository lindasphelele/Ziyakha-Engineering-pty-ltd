# Ziyakha Engineering — Company Website

A professional, single-page web application for **Ziyakha Engineering**, a proudly South African engineering consultancy based in Midrand, Gauteng. The site showcases the company's services, partnerships, affiliations, and provides a contact form for enquiries.

---

## 🌐 Live Preview

> Deploy via GitHub Pages, Netlify, or any static hosting provider.

---

## 📁 Project Structure

```
ziyakha-engineering/
├── index.html        # Main (and only) HTML file — contains all HTML, CSS & JS
└── README.md         # Project documentation
```

> This is a single-file web app. All styles and scripts are embedded directly in `index.html`.

---

## ✨ Features

- **Multi-page navigation** — Smooth client-side routing between Home, About, Services, Partnerships, Affiliations, and Contact pages
- **Hero slideshow** — Auto-advancing image carousel with manual dot navigation
- **Custom animated cursor** — Gold dot + trailing ring cursor effect
- **Scroll reveal animations** — Elements animate into view as you scroll
- **Responsive design** — Mobile-friendly layout across all screen sizes
- **Contact form** — Integrated with [Formspree](https://formspree.io) for email delivery
- **Fixed navigation** — Slide-in menu overlay with smooth transitions
- **Google Fonts** — Uses Barlow Condensed, Barlow, and Share Tech Mono

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Page structure & content |
| CSS3 | Styling, animations, layout (Flexbox/Grid) |
| Vanilla JavaScript | Navigation, slideshow, cursor, scroll reveal |
| Google Fonts | Typography |
| Formspree | Contact form backend |

---

## 🚀 Getting Started

No build tools or dependencies required. Simply open the file in a browser:

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/ziyakha-engineering.git

# Navigate into the folder
cd ziyakha-engineering

# Open in your browser
open index.html
```

---

## ⚙️ Configuration

### Contact Form
The contact form uses [Formspree](https://formspree.io). To activate it:

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and copy your Form ID
3. In `index.html`, replace the placeholder in the form's `action` attribute:

```html
<!-- Find this line and replace YOUR_FORM_ID -->
<form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

---

## 🏢 Pages

| Page | Description |
|---|---|
| **Home** | Hero slideshow, key stats, and call-to-action |
| **About** | Company background, mission, and team overview |
| **Services** | OHS Training, Construction Consultancy, Equipment & Plant Optimization |
| **Partnerships** | Strategic business partners |
| **Affiliations** | Professional body memberships and accreditations |
| **Contact** | Contact details and enquiry form |

---

## 📬 Contact

**Ziyakha Engineering**
- 📍 136 2nd Street, Randjespark, Midrand, Gauteng
- 📞 +27 65 936 4152
- 🕐 Monday – Friday: 08:00 – 17:00

---

## 📄 License

© 2025 Ziyakha Engineering. All rights reserved.
