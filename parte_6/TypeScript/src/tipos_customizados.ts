type aluno = {
    nome: string;
    cursos?: string[]; // ? -> opcional
    idade: number;
}

const alunos: aluno[] = [
    {
        nome: 'Carlos',
        cursos: ["Frontend", "UX/UI"],
        idade: 27
    },
    {
        nome: 'Ana',
        cursos: ["Frontend", "Python"],
        idade: 23
    }
]

alunos.push({
    nome: 'Julia',
    cursos: ["Arquitetura"],
    idade: 29
})

const novoAluno: aluno = {
    nome: 'Lucas',
    idade: 32
}

function exibeAluno(aluno: aluno) {
    console.log(aluno.nome);
}