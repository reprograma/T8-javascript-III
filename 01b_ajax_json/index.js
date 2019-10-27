// [] instanciar XMLHttpRequest()
// [] o que fazer depois que receber a resposta
// [] fazer a requisição com open() e send()

const req = new XMLHttpRequest();
const url = './data/dados.json'
req.onreadystatechange = tralala

function tralala() {
  if (this.readyState == 4) {
    const json = JSON.parse(this.response);
    const data = json.data;
    console.log(data);

    document.querySelector('#imagem').src = json.data[0].imagem;
  }
}

req.open("GET", url, true);
req.send();