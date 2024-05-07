///<reference types="cypress"/>
import produtosPage from "../page-objects/produtos.page";
import { loc } from '../support/locators'

describe('teste de regressão na página de produtos', () => {

    beforeEach(() => {
        produtosPage.fazerLogin()
    });
    context('itens no carrinho', () => {

        it('adicionar um item ao carrinho ', () => {
            cy.adicionarItem()
            

        });
        it('adicionar 2 itens ao carrinho ', () => {
            cy.adicionarDoisItens()
            cy.get(loc.CARRINHO.ICONE_CARRINHO).should('contain','2')

        });
        it('remover item do carrinho', () => {
            cy.adicionarItem()
            cy.removerItem()
           
        })

    })




})