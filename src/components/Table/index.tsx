import React from "react";
import {HEADER_ACTIVE} from "../../consts";
import {Row} from '../Row';
import {TableProps} from "../../types/Table/TableProps";
import {Direction, HeaderName} from "../../types/App/AppState";
import {Person} from "../../types/Person";

import './index.scss';


export const Table: React.FC<TableProps> = ({data, headerName, direction,
                                             onPersonClicked, onClickHeader}) => {

    const renderRow = (dataItem: Person) => {
        return (
            <Row item={dataItem}
                 key={dataItem.id}
                 onClick={() => onPersonClicked(dataItem.id)}
            />
        );
    }

    const renderRows = () => data?.map(renderRow);

    const getClassNamesForHeader = (name: HeaderName | null) => headerName === name ? HEADER_ACTIVE : '';

    const addArrowForDirection = (name: HeaderName | null, title: string) => {
        const className = getClassNamesForHeader(name);
        if (className === HEADER_ACTIVE) {
            return title + (direction === Direction.ASCENDING ? ' ↑' : ' ↓');
        }
        return title;
    };

    const renderHeaderColumn = (name: HeaderName | null, title: string) => (
        <th className={getClassNamesForHeader(name)}
            onClick={() => onClickHeader(name)} scope='col'>
            {addArrowForDirection(name, title)}
        </th>
    );

    return (
        <div className="rounded table-size">
            <table className="table table-bordered">
                <thead className="table-primary">
                <tr>
                    {renderHeaderColumn(HeaderName.FIRST_NAME, 'FirstName')}
                    {renderHeaderColumn(HeaderName.LAST_NAME, 'LastName')}
                    {renderHeaderColumn(HeaderName.EMAIL, 'email')}
                    {renderHeaderColumn(HeaderName.PHONE, 'phone')}
                </tr>
                </thead>
                <tbody>
                {renderRows()}
                </tbody>
            </table>
        </div>
    )
}