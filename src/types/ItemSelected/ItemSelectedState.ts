import {Person} from "../Person";

export type ItemSelectedState = {
    person: Person | null,
    edit: boolean
}