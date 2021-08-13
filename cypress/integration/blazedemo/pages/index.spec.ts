import { IndexHTML } from "../../../support/page-objects/index.po";
import { ProdHTML } from "../../../support/page-objects/product.po";
describe('https://www.demoblaze.com/index.html', () => {
    it('Smoke test: Verify the main page is up and running', () => {
        cy.visit('/index.html');
        cy.server();

        cy.intercept('GET', '/entries').as('entries');

        cy.wait('@entries')
    })

    it('A user can add an item and it appears in the cart.', () => {
        cy.visit('/index.html');
        cy.server();
        cy.intercept('GET', '/entries').as('entries');

        // Click on the first category button
        cy.get(IndexHTML.FirstCategoryButton.selector).click();

        // Click on the `Add to cart button
        cy.get(ProdHTML.AddProductButton.selector).click()

        // Navigtate to /cart

    })
})

