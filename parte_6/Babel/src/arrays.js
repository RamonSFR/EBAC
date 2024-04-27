const redesSociais = ['Facebook', 'Instragram', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`);
}

//forEach
redesSociais.forEach((nomeDaRede, indice) => {
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRede}`);
})


// Maps
const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];

const alunos2 = alunos.map(function (itemAtual) {
    return {
        nome: itemAtual,
        curso: 'Frontend'
    }
})

const numeros = [1, 2, 3, 4, 5];
const dobroDosNumeros = numeros.map((numeroAtual) => {
    return numeroAtual * 2;
})

console.log(alunos2);
console.log(dobroDosNumeros);


// find
const paula = alunos2.find((item) => {
    return item.nome.toLowerCase === 'paula';
})

const indiceDaPaula = alunos2.findIndex((item) => {
    return item.nome == 'Paula';
})

console.log(paula);
console.log(indiceDaPaula);


// every

function checaTodosFrontEnd() {
    if (alunos2.every((item) => {return item.curso == 'Frontend'})) {
        return true;
    } else {
        return false;
    }
}

console.log(checaTodosFrontEnd());
alunos2.push({
    nome: 'Lucio',
    curso: 'Backend'
})
console.log(checaTodosFrontEnd());



// some
alunos2.push({
    nome: 'Jonathan',
    curso: ['Backend', 'Frontend']
})

const existeAlgumAlunoDeBackend = alunos2.some((item) => {
    return item.curso.includes('Backend') && item.curso.includes('Frontend');
})

console.log(existeAlgumAlunoDeBackend);



// filter

function filtraAlunosBackEnd(aluno) {
    return aluno.curso.includes('Backend');
}

const alunosDeBackend = alunos2.filter(filtraAlunosBackEnd)

console.log(alunosDeBackend);


// Reduce

const nums = [10, 20, 30, 10];

const soma = nums.reduce((acumulador, itemAtual) => {
    return acumulador += itemAtual;
}, 0);

console.log(soma);