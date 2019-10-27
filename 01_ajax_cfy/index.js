// [] instanciar XMLHttpRequest()
// [] fazer a requisição com open() e send()
// [] função que faz algo com a response


// const httpRequest = new XMLHttpRequest();
// const url = './data/dados.json';
// httpRequest.open('GET', url, true);
// httpRequest.send();

// httpRequest.onreadystatechange = () => {
//   if (httpRequest.status === 200 && httpRequest.readyState === 4) {
//     const json = JSON.parse(httpRequest.response);
//     const url = json.data[0].imagem;
//     const div = document.querySelector('#root');
//     const img = document.createElement('img');
//     img.src = url;
//     div.appendChild(img);
//   }
// }

// [] iterar sobre o array e mostrar as três imagens usando for()
// [] iterar sobre o array e mostrar as três imagens usando for...of
// [] iterar sobre o array e mostrar as três imagens usando forEach

// const httpRequest = new XMLHttpRequest();
// const url = './data/dados.json';

// httpRequest.open('GET', url, true);
// httpRequest.send();

// httpRequest.onreadystatechange = () => {
//   if (httpRequest.status === 200) {
//     if (httpRequest.readyState === 4) {
//       const json = JSON.parse(httpRequest.response);
//       const url = json.data[0].imagem;
//       const div = document.querySelector('#root');
//       const img = document.createElement('img');
//       img.src = url;
//       div.appendChild(img);
//     }
//   }
// }

// [] encapsular em Promise()

const url = './data/dados.json';

function buscaImagens(url) {
  return new Promise((resolve, reject) => {
    const httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', url, true);
    httpRequest.send();

    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === 4) {
        if (httpRequest.responseText) {
          if (httpRequest.status === 200) {
            resolve(httpRequest.responseText);
          } else {
            reject(httpRequest.status)
          }
        }
      }
    }
  });
}

const div = document.querySelector('#root');

function tratarJSON(response) {
  if (response) {
    const json = JSON.parse(response);
    const data = json.data;
    for (let i = 0; i < data.length; i++) {
      const url = data[i].imagem;
      const img = document.createElement('img');
      img.src = url;
      img.width = '200'
      div.appendChild(img);
    }
  }
}

buscaImagens(url)
  .then(tratarJSON)
  .catch(erro => {
    console.error(erro);
    const url = `https://http.cat/${erro}`;
    const img = document.createElement('img');
    img.src = url;
    div.appendChild(img);
  })




// [] instanciar XMLHttpRequest()
// [] o que fazer depois que receber a resposta
// [] fazer a requisição com open() e send()
// [] tratar response

// const url = './data/dados.json';

// const httpRequest = new XMLHttpRequest();
// httpRequest.open('GET', url, true);
// httpRequest.send();

// httpRequest.onreadystatechange = () => {
//   if (httpRequest.status === 200) {
//     if (httpRequest.readyState === 4) {
//       const json = JSON.parse(httpRequest.response);
//       const url = json.data[0].imagem;
//       const div = document.querySelector('#root');
//       const img = document.createElement('img');
//       img.src = url;
//       div.appendChild(img);
//     }
//   }
// }

// [] iterar sobre o array e mostrar as três imagens usando for()
// const url = './data/dados.json';
// const div = document.querySelector('#root');

// const httpRequest = new XMLHttpRequest();
// httpRequest.open('GET', url, true);
// httpRequest.send();

// httpRequest.onreadystatechange = () => {
//   if (httpRequest.status === 200) {
//     if (httpRequest.readyState === 4) {
//       const json = JSON.parse(httpRequest.response);
//       const data = json.data;
//       for (let i = 0; i < data.length; i++) {
//         const url = data[i].imagem;
//         const img = document.createElement('img');
//         img.src = url;
//         img.width = '200'
//         div.appendChild(img);
//       }
//     }
//   }
// }

// [] iterar sobre o array e mostrar as três imagens usando for...of
// const url = './data/dados.json';
// const div = document.querySelector('#root');

// const httpRequest = new XMLHttpRequest();
// httpRequest.open('GET', url, true);
// httpRequest.send();

// httpRequest.onreadystatechange = () => {
//   if (httpRequest.status === 200) {
//     if (httpRequest.readyState === 4) {
//       const json = JSON.parse(httpRequest.response);
//       const data = json.data;
//       for (const item of data) {
//         const url = item.imagem;
//         const img = document.createElement('img');
//         img.src = url;
//         img.width = '200'
//         div.appendChild(img);
//       }
//     }
//   }
// }

// [] iterar sobre o array e mostrar as três imagens usando forEach
const url = './data/dados.json';
const div = document.querySelector('#root');

const httpRequest = new XMLHttpRequest();
httpRequest.open('GET', url, true);
httpRequest.send();

httpRequest.onreadystatechange = () => {
  if (httpRequest.status === 200) {
    if (httpRequest.readyState === 4) {
      const json = JSON.parse(httpRequest.response);
      const data = json.data;
      data.forEach(element => {
        const url = element.imagem;
        const img = document.createElement('img');
        img.src = url;
        img.width = '200'
        div.appendChild(img);
      });
    }
  }
}


// [] encapsular em Promise()
// [] tratar erro .then() e .catch()