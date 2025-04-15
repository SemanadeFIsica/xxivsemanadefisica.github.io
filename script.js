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
    const swiper = new Swiper('.swiper-container', {
        effect: 'fade', // Define o efeito como fade
        grabCursor: true,
        loop: true,
        fadeEffect: {
            crossFade: true // Garante que apenas uma imagem seja exibida por vez
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000, // Tempo de exibição de cada slide em milissegundos (5 segundos)
            disableOnInteraction: false, // Permite que o autoplay continue após a interação do usuário
        },
        speed: 0, // Define a velocidade da transição para 0 para mudança instantânea ao clicar
    });
});
