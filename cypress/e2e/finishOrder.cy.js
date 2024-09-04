describe('finishOrder', () => {
    beforeEach(() => {
        cy.login()
        cy.addToCart()
        cy.clickToCart()
        cy.checkout()
    })
    it('successfully', () => {
        cy.finishOrder()
    })
})