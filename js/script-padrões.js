document.addEventListener('DOMContentLoaded', () => { 
    const nav = document.getElementById("navBar");
    const rodape = document.getElementById("rodape");
    const pesquisaButton = document.querySelectorAll(".PesquisaButton");
    const linhaD = document.querySelectorAll(".linhaDireita");
    const linhaE = document.querySelectorAll(".linhaEsquerda");

    linhaD.forEach(linhaD => {
        linhaD.innerHTML = `
            <h1 class="ml-6 text-2xl lg:text-3xl">Lorem Ipsum dolor sit amet</h1>
            <div class="grid grid-cols-2 items-center">
                <li class="w-full h-2 bg-[#AD0E0A] list-none flex"></li>
                <li class="rounded-4xl w-35 h-8 list-none bg-[#AD0E0A] flex 2xl:w-50 2xl:h-10"></li>
            </div>`;
    });

    linhaE.forEach(linhaE => {
        linhaE.innerHTML = `
            <h1 class="mr-6 text-2xl lg:text-3xl text-right">Lorem Ipsum dolor sit amet</h1>
            <div class="grid grid-cols-2 items-center scale-x-[-1] ">
                <li class="w-full h-2 bg-[#AD0E0A] list-none flex "></li>
                <li class="rounded-4xl w-35 h-8 list-none bg-[#AD0E0A] 2xl:w-50 2xl:h-10"></li>
            </div>`;
    });
        

    pesquisaButton.forEach(pesquisaButton => {
        pesquisaButton.innerHTML = `
        

            <div class="relative">

                <input
                    type="text"
                    placeholder="Pesquisar algo..."
                    class="w-full py-3 pl-4 pr-40 border border-gray-400 rounded-lg bg-white shadow-sm">

                <button
                    class="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-[#AD0E0A] text-white rounded-md cursor-pointer">
                    Pesquisa Avançada
                </button>
                
                </div>
        `;
});
        nav.innerHTML = `
                <div class="mx-auto flex items-center bg-[#2A2A2A] p-2">
                    <img src="../img/etec.png" class="w-1/4 lg:w-1/10" >
                </div>
                

                <div class="bg-[#6B0000] shadow-md ">
                    <div class="flex ml-2 py-1 gap-4">
                        <a href="../html/index.html" class="p-2 rounded hover:bg-red-900 transition duration-300">
                            <img src="../img/icones-02.svg" alt="Página Inicial" class="w-6 h-6">
                        </a>
                        <a href="../html/sobre.html" class="p-2 rounded hover:bg-red-900 transition duration-300">
                            <img src="../img/icones-01.svg" alt="Sobre Nós" class="w-6 h-6">
                        </a>
                        <a href="../html/catalogo.html" class="p-2 rounded hover:bg-red-900 transition duration-300">
                            <img src="../img/icones-03.svg" alt="Catálogo" class="w-6 h-6">
                        </a>
                    </div>
                </div>
             `;
    
    rodape.innerHTML = `<div class="bg-[#2A2A2A] py-10 px-4 shadow-lg">
                    <div class="container mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
                        
                        <div class="flex-1">
                            <h3 class="text-red-600 font-bold text-lg mb-4">Nossa Localização</h3>
                            <div class="text-gray-300 text-sm font-semibold space-y-4">
                                <p class="flex items-center gap-2">
                                    Escola Estadual Técnica de Embu
                                </p>
                                <p class="flex items-start gap-2 leading-relaxed">
                                    <span>
                                        Rua Marcelino Pinto Teixeira, N 529<br>
                                        Parque Industrial Ramos de Freitas<br>
                                        Embu das Artes, SP - Brasil |<br>
                                        06816-000
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div class="flex-1">
                            <h3 class="text-red-600 font-bold text-lg mb-4">Contatos</h3>
                            <div class="text-gray-300 text-sm font-semibold space-y-3">
                                <p class="flex items-center gap-2"> 
                                    Etec de Embu: +55 (11) 4785-4900
                                </p>
                                <p class="flex items-center gap-2">
                                    Biblioteca: +55 (11) 99854-6198
                                </p>
                            </div>
                        </div>

                        <div class="flex-1 flex justify-center md:justify-end items-center mt-6 md:mt-0">
                            <img src="../img/images-removebg-preview.png">
                        </div>

                    </div>
                </div>
                
                <div class="bg-[#6B0000] w-full h-8 flex"></div>`;
});