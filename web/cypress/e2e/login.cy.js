describe('Login', () => {
  it('Login inválido', () => {
    cy.visit('http://localhost:3000')
    cy.get('#email').type('email@email.com')
    cy.get('#password').type('senha')
    cy.contains('button', 'Entrar').click()
    cy.contains('Acesso negado! Tente novamente').should('be.visible')
  })

  it('Login válido', () =>  {
    cy.visit('http://localhost:3000')
    cy.get('#email').type('4DM@gmail.com')
    cy.get('#password').type('4DM')
    cy.contains('button', 'Entrar').click()
    cy.contains('Dashboard')
  })

  it('Campo em branco', () => {
    cy.visit('http://localhost:3000')
    cy.contains('button', 'Entrar').click()
    cy.contains('Ei, não esqueça de digitar seu email!').should('be.visible')
    cy.contains('Você precisa de uma senha para entrar! 🔒').should('be.visible')
  })

  it('Senha incorreta', () => {
    cy.visit('http://localhost:3000')
    cy.get('#email').type('4DM@gmail.com')
    cy.get('#password').type('3DM')
    cy.contains('button', 'Entrar').click()
    cy.contains('Acesso negado! Tente novamente').should('be.visible')
  })
})