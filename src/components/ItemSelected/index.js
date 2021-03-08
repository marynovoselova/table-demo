import React, {Component} from "react";
import TableService from "../../services/TableService";
import './index.css';
import Input from "../Input";
import TextArea from "../TextArea";


export default class ItemSelected extends Component {

    tableService = new TableService();

    state = {
        person: null,
        edit: false
    }

    componentDidMount() {
        this.initPerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.id !== prevProps.id) {
            this.initPerson();
        }
        if (!this.props.id && prevProps.id) {
            this.setState({
                person: null
            })
        }
    }

    initPerson() {
        const {id} = this.props;
        if (!id) {
            return;
        }

        this.tableService
            .getPerson(id)
            .then((person) => {
                this.setState({
                    person
                });
            });
    }


    changeEdit = (value = false) => {
        if (!this.state.edit) {
            this.setState({
                ...this.state,
                edit: value
            });
        } else {
            this.setState({
                ...this.state,
                edit: false
            });
        }
    };

    renderButtonSave = () => {
        if (this.state.edit) {
            return (
                <button
                    className="btn btn-outline-success btn__save"
                    onClick={() => this.changeEdit(false)}
                >Save
                </button>
            )
        }
    }

    transitionStylesForButton = () => {
        if (!this.state.edit) {
            return "btn btn-outline-warning btn__setting"
        } else {
            return "btn btn-outline-danger btn__cancel"
        }
    }

    render() {

        if (!this.state.person) {
            return null;
        }

        const {
            person: {
                firstName, lastName, phone, email, description,
                address: {streetAddress, city, state, zip}
            }, edit
        } = this.state;
        const {onClose} = this.props;
        const transitionDisabled = !edit ? "disabled" : "";
        const transitionLabel = !edit ? "Edit" : "Cancel";


        return (
            <div className="rounded itemSelected__form">
                <div className="itemSelected__header">
                    <div className="itemSelected__label">Selected person</div>
                    <div className="itemSelected__navigation">
                        <button
                            className={this.transitionStylesForButton()}
                            onClick={() => this.changeEdit(true)}
                        >{transitionLabel}
                        </button>
                        {this.renderButtonSave()}
                        <button
                            className="close"
                            onClick={onClose}
                        >×
                        </button>
                    </div>
                </div>
                <div className="needs-validation">
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <Input
                                value={firstName}
                                label="First name"
                                disabled={transitionDisabled}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <Input
                                value={lastName}
                                label="Last name"
                                disabled={transitionDisabled}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <Input
                                value={phone}
                                label="Phone"
                                disabled={transitionDisabled}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <Input
                                value={email}
                                label="Email"
                                disabled={transitionDisabled}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="itemSelected__address">Address:</div>
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <Input
                                    value={streetAddress}
                                    label="Street address"
                                    disabled={transitionDisabled}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <Input
                                    value={city}
                                    label="City"
                                    disabled={transitionDisabled}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <Input
                                    value={state}
                                    label="State"
                                    disabled={transitionDisabled}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <Input
                                    value={zip}
                                    label="Zip"
                                    disabled={transitionDisabled}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 itemSelected__description">
                        <TextArea
                            value={description}
                            label="Description"
                            disabled={transitionDisabled}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
