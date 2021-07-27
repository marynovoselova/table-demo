import React from "react";
import {RowProps} from "../../types/Row/RowProps";


export const Row:React.FC<RowProps> = ({onClick, item: {
                                        firstName, lastName, email, phone, id}}) => {

    return (
        <tr onClick={() => onClick(id)}>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td>{phone}</td>
        </tr>
    )
}
