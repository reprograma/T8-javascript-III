// 1.
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] alterar cor de <body>
// [] escutar o clique do botão
// [] criar função de alterar a cor usando rgb()
// [] usar Math.random() e Math.floor() ou parseInt()

// const body = document.querySelector('body');
// body.style.backgroundColor = 'purple';


// const botao = document.querySelector('#trocaCor');
// botao.addEventListener('click', mudaCor)

// function mudaCor() {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);

//   body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
//   console.log(r, g, b);
// }

// 2. melhorando o código
// [] remover repetição de código
// [] anonymous function
// [] arrow function
// [] template string

// num = () => Math.floor(Math.random() * 256);

// const body = document.body;
// const botao = document.querySelector('#trocaCor');
// botao.addEventListener('click', () => {
//   const r = num();
//   const g = num();
//   const b = num();
//   body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
// });


// ------------------------------------------------------------------------
// 3. JS avançado
// [] criar função que gera rgb(___, ___, ___)
// [] criar função que gera array
// [] usar spread

// num = () => Math.floor(Math.random() * 256);

// criarArrayRandom = () => {
//   const array = new Array(3);
//   for (let i = 0; i < array.length; i++) {
//     array[i] = num();
//   }
//   return array;
// }

// transformaArrayEmRGB = (r, g, b) => {
//   return `rgb(${r}, ${g}, ${b})`
// }

// const body = document.body;
// const botao = document.querySelector('#trocaCor');
// botao.addEventListener('click', () => {
//   const rgbNum = criarArrayRandom();
//   const rgb = transformaRGB(...rgbNum)
//   body.style.backgroundColor = rgb
// });


// ------------------------------------------------------------------------
// 4. JS avançado
// [] callback

num = () => Math.floor(Math.random() * 256);

criarArrayRandom = (sucesso, erro) => {
  setTimeout(() => {
    const array = new Array(3);
    for (let i = 0; i < array.length; i++) {
      array[i] = num();
    }
    if (array.length) {
      sucesso(...array);
    } else {
      const e = new Error('Falhou');
      erro(e);
    }
  }, 500);
}

sucesso = (r, g, b) => {
  const rgb = `rgb(${r}, ${g}, ${b})`
  body.style.backgroundColor = rgb
}

erro = (e) => {
  console.error(e);
}

const body = document.body;
const botao = document.querySelector('#trocaCor');
botao.addEventListener('click', () => {
  criarArrayRandom(sucesso, console.log());
});