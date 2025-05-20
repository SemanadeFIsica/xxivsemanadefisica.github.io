const swiper = new Swiper('.mySwiper1', {
  slidesPerView: 1.3,
  spaceBetween: 20,
  pagination: {
    el: '.pag-1',
    clickable: true,
  },
  navigation: {
    nextEl: '.next-1',
    prevEl: '.prev-1',
  },
  breakpoints: {
    640: { slidesPerView: 1.8 },
    1024: { slidesPerView: 2 },
  },
});

const swiper1 = new Swiper('.mySwiper2', {
  slidesPerView: 1.3,
  spaceBetween: 20,
  pagination: {
    el: '.pag-2',
    clickable: true,
  },
  navigation: {
    nextEl: '.next-2',
    prevEl: '.prev-2',
  },
  breakpoints: {
    640: { slidesPerView: 1.8 },
    1024: { slidesPerView: 2 },
  },
});

const swiper2 = new Swiper('.mySwiper3', {
  slidesPerView: 1.3,
  spaceBetween: 20,
  pagination: {
    el: '.pag-3',
    clickable: true,
  },
  navigation: {
    nextEl: '.next-3',
    prevEl: '.prev-3',
  },
  breakpoints: {
    640: { slidesPerView: 1.8 },
    1024: { slidesPerView: 2 },
  },
});


// const cards = document.querySelectorAll('.palestrante-card');
// const detalhes = document.getElementById('detalhes');
// const nome = document.getElementById('detalhe-nome');
// const bio = document.getElementById('detalhe-bio');
// const titulos = document.getElementById('detalhes-titulos');
// const foto = document.getElementById('detalhe-foto');

// cards.forEach(card => {
//     card.addEventListener('click', () => {
//     nome.textContent = card.dataset.nome;
//     bio.textContent = card.dataset.bio;
//     titulos.textContent = card.dataset.titulos;
//     foto.src = card.dataset.foto;
//     detalhes.classList.add('open');
//     });
// });

// function fecharDetalhes() {
//     detalhes.classList.remove('open');
// }

document.querySelectorAll('.palestrantes-slider').forEach((slider, index) => {
  const cards = slider.querySelectorAll('.palestrante-card');
  const detalhes = slider.querySelector('.detalhes');
  const nome = slider.querySelector('.detalhe-nome');
  const atuacao = slider.querySelector('.detalhe-atuacao');
  const bio = slider.querySelector('.detalhe-bio');
  const biom = slider.querySelector('.detalhe-bio-mobile');
  const titulos = slider.querySelector('.detalhes-titulos');
  const foto = slider.querySelector('.detalhe-foto');


  cards.forEach(card => {
    card.addEventListener('click', () => {
      nome.textContent = card.dataset.nome;
      //ATUAÇÃO
      atuacao.textContent = card.dataset.atuacao;

      // BIO
      const abstractStr = card.dataset.bio || '';
      const abstractArray = abstractStr.split(';');
      const htmlAbstract = abstractArray.map(t => `<p>${t}</p>`).join('');
      bio.innerHTML = htmlAbstract;

      // BIO MOBILE
      const abstractStrM = card.dataset.biomobile || '';
      const abstractArrayM = abstractStrM.split(';');
      const htmlAbstractM = abstractArrayM.map(t => `<p>${t}</p>`).join('');
      biom.innerHTML = htmlAbstractM;
      // TÍTULOS
      const titulosStr = card.dataset.titulos || '';
      const titulosArray = titulosStr.split(';');

      const htmlLista = '<h3>Títulos:</h3>' + '<ul>' + titulosArray.map(t => `<li>${t}</li>`).join('') + '</ul>';
      titulos.innerHTML = htmlLista;
      foto.src = card.dataset.foto;
      detalhes.classList.add('open');
    });
  });

  const btnFechar = slider.querySelector('.fechar');
  btnFechar.addEventListener('click', () => {
    detalhes.classList.remove('open');
  });
});
