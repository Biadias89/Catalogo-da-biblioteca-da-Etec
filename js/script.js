document.addEventListener('DOMContentLoaded', () => {
    const carrosseis = document.querySelectorAll('.carrossel-container');

    carrosseis.forEach((container, index) => {
        const pista = container.querySelector('.pista-carrossel');
        const btnNext = container.querySelector('.btn-next');
        const btnPrev = container.querySelector('.btn-prev');


        const cardsVisiveis = 5;
        const totalCards = 10;

        for (let index = 0; index < 10; index++) {
            const cardDiv = document.createElement('div');
            cardDiv.className = 'flex-none w-1/5 px-2';
            cardDiv.innerHTML = `<div class="bg-white rounded-2xl shadow-lg p-6">
                                    <div class="flex justify-center">
                                        <img src="https://m.media-amazon.com/images/I/61EWhhsiDaL.jpg" alt="Livro" class="w-72 rounded-lg shadow-md">
                                    </div>

                                    <div class="mt-4">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                                            voluptatem aliquid ea aperiam rerum odit. Necessitatibus, libero aut.
                                            Laudantium quo eligendi explicabo quos voluptate cumque libero minima
                                            magni ullam vitae.</p>
                                    </div>
                                </div>
            `;
            pista.appendChild(cardDiv);
        }

        // 2. LÓGICA DE EXIBIÇÃO DAS SETAS (Independente para cada carrossel)
        if (totalCards > cardsVisiveis) {
            btnNext.classList.remove('hidden');
            btnPrev.classList.remove('hidden');
        } else {
            return; 
        }

        let passoAtual = 0;
        const maxPassos = Math.ceil(totalCards / cardsVisiveis) - 1;

        btnNext.addEventListener('click', () => {
            if (passoAtual >= maxPassos) {
                passoAtual = 0;
            } else {
                passoAtual++;
            }
            pista.style.transform = `translateX(-${passoAtual * 100}%)`;
        });

        btnPrev.addEventListener('click', () => {
            if (passoAtual <= 0) {
                passoAtual = maxPassos;
            } else {
                passoAtual--;
            }
            pista.style.transform = `translateX(-${passoAtual * 100}%)`;
        });
    });
});