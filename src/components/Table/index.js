import React, {Component} from "react";
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

    render() {
        return (
            <div className="rounded table-size">
                {/*<table className="table table-striped">*/}
                <table className="table table-bordered">
                    <thead className="table-primary">
                    <tr>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">email</th>
                        <th scope="col">phone</th>
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



