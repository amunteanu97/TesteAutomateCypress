describe('Testare site github.com' , () => {

    it('Testare username si password corecte' , () => {
        cy.visit('https://github.com');
        cy.get('div.width-lg-auto > :nth-child(2) > .d-inline-block').click();
        cy.get('.font-mktg > .color-fg-on-emphasis').click();
        cy.get('#login_field').type('..........'); //username
        cy.get('#password').type('...........'); //password
        cy.get('.position-relative > .btn').click();
        cy.get('.Button-label > .avatar').click();
        })
})