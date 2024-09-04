describe('addToCart', () => {
    beforeEach(() => {
        cy.login()
    })

    it('successfully', () => {
        cy.addToCart()
    })
})