import { EntriesResponse } from '../../../support/api/entries';
import { getMultipleEntriesSchema } from '../../../support/api/schemas/entriesSchema';
import { ResponseVerifier } from '../../../support/api/ResponseVerifier';
describe('https://demoblaze.com/cart', () => {

    it('Smoke test: Verify that /cart loads', () => {
        cy.visit('/cart.html')
        cy.clearCookies();
        cy.server();
        cy.intercept('POST', '/view').as('view');

        cy.wait('@view', {timeout:60000});  // TODO: this is too big.  Change or remove after huge cart issue is fixed
                                            // TODO: Check on initial load behavior: What calls are supposed to by made when the cart is initially empty / not empty?
    })
})

