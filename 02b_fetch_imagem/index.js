// 1.a. fetch da imagem
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] usar o método fetch() para buscar o arquivo meme.jpg
// [] usar método .then() para transformar o dado recebido
// [] apresentar <img>

// fetch('meme.jpg')
//   .then(function (response) {
//     return response.blob();
//   })
//   .then(function (blob) {
//     document.querySelector('#imagem').src = URL.createObjectURL(blob);
//   });

// 1.b. melhorando o código
// [] usar arrow function
// [] tratar o erro com método .catch()
// [] criar uma função chamada buscaImagem()
// [] tratar o erro que vem se errar a url do fetch
// [] mudar para async/await

buscaImagem = () => {
  fetch('meme.jpg')
    .then(response => {
      return response.blob();
    })
    .then(blob => {
      document.querySelector('#imagem').src = URL.createObjectURL(blob);
    })
    .catch(error => console.error('uepa'))
}

buscaImagem()