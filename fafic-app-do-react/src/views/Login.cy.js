import React from 'react'; 
import Home from './Login';
import NavBarltem from '/NavBarltem'; 
import { BrowserRouter as Route } from
'react-router-dom';

describe('<Login />', () => {
    beforeEach(() => {
    cy.mount(
    <Route>
    <Login />
    </Route>
    );
});

    it('Teste do botão limpar', () => {
     cy.get("[data-cy=input-username]").should('be.visible').type("haew"); 
     cy.get("[data-cy=input-senha]").should('be.visible').type("fdsfs31"); 
     cy.get("[data-cy=btn-reset]").should('be.visible').click();
})

    it('Fazer login com sucesso no site com as credenciais corretas', () => {
     cy.get("[data-cy=input-username]").should('be.visible').type("haew"); 
     cy.get("[data-cy=input-senha]").should('be.visible').type("fdsfs31"); 
     cy.get("[data-cy=btn-entrar]").should('be.visible').click();
     cy.url().should('include', 'home');
    });
});