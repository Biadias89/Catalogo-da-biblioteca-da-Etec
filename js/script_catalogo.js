document.addEventListener('DOMContentLoaded', () => { 
    const Box = document.querySelector('#gridLivros');

   for (let index = 0; index < 50; index++) {
    const container = document.querySelectorAll('.conteiner-Box');
        const cardDiv = document.createElement('div');

        cardDiv.innerHTML = `
                <div class="flex flex-row rounded-lg border-amber-700 border-2 hover:scale-105">
                    <img src="https://m.media-amazon.com/images/I/71TzI-CQrjL.jpg" class=" sm:w-1/2"> 
                    <div class="p-5 flex flex-col ">
                        <h3 class=" font-serif text-xl mb-2">Machado</h3>
                        <p class=" text-sm">
                            Lorem Ipsum fnervmremfwemffqwg  wrbegwfefgf egew    g   wg  weg wgfwe   gwegw   e
                        </p>
                        <div class="pt-5 font-bold">
                            <p class=" text-sm">
                            Autor: Machado
                            </p>
                            <p class="text-sm">
                            Ano: 15/05/2014
                            </p>
                        </div>
                    </div>
                </div>
            `;
    Box.appendChild(cardDiv);
}
});

