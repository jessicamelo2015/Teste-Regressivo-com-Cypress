///<reference types="cypress"/>
import produtosPage from "../../page-objects/produtos.page";
import {loc} from '../support/locators'
import { faker } from '@faker-js/faker';

describe('teste de regressão finalizando a compra', () => {
    
    beforeEach(() => {
       produtosPage.fazerLogin()
    });
    context('finalizando a compra ', () => {

        it('adicionar ao carrinho e finalizar a compra', () => {
          cy.finalizandoCompras(faker.person.firstName(),faker.person.lastName(),faker.location.zipCode())
            cy.get(loc.COMPRA.OBRIGADO).should('contain', 'Thank you for your order!')
        });
    });
});