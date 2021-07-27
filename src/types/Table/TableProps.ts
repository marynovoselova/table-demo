import {Person} from "../Person";
import {HeaderName} from "../App/AppState";

export type TableProps = {
    data: Person[],
    headerName: string | null,
    direction: string | null,
    onPersonClicked: (personId: string | null) => void,
    onClickHeader: (headerName: HeaderName | null) => void
}