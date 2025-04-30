document.addEventListener('DOMContentLoaded', () => {
    /*===== MENU SHOW =====*/ 
    const showMenu = (toggleId, navId) => {
        const toggle = document.getElementById(toggleId),
              nav = document.getElementById(navId);

        if (toggle && nav) {
            toggle.addEventListener('click', () => {
                nav.classList.toggle('show');
            });
        }
    };
    showMenu('nav-toggle', 'nav-menu');

    /*==================== REMOVE MENU MOBILE ====================*/
    const navLinks = document.querySelectorAll('.nav__link');

    function linkAction() {
        const navMenu = document.getElementById('nav-menu');
        if (navMenu) {
            navMenu.classList.remove('show');
        }
    }

    navLinks.forEach(n => n.addEventListener('click', linkAction));

    /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
    const sections = document.querySelectorAll('section[id]');

    function scrollActive() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.nav__link[href*='${sectionId}']`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                if (navLink) {
                    navLink.classList.add('active');
                }
            } else {
                if (navLink) {
                    navLink.classList.remove('active');
                }
            }
        });
    }

    const themeToggle = document.getElementById('theme-toggle');

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const header = document.querySelector('.l-header');
            if (header) {
                header.classList.toggle('dark-mode');
            }

            // Change icon based on the mode
            if (document.body.classList.contains('dark-mode')) {
                themeToggle.innerHTML = "<i class='bx bx-sun'></i>";
            } else {
                themeToggle.innerHTML = "<i class='bx bx-moon'></i>";
            }
        });
    }

    window.addEventListener('scroll', scrollActive);

    /*===== SCROLL REVEAL ANIMATION =====*/
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2000,
        delay: 200,
        reset: true
    });

    sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {}); 
    sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 }); 
    sr.reveal('.home__social-icon', { interval: 200 }); 
    sr.reveal('.skills__data, .display__img, .contact__input', { interval: 200 });
    sr.reveal('.skills-image', { delay: 400 });
});