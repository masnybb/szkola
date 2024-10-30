// cypress/e2e/registrationForm.spec.js
import { mount } from "cypress/react18";
import RegistrationForm from "./formularz";
describe('Registration Form', () => {
    
    
  
    it('displays required validation messages for empty fields', () => {
        mount(<RegistrationForm/>)
      cy.get('button[type="submit"]').click();
  
      // Sprawdzenie, czy pojawiają się komunikaty o błędach
      cy.get('p').should('contain', 'Username is required');
      cy.get('p').should('contain', 'Email is required');
      cy.get('p').should('contain', 'Password is required');
    });
  
    it('displays password length error when password is too short', () => {
        mount(<RegistrationForm/>)
      cy.get('input[name="username"]').type('testuser');
      cy.get('input[name="email"]').type('test@example.com');
      cy.get('input[name="password"]').type('123'); // za krótkie hasło
      cy.get('button[type="submit"]').click();
  
      // Sprawdzenie komunikatu o błędzie dla zbyt krótkiego hasła
      cy.get('p').should('contain', 'Password must be at least 6 characters');
    });
  
    it('submits the form when all fields are valid', () => {
        mount(<RegistrationForm/>)
      cy.get('input[name="username"]').type('testuser');
      cy.get('input[name="email"]').type('test@example.com');
      cy.get('input[name="password"]').type('password123');
      cy.get('button[type="submit"]').click();
  
      // Sprawdzenie, czy formularz został zresetowany po pomyślnym przesłaniu
      cy.get('input[name="username"]').should('have.value', '');
      cy.get('input[name="email"]').should('have.value', '');
      cy.get('input[name="password"]').should('have.value', '');
    });
  });
  