const carroDoJoao = {
    fabricante: 'ford',
    modelo: 'fiesta',
    ano: 2020,
    acelerar: () => {
        console.log('Vrummm');
    } 
}

// Funções construtoras
function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = () => {
        console.log('Vrummm');
    }
}

const CarroDoJoao2 = new Carro('Fiesta', 'Ford', 2020, 2019);
const carroDaMaria = new Carro('Ka', 'Ford', 2021, 2020);

const nome = 'Ramon';
const idade = 19;
const ehMaiorDeIdade = true;
const conhecimentos = ['HTML', "CSS", "JS"];

const pessoa = {
    const: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos,
}

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof ehMaiorDeIdade);
console.log(typeof conhecimentos);
console.log(typeof pessoa);

console.log(carroDaMaria instanceof Carro);
console.log(conhecimentos instanceof Array);