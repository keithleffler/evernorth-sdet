
// Define the shape of the response from GET /entries
export namespace EntriesResponse {
     export interface Entry {
        cat: string,
        desc: string,
        id: number,
        img: string,
        price: number,
        title: string
    }

    export interface MultipleEntries {
        Items: Entry[],
        LastEvaluatedKey: {id: number}
    }
}
