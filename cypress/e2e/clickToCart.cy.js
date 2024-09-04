describe('clickToCart', () => {
    beforeEach(() => {
        cy.login()
        cy.addToCart()
    })

    it('successfully', () => {
        cy.clickToCart()
    })
})