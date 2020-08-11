import React, {Component} from "react";
import './index.css';


export default class Input extends Component {

    render() {

        const { value, label, onChange } = this.props;

        const transitionLabelClassName = value ? "transitionLabel" : "";
        const transitionInputClassName = value ? "transitionInput" : "";

        return (
            <React.Fragment>
                <input
                    type="text"
                    className={`form-control input ${transitionInputClassName}`}
                    value={value}
                    onChange={onChange}
                />
                <label className={`ui__label ${transitionLabelClassName}`}>{label}</label>
            </React.Fragment>
        )
    }
}
