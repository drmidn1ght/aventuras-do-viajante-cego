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
    {
        title: "A Ponte Misteriosa",
        text: "Ao atravessar a ponte, você se encontra em uma terra misteriosa. À frente, há uma estrada sinuosa que se perde na escuridão da floresta. O que você decide fazer?",
        choices: [
            { text: "Seguir pela estrada sinuosa.", nextIndex: 7 },
            { text: "Retornar à margem do rio.", nextIndex: 4 }
        ]
    },
    {
        title: "A Estrada Sinuosa",
        text: "A estrada leva você a uma vila encantadora. Os moradores parecem acolhedores. O que você gostaria de fazer?",
        choices: [
            { text: "Explorar a vila.", nextIndex: 8 },
            { text: "Continuar sua jornada pela floresta.", nextIndex: 9 }
        ]
    },
    {
        title: "A Sabedoria da Vila",
        text: "Enquanto explora a vila, você encontra um ancião sábio. Ele oferece para compartilhar conhecimentos contigo. O que você pergunta ao ancião?",
        choices: [
            { text: "Sobre o passado da vila.", nextIndex: 10 },
            { text: "Sobre os perigos na floresta.", nextIndex: 11 }
        ]
    },
    {
        title: "A Escolha Final",
        text: "Com as informações do ancião, você se depara com uma bifurcação. À esquerda, um caminho desconhecido. À direita, o retorno à vila. Qual caminho você escolhe?",
        choices: [
            { text: "Seguir o caminho desconhecido.", nextIndex: 12 },
            { text: "Retornar à vila para mais aventuras.", nextIndex: 8 }
        ]
    },
    
    {
        title: "O Destino Desconhecido",
        text: "Ao seguir o caminho desconhecido, você se depara com uma caverna misteriosa. Dentro dela, há uma luz brilhante. O que você decide fazer?",
        choices: [
            { text: "Investigar a luz brilhante.", nextIndex: 13 },
            { text: "Retornar à bifurcação.", nextIndex: 12 }
        ]
    },
    {
        title: "A Descoberta Final",
        text: "Ao se aproximar da luz, você descobre uma antiga relíquia que revela segredos ancestrais. Sua jornada chegou ao fim. O que você aprendeu?",
        choices: [
            { text: "Refletir sobre as lições aprendidas.", nextIndex: -1 } // Valor negativo indica o fim do jogo
        ]
    },
];

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

    // Verifica se é o final do jogo
    if (currentStoryIndex === -1) {
        storyTitle.textContent = "Fim do Jogo";
        storyText.textContent = "Parabéns por completar 'As Aventuras do Viajante Cego'!";
        choicesContainer.innerHTML = "";
    }
}

// Inicia o jogo quando a página é carregada
window.onload = startGame;
