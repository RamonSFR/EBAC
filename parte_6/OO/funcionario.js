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
        return _salario;
    }
    this.setSalario = (valor) => {
        if (typeof valor === 'number') {
            _salario = valor;
        } else {
            console.log('Valor inválido');
        }
    }

    this.aumento = (porcentagem = 10) => {
        const novoSalario = _salario * (1 + (porcentagem / 100));
         _salario = novoSalario;
    }

    Pessoa.call(this, nome);

    this.dizCargo = () => {
        console.log(`Meu cargo é ${this.cargo}`);
    }
}

function Estagiario(nome) {
    Funcionario.call(this, nome, "Estagiario", 2000);

    this.aumento = (porcentagem = 7) => {
        const novoSalario = this.getSalario() * (1 + (porcentagem / 100));
        this.setSalario(novoSalario);
    }
}

const Pessoa1 = new Pessoa("Maria");
const Funcionario1 = new Funcionario("Maria", "Dev Front-end", 5000);
const Funcionario2 = new Estagiario("Pedro", "Estagiario", 2000);

Funcionario1.aumento();
console.log(Funcionario1.getSalario());

Funcionario2.aumento();
console.log(Funcionario2.getSalario());
