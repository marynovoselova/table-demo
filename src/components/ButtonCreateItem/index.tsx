import React from 'react';
import {ButtonCreateItemProps} from "../../types/ButtonCreateItem/ButtonCreateItemProps";

import "./index.scss";


export const ButtonCreateItem: React.FC<ButtonCreateItemProps> = ({onClick}) => {
    return (
        <button
            className="btn btn-outline-dark createItem__button"
            onClick={() => onClick()}>
            Add new data
        </button>
    );
};