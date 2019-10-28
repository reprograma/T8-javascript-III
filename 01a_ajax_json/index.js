// [] instanciar XMLHttpRequest()
// [] o que fazer depois que receber a resposta
// [] fazer a requisição com open() e send()
// [] tratar response

const div = document.querySelector('#root');
const img = document.createElement('img');

const request = new XMLHttpRequest();

request.onreadystatechange = getDados;

function getDados() {
  const response = request.response;
  const json = JSON.parse(response);
  const imgSrc = json.data[0].imagem;

  img.src = imgSrc;
  div.appendChild(img)
}

const url = './data/dados.json'
request.open('GET', url);
request.send();