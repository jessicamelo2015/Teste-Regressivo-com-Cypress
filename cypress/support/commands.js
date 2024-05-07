

import { loc } from "./locators"
import { faker } from '@faker-js/faker';
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
Cypress.Commands.add('adicionarItem', () => {
    cy.get(loc.CARRINHO.ADD_BOLSA).click()
    cy.get(loc.CARRINHO.ICONE_CARRINHO).should('exist')
})
Cypress.Commands.add('adicionarDoisItens', () => {
    cy.get(loc.CARRINHO.ADD_BOLSA).click()
    cy.get(loc.CARRINHO.ADD_LIGHT_BIKE).click()
})
Cypress.Commands.add('removerItem', () => {
    cy.get(loc.CARRINHO.REMOVER_BOLSA).click()
    cy.get(loc.CARRINHO.ICONE_CARRINHO).should('not.exist')
})
Cypress.Commands.add('filtrarPreçoBaixo', () => {
    cy.get('select').select(loc.PRODUTOS.PREÇO_BAIXO)
    cy.get(loc.CARRINHO.ADD_ONESIE).click()
    cy.get(loc.CARRINHO.ADD_LIGHT_BIKE).click()
    cy.get(loc.CARRINHO.CLICAR_CARRINHO).click()
    cy.get(loc.CARRINHO.REMOVER_ONESIE).click()
    cy.get(loc.CARRINHO.REMOVER_LIGHT_BIKE).click()
})
Cypress.Commands.add('finalizarCompra', () => {
    cy.get(loc.CARRINHO.ADD_ONESIE).click()
    cy.get(loc.CARRINHO.ADD_LIGHT_BIKE).click()
    cy.get(loc.CARRINHO.ADD_BOLSA).click()
    cy.get(loc.CARRINHO.CLICAR_CARRINHO).click()
    cy.get(loc.COMPRA.SEU_CARRINHO).should('contain', 'Your Cart')
    cy.get(loc.COMPRA.BOTAO_CHECKOUT).click()
    cy.get(loc.COMPRA.SUA_COMPRA).should('contain', 'Checkout: Your Information')

})
Cypress.Commands.add('dadosPessoais', (nome, sobrenome, code) => {
    cy.get(loc.COMPRA.FIRST_NAME).type(nome)
    cy.get(loc.COMPRA.LAST_NAME).type(sobrenome)
    cy.get(loc.COMPRA.COD_POSTAL).type(code)
})
Cypress.Commands.add('overviewDaCompra', () => {
    cy.get(loc.COMPRA.BOTAO_CONTINUE).click()
    cy.get(loc.COMPRA.OVERVIEW).should('contain', 'Checkout: Overview')
    cy.get(loc.COMPRA.BOTAO_FINISH).click()
})
Cypress.Commands.add('usuarioBloqueado', () => {
    cy.get(loc.LOGIN.NOME_PESSOA).type("locked_out_user")
    cy.get(loc.LOGIN.SENHA).type("secret_sauce")
    cy.get(loc.LOGIN.BOTAO_LOGIN).click()
})
Cypress.Commands.add('usuarioIncorreto', () => {
    cy.get(loc.LOGIN.NOME_PESSOA).type(faker.person.firstName())
    cy.get(loc.LOGIN.SENHA).type("secret_sauce", { log: false })
    cy.get(loc.LOGIN.BOTAO_LOGIN).click()
})
Cypress.Commands.add('senhaIncorreta', () => {
    cy.get(loc.LOGIN.NOME_PESSOA).type("standard_user")
    cy.get(loc.LOGIN.SENHA).type('12345', { log: false })
    cy.get(loc.LOGIN.BOTAO_LOGIN).click()
})
Cypress.Commands.add('preencherDadosSemNome', () => {
    cy.get(loc.COMPRA.FIRST_NAME)
    cy.get(loc.COMPRA.LAST_NAME).type(faker.person.lastName())
    cy.get(loc.COMPRA.COD_POSTAL).type(faker.location.zipCode())
    cy.get(loc.COMPRA.BOTAO_CONTINUE).click()

})

Cypress.Commands.add('preencherDadosSemSobrenome', () => {
    cy.get(loc.COMPRA.FIRST_NAME)
    cy.get(loc.COMPRA.FIRST_NAME).type(faker.person.firstName())
    cy.get(loc.COMPRA.LAST_NAME)
    cy.get(loc.COMPRA.COD_POSTAL).type(faker.location.zipCode())
    cy.get(loc.COMPRA.BOTAO_CONTINUE).click()

})

Cypress.Commands.add('preencherDadosSemCodPostal', () => {
    cy.get(loc.COMPRA.FIRST_NAME).type(faker.person.firstName())
    cy.get(loc.COMPRA.LAST_NAME).type(faker.person.firstName())
    cy.get(loc.COMPRA.COD_POSTAL)
    cy.get(loc.COMPRA.BOTAO_CONTINUE).click()

})