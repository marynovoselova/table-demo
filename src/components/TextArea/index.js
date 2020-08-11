import React, {Component} from "react";
import './index.css';


export default class TextArea extends Component {

    render() {

        const { value, label, onChange } = this.props;

        const transitionLabelClassName = value ? "textArea__label" : "";
        const transitionTextAreaClassName = value ? "transitionTextArea" : "";

        return (
            <React.Fragment>
                <textarea
                    className={`form-control textArea ${transitionTextAreaClassName}`}
                    value={value}
                    onChange={onChange}
                />
                <label className={`ui__label2 ${transitionLabelClassName}`}>{label}</label>
            </React.Fragment>
        )
    }
}
