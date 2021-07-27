import React from "react";
import {InputProps} from "../../types/Input/InputProps";

import "./index.scss";


export const Input: React.FC<InputProps> = ({label, value, disabled, onChange}) => {

    const transitionLabelClassName = value ? "input__transitionLabel" : "";
    const transitionInputClassName = value ? "input__transitionInput" : "";

    return (
        <React.Fragment>
            <input
                type="text"
                className={`form-control input ${transitionInputClassName}`}
                value={value}
                disabled={disabled}
                onChange={onChange}
            />
            <label className={`ui__label ${transitionLabelClassName}`}>{label}</label>
        </React.Fragment>
    )
}
