

import { loc } from "./locators"
Cypress.Commands.add('login', () => {
    cy.get('#user-name').type("standard_user")
    cy.get('#password').type("secret_sauce")
    cy.get('#login-button').click()
})


Cypress.Commands.add('allItems', () => {
    cy.get(loc.MENU.TRES_BARRAS).click()
    cy.get(loc.MENU.ALL_ITEMS).click()
})
Cypress.Commands.add('about', () => {
    const urlAbout = cy.url()
    cy.get(loc.MENU.TRES_BARRAS).click()
    cy.get(loc.MENU.ABOUT).click()
    cy.url().should('not.eq', urlAbout)

})
Cypress.Commands.add('logout', () => {
    const urlLogout = cy.url()
    cy.get(loc.MENU.TRES_BARRAS).click()
    cy.get(loc.MENU.LOGOUT).click()
    cy.url().should('not.eq', urlLogout)

})

Cypress.Commands.add('twitter', () => {
    const urlTwiter = cy.url()
    cy.get(loc.ICONE.TWITTER).click()
    cy.url().should('not.eq', urlTwiter)

})

Cypress.Commands.add('facebook', () => {
    const urlFacebook = cy.url()
    cy.get(loc.ICONE.FACEBOOK).click()
    cy.url().should('not.eq', urlFacebook)

})
Cypress.Commands.add('linkedin', () => {
    const urllinkedin = cy.url()
    cy.get(loc.ICONE.LINKEDIN).click()
    cy.url().should('not.eq', urllinkedin)
})
Cypress.Commands.add('finalizandoCompras', (nome,sobrenome,code) => {
    cy.get(loc.CARRINHO.ADD_ONESIE).click()
    cy.get(loc.CARRINHO.ADD_LIGHT_BIKE).click()
    cy.get(loc.CARRINHO.ADD_BOLSA).click()
    cy.get(loc.CARRINHO.CLICAR_CARRINHO).click()
    cy.get(loc.COMPRA.SEU_CARRINHO).should('contain', 'Your Cart')
    cy.get(loc.COMPRA.BOTAO_CHECKOUT).click()
    cy.get(loc.COMPRA.SUA_COMPRA).should('contain', 'Checkout: Your Information')
   cy.get(loc.COMPRA.FIRST_NAME).type(nome)
    cy.get(loc.COMPRA.LAST_NAME).type(sobrenome)
    cy.get(loc.COMPRA.COD_POSTAL).type(code)
    cy.get(loc.COMPRA.BOTAO_CONTINUE).click()
    cy.get(loc.COMPRA.OVERVIEW).should('contain', 'Checkout: Overview')
    cy.get(loc.COMPRA.BOTAO_FINISH).click()
})

Cypress.Commands.add('adicionareRemover', () => {
    cy.get(loc.CARRINHO.ADD_BOLSA).click()
            cy.get(loc.CARRINHO.ICONE_CARRINHO).should('exist')
            cy.get(loc.CARRINHO.REMOVER_BOLSA).click()
})
Cypress.Commands.add('filtrarPreçoBaixo', () => {
    cy.get('select').select(loc.PRODUTOS.PREÇO_BAIXO)
    cy.get(loc.CARRINHO.ADD_ONESIE).click()
    cy.get(loc.CARRINHO.ADD_LIGHT_BIKE).click()
    cy.get(loc.CARRINHO.CLICAR_CARRINHO).click()
    cy.get(loc.CARRINHO.REMOVER_ONESIE).click()
    cy.get(loc.CARRINHO.REMOVER_LIGHT_BIKE).click()
})

