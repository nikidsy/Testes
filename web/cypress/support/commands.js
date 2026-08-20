Cypress.Commands.add('login', (email,password) => {
    cy.visit('http://localhost:3000')
    cy.get('#email').type(email)
    cy.get('#password').type(password)
    cy.contains('button', 'Entrar').click()
    cy.contains('Dashboard')
})