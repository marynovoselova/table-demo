import {Person} from "../Person";

export type RowProps = {
    item: Person,
    onClick: (id: string | null) => void
}