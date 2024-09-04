describe('logout', () => {
    beforeEach(() => {
        cy.login()
    })
    it('successfully', () => {
        cy.logout()  
    })
})