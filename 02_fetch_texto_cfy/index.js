// fetch da imagem
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] criar uma função async/await chamada buscaTexto()
// [] usar fetch() para buscar o arquivo texto.txt
// [] tratar o erro com método .catch()

console.log('buscando texto');
buscaTexto()
  .then(response => {
    console.log('yay');
  })
  .catch(error => {
    console.log('error!');
    console.error(error);
  });

async function buscaTexto() {
  const response = await fetch('texto.txt');
  const texto = await response.text();
  document.getElementById('texto').innerText = texto;
}