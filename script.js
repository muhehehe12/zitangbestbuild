// 1. Loading Screen
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 500); // Scurt delay pentru efect premium
});

// 2. Hamburger Menu Logic
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Închide meniul când dai click pe un link (pentru mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// 3. Scroll Animations using Intersection Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Animația rulează o singură dată
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(section => {
    observer.observe(section);
});

// 4. Multi-Language Support
const translations = {
    en: {
        nav_home: "Home",
        nav_services: "Services",
        nav_contact: "Contact",
        hero_title: "Premium Tradesman Services",
        hero_desc: "Delivering exceptional quality and unmatched precision for your most important projects. We build to last.",
        hero_btn: "Get a Free Quote",
        feature_title: "Master Craftsmanship",
        feature_desc: "Every detail matters. Our team ensures that your vision is executed perfectly, using only top-tier materials and modern techniques."
    },
    fr: {
        nav_home: "Accueil",
        nav_services: "Services",
        nav_contact: "Contact",
        hero_title: "Services Artisans Premium",
        hero_desc: "Offrant une qualité exceptionnelle et une précision inégalée pour vos projets les plus importants. Nous construisons pour durer.",
        hero_btn: "Obtenir un Devis Gratuit",
        feature_title: "Savoir-Faire d'Exception",
        feature_desc: "Chaque détail compte. Notre équipe s'assure que votre vision est parfaitement exécutée, en utilisant uniquement des matériaux haut de gamme."
    },
    de: {
        nav_home: "Startseite",
        nav_services: "Dienstleistungen",
        nav_contact: "Kontakt",
        hero_title: "Premium Handwerksdienste",
        hero_desc: "Wir liefern außergewöhnliche Qualität und unübertroffene Präzision für Ihre wichtigsten Projekte. Wir bauen für die Ewigkeit.",
        hero_btn: "Kostenloses Angebot",
        feature_title: "Meisterhafte Handwerkskunst",
        feature_desc: "Jedes Detail zählt. Unser Team sorgt dafür, dass Ihre Vision perfekt umgesetzt wird, nur mit erstklassigen Materialien."
    }
};

const langButtons = document.querySelectorAll('.lang-btn');
const translatableElements = document.querySelectorAll('[data-key]');

langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active class
        document.querySelector('.lang-btn.active').classList.remove('active');
        btn.classList.add('active');

        // Get language selected
        const lang = btn.getAttribute('data-lang');

        // Update text content
        translatableElements.forEach(el => {
            const key = el.getAttribute('data-key');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    });
});
