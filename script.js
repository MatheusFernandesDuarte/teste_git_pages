const personagens = [
    {
        nome: "Monkey D. Luffy",
        descricao: "Capitão dos Piratas do Chapéu de Palha e usuário da Fruta do Diabo Gomu Gomu no Mi."
    },
    {
        nome: "Roronoa Zoro",
        descricao: "Espadachim da tripulação dos Chapéus de Palha e usuário do estilo de três espadas."
    },
    {
        nome: "Nami",
        descricao: "Navegadora dos Piratas do Chapéu de Palha, conhecida por suas habilidades de navegação e previsão do tempo."
    }
];

function renderizarPersonagens() {
    const container = document.getElementById('character-container');
    personagens.forEach(personagem => {
        const card = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${personagem.imagem}" class="card-img-top" alt="${personagem.nome}">
                    <div class="card-body">
                        <h5 class="card-title">${personagem.nome}</h5>
                        <p class="card-text">${personagem.descricao}</p>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Inicializa a renderização dos personagens quando a página é carregada
document.addEventListener('DOMContentLoaded', renderizarPersonagens);
