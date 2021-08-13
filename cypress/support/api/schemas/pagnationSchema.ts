import { createSchema } from 'ts-json-validator';
import { getEntrySchema } from './entriesSchema';

export const getPaginationSchema = () =>
    createSchema({
        type: 'object',
        properties: {
            Items: createSchema({
                type: 'array',
                items: getEntrySchema()
            }),
            LastEvaluatedKey: createSchema ({
                type: "object",
                properties: {
                    id: createSchema({type: 'string'})
                },
            }),
            ScannedCount: createSchema({type: 'number'}),
        }
    })
