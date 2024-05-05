///<reference types="cypress"/>
import produtosPage from "../page-objects/produtos.page";
import { loc } from '../support/locators'

describe('teste de regressão na página de produtos', () => {

    beforeEach(() => {
        produtosPage.fazerLogin()
    });
    context('adicionando itens no carrinho', () => {

        it('adicionar o item ao carrinho e depois remover do carrinho', () => {
            cy.adicionareRemover()

        });
        it('filtrar pelo preço mais baixo, adicionar 2 itens no carrinho e depois remover', () => {
            cy.filtrarPreçoBaixo()
            cy.get(loc.CARRINHO.ICONE_VAZIO).should('have.text', '')
        })

    })




})