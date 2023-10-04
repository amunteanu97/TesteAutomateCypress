describe('Screenshot test' , () => {

    it('Testare screenshot' , () => {
       cy.visit('https://facebook.com');
       cy.screenshot();
    })

})
