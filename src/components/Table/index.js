import React, {Component} from "react";
import {
    ASCENDING,
    FIRST_NAME,
    LAST_NAME,
    EMAIL,
    PHONE,
    HEADER_ACTIVE
} from "../../consts/index";
import Row from '../Row';
import './index.css';

export default class Table extends Component {

    renderRow = (dataItem) => {
        return (
            <Row item={dataItem}
                 key={dataItem.id}
                 onClick={() => this.props.onPersonClicked(dataItem.id)}
            />
        );
    }

    renderRows = () => this.props.data?.map(this.renderRow);

    getClassNamesForHeader = (headerName) => this.props.headerName === headerName ? HEADER_ACTIVE : '';

    addArrowForDirection = (headerName, title) => {
        const className = this.getClassNamesForHeader(headerName);
        if (className === HEADER_ACTIVE) {
            return title + (this.props.direction === ASCENDING ? ' ↑' : ' ↓');
        }
        return title;
    };

    renderHeaderColumn = (headerName, title) => (
        <th className={this.getClassNamesForHeader(headerName)}
            onClick={() => this.props.onClickHeader(headerName)} scope='col'>
            {this.addArrowForDirection(headerName, title)}
        </th>
    );


    render() {
        return (
            <div className="rounded table-size">
                <table className="table table-bordered">
                    <thead className="table-primary">
                    <tr>
                        {this.renderHeaderColumn(FIRST_NAME, 'FirstName')}
                        {this.renderHeaderColumn(LAST_NAME, 'LastName')}
                        {this.renderHeaderColumn(EMAIL, 'email')}
                        {this.renderHeaderColumn(PHONE, 'phone')}
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}