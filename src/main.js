import './style.css'

console.log('Matt & Frances Wedding Site Loaded');

// Dynamic Nav Color Logic
const nav = document.querySelector('.nav-bar');
const hero = document.querySelector('#hero');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Hero is visible -> Use light theme (white text)
            nav.classList.add('theme-light');
            nav.classList.remove('theme-dark');
        } else {
            // Hero is not visible -> Use dark theme (black text)
            nav.classList.add('theme-dark');
            nav.classList.remove('theme-light');
        }
    });
}, {
    threshold: 0.5
});

if (hero) {
    observer.observe(hero);
}
