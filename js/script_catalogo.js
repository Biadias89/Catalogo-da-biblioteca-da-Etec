document.addEventListener('DOMContentLoaded', () => { 
    const Box = document.querySelector('#gridLivros');

   for (let index = 0; index < 50; index++) {
    const container = document.querySelectorAll('.conteiner-Box');
        const cardDiv = document.createElement('div');

        cardDiv.innerHTML = `
                    <a href="info-livros.html"
                    class="group flex 2xl:flex-row flex-col bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

                        <div class=" 2xl:w-1/2">
                            <img src="https://m.media-amazon.com/images/I/71TzI-CQrjL.jpg"
                                alt="Livro Machado"
                                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105">
                        </div>

                        <div class="p-6 flex flex-col justify-between flex-1">
                            <div>
                                <h3 class="font-serif text-2xl font-bold text-gray-800 mb-3">
                                    Machado
                                </h3>

                                <p class="text-gray-600 text-sm leading-6">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Nemo, saepe. Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                </p>
                            </div>

                            <div class="mt-6 border-t pt-4 text-sm">
                                <p class="font-semibold text-gray-700">
                                    Autor:
                                    <span class="font-normal text-gray-600">Machado</span>
                                </p>

                                <p class="font-semibold text-gray-700 mt-1">
                                    Ano:
                                    <span class="font-normal text-gray-600">15/05/2014</span>
                                </p>
                            </div>
                        </div>

                    </a>
            `;
    Box.appendChild(cardDiv);
}
});

