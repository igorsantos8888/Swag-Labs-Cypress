describe('removeItemCart', () => {
    beforeEach(() => {
        cy.login()
        cy.addToCart()
    })
    it('successfully', () => {
        cy.removeItemCart()
    })
})