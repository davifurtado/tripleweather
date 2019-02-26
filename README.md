Relatório do teste de nivelamento JavaScript/REACT

Foi um teste divertido e desafiador, onde aprendi e superei problemas.
Consegui identificar pontos que vou melhorar. Abaixo está o meu relatório com comentários, dificuldades que identifiquei e possíveis implementações que vou fazer para adicionar este aplicativo ao meu portfólio.

Batizei o app de tripleweather

- Escrevi em REACT
- Cada cidade possui o seu próprio domain. Utilizei o react-router-dom para isto
- Usei a API do OpenWeatherMap e o 'fetch' do próprio JavaScript (não julguei necessário a utilização de uma biblioteca para esta tarefa por ser uma aplicação pequena). Não possuía API de horário local, portanto quando refatorar o código, vou implementar horário local e a timezone através de uma função, ou buscar a informação correta de uma API de hora local.

Melhorias:
- adicionar uma imagem característica de plano de fundo para cada cidade. 
- adicionar uma aba para escolher a cidade utilizando uma API com valores dinâmicos.

Features:
- Layout totalmente responsivo.
- Ao abrir em um dispositivo com uma tela menor (ou diminuir o tamanho da janela do browser) que 400px o "card" se funde com o plano de fundo, dando a impressão de ser um componente só.
