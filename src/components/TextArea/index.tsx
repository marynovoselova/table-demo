import React from "react";
import {TextAreaProps} from "../../types/TextArea/TextAreaProps";

import './index.scss';


export const TextArea: React.FC<TextAreaProps> = ({value, label, disabled, onChange}) => {

    const transitionLabelClassName = value ? "textArea__label" : "";
    const transitionTextAreaClassName = value ? "textArea__transition" : "";

    return (
        <React.Fragment>
            <textarea
                className={`form-control textArea ${transitionTextAreaClassName}`}
                value={value}
                disabled={disabled}
                onChange={onChange}
            />
            <label className={`ui__label2 ${transitionLabelClassName}`}>{label}</label>
        </React.Fragment>
    );
};
