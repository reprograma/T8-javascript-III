// fetch da imagem
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] usar o método fetch() para a url da API Giphy
// [] transformar o dado recebido
// [] apresentar <img>
// [] usar async/await, then(), .catch(), arrow function

const img = document.querySelector('#imagem');
const url = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC'

const api = 'http://api.giphy.com/v1'
const endpoint = '/gifs/random'


buscaGif = async () => {
  const response = await fetch(url)
  const json = await response.json();
  const imgURL = json.data.image_url;
  img.src = imgURL;
}

buscaGif()
  .then(response => console.log('sucesso!'))
  .catch(err => console.error(err))