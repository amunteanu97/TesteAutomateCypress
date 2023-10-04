describe('aaaaaaa' , () => {

    it('bbb' , () => {
        cy.visit('https://linkedin.com');
        cy.get('.nav__button-secondary').click();
        cy.get('#username').type('alex');
        cy.get('#password').type('aaaaaa');
        cy.get('.btn__primary--large').click();
    })



})