///<reference types="cypress"/>
import produtosPage from "../page-objects/produtos.page";
import { loc } from '../support/locators'

describe('teste de regressão nos menus e ícones', () => {

    beforeEach(() => {
        produtosPage.fazerLogin()
    });

    context('verificar o menu lateral da página', () => {


            it('verificar o menu All Items', () => {
            cy.allItems()
            cy.get(loc.MENU.PRODUCTS).should('have.text', 'Products')
            })

            it('verificar o menu Logout', () => {
            cy.logout()
            cy.get(loc.MENU.LOGO_LABS).should('contain', 'Swag Labs')
            
            })
        })
        context('verificar ícones do rodapé', () => {
            it('verificar o ícone do twitter', () => {
               cy.twitter()
            })
            it('verificar o ícone do facebook', () => {
               cy.facebook()
            })
            it('verificar o ícone do linkedin', () => {
              cy.linkedin()
            })
        });



    })
