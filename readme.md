
# Javascript III :purple_heart:


  - [DOM](https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM/Introdu%C3%A7%C3%A3o)
    ```
    const botao = document.querySelector('button');
    ```

  - [addEventListener()](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/addEventListener)
    ```
    botao.addEventListener('click', function() {
        console.log('clicou no botão')
    });
    ```
  - [Math.random](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
    ```
    const num = Math.random(); // número aleatório entre 0 e 1
    ```
  - [Template string](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/template_strings)
    ```
    const texto1 = 'olá,' + nome + '!'; // concatenação de string
    const texto2 = `olá, ${nome}!` // template string
    ```

  - [Function](https://developer.mozilla.org/pt-BR/docs/Glossario/Fun%C3%A7%C3%A3o)
    ```
    function mensagem() {
        console.log('olá!')
    }
    ```
  - [Arrow function](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
    - função sem parâmetros
        ```
        mensagem = () => console.log('olá!');
        ```
    - função com um parâmetro só
        ```
        mensagem = nome => console.log(`olá, ${nome}!`);
        ```
    - função com mais parâmetros
        ```
        mensagem = (nome, sobrenome) => console.log(`olá, ${nome} ${sobrenome}`);
        ```
    - função com mais instruções
        ```
        mensagem = (nome, sobrenome) => {
            const nomeCompleto = `${nome} ${sobrenome}`;
            console.log(`olá, ${nomeCompleto});
        }
        ```
    Os parênteses são opcionais quando há apenas um parâmetro, as chaves e o `return` são opcionais quando há apenas uma linha de instrução.
  - [for](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for)
    ```
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        console.log(element);
    }
    ```
  - [for...of](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of)
    ```
    for (const element of array) {
        console.log(element); 
    }
    ```
  - [forEach](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
    ```
    array.forEach(element => {
        console.log(element);
    });
    ```
  - [innerHTML](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML)
    ```
    document.body.innerHTML = `
        <div>
            <h1>Javascript</h1>
            <p>Turma 8</p>
        </div>
    `;
    ```
  - [setTimeout]()
    ```
    setTimeout(() => {
        console.log('Instrução executada após 3 segundos');
    }, 3000);
    ```
  - [AJAX](https://developer.mozilla.org/pt-BR/docs/Web/Guide/AJAX/Getting_Started)
    ```
    const httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', 'https://api.github.com');
    httpRequest.send();
    httpRequest.onreadystatechange = nomeDaFuncao;
    function nomeDaFuncao(){
        // processar a resposta do servidor
    };

  - [Promise](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise)
    ```
    // declarando a função:
    function getDados(url) {
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            req.open('GET', url);
            req.send();
    
            tratarResponse = () => {
                if (req.readyState === 4) {
                    if (req.status === 200) {
                        const response = req.response;
                        resolve(response);
                    } else {
                        const erro = `${req.status}: ${req.statusText}`;
                        reject(erro);
                }
            }
        }
    
        req.onreadystatechange = tratarResponse;
        });
    }
    
    const url = 'https://api.github.com/users/reprograma';
    // chamando a função:
    getDados(url)
        .then(response => {
            const json = JSON.parse(response);
            console.log(json);
        })
        .catch(err => console.error(err));
    ```
  - [fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch)
    ```
    function getDados (url) {
        fetch(url)
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(erro => console.log(erro));
    }
    getDados(url);
    ```

  - [async/await](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/async_function)
    ```
    async function getDados(url) {
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }
    getDados(url)
          .then(res => console.log(res))
          .catch(err => console.error(err));
    ```
  - [try...catch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch)
    ```
    async function getDados(url) {
        try {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
        } catch (err) {
            console.error(err);
        }
    }
    getDados(url);
    ```

### Extensão usadas no VSCode
* Live Server
    * **Documentação:** https://github.com/ritwickdey/vscode-live-server
    * **Instalação:** 
        No VSCode, ir em File > Preferences > Extensions
        Buscar pelo nome Live Server e instalar
    * **Configurar o Live Server:**
        Ir em ***File > Preferences > Settings***
        Na aba ***User > Extensions > Live Server Config > Settings: Custom Browser***
        Selecionar ***chrome***

### Verificar seu ip e acessar o index.html pelo celular
* No terminal digite:
    `ipconfig //all`
* Verifique o endereço ipv4. Deverá ser similar a:
    `192.168.x.x`
* Deixar o notebook e o celular conectados na mesma rede privada de internet (wifi ou dados)
* Ao dar **Go Live** pelo VSCode, verifique o endereço e a porta do arquivo na barra de endereço do navegador (ex: 127.0.0.1:5500/00a_revisao/)
* Digitar no navegador do seu celular o endereço do seu ip seguido do número da porta e do endereço do arquivo (ex: 192.168.x.x:5500/00a_revisao/)

---

### API
* **Giphy API**
    * Documentação - https://giphy.api-docs.io/
    * url da API - http://api.giphy.com/v1
    * endpoint Random GET /giphy/random - https://giphy.api-docs.io/1.0/gifs/random
        * exemplo: http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC
    * endpoint Search GET /gifs/search - https://giphy.api-docs.io/1.0/gifs/search-1
        * exemplo: http://api.giphy.com/v1/gifs/search?q=cat&api_key=dc6zaTOxFJmzC&limit=3&offset=0


* **Github API**
    * Documentação - https://developer.github.com/v3/
    * url API - https://api.github.com
    * endpoint Users GET /users/:username - https://developer.github.com/v3/users/#get-a-single-user
    * exemplo: https://api.github.com/users/reprograma
