// cypress/integration/calculator.spec.js
import { mount } from "cypress/react18";
import Calculator from "./Kalkulator";
describe('Kalkulator', () => {
 


  it('powinien poprawnie wyświetlać wprowadzane liczby', () => {
   
   mount(<Calculator/>)

   cy.get('button').contains('1').click();
    cy.get('input').should('have.value', '1');
  });

  it('powinien poprawnie dodawać liczby', () => {
    mount(<Calculator/>)
    cy.get('button').contains('1').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('=').click();
    cy.get('.result').should('contain', '3'); 
  });

  it('powinien poprawnie odejmować liczby', () => {
    mount(<Calculator/>)
    cy.get('button').contains('5').click();
    cy.get('button').contains('-').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains('=').click();
    cy.get('.result').should('contain', '2'); 
  });

  it('powinien poprawnie mnożyć liczby', () => {
    mount(<Calculator/>)
    cy.get('button').contains('4').click();
    cy.get('button').contains('*').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('=').click();
    cy.get('.result').should('contain', '8'); 
  });

  it('powinien poprawnie dzielić liczby', () => {
    mount(<Calculator/>)
    cy.get('button').contains('6').click();
    cy.get('button').contains('/').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('=').click();
    cy.get('.result').should('contain', '3'); 
  });

  it('powinien wyczyścić dane po kliknięciu C', () => {
    mount(<Calculator/>)
    cy.get('button').contains('1').click();
    cy.get('button').contains('C').click();
    cy.get('input').should('have.value', ''); 
  });
});
