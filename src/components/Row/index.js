import React, {Component} from "react";

export default class Row extends Component {

    render() {

        const { item:
            { firstName, lastName, email, phone },
            onClick,
        } = this.props;

        return (
                <tr onClick={onClick}>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                </tr>
        )
    }

}
