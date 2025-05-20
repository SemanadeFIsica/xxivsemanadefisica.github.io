// Slider config
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.5,
    spaceBetween: 20,
    loop: true,
    freeMode: true,
    freeModeMomentum: false,
    autoplay: {
    delay: 0,
    disableOnInteraction: false,
    },
    speed: 0,
});

let palestranteAtual = null; // Variável global para controle

function mostrarDetalhes(el) {
const nome = el.dataset.nome;
const bio = el.dataset.bio;
const titulos = el.dataset.titulos;
const foto = el.dataset.foto;

const detalhes = document.getElementById('detalhes');
const nomeEl = document.getElementById('detalhe-nome');

// Se o mesmo palestrante for clicado novamente, oculta
if (palestranteAtual === nome && !detalhes.classList.contains('hidden')) {
    detalhes.classList.add('hidden');
    detalhes.classList.remove('show');
    palestranteAtual = null;
    return;
}

// Atualiza o conteúdo
nomeEl.textContent = nome;
document.getElementById('detalhe-bio').textContent = bio;
document.getElementById('detalhe-titulos').textContent = titulos;
document.getElementById('detalhe-foto').src = foto;

// Exibe os detalhes
detalhes.classList.remove('hidden');
detalhes.classList.add('show');

palestranteAtual = nome;
window.scrollTo({
  top: window.scrollY,
  behavior: 'instant'
});
event.preventDefault();

}