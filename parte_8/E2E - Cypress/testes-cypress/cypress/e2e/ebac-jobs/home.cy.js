/// <reference types="cypress" />

describe('Testes para a Home', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app')
    })
    
    it('Deve renderizar 4 vagas', () => {
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 4)
    })

    it('deve filtrar por fullstack', () => {
        cy.get('.FormVagas_campo__E1ppF').type('fullstack')
        cy.get('button[type="submit"]').click()
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 1)
    })

    // it('deve preencher formulario', () => {
    //     cy.visit('https://ebac-jobs-e2e.vercel.app')
    //     cy.get('Vaga_vagaLink__DeFkk[href="/vagas/1"]').click()
    //     cy.visit('https://ebac-jobs-e2e.vercel.app/vagas/1')
    //     cy.get('input[name="nome-completo"]').type("Ramon Sávio Fontes Rocha")
    //     cy.get('input[name="email"]').type("ramonsaviofontesrocha@gmail.com")
    //     cy.get('input[name="telefone"]').type("83999358377")
    //     cy.get('input[name="endereco"]').type("rua juracy de carvalho luna n 31")
    //     cy.get('#linux input[type="radio"]').check()
    //     cy.get('select[name="escolaridade] option[value="bacharelado"]').select()
    //     cy.get('.Aplicacao_button__tw2AE').click()
    // }) 
})