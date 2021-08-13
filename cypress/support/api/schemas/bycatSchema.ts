import { createSchema } from 'ts-json-validator';
import { getEntrySchema } from './entriesSchema';

export const getBycatSchema = () => createSchema({
    anyOf: [
        createSchema({
            type: 'object',
            properties: {
                Items: createSchema({
                    type: 'array',
                    items: getEntrySchema(),
                }),
            }}),
        createSchema({
            type: 'object',
            properties:{
                errorMessage: createSchema({type: 'string'})
            }
        })
    ],
})
