Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password')
    
) => {
    cy.visit('/v1/')

    cy.get('#user-name').type(user)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
    cy.get('.app_logo').should('be.visible')
})


Cypress.Commands.add('logout', () => {
    cy.get('.bm-burger-button > button').click()
    cy.get('#logout_sidebar_link').click()
})

Cypress.Commands.add('about', () => {
    cy.get('.bm-burger-button > button').click()
    cy.get('#about_sidebar_link').click()
})

Cypress.Commands.add('SortList', () => {
    cy.get('.product_sort_container').select('hilo')
    cy.get('.product_sort_container').should('have.value', 'hilo')
})

Cypress.Commands.add('addToCart', () => {
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
    cy.get(':nth-child(2) > .pricebar > .btn_primary').click()
    cy.get(':nth-child(3) > .pricebar > .btn_primary').click()
})

Cypress.Commands.add('clickToCart', () => {
    cy.get('.fa-shopping-cart').click()
    cy.get('.subheader').should('be.visible')
})

Cypress.Commands.add('checkout', () => {
    cy.get('.btn_action').click()
    cy.get('[data-test="firstName"]').type('Igor')
    cy.get('[data-test="lastName"]').type('Santos')
    cy.get('[data-test="postalCode"]').type('28613240')
    cy.get('.btn_primary').click()
    cy.get('.subheader').should('be.visible')
})

Cypress.Commands.add('finishOrder', () => {
    cy.get('.btn_action').click()
    cy.get('#checkout_complete_container').should('be.visible')
})

Cypress.Commands.add('removeItemCart', () => {
    cy.get(':nth-child(1) > .pricebar > .btn_secondary').click()
    cy.get(':nth-child(1) > .pricebar > .btn_primary').should('be.visible')
})