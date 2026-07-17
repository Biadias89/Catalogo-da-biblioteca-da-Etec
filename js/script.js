document.addEventListener("DOMContentLoaded", () => {

    const carrosseis = document.querySelectorAll(".carrossel-container");

    carrosseis.forEach((container) => {

        const pista = container.querySelector(".pista-carrossel");
        const btnNext = container.querySelector(".btn-next");
        const btnPrev = container.querySelector(".btn-prev");

        // ==========================
        // CRIAR OS CARDS
        // ==========================

        const totalCards = 10;

        for (let i = 0; i < totalCards; i++) {

            const card = document.createElement("div");

            card.className =
                "flex-none w-full sm:w-1/2 lg:w-1/3 xl:w-1/5 px-2";

            card.innerHTML = `
                <a href="../html/info-livros.html" class="block bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"> 
                    <div class="p-6"> <div class="flex justify-center overflow-hidden rounded-xl"> 
                        <img src="https://m.media-amazon.com/images/I/61EWhhsiDaL.jpg" alt="Livro" class="w-72 rounded-xl transition-transform duration-300 hover:scale-105">
                    </div> 
                    <div class="mt-5"> 
                        <h2 class="text-xl font-bold text-gray-800 mb-3"> Nome do Livro </h2> 
                        <p class="text-gray-600 leading-relaxed text-sm"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptatem aliquid ea aperiam rerum odit. Necessitatibus, libero aut. Laudantium quo eligendi explicabo quos voluptate cumque libero minima magni ullam vitae. </p> 
                    </div>
                    </div> 
                </a>
            `;

            pista.appendChild(card);

        }

        // ==========================
        // CONFIGURAÇÃO DO SCROLL
        // ==========================

        pista.classList.add(
            "flex",
            "overflow-x-auto",
            "scroll-smooth",
            "snap-x",
            "snap-mandatory",
            "gap-2"
        );

        pista.style.scrollbarWidth = "none";
        pista.style.msOverflowStyle = "none";

        pista.style.webkitOverflowScrolling = "touch";

        pista.querySelectorAll("div").forEach(card => {
            card.classList.add("snap-start");
        });

        // ==========================
        // ESCONDER SCROLLBAR
        // ==========================

        pista.style.overflowY = "hidden";

        const estilo = document.createElement("style");

        estilo.innerHTML = `
            .pista-carrossel::-webkit-scrollbar{
                display:none;
            }
        `;

        document.head.appendChild(estilo);

        // ==========================
        // TAMANHO DO SCROLL
        // ==========================

        function tamanhoScroll() {

            const card = pista.children[0];

            if (!card) return 300;

            return card.offsetWidth + 16;

        }
                // ==========================
        // BOTÃO PRÓXIMO
        // ==========================

        btnNext.addEventListener("click", () => {

            pista.scrollBy({
                left: tamanhoScroll(),
                behavior: "smooth"
            });

        });

        // ==========================
        // BOTÃO ANTERIOR
        // ==========================

        btnPrev.addEventListener("click", () => {

            pista.scrollBy({
                left: -tamanhoScroll(),
                behavior: "smooth"
            });

        });

        // ==========================
        // DRAG COM O MOUSE
        // ==========================

        let pressionado = false;
        let inicioX = 0;
        let scrollInicial = 0;

        pista.addEventListener("mousedown", (e) => {

            pressionado = true;

            pista.classList.add("cursor-grabbing");

            inicioX = e.pageX;

            scrollInicial = pista.scrollLeft;

        });

        pista.addEventListener("mouseleave", () => {

            pressionado = false;

            pista.classList.remove("cursor-grabbing");

        });

        pista.addEventListener("mouseup", () => {

            pressionado = false;

            pista.classList.remove("cursor-grabbing");

        });

        pista.addEventListener("mousemove", (e) => {

            if (!pressionado) return;

            e.preventDefault();

            const x = e.pageX;

            const distancia = (x - inicioX) * 2;

            pista.scrollLeft = scrollInicial - distancia;

        });

        // ==========================
        // TOUCH CELULAR
        // ==========================

        let touchInicio = 0;
        let scrollTouch = 0;

        pista.addEventListener("touchstart", (e) => {

            touchInicio = e.touches[0].pageX;

            scrollTouch = pista.scrollLeft;

        });

        pista.addEventListener("touchmove", (e) => {

            const x = e.touches[0].pageX;

            const distancia = (x - touchInicio) * 2;

            pista.scrollLeft = scrollTouch - distancia;

        });

        // ==========================
        // CURSOR
        // ==========================

        pista.classList.add(
            "cursor-grab",
            "select-none"
        );

        // ==========================
        // SNAP AUTOMÁTICO
        // ==========================

        let tempo;

        pista.addEventListener("scroll", () => {

            clearTimeout(tempo);

            tempo = setTimeout(() => {

                const largura = tamanhoScroll();

                const indice = Math.round(pista.scrollLeft / largura);

                pista.scrollTo({

                    left: indice * largura,

                    behavior: "smooth"

                });

            }, 100);

        });

        // ==========================
        // RESPONSIVO
        // ==========================

        window.addEventListener("resize", () => {

            pista.scrollTo({

                left: 0,

                behavior: "instant"

            });

        });

    });

});