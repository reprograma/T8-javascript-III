// [] instanciar XMLHttpRequest()
// [] o que fazer depois que receber a resposta
// [] fazer a requisição com open() e send()
// [] tratar response

const div = document.querySelector('#root');
const img = document.createElement('img');

const request = new XMLHttpRequest();

request.onreadystatechange = getDados;

function getDados() {
  if (request.readyState === 4 && request.status === 200) {
    const response = request.response;
    const json = JSON.parse(response);
    const data = json.data;
    const obj = data[0]

    const imgSrc = obj.imagem
    img.src = imgSrc;
    div.appendChild(img);
  } else {
    console.log(request.readyState, request.status);
  }
}

const url = './data/dados.json'
request.open('GET', url);
request.send();