// [] instanciar XMLHttpRequest()
// [] fazer a requisição com open() e send()
// [] função que faz algo com a response

const httpRequest = new XMLHttpRequest();
// const url = 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC&limit=1&offset=0';
const url = './data/dados.json'
httpRequest.open("GET", url, true);
httpRequest.send();
httpRequest.onreadystatechange = tralala

function tralala() {
  // console.log(httpRequest.response);
  // const json = JSON.parse(httpRequest.response);

  // console.log(this);
  // console.log(this.response);
  // console.log(this.readyState, this.status);

  if (this.readyState == 4) {
    const json = JSON.parse(this.response);
    const data = json.data;
    console.log(data);


    // document.querySelector('#imagem').src = json.data[0].imagem;

    // for (let i = 0; i < data.length; i++) {
    //   // console.log(data[i].imagem)
    //   const imgUrl = data[i].imagem;
    //   const img = document.createElement('img');
    //   img.src = imgUrl;
    //   img.width = '200';
    //   document.body.appendChild(img);
    // }

    // for (const item of data) {
    //   console.log(item)
    // }

    for (const iterator of data) {
      console.log(iterator);

    }

    // data.forEach(element => {
    //   console.log(element);
    //   const imgUrl = element.imagem;
    //   const img = document.createElement('img');
    //   img.src = imgUrl;
    //   img.width = '200';
    //   document.body.appendChild(img);
    // });


  }
}