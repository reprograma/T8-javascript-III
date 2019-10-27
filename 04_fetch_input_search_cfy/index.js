// fetch da imagem
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] usar o método fetch() para a url da API Giphy
// [] transformar o dado recebido
// [] apresentar <img>

const div = document.querySelector('#root');
const input = document.querySelector('#gifInput');
const botao = document.querySelector('#gifButton');

loadGifs = async (array) => {
  return await array.forEach(item => {
    const imgUrl = item.images.fixed_height.url;
    const img = document.createElement('img');
    img.src = imgUrl;
    div.appendChild(img);
  });
}

botao.addEventListener('click', async (e) => {
  e.preventDefault()
  div.innerHTML = '<img src="loading.gif">';
  const q = input.value;
  const apiUrl = `http://api.giphy.com/v1/gifs/search?q=${q}&api_key=dc6zaTOxFJmzC&offset=0`

  try {
    const response = await fetch(apiUrl);
    const json = await response.json();
    div.innerHTML = '';
    const data = json.data;
    console.log(data);

    if (!data.length) {
      console.log('Nenhuma imagem encontrada');
      div.innerHTML = `Não foi encontrado nenhum gif de ${q}`
    } else {
      // data.forEach(item => {
      //   const imgUrl = item.images.fixed_height.url;
      //   const img = document.createElement('img');
      //   img.src = imgUrl;
      //   div.appendChild(img);
      // });
      loadGifs(data);

      document.querySelector('form').reset();
      input.focus();
    }
  } catch (error) {
    console.error(error);
    div.innerHTML = error;
  }
})