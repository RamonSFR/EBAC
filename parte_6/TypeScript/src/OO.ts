class Pessoa {
    nome: string;
    renda?: number;

    constructor(nome: string, renda?:number) {
        this.nome = nome;
        this.renda = renda;
    }

    dizOla(): string {
        return `Olá meu nome é ${this.nome}`;
    }
}

class ContaBancaria {
    protected saldo: number = 0;
    numeroDaConta: string;

    constructor(saldo: number, numeroDaConta: string) {
        this.saldo = saldo;
        this.numeroDaConta = numeroDaConta;
    }

    static retornaNumeroDoBanco() {
        return 125;
    }

    private getSaldo() {
        return this.saldo;
    }

    depositar(valor:number): void {
        this.saldo += valor;
    }
}

class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo += valor;
    }
}

const contaDoPedro = new ContaBancariaPessoaFisica(10000, '123456');