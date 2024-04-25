function Pessoa(nome) {
    this.nome = nome;

    this.dizOi = () => {
        console.log(`Oi, meu nome é ${this.nome}`);
    }
}

function Funcionario(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
    Pessoa.call(this, nome);

    this.dizCargo = () => {
        console.log(`Meu cargo é ${this.cargo}`);
    }
}

const Pessoa1 = new Pessoa("Maria");
const Funcionario1 = new Funcionario("Maria", "Dev Front-end", 5000);


Funcionario1.dizOi();
Funcionario1.dizCargo();
