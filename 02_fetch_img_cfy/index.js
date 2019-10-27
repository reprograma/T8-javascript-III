// fetch da imagem
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] usar o método fetch() para buscar o arquivo meme.jpg
// [] usar método .then() para transformar o dado recebido
// [] apresentar <img>

// melhorando o código
// [] tratar o erro com método .catch()
// [] criar uma função chamada buscaImagem()
// [] mudar para async/await
// [] usar arrow function

console.log('fazendo fetch na imagem do meme');

const botao = document.querySelector('#buscaImagem');

const img = document.querySelector('#imagem');


// fetch('meme.jpg')
//   .then(response => {
//     console.log(response);
//     return response.blob();
//   })
//   .then(blob => {
//     console.log(blob);
//     document.getElementById('imagm').src = URL.createObjectURL(blob);
//     return ('Imagem criada com sucesso')
//   })
//   .catch(error => {
//     console.log('Erro ao criar a imagem!!!')
//     console.error(error);
//   });


buscaImagem = async () => {
  const response = await fetch('meme.jpg');
  const blob = await response.blob();
  document.querySelector('#imagem').src = URL.createObjectURL(blob);
}

buscaImagem()
  .then(res => console.log('yay!'))
  .catch(e => console.log('errou!'))