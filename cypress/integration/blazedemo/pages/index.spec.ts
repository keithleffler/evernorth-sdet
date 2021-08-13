import { IndexHTML } from "../../../support/page-objects/index.po";
import { ProdHTML } from "../../../support/page-objects/product.po";
import { StatusCode } from 'status-code-enum';
describe('https://www.demoblaze.com/index.html', () => {
    it('Smoke test: Verify the main page is up and running', () => {
        cy.visit('/index.html');
        cy.server();

        cy.intercept('GET', '/entries').as('entries');

        cy.wait('@entries')
    })
    it('Smoke test: Verify that the header elements exist', () => {
        cy.visit('/index.html')

        // Verify that the cart nav-link exists, click on it, and verify navigation to /cart
        IndexHTML.TopBanner.Cart.get()
            .should('exist')
            .should('be.visible')
            .click()
            .url().should('contain','cart')

        // Verify that the Home nav-link exists, click on it, and verify navigation to /home
        IndexHTML.TopBanner.Home.get()
            .should('exist')
            .should('be.visible')
            .click()
            .url().should('contain','index')

        // Verify that the About and Contact nav-links exist and are visible.
        IndexHTML.TopBanner.Contact.get().should('exist').should('be.visible');    //  The contact nav-link should always be visible
        IndexHTML.TopBanner.About.get().should('exist').should('be.visible');       //  The About Us nav-link should always be visible.

        // Verify that the Login, Logout, and Signup items exist.  Visibility depends on user login state.

        IndexHTML.TopBanner.Login.get().should('exist');                            // The login nav-link should be present
        IndexHTML.TopBanner.Signup.get().should('exist');                           //  The signup nav-link should be present.
        IndexHTML.TopBanner.Logout.get().should('exist');

    })
});

describe('/index.html functional test: A user can click on a product and  view the product detail', () => {
    it('When the user clicks on an item, the page redirects to /prod.html', () => {

        cy.visit('/index.html');

        // Click on the first item button, verify navigation to /prod.html

        IndexHTML.FirstItemButton.get()        // TODO: verify that the right product is shown.
            .click()
            .url().should('include', 'prod.html')
    });

    it('When the user clicks on the "Add to cart" button, then POST /addtocart should be called', () => {

        cy.intercept('POST', 'addtocart').as('addtocart');
        ProdHTML
            .AddProductButton.get()
            .should('exist')
            .click()
            .wait('@addtocart')

    })
})



