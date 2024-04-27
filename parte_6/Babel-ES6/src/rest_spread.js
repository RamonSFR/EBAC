// Sem REST
function somar() {
    let soma = 0;
    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }
    return soma;
}

console.log(somar(10, 20, 14, 25))


// Com REST
function somarComRest(...numeros) {
    return numeros.reduce((total, numeroAtual) => {
        return total += numeroAtual;
    })
}

console.log(somarComRest(10, 20, 14, 25));



// Spread
const numeros = [1, 2, 3, 4];
console.log(...numeros);

const timesDeFutebolDeSp = ['Santos', 'Palmeiras', 'Bragantino', 'São Paulo'];
const timesDeFutebolDoRio = ['Vasco', 'Botafogo', 'Flamengo', 'Fluminense'];
const timesDeFutebol = [...timesDeFutebolDeSp, ...timesDeFutebolDoRio];

console.log(timesDeFutebol);

const carroDaJulia = {
    marca: 'Ford',
    modelo: 'Fiesta',
    motor: '1.0'
}

const carroDaAna = {
    ...carroDaJulia,
    motor: '1.6'
}

console.log(carroDaJulia, carroDaAna);




// Desestruturação
const motorDoCarroDaAna0 = carroDaAna.motor;
const { motor: motorDoCarroDaAna } = carroDaAna;
const { motor: motorDoCarroDaJulia } = carroDaJulia;

console.log(motorDoCarroDaAna);
console.log(motorDoCarroDaJulia);

const [item1, item2, item3, ...outrosTimes] = timesDeFutebol;
console.log(item1, item2, item3);
console.log(outrosTimes);
