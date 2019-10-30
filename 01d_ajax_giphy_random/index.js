// XMLHttpRequest na rota random

const urlRequest = `http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC`

const request = new XMLHttpRequest()
request.onreadystatechange = mostraGif;
request.open('GET', urlRequest);
request.send();

function mostraGif() {
  if (request.readyState === 4 && request.status === 200) {
    const response = request.response;
    const json = JSON.parse(response);

    const imgUrl = json.data.images.original.url;

    const img = document.getElementById('imagem');
    img.src = imgUrl;
  }
}