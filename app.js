document.addEventListener('DOMContentLoaded', () => {
    // Lógica do Menu Mobile
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        
        // Animação simples do ícone hambúrguer (opcional)
        menuIcon.classList.toggle('active');
    });

    // Toggle para o dropdown no mobile
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                dropdown.classList.toggle('active');
            }
        });
    });

    // Lógica das Animações de Scroll (Intersection Observer)
    const reveals = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15, // Aciona quando 15% do elemento estiver visível
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Para a animação acontecer apenas uma vez
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });
});