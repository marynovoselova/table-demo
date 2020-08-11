import React, {Component} from "react";
import './index.css'


export default class ButtonCreateItem extends Component{

    render() {
        const { onClick } = this.props;

        return (
            <button
                className="btn btn-outline-dark createItem__button"
                onClick={onClick}>
                Add new data
            </button>
        );
    }
}