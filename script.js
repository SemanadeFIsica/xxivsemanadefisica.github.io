// Array com os caminhos das imagens para pré-carregamento
const imagesToPreload = ['layout/Bem%20vinndo.png', 'layout/Chamada.png', 'layout/Palestrante.png'];

// Função para pré-carregar as imagens
function preloadImages(imageUrls) {
    for (const url of imageUrls) {
        const img = new Image();
        img.src = url;
        // Você pode adicionar um event listener para verificar quando cada imagem é carregada
        // img.onload = () => console.log(`Imagem ${url} carregada`);
    }
}

// Chama a função de pré-carregamento
preloadImages(imagesToPreload);

// Inicializa o Swiper após o (provável) carregamento das imagens
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const menuCollapse = document.getElementById('menuCollapse');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menuCollapse.classList.toggle('active');
        });
    }

    // Handle dropdown behavior on mobile
    const dropdownBtns = document.querySelectorAll('.dropbtn');

    // Check if we're on mobile
    const isMobile = window.innerWidth < 480;

    if (isMobile) {
        dropdownBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const dropdownContent = this.nextElementSibling;
                dropdownContent.style.display =
                    dropdownContent.style.display === 'block' ? 'none' : 'block';
            });
        });
    }

    // Initialize Swipers
    const initSwipers = () => {
        // Slide do Banner
        const bannerSwiper = new Swiper('.swiper-container', {
            effect: 'fade',
            grabCursor: true,
            loop: true,
            fadeEffect: {
                crossFade: true
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },/*
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },*/
            speed: 500,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20
                }
            }
        });

        // Slide de Palestrantes
        const palestrantesSwiper = new Swiper('.swiper-container-palestrantes', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        });

        // Novo Slide de Imagens
        const novoSlideSwiper = new Swiper('.swiper-container-novo', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next-novo',
                prevEl: '.swiper-button-prev-novo'
            },
            pagination: {
                el: '.swiper-pagination-novo',
                clickable: true,
            }
        });
    };

    initSwipers();

    // Adiciona efeito de fade in para elementos quando entram na viewport
    const fadeElements = document.querySelectorAll('.about, .icons');

    const fadeInOnScroll = () => {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const isVisible = (elementTop < window.innerHeight) && (elementBottom > 0);

            if (isVisible) {
                element.classList.add('fade-in');
            }
        });
    };

    // Executar no carregamento
    fadeInOnScroll();

    // Adicionar evento de rolagem
    window.addEventListener('scroll', fadeInOnScroll);

    // Handle resize events for responsive behavior
    window.addEventListener('resize', function() {
        // Reset mobile menu when resizing to desktop
        if (window.innerWidth >= 480) {
            if (menuCollapse) {
                menuCollapse.classList.remove('active');
            }

            // Reset any open dropdowns
            document.querySelectorAll('.dropdown-content').forEach(dropdown => {
                dropdown.style.display = '';
            });
        }
    });

    
});
