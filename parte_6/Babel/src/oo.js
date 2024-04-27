class Pokemon {
    #hp = 100;

    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }

    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`);
    }

    recebeuAtaque() {
        this.#hp -= 10;
    }

    exibeHp() {
        console.log(this.#hp);
    }
}

class Pikachu extends Pokemon {
    constructor(nome, tipo, nivel, dono) {
        super('Pikachu', 'Elétrico');
    }

    atacar(i=0) {
        const ataques = ['choque do trovão', 'bite','sei lá']
        console.log(`${this.nome} atacou com ${ataques[i]}`)
    }
}

const pikachuDoAsh = new Pikachu();

pikachuDoAsh.recebeuAtaque();
pikachuDoAsh.hp = 5000;
console.log(pikachuDoAsh.hp);
pikachuDoAsh.exibeHp();

pikachuDoAsh.atacar(1)
console.log(pikachuDoAsh);