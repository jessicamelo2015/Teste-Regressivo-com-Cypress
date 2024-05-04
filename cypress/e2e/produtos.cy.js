///<reference types="cypress"/>
import produtosPage from "../../page-objects/produtos.page";
import {loc} from '../support/locators'

describe('teste de regressão na página de produtos', () => {
    
    beforeEach(() => {
       produtosPage.fazerLogin()
    });
    
    context('filtrando os produtos ', () => {
        
       it.only('filtrando name de A to Z', () => {
        cy.get('select').select(loc.PRODUTOS.NAME_A_TO_Z)
        cy.get(loc.PRODUTOS.SAUCE_BACKPACK).should('contain','Sauce Labs Backpack')
        cy.get(loc.PRODUTOS.SHIRT_RED).should('contain','Test.allTheThings() T-Shirt (Red)')
       });
        it('filtrando name Z to A', () => {
            cy.get('select').select(loc.PRODUTOS.NAME_Z_TO_A)
            cy.get(loc.PRODUTOS.SHIRT_RED).should('contain','Test.allTheThings() T-Shirt (Red)')
            cy.get(loc.PRODUTOS.SAUCE_BACKPACK).should('contain','Sauce Labs Backpack')
            
        });
        it('filtrar pelo preço mais baixo ', () => {
            cy.get('select').select(PREÇO_BAIXO)
            cy.get(SAUCE_ONESIE).should('contain','Sauce Labs Onesie')
        });
        it('filtrar pelo preço mais alto',()=>{
            cy.get('select').select(PREÇO_ALTO)
            cy.get(SAUCE_JACKET).should('contain','Sauce Labs Fleece Jacket')
        })
    });
    
});