// documentacao da api do github  https://developer.github.com/v3/
// requisição na api pela url https://api.github.com
// fazer GET na rota /users com seu user ex: get em https://api.github.com/users/reprograma

// const url = 'http://api.giphy.com/v1/gifs/search?q=asdfghjklçtyghjifdghj&api_key=dc6zaTOxFJmzC&limit=1&offset=0'

const url = 'https://api.github.com/users/cintiafumi'
// fetch(url)
//   .then(response => response.json())
//   .then(json => console.log(json))

async function buscarApi(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const json = await response.json();
      // criarImagem(json.data[0].images.original.url);
      criarImagem(json.avatar_url)
    } else {
      const err = `${response.status}: ${response.statusText}`
      criaErro(err);
    }
  } catch (error) {
    criaErro('Falha na requisição da API')
  }
}

function criarImagem(src) {
  document.body.innerHTML = `
      <img src=${src} >
    `
}

criaErro = (erro) => {
  document.body.innerHTML = `<h1 style="color:red">${erro}</h1>`
}

buscarApi(url)