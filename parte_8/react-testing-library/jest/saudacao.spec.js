const saudacao = require('./saudacao')

describe('Teste para saudacao', () => {
    test('deverá retornar "Olá, Maria"', () => {
        const olaMaria = saudacao.dizOla('Maria')
        expect(olaMaria).toBe('Olá, Maria')
        expect(olaMaria).toContain(',')
    })
})

expect([1,2,3,4,5]).toHaveLength(5)