describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })
  
  it('Verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('Preenche os campos obrigatorios e envia o formulario', () => {
    const longText = Cypress._.repeat('abcdefghijklmnopqrstuvwxyz ', 10)

    cy.get('#firstName').type('Joana')
    cy.get('#lastName').type('Farias')
    cy.get('#email').type('joana.farias@example.com')
    cy.get('#open-text-area').type(longText, { delay: 0 })
    cy.contains('button', 'Enviar').click()
  //  cy.get('button[type="submit"]').click()

    cy.get('.success').should('be.visible')
  })

  it('Exibe mensagem de erro quando o campo de email é preenchido incorretamente', () => {
    const longText = Cypress._.repeat('abcdefghijklmnopqrstuvwxyz ', 10)

    cy.get('#firstName').type('Joana')
    cy.get('#lastName').type('Farias')
    cy.get('#email').type('joana.fariasexample.com')
    cy.get('#open-text-area').type(longText, { delay: 0 })
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')
  })

  it('Campo telefone continua vazio quando preenchido com valor não numérico', () => {
    cy.get('#phone')
      .type('abcde')
      .should('have.value', '')
  })

it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () =>{
    cy.get('#firstName').type('Joana')
    cy.get('#lastName').type('Farias')
    cy.get('#email').type('joana.fariasexample.com')
    cy.get('#open-text-area').type('abcdefghijklmnopqrstuvwxyz')
    cy.get('#phone-checkbox').click()
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')
})

  it('Preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName')
      .type('Joana')
      .should('have.value', 'Joana')
      .clear()
      .should('have.value', '')
    cy.get('#lastName')
      .type('Farias')
      .should('have.value', 'Farias')
      .clear()
      .should('have.value', '')
    cy.get('#email')
      .type('joana.farias@example.com')
      .should('have.value', 'joana.farias@example.com')
      .clear()
      .should('have.value', '')
    cy.get('#phone')
      .type('123456789')
      .should('have.value', '123456789')
      .clear()
      .should('have.value', '')
  })

  it('Exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')
  })

  it('Envia o formulario com sucesso usando comando customizado ', () => {
    const data = {
      firstName: 'Ana',
      lastName: 'Farias',
      email: 'ana.farias@example.com',
      openTextArea: 'abcdefghijklmnopqrstuvwxyz'
    }

    cy.fillMandatoryFieldsAndSubmit()

    cy.get('.success').should('be.visible')
  })

})