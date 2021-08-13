import { ApiTestData } from "../../../fixtures/apiTestData"
import { EntriesResponse } from '../../../support/api/entries';
import { ResponseVerifier } from '../../../support/api/ResponseVerifier';
import { StatusCode } from 'status-code-enum';
import { getMultipleEntriesSchema } from '../../../support/api/schemas/entriesSchema';

describe('Integration testing: /entries endpoint', () => {

    const requestOptions = (apiTestData: ApiTestData) => {return  {
        url: `${apiTestData.apiURL}/entries`,
        method: 'get'
    }}

    it('GET /entries returns 200 OK and valid response body', () => {
        cy.fixture('apiTestData')
            .then((apiTestData:ApiTestData) => {
                cy
                    .request(requestOptions(apiTestData))
                    .then((response: Cypress.Response<EntriesResponse.MultipleEntries>) => {

                        // Verify that the response code is correct and that the returned data has the correct structure.
                        ResponseVerifier.verifyResponse(StatusCode.SuccessOK, response, getMultipleEntriesSchema())
                    })
        })
    });
})
