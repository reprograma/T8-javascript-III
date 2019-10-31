// fetch da imagem
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] usar o endpoint de busca
// [] usar o método fetch() para a url da API Giphy
// [] transformar o dado recebido
// [] apresentar <img>

const input = document.querySelector('#gifInput');
const botao = document.querySelector('#gifButton');
const div = document.querySelector('#root');
botao.addEventListener('click', (e) => fazerFetch(e));

function fazerFetch(event) {
  event.preventDefault();
  const valorInput = input.value;
  div.innerHTML = '';
  input.value = ''
  // console.log(valorInput);
  const url = `http://api.giphy.com/v1/gifs/search?q=${valorInput}&api_key=dc6zaTOxFJmzC&limit=30&offset=0`

  fetch(url)
    .then(resposta => {
      if (!resposta.ok) {
        console.error(resposta.statusText);
        mostrarErro(resposta.statusText);
      }
      return resposta.json()
    })
    .then(json => mostrarResultado(json))
    .catch(e => mostrarErro(e))
}
mostrarErro = (e) => {
  div.innerHTML = `<h1>${e}</h1>`
}

function mostrarResultado(json) {
  if (json.message) {
    mostrarErro(json.message)
  } else {
    const arr = json.data
    console.log(arr);
    arr.forEach(element => {
      const srcImg = element.images.original.url
      div.innerHTML += `
      <img src=${srcImg}>
      `
    });
  }
}