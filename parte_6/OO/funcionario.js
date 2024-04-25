function Pessoa(nome) {
    this.nome = nome;

    this.dizOi = () => {
        console.log(`Oi, meu nome é ${this.nome}`);
    }
}

function Funcionario(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;

    // this.salario = salario;
    let _salario = salario;

    // Getters e Setters
    this.getSalario = () => {
        return `O salário de ${this.nome} é de ${_salario}`;
    }
    this.setSalario = (valor) => {
        if (typeof valor === 'number') {
            _salario = valor;
        } else {
            console.log('Valor inválido');
        }
    }

    Pessoa.call(this, nome);

    this.dizCargo = () => {
        console.log(`Meu cargo é ${this.cargo}`);
    }
}

const Pessoa1 = new Pessoa("Maria");
const Funcionario1 = new Funcionario("Maria", "Dev Front-end", 5000);


Funcionario1.dizOi();
Funcionario1.dizCargo();

Funcionario1.setSalario('mil');
console.log(Funcionario1.getSalario());
