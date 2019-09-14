/// <reference types="Cypress" />

describe('Contact List', () => {
  beforeEach(() => {
    cy.visit('');
  });
  it('load app', () => {
    cy.contains('Simple Contact App');
  });
  it('load app with no contact list', () => {
    cy.contains('Contact List');
    cy.contains('No records');
  });

  it('should open create new contact form', () => {
    cy.contains('Create New Contact').click();
    cy.get('[data-test="data-new-contact"')
      .should('have.attr', 'data-test', 'data-new-contact')
      .should('have.text', 'Create New Contact');
  });
  it('new contact form:validation', () => {
    cy.contains('Create New Contact').click();
    cy.get('[data-test="btn-add-contact"').click();
    cy.contains('first name is required');
    cy.contains('last name is required');
  });
  it('new contact form:save contact', () => {
    cy.contains('Create New Contact').click();
    cy.get('[data-test="input-firstName"]').type('nilesh');
    cy.get('[data-test="input-lastName"]').type('patel');
    cy.get('select').select('male');
    cy.get('[data-test="input-email"]').type('nilesh.nvs@gmail.com');
    cy.get('[data-test="input-phone"]').type('1234567890');
    cy.get('[data-test="input-address"]').type('pune');
    cy.get('[data-test="btn-add-contact"').click();
    cy.get('._contact-item_').should('have.length', 1);
  });
});
