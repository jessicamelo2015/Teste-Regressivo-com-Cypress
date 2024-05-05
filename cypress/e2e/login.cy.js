///<reference types="cypress"/>

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
           cy.usuarioIncorreto()
            cy.get(loc.LOGIN.ERRO).should('contain', 'Epic sadface: Username and password do not match any user in this service')
        })
        it('login com senha incorreta', () => {
            cy.senhaIncorreta()
            cy.get(loc.LOGIN.ERRO).should('contain', 'Epic sadface: Username and password do not match any user in this service')
        })




    })












})