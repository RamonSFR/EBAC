function soma(a, b) {
    return a + b
}

function subtracao(a, b) {
    return a - b
}

function multiplicacao(a, b) {
    return a * b
}

function divisao(a, b) {
    return a / b
}

console.log(multiplicacao(3, 3))

module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao
}