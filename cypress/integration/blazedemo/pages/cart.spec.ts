describe('https://demoblaze.com/cart', () => {
    it('Smoke test: Verify that /cart loads', () => {
        cy.visit('/cart.html')

        cy.server();
        cy.intercept('GET', '/viewcart').as('viewcart');

        cy.wait('@viewcart');
    })
})

