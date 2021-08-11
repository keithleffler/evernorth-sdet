
import {testValues} from './testValues';
import {TsjsonParser } from 'ts-json-validator';
import { getBycatSchema } from './schemas/bycatSchema';

describe('/bycat', () => {

    const baseOptions = () => {return {
        url: `${testValues.apiURL}/bycat`,
        method: 'post'
    }}

    it('POST /bycat returns 200 OK and retults for valid categories',  () => {
        for (const category of testValues.validCategories) {
            const options = {
                ...baseOptions(),
                body: {cat: category},
            };
            cy
                .log(`Checking cat = ${category}`)
                .request(options).then(response => verifyResponse(200, response, getBycatSchema()));
        }
    })
    it('POST /bycat returns 200 OK and an empty array for unknown category and valid body', () => {
        for (const invalidCategory of testValues.invalidCategories) {
            const options = {
                ...baseOptions(),
                body: {cat: invalidCategory},
            };

            cy.log(`Checking invalid category ${invalidCategory}`)
                .request(options).then(response => verifyResponse(200, response, getBycatSchema()));
        }
    })
    it('POST /bycat returns 200 OK and an error message for an invalid body', () => {
        const options = {
            ...baseOptions(),
            body: {'foo': 'phone'},
        };
        cy.request(options).then((response) => verifyResponse(200, response, getBycatSchema()))
    })
})
const verifyResponse = (expectedStatusCode: number, response: Cypress.Response<any>, schema: any) => {
    const parser = new TsjsonParser(schema)

    expect(response.status, 'verify status code').to.equal(expectedStatusCode);
    expect(validates(schema, response.body), 'verify schema is valid').to.be.true;
}
const validates =(schema: any, response: object): boolean => {
    const parser = new TsjsonParser(schema);
    return parser.validates(response);

};
