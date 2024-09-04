describe('checkout', () => {
    beforeEach(() => {
        cy.login()
        cy.addToCart()
        cy.clickToCart()
    })

    it('successfully', () => {
        cy.checkout()
    })
})