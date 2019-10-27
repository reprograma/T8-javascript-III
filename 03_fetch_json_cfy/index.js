// fetch da imagem
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] criar uma função async/await chamada buscaTexto()
// [] usar fetch() para buscar o arquivo aluna.json
// [] apresentar da seguinte forma:
/* 
<div id="root">
  <h3>Nome da Aluna</h3>
  <p>Turma 5</p>
  <a href="github.com/nome-da-aluna" target="_blank">Github</a>
</div>
*/

console.log('fetch uma aluna');
buscaJSON()
  .then(response => {
    console.log('yay');
  })
  .catch(error => {
    console.log('error!');
    console.error(error);
  });

async function buscaJSON() {
  const response = await fetch('aluna.json');
  const json = await response.json();
  console.log(json);
  const {
    nome,
    turma,
    github
  } = json;
  document.getElementById('root').innerHTML = `
    <h3>${nome}</h3>
    <p>Turma ${turma}</p>
    <a href="${github}" target="_blank">Github</a>
  `
}