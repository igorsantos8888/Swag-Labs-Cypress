describe('about', () => {
    beforeEach(() => {
        cy.login()
    })

    it('successfully', () => {
        cy.about()
    })
})