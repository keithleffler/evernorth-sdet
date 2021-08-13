import { ApiTestData } from "../../../fixtures/apiTestData"
import { PaginationResponse } from "../../../support/api/pagination"
import { ResponseVerifier } from "../../../support/api/ResponseVerifier"
import { getPaginationSchema } from "../../../support/api/schemas/pagnationSchema"
import { StatusCode } from 'status-code-enum';

describe('Integration testing: /pagination endpoint', () => {
    const baseOptions = (apiTestData: ApiTestData) => { return {
        url: `${apiTestData.apiURL}/pagination`,
        method: 'post'
    }}
    it('POST /pagination returns 200 OK, correctly formatted data, and the listed number of entries', () => {
        cy.fixture('apiTestData').then((apiTestData: ApiTestData) => {
            const startId = "1";
            const options = {
                 ...baseOptions(apiTestData),
                 body: {id: "1"},
             };
             cy.log('Checking /pagination, id = ')
                 .request(options)
                 .then((response: Cypress.Response<PaginationResponse>) => {

                     // Verify response code and response.body structure
                     ResponseVerifier.verifyResponse(StatusCode.SuccessOK, response, getPaginationSchema());

                     // Verify that the number of items returned matches the `ScannedCount' value.
                     expect(response.body.Items.length).to.equal(response.body.ScannedCount);
                 });
        })


    })
})
