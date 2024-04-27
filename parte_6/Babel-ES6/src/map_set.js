// Map
let meuMap = new Map();
meuMap.set('nome', 'ramon');
meuMap.set('idade', 19);
meuMap.set('stack', 'html, css, js');

console.log(meuMap);

console.log(meuMap.get('nome'));

console.log(meuMap.size);

console.log(meuMap.has('nome'));

// meuMap.clear();
// console.log(meuMap.size);

for (let chave of meuMap.keys()) {
    console.log(chave);
}

for (let valor of meuMap.values()) {
    console.log(valor);
}


for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

meuMap.delete('stack');
console.log(meuMap);



// Set
const cpfs = new Set();
cpfs.add('77136736013');
cpfs.add('37951229024');
cpfs.add('76649005061');

console.log(cpfs);
console.log(cpfs.keys()); // Chave e valores do Set são iguais
console.log(cpfs.values());

cpfs.forEach((valor) => console.log(valor));

// Removendo itens repetidos com set
const array = ['Gian Souza', 'José Paulo', 'Maria Isabel', 'Luana', 'Luana', 'Gian Souza'];
const arrayComoSet = new Set([...array]);
const arraySemItensDuplicados = [...arrayComoSet];
