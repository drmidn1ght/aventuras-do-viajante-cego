let currentStoryIndex = 0;

const storyData = [
    {
        title: "A Escolha Inicial",
        text: "Você está em uma encruzilhada na floresta. À sua esquerda, você ouve o som de um rio. À sua direita, você sente uma brisa fresca. O que você escolhe fazer?",
        choices: [
            { text: "Seguir para a esquerda em direção ao rio.", nextIndex: 1 },
            { text: "Ir para a direita, na direção da brisa fresca.", nextIndex: 2 }
        ]
    },
    {
        title: "O Rio Sereno",
        text: "Você chegou ao rio. A água flui suavemente. À sua frente, há uma ponte de pedra. O que você faz?",
        choices: [
            { text: "Cruzar a ponte.", nextIndex: 3 },
            { text: "Permanecer na margem do rio.", nextIndex: 4 }
        ]
    },
    {
        title: "O Caminho da Brisa",
        text: "Ao seguir o caminho da brisa fresca, você se depara com uma clareira iluminada pelo sol. No centro da clareira, há uma antiga árvore sábia. O que você pergunta à árvore?",
        choices: [
            { text: "Sobre o seu destino.", nextIndex: 5 },
            { text: "Sobre o significado da vida.", nextIndex: 6 }
        ]
    },
   
];
 // Lembrete: adicionar mais objetos à array conforme necessário
function startGame() {
    displayStory();
}

function makeChoice(choiceIndex) {
    currentStoryIndex = storyData[currentStoryIndex].choices[choiceIndex - 1].nextIndex;
    displayStory();
}

function displayStory() {
    const storyContainer = document.getElementById('game-container');
    const storyTitle = document.getElementById('story-title');
    const storyText = document.getElementById('story-text');
    const choicesContainer = document.getElementById('choices-container');

    const currentStory = storyData[currentStoryIndex];

    storyTitle.textContent = currentStory.title;
    storyText.textContent = currentStory.text;

    // Limpa as escolhas anteriores
    choicesContainer.innerHTML = "";

    // Adiciona as novas escolhas
    currentStory.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = () => makeChoice(index + 1);
        choicesContainer.appendChild(button);
    });
}

// Inicia o jogo quando a página é carregada
window.onload = startGame;
