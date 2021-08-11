import { createSchema } from 'ts-json-validator';
import { testValues } from '../../../integration/blazedemo/api/testValues';

export const getEntrySchema = () => createSchema({
   type: 'object',
   properties: {
       cat: createSchema({type: 'string', enum: testValues.validCategories}),
       desc: createSchema({type: 'string'}),
       id: createSchema({type: 'number'}),
       img: createSchema({type: 'string'}),
       price: createSchema({type: 'number'}),
       title: createSchema({type: 'string'}),
   },
   required: ['cat','desc','id','img','price', 'title']
});

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
                id: createSchema({type: 'number'})
            },
            required: ['id']
        }),


    },
    required: ['Items', 'LastEvaluatedKey']
})
