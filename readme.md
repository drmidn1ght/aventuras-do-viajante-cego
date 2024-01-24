# Aventuras do Viajante Cego

## Introdução

Bem-vindo(a) ao projeto "Aventuras do Viajante Cego", uma experiência interativa construída em HTML5, CSS3 e JavaScript. Neste jogo, você assume o papel de um viajante cego que enfrenta escolhas cruciais em uma encruzilhada, cada uma levando a resultados diferentes.

## Objetivos do Projeto

O projeto foi concebido com dois objetivos principais:

1. **Aprendizado Autodidata:** Como uma desenvolvedora de jogos iniciante, este projeto serviu como uma oportunidade para explorar a criação de uma estrutura de decisões e aprender de forma prática.

2. **Acessibilidade:** Buscando proporcionar uma experiência de jogo acessível, o projeto foi desenvolvido para ser facilmente navegável por leitores de tela, tornando-o amigável para deficientes visuais.

## Como Rodar o Projeto

### Opção 1: Acesso Online

A forma mais simples de jogar é acessar o [link do GitHub Pages](https://drmidn1ght.github.io/aventuras-do-viajante-cego/).

### Opção 2: Clonar o Repositório

1. Abra o Git Bash.
2. Execute o comando: `git clone https://github.com/drmidn1ght/aventuras-do-viajante-cego.git`.
3. Aguarde a conclusão da clonagem.
4. Abra o arquivo `index.html` em seu navegador.

## Lógica Implementada

### Variáveis Globais

- `currentStoryIndex`: Rastreia o índice atual da história.
- `storyData`: Matriz contendo objetos representando diferentes partes da história, cada um com título, texto descritivo e opções de escolha.

### Funções Principais

1. **`startGame`:** Inicia o jogo chamando `displayStory` para mostrar a primeira parte da história.
2. **`makeChoice`:** Atualiza `currentStoryIndex` com o próximo índice com base na escolha do jogador e chama `displayStory`.
3. **`displayStory`:** Atualiza dinamicamente o conteúdo da página com base na parte atual da história.

### Início do Jogo

O jogo é iniciado automaticamente quando a página é carregada.

## Considerações Finais

Este projeto, embora simples, representa um passo inicial no desenvolvimento de jogos. Com uma estrutura minimalista e enredo genérico, seu propósito principal foi proporcionar aprendizado. Futuros projetos buscarão explorar habilidades de roteirização e sonoplastia, mantendo sempre a acessibilidade para deficientes visuais.

## Informações de Contato

- LinkedIn: [uxwriter95](https://www.linkedin.com/uxwriter95)
- Discord: dr.midn1ght
- E-mail: ana.drmidnight@gmail.com
