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
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos,
}

function exibeAtributo(nomeAtributo) {
    console.log(pessoa[nomeAtributo]);
}

Object.freeze(pessoa)

pessoa['sobrenome'] = undefined;
pessoa.nome = 'João';

if (pessoa['sobrenome']) {
    console.log('A pessoa tem um sobrenome');
}

if ('sobrenome' in pessoa) {
    console.log('A pessoa tem um sobrenome');
}

exibeAtributo('nome');

console.log(Object.keys(pessoa));
console.log(Object.keys(pessoa).length);
console.log(Object.values(pessoa));
