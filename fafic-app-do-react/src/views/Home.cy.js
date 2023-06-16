import React from 'react'; 
import Home from './Home';
import NavBarltem from '/NavBarltem'; 
import { BrowserRouter as Route } from
'react-router-dom';

describe('<Home />', () => {
 beforeEach(() => {
  cy.mount(
   <Route>
    <Home />
   </Route>
);
});

it('Apresentar uma mensagem de boas vindas com o nome do usuário corretamente', () => {
    const logUsuario = { nome: 'dasdas'};
localStorage.setitem('user',
JSON.stringify (logUsuario)); 
cy.reload();
cy.contains('Seja Bem Vindo ${logUsuario.nome}').should('be.visible');
});
it('Navegar corretamente para outras paginas', () => {
    cy.get("[data-cy=btn-home]").should('be.visible'); 
    cy.get("[data-cy=btn-livros]").should('be.visible');

cy.get("[data-cy=btn-usuarios]").should('be.visible');
    cy.get("[data-cy=btn-livros]").click(); 
    cy.url().should('include', '/livros');
    });
});