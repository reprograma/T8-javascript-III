// [] 1. Chamar JS no HTML
// [] 2. Confirmar conexão com o DOM
// [] 3. Fazer requisição GET com uso de ajax


console.log('fazendo fetch na imagem do meme');

const botao = document.querySelector('#buscaImagem');
// botao.addEventListener('click', fazerGET);

const img = document.querySelector('#imagem');


/* 
function fazerGET() {
  const http = new XMLHttpRequest();
  // console.log(http);

  http.open('GET', 'meme.jpg');

  http.send();

  http.onreadystatechange = function () {
    console.log(this.readyState, this.status);
    if (this.readyState == 4 && this.status == 200) {
      console.log(typeof http.response);
      const imgUrl = URL.createObjectURL(http.response.blob())
      console.log(imgUrl);

      img.src = imgUrl;
    }

  }
}
 */


buscaImg = () => {
  fetch('meeme.jpg')
    .then(response => {
      console.log(response);
      return response.blob();
    })
    .then(blob => {
      console.log(blob);
      document.getElementById('imagem').src = URL.createObjectURL(blob);
    })
    .catch(error => {
      console.log('erro!!!')
      console.error(error);

    });
}

botao.addEventListener('click', buscaImg().then(suc => console.log('uhul!')).catch(err => console.log('erroooooou!')));


/* 
catchImage()
  .then(response => {
    console.log('yay!');
  })
  .catch(error => {
    console.log('error!');
    console.error(error);
  })

async function catchImage() {
  const response = await fetch('meme.jpg');
  const blob = await response.blob();
  document.getElementById('imagem').src = URL.createObjectURL(blob);
}
 */