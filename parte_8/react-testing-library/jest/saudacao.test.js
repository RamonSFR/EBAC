const saudacao = require('./saudacao')

describe('testes para saudacao', () => {
    test('deverá retornar olá maria', () => {
        const olaMaria = saudacao.dizOla("maria")

        expect(olaMaria).toBe("olá maria")
        expect(olaMaria).toContain('olá')
        expect(olaMaria).toContain(' ')
    })
})