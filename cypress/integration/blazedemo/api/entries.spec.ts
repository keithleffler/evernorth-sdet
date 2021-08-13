import { ApiTestData } from "../../../fixtures/apiTestData"
import { EntriesResponse } from '../../../support/api/entries';
import { ResponseVerifier } from '../../../support/api/ResponseVerifier';
import { getMultipleEntriesSchema } from '../../../support/api/schemas/entriesSchema';
describe('/entries', () => {
    const requestOptions = (apiTestData: ApiTestData) => {return  {
        url: `${apiTestData.apiURL}/entries`,
        method: 'get'
    }}

    it('GET /entries returns 200 OK and valid response body', () => {
        cy.fixture('apiTestData')
            .then((apiTestData:ApiTestData) => {
                cy
                    .request(requestOptions(apiTestData))
                    .then((response) => {
                        ResponseVerifier.verifyResponse(200, response, getMultipleEntriesSchema())
                    })
        })
    });
})
