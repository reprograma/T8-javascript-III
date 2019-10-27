// [] 1. Chamar js no html

// [] 2. Buscar a <div> com id igual a "root"

// [] 3. Buscar os dados de alunas-t8.json usando fetch()
//        https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API
//        https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch

// [] 4. Verificar o tipo de Response
//        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then

// [] 5. Tratar a lista usando split() 
//    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split

const root = document.querySelector('#root');
// console.log(root);



console.log('fetch uma aluna');
buscaJSON()

async function buscaJSON() {
  try {
    const response = await fetch('t8-alunas.json');
    const json = await response.json();
    console.log(json);
  } catch (error) {
    throw new Error('Busca deu errado', error)
  }

}