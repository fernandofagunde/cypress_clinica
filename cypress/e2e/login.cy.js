describe('Login', () => {


  beforeEach(() => {
    cy.visit ('/login')
  })
  it.only('Login com sucesso', () => {
    cy.login('secretaria', '37237180')


  })

  it('Login com erro', () => {
    cy.get('[name="username"]').type('secretaria')
    cy.get('[name="password"]').type('372371800')
    cy.get('.btn').click()
    cy.get('.alert-message')
    .should('be.visible')
    .and('contain.text', 'Usuário ou senha inválidos')

  })
})