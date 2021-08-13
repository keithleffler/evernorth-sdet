import { EntriesResponse } from "./entries";

export interface BycatResponse extends Cypress.Response<any> {
    Items?: EntriesResponse.MultipleEntries,
    errorMessage?: string,
}
