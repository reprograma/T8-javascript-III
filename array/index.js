// [] 1. Chamar js no html

// [] 2. Buscar a <div> com id igual a "root"

// [] 3. Buscar os dados de alunas-t8.json usando fetch()
//        https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API
//        https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch

// [] 4. Verificar o tipo de Response
//        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then

// [] 5. Tratar a lista usando split() 
//    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split

console.log('oi');


const root = document.querySelector('#root');
// console.log(root);

buscarDados()

function buscarDados() {
  const url = 'alunas-t8.json';
  fetch(url)
    .then(response => {
      console.log(response);

      console.log(response.headers.get('content-type'))
      return response.json()

    })
    .then(data => {
      const lista = data.alunas;
      console.log(lista);

    })
    .catch(err => console.error(err))
}