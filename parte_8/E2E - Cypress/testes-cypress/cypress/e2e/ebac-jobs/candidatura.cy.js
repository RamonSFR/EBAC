/// <reference types="cypress" />

describe('Testes para a página de candidatura', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app')
    })
    
    it('levar o usuário até o formulário de inscrição', () => {
        cy.get(':nth-child(1) > .Vaga_vagaLink__DeFkk').click()
        cy.get('input').should('have.length', 7)
    }) 

    it('deve preencher o formulário de inscrição', () => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/vagas/1')
        cy.get('input[name="nome-completo"]').type("Ramon Sávio Fontes Rocha")
        cy.get('input[name="email"]').type("ramonsaviofontesrocha@gmail.com")
        cy.get('input[name="telefone"]').type("83999358377")
        cy.get('input[name="endereco"]').type("rua juracy de carvalho luna n 31")
        cy.get('#linux').check()
        cy.get('select').select('bacharelado')
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        }))
    })
})