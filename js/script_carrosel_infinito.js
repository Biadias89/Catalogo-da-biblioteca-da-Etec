import livrosRecente from '../Banco.js';

document.addEventListener('DOMContentLoaded', () => {

    const pistaInfinita = document.getElementById('pista-infinita');
    if (!pistaInfinita) {
        console.log('Elemento não encontrado!');
        return;
    }
    
    for (let i = 0; i < livrosRecente.length; i++) {
        livrosRecente.forEach(livro => {
            console.log(livro);
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