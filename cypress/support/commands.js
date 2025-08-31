Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'Joana',
    lastName: 'Farias',
    email: 'joana.farias@example.com',
    openTextArea: 'abcdefghijklmnopqrstuvwxyz'
}) => {
  cy.get('#firstName').type(data.firstName)
  cy.get('#lastName').type(data.lastName)
  cy.get('#email').type(data.email)
  cy.get('#open-text-area').type(data.openTextArea)
  //cy.get('button[type="submit"]').click()
  cy.contains('button', 'Enviar').click()
})
