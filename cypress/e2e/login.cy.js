///<reference types="cypress"/>
import { faker } from '@faker-js/faker';
import { loc } from '../support/locators';

describe('teste de Regressão Login', () => {

    context('página de login', () => {
        beforeEach(() => {
            cy.visit('/')
        });
        it('login com sucesso', () => {
            cy.login()
            cy.get(loc.LOGIN.CONTAIN).should('contain', 'Products')
            
        });
        it('login com usuario incorreto', () => {
            cy.get(loc.LOGIN.NOME_PESSOA).type(faker.person.firstName())
            cy.get(loc.LOGIN.SENHA).type("secret_sauce",{log: false})
            cy.get(loc.LOGIN.BOTAO_LOGIN).click()
            cy.get(loc.LOGIN.ERRO).should('contain', 'Epic sadface: Username and password do not match any user in this service')
        })
        it.only('login com senha incorreta', () => {
            cy.get(loc.LOGIN.NOME_PESSOA).type("standard_user")
            cy.get(loc.LOGIN.SENHA).type('12345',{log: false})
            cy.get(loc.LOGIN.BOTAO_LOGIN).click()
            cy.get(loc.LOGIN.ERRO).should('contain', 'Epic sadface: Username and password do not match any user in this service')
        })




    })












})