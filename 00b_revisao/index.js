// 1.
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] alterar cor de <body>
// [] escutar o clique do botão
// [] criar função de alterar a cor usando rgb()
// [] usar Math.random() e Math.floor()

const body = document.body;
body.style.backgroundColor = 'purple';

const botao = document.querySelector('#trocaCor');
botao.addEventListener('click', mudaCor)

function mudaCor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  console.log(r, g, b);
}

// ------------------------------------------------------------------------
// 2. melhorando o código
// [] remover repetição de código
// [] anonymous function
// [] arrow function
// [] template string