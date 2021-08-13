export namespace EntriesResponse {
    export interface GetEntry {
        cat: string,
        desc: string,
        id: number,
        img: string,
        price: number,
        title: string
    }

    export interface MultipleEntries {
        Items: string[],
        LastEvaluatedKey: {id: number}
    }
}
