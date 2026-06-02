document.addEventListener('DOMContentLoaded', () => {
    const pistaInfinita = document.getElementById('pista-infinita');


    if (!pistaInfinita) return;
    const livrosRecentes = [
        { id: 1, src: "https://m.media-amazon.com/images/I/61EWhhsiDaL.jpg" },
        { id: 2, src: "https://m.media-amazon.com/images/I/61EWhhsiDaL.jpg" },
        { id: 3, src: "https://m.media-amazon.com/images/I/61EWhhsiDaL.jpg" },
        { id: 4, src: "https://m.media-amazon.com/images/I/61EWhhsiDaL.jpg" },
        { id: 5, src: "https://m.media-amazon.com/images/I/61EWhhsiDaL.jpg" },
        { id: 6, src: "https://m.media-amazon.com/images/I/61EWhhsiDaL.jpg" }
    ];
    // Isso cria a ilusão do scroll infinito para o CSS
    const listaDuplicada = [...livrosRecentes, ...livrosRecentes];

    listaDuplicada.forEach(livro => {
        const card = document.createElement('div');
        card.className = ``;
       
        card.innerHTML = `<img class="" src="${livro.src}" alt="${livro.titulo}" class="w-3xs h-3xs" />`;
        
        
        pistaInfinita.appendChild(card);
    });
});