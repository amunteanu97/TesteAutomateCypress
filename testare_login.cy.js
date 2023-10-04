describe('Site linkedin.com' , () => {

    it('Testare cu ussername gresit' , () => {
        cy.visit('https://linkedin.com');
        cy.get('[action-type="ACCEPT"]').click();
        cy.get(':nth-child(1) > .flex-col > .text-input').type('test');
        cy.get(':nth-child(2) > .flex-col > .text-input').type('12345678');
        cy.get('.justify-between > .btn-md').click();
        cy.get('#error-for-username').should('exist');
    })

})
