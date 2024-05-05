///<reference types="cypress"/>
import produtosPage from "../page-objects/produtos.page";
import { loc } from '../support/locators'
import { faker } from '@faker-js/faker';

describe('teste de regressão finalizando a compra', () => {

    beforeEach(() => {
        produtosPage.fazerLogin()
    });
    context('finalizando a compra com sucesso', () => {

        it('adicionar ao carrinho e finalizar a compra', () => {
            cy.finalizarCompra()
            cy.dadosPessoais(faker.person.firstName(), faker.person.lastName(), faker.location.zipCode())
            cy.overviewDaCompra()
            cy.get(loc.COMPRA.OBRIGADO).should('contain', 'Thank you for your order!')
        });
    });
    context('Prosseguir com a compra sem preencher os dados pessoais', () => {
        it('inserir os dados sem o nome', () => {
            cy.finalizarCompra()
            cy.preencherDadosSemNome()
            cy.get(loc.COMPRA.ERROR).should('contain', 'Error: First Name is required')
        });
        it('inserir os dados sem o sobrenome', () => {
            cy.finalizarCompra()
            cy.preencherDadosSemSobrenome()
            cy.get(loc.COMPRA.ERROR).should('contain', 'Error: Last Name is required')
        });
        it('inserir os dados sem o código postal', () => {
            cy.finalizarCompra()
            cy.preencherDadosSemCodPostal()
            cy.get(loc.COMPRA.ERROR).should('contain', 'Error: Postal Code is required')
        });
    });
});