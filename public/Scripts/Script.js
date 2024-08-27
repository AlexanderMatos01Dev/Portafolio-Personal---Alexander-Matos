document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    const backgroundOverlay = document.querySelector('.background-overlay');
    const btnMenu = document.querySelector('.btn-menu');
    const navContainer = document.getElementById('nav-container');

    // Resalta el enlace de navegación activo en función de la sección visible
    const highlightNav = () => {
        const scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 50;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

            navLink.classList.toggle('active', scrollY > sectionTop && scrollY <= sectionTop + sectionHeight);
        });
    };

    // Función para desplazamiento suave al hacer clic en un enlace
    const smoothScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);

        window.scrollTo({ top: targetElement.offsetTop, behavior: 'smooth' });
    };

    navLinks.forEach(link => {
        link.addEventListener('click', e => smoothScroll(e, link.getAttribute('href').substring(1)));
    });

    window.addEventListener('scroll', highlightNav);

    // Manejo del botón de menú
    btnMenu.addEventListener('click', () => {
        navContainer.classList.toggle('open');
        backgroundOverlay.classList.toggle('visible');
    });

    // Manejo de clics en la superposición de fondo
    backgroundOverlay.addEventListener('click', () => {
        navContainer.classList.remove('open');
        backgroundOverlay.classList.remove('visible');
    });

});
