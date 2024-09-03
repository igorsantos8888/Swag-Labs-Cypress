Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password')
    
) => {
    cy.visit('/v1/')

    cy.get('#user-name').type(user)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
    cy.title('.login_logo').should('be.visible')
})