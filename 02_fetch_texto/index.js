console.log('buscando texto');
buscaTexto()
  .then(texto => {
    document.getElementById('texto').innerText = texto;
    console.log('yay');
  })
  .catch(error => {
    console.log('error!');
    console.error(error);
  });

async function buscaTexto() {
  const response = await fetch('texto.txt');
  return await response.text();
}