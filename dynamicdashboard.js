const menuButton = document.querySelector('.menu-button');
        const navLinks = document.querySelector('.nav-links');

        menuButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });