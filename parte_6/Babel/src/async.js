// Promises
function funcaoMuitoPesada() {
    let execucoes = 0;
    for (let i = 0; i < 1000000000; i++) {
        execucoes++;
    }
    return execucoes;
}

const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0;
        for (let i = 0; i < 1000000000; i++) {
            execucoess++;
        }
        resolve(execucoes);
    } catch (e) {
        reject('Deu erro na iteração dos números');
    }
})

const promiseComParametros = (login, senha) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Logado com usuário: ${login}`)
    }, 3000);
})

// console.log('inicio');
// funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(e => console.log(e));
// console.log('fim');



// Async e Await
async function execucaoPrincipal() {
    console.log('inicio');
    // await funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(e => console.log(e));
    promiseComParametros('Ramon@gmail.com', '123456').then(resultado => console.log(resultado));
    
    try {
        const resultado = await funcaoMuitoPesadaPromise;
        console.log(resultado);
    } catch (e) {
        console.log(e);
    }

    console.log('fim');
}

execucaoPrincipal();