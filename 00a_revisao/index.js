// 1.
// [x] adicionar a tag <script> no html
// [x] verificar se está lendo index.js
// [x] alterar cor de <body>
// [x] escutar o clique do botão
// [x] criar função de alterar a cor usando rgb()
// [x] usar Math.random() e Math.floor() ou parseInt()

const body = document.body;
const botao = document.getElementById('trocaCor');

body.style.backgroundColor = 'purple';
// 'rgb(____,_____,____)'
botao.addEventListener('click', mudaCor);

function geraInteiro() {
  const n = parseInt(Math.random() * 255);
  return n;
}

function mudaCor() {
  const r = geraInteiro();
  const g = geraInteiro();
  const b = geraInteiro();
  body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
}