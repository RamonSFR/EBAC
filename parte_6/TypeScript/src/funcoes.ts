function calculaArea(base: number , altura: number): number {
    return base * altura;
}

const calculaArea2 = (base: number, altura: number): number => base * altura;

function somar(...args: number[]) {
    return args.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
};

function teste(): string | number {
    if (10 > 5) {
        return 'Dez maior que cinco';
    } else {
        return 5;
    }
}

const resultadoDeTeste = teste();