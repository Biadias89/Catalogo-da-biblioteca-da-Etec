import livrosRecente from '../Banco.js';
document.addEventListener('DOMContentLoaded', () => { 
    const Box = document.getElementById('gridLivros');
    const paginacao = document.querySelector('.paginacao');
    const itensPorPagina = 16;
    const totalPaginas = Math.ceil(livrosRecente.length / itensPorPagina);
    let paginaAtual = 1;

    function exibirPagina(pagina) {
        
        paginaAtual = pagina;
        
        const inicio = (pagina - 1) * itensPorPagina;
        const fim = inicio + itensPorPagina;
        const itensPagina = livrosRecente.slice(inicio, fim);
        

        // Renderiza os itens na lista HTML
        Box.innerHTML = itensPagina.map(item => `<a href="info-livros.html"
                    class="box-content group flex flex-col bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

                        <div class="aspect-3/2">
                            <img src="${item.src}"
                                alt="Livro ${item.titulo}"
                                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105">
                        </div>

                        <div class="p-6 flex flex-col justify-between flex-1">
                            <div>
                                <h3 class="font-serif text-2xl font-bold text-gray-800 mb-3">
                                    ${item.titulo}
                                </h3>

                                <p class="text-gray-600 text-sm leading-6">
                                    ${item.descricao}
                                </p>
                            </div>

                            <div class="mt-6 border-t pt-4 text-sm">
                                <p class="font-semibold text-gray-700">
                                    Autor:
                                    <span class="font-normal text-gray-600">${item.autor}</span>
                                </p>

                                <p class="font-semibold text-gray-700 mt-1">
                                    Ano:
                                    <span class="font-normal text-gray-600">${item.ano}</span>
                                </p>
                            </div>
                        </div>

                    </a>`).join(""); 

        
    
    paginacao.innerHTML = `
            <div class="inline-flex rounded-base shadow-xs -space-x-px mb-20 2xl:mr-40 " role="group">
                <button id="btn-anterior" data-tooltip-target="tooltip-previous" type="button" class="inline-flex  items-center cursor-pointer justify-center text-body bg-neutral-secondary-medium rounded-s-base box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary leading-5 w-9 h-9 focus:outline-none">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/></svg>
                </button>
                <div id="tooltip-previous" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm leading-4 font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
                Anterior
                <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button type="button" class="inline-flex shrink-0 text-sm items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading leading-5 px-3 h-9 focus:outline-none">
                ${paginaAtual} a ${totalPaginas} 
                </button>
                <button id="btn-proximo" data-tooltip-target="tooltip-next" type="button" class="inline-flex items-center cursor-pointer justify-center text-body bg-neutral-secondary-medium rounded-e-base box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary leading-5 w-9 h-9 focus:outline-none">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
                
                </button>

                <div id="tooltip-next" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm leading-4 font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
                Proximo
                <div class="tooltip-arrow" data-popper-arrow></div>

                </div>
            </div>`;
        document.getElementById("btn-anterior").addEventListener("click", () => {
        if (paginaAtual > 1) {
            exibirPagina(paginaAtual - 1);
            window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth" 
            });
        }
        });

        document.getElementById("btn-proximo").addEventListener("click", () => {
        if (paginaAtual < totalPaginas) {
            exibirPagina(paginaAtual + 1);
            window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth" 
            });
        }
        });
    }
    exibirPagina(1);

});

