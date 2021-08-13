

import { getBycatSchema } from '../../../support/api/schemas/bycatSchema';
import { ApiTestData } from '../../../fixtures/apiTestData';
import { ResponseVerifier } from '../../../support/api/ResponseVerifier';
import { BycatResponse } from '../../../support/api/bycat';

describe('/bycat: Test integration with the /bycat endpoint', () => {

    const baseOptions = (apiTestData: ApiTestData) => {return  {
        url: `${apiTestData.apiURL}/bycat`,
        method: 'post'
    }}

    it('POST /bycat returns 200 OK and correctly formated results for valid categories',  () => {
        cy.fixture('apiTestData').then((apiTestData: ApiTestData) => {
            for (const category of apiTestData.validCategories) {
                const options = {
                    ...baseOptions(apiTestData),
                    body: {cat: category},
                };
                cy
                    .log(`Checking cat = ${category}`)
                    .request(options)
                    .then((response: Cypress.Response<BycatResponse>) => ResponseVerifier.verifyResponse(200, response, getBycatSchema()));
            }
        })
    })
    it('POST /bycat returns 200 OK and an empty array for an unknown category and valid body', () => {
        cy.fixture('apiTestData').then((apiTestData: ApiTestData) => {
            for (const invalidCategory of apiTestData.invalidCategories) {
                const options = {
                    ...baseOptions(apiTestData),
                    body: {cat: invalidCategory},
                };

                cy.log(`Checking invalid category ${invalidCategory}`)
                    .request(options).then((response: Cypress.Response<BycatResponse>)  => {

                        // Verify the response code is expected, and that the response is correctly structured.
                        ResponseVerifier.verifyResponse(200, response, getBycatSchema());

                        // Verify that `Items` is included in the response, since it's optional in the response
                        expect("Items" in response.body, "Verify Items field included in response").to.be.true;

                        // Verify that Items has length === 0.

                        expect(response.body.Items.length, "Verify length of Items === 0").to.equal(0);
                });
            }
        })
    })
    it('POST /bycat returns 200 OK and an error message for an invalid request body', () => {
        cy.fixture('apiTestData').then((apiTestData: ApiTestData) => {
            const options = {
                ...baseOptions(apiTestData),
                body: apiTestData.invalidRequestBody
            };
            cy.log(`Checking invalid request body ${JSON.stringify(options.body)}`)
            cy.request(options)
                .then((response: Cypress.Response<BycatResponse>) => {

                    // Verify the expected response code, and that the response is correctly structured
                    ResponseVerifier.verifyResponse(200, response, getBycatSchema());

                    // Verify that `errorMessage` is included in the response, since it's an optiona field but expected in this case.
                    expect('errorMessage' in response.body, "Verify 'errorMessage' is in response body").to.be.true;
                })
        })
    })
})

