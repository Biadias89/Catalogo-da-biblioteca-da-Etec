document.addEventListener('DOMContentLoaded', () => {

    const pistaInfinita = document.getElementById('pista-infinita');

    if (!pistaInfinita) {
        console.log('Elemento não encontrado!');
        return;
    }

    const livrosRecentes = [
        { id: 1, src: "https://m.media-amazon.com/images/I/61EWhhsiDaL.jpg" },
        { id: 2, src: "https://m.media-amazon.com/images/I/61EWhhsiDaL.jpg" },
        { id: 3, src: "https://m.media-amazon.com/images/I/61EWhhsiDaL.jpg" },
        { id: 4, src: "https://m.media-amazon.com/images/I/61EWhhsiDaL.jpg" },
        { id: 5, src: "https://m.media-amazon.com/images/I/61EWhhsiDaL.jpg" },
        { id: 6, src: "https://m.media-amazon.com/images/I/61EWhhsiDaL.jpg" }
    ];

    for (let i = 0; i < 10; i++) {
        livrosRecentes.forEach(livro => {
            const card = document.createElement('div');

            card.className = 'card-livro flex-shrink-0';

            card.innerHTML = `
                <img
                    src="${livro.src}"
                    alt="Livro ${livro.id}"
                    class="w-56 h-80 object-cover rounded-lg"
                />
            `;

            pistaInfinita.appendChild(card);
        });
    }

});