import livrosRecente from '../Banco.js';

// Altere estes dois números para escolher a quantidade de carrosséis e cards.
const QUANTIDADE_DE_CARROSSEIS = 4;
const CARDS_POR_CARROSSEL = 10;

document.addEventListener("DOMContentLoaded", () => {
  const containerImagens = document.getElementById('container-imagens');

  if (!containerImagens) return;

  let carrosseisHtml = '';

  for (let numero = 0; numero < QUANTIDADE_DE_CARROSSEIS; numero++) {
    const inicio = numero * CARDS_POR_CARROSSEL;
    const tipoLinha = numero % 2 === 1 ? 'linhaEsquerda' : 'linhaDireita';
    const tipoAnimacao = numero % 2 === 1 ? 'fade-left' : 'fade-right';
    
    const livrosDoCarrossel = livrosRecente.slice(inicio, inicio + CARDS_POR_CARROSSEL);

    
    const slides = livrosDoCarrossel.map((livro) => `
      <div class="swiper-slide h-[540px] py-6" style="width: 280px">
        <a href="../html/Info-livros.html"
          class="block h-full w-[280px] max-w-full mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105">

          <div class="rounded-xl p-4 sm:p-6 flex justify-center items-center">
            <img
              src="${livro.src}"
              alt="Capa de ${livro.titulo}"
              class="w-full h-80 rounded-xl"
            >
          </div>

          <div class=" overflow-hidden p-4 text-left sm:p-4">
            <h2 class=" font-bold text-gray-800 mb-3">
              ${livro.titulo}
            </h2>

            <p class="text-gray-600 leading-relaxed">
              ${livro.descricao}
            </p>
          </div>
        </a>
      </div>`).join('');
      
    carrosseisHtml += `
    <div data-aos="${tipoAnimacao}" class="${tipoLinha} mt-10"></div>
      <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="m-16 mx-auto w-[75%]">
        <div class="swiper biblioteca-swiper h-full w-full overflow-hidden px-4 pb-12">
          <div class="swiper-wrapper items-stretch">${slides}</div>
          <button class="swiper-button-prev hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl cursor-pointer">
                <img class="p-3 scale-x-[-1]" src="https://cdn-icons-png.flaticon.com/512/724/724954.png" alt="Anterior">
           </button>
            <button class="swiper-button-next hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl cursor-pointer">
                <img class="p-3" src="https://cdn-icons-png.flaticon.com/512/724/724954.png" alt="Próximo">
            </button>
          <div class="swiper-pagination !static mt-5"></div>

          
        </div>
      </section>`;
  }

  containerImagens.innerHTML = carrosseisHtml;

  containerImagens.querySelectorAll('.swiper').forEach((elemento) => {
    new Swiper(elemento, {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: elemento.querySelector('.swiper-pagination'),
        clickable: true,
      },
      navigation: {
        nextEl: elemento.querySelector('.swiper-button-next'),
        prevEl: elemento.querySelector('.swiper-button-prev'),
      },
      breakpoints:{
        1080: {
          slidesPerView: 3
        },
        1500:{
          slidesPerView: 5
        },
        870:{
          slidesPerView: 2
        }
      }
    });
  });

});