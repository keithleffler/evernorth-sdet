import { EntriesResponse } from "./entries";

export interface PaginationResponse extends Cypress.Response<any> {
    Items: EntriesResponse.Entry[],
    LastEvaluatedKey: {id: string},
    ScannedCount: number,
}
