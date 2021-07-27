import {Person} from '../Person';

export type AppState = {
    people: Array<Person>,
    selectedPerson: string | null,
    loading: boolean,
    renderCreateItem: boolean,
    isModalOpen: boolean,
    currentPage: number,
    searchText: string,
    pageCount: number | null,
    sort: {
        direction: Direction | null,
        headerName: HeaderName | null
    }
}

export enum HeaderName {
    FIRST_NAME = 'firstName',
    LAST_NAME = 'lastName',
    EMAIL = 'email',
    PHONE = 'phone'
}

export enum Direction {
    ASCENDING = 'ascending',
    DESCENDING = 'descending'
}
