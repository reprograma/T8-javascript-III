console.log('fetch uma aluna');
buscaJSON()
  .then(aluna => {
    console.log(aluna);
    const {
      nome,
      turma,
      github
    } = aluna;
    document.getElementById('aluna').innerHTML = `
      <h3>${nome}</h3>
      <p>Turma ${turma}</p>
      <a href="${github}" target="_blank">Github</a>
    `
    console.log('yay');
  })
  .catch(error => {
    console.log('error!');
    console.error(error);
  });

async function buscaJSON() {
  const response = await fetch('aluna.json');
  return response.json();
}

// function