import { EntriesResponse } from "./entries";

// Define the shape of the response from POST /bycat.

export interface BycatResponse extends Cypress.Response<any> {
    Items?: EntriesResponse.Entry[],
    LastEvaluatedKey?: {id: number}
    errorMessage?: string,
}
