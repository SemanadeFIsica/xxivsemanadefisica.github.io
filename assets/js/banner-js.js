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
      speed: 3000,
    });

    // Função para exibir detalhes do palestrante
    function mostrarDetalhes(el) {
      const nome = el.dataset.nome;
      const bio = el.dataset.bio;
      const foto = el.dataset.foto;

      document.getElementById('detalhe-nome').textContent = nome;
      document.getElementById('detalhe-bio').textContent = bio;
      document.getElementById('detalhe-foto').src = foto;

      const detalhes = document.getElementById('detalhes');
      detalhes.classList.remove('hidden');
      detalhes.classList.add('show');
    }
    
    // Banner responsividade
    const elemento = document.getElementById('logosmfs');
    const curvas = document.getElementById('curvas-1');
    const mediaQuery = window.matchMedia('(min-width: 576px)');

    function toggleMobile(ativo) {
      document.querySelectorAll('.mobile-banner').forEach(el => {
        el.style.display = ativo ? '' : 'none';
      });
      document.querySelectorAll('.desktop-banner').forEach(el => {
        el.style.display = ativo ? 'none' : '';
      });
    }

    function aplicarClasse(e) {
      if (e.matches) {
        elemento.classList.add('linha');
        elemento.classList.remove('coluna');
        curvas.style.display = 'flex';
        toggleMobile(false);
      } else {
        elemento.classList.add('coluna');
        elemento.classList.remove('linha');
        curvas.style.display = 'none';
        toggleMobile(true);
      }
    }

    mediaQuery.addListener(aplicarClasse); // ou mediaQuery.addEventListener('change', aplicarClasse) em navegadores modernos
    aplicarClasse(mediaQuery); // Executa inicialmente