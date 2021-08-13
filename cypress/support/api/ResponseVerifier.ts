import {TsjsonParser } from 'ts-json-validator';


export namespace ResponseVerifier{
    export const verifyResponse = (expectedStatusCode: number, response: Cypress.Response<any>, schema: any) => {
        const parser = new TsjsonParser(schema)

        expect(response.status, 'verify status code').to.equal(expectedStatusCode);
        expect(validates(schema, response.body), 'verify response is valid against schema').to.be.true;

    }
    const validates =(schema: any, response: object): boolean => {
        const parser = new TsjsonParser(schema);
         parser.parse(JSON.stringify(response));
         return true;                               // Parse will throw an error if there is a problem.
    };
}
