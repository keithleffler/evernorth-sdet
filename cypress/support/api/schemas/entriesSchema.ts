import { createSchema } from 'ts-json-validator';
import { ApiTestData } from '../../../fixtures/apiTestData';

// Create a schema object to be used by ts-json-validator to confirm that responses returned by the /bycat endpoint
// have a valid format.  ts-json-validator supports JSON schema defined by https://json-schema.org/

// For this demo, I assumed that the /bycat and /entries are returning valid data.  An API specification is preferred
// for actual testing.

export const getEntrySchema = ():any => {

    cy.fixture('apiTestData')
        .then((apiTestData: ApiTestData) => { return
            createSchema({
                type: 'object',
               properties: {
                   cat: createSchema({type: 'string', enum: apiTestData.validCategories}),
                   desc: createSchema({type: 'string'}),
                   id: createSchema({type: 'string'}),
                   img: createSchema({type: 'string'}),
                   price: createSchema({type: 'string'}),
                   title: createSchema({type: 'string'}),
               },
               required: ['cat','desc','id','img','price', 'title']
            })})
}

export const getMultipleEntriesSchema = () => createSchema({
    type: 'object',
    properties: {
        Items: createSchema({
            type: 'array',
            items: getEntrySchema()
        }),
        LastEvaluatedKey: createSchema({
            type: 'object',
            properties: {
                id: createSchema({type: 'string'})
            },
            required: ['id']
        }),


    },
    required: ['Items', 'LastEvaluatedKey']
})
