import React, {Component} from "react";
import TableService from "../../services/TableService";
import TextArea from "../TextArea";
import Input from "../Input";
import './index.css';


export default class CreateItem extends Component {

    tableService = new TableService();

    state = {
        form: {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            description: '',
            address: {
                streetAddress: '',
                city: '',
                state: '',
                zip: ''
            }
        },
        closeCreateItem: false,
        error: false
    }

    sendDataOfPerson = () => {
        this.tableService
            .sendData(this.state.form, () => {
                this.props.onCloseClicked();
                this.props.onSuccessCreated();
            })
    }

    handleChangeFirstName = (event) => {
        this.setState({
            form: {
                ...this.state.form,
                firstName: event.target.value
            }
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            form: {
                ...this.state.form,
                lastName: event.target.value
            }
        })
    }

    handleChangePhone = (event) => {
        this.setState({
            form: {
                ...this.state.form,
                phone: event.target.value
            }
        })
    }

    handleChangeEmail = (event) => {
        this.setState({
            form: {
                ...this.state.form,
                email: event.target.value
            }
        })
    }

    handleChangeDescription = (event) => {
        this.setState({
            form: {
                ...this.state.form,
                description: event.target.value
            }
        })
    }


    handleChangeStreetAddress = (event) => {
        this.setState({
            form: {
                ...this.state.form,
                address: {
                    ...this.state.form.address,
                    streetAddress: event.target.value
                }
            }
        })
    }

    handleChangeCity = (event) => {
        this.setState({
            form: {
                ...this.state.form,
                address: {
                    ...this.state.form.address,
                    city: event.target.value
                }
            }
        })
    }

    handleChangeState = (event) => {
        this.setState({
            form: {
                ...this.state.form,
                address: {
                    ...this.state.form.address,
                    state: event.target.value
                }
            }
        })
    }

    handleChangeZip = (event) => {
        this.setState({
            form: {
                ...this.state.form,
                address: {
                    ...this.state.form.address,
                    zip: event.target.value
                }
            }
        })
    }

    changeTransitionDisabled = () => {
        let isError = false;
        Object.entries(this.state.form)
            .forEach(([key, value]) => {
                if (!value) {
                    return isError = true;
                }
            });
        return isError ? "disabled" : "";
    };

    // onError = (value) => {
    //     if (value === "") {
    //         return (
    //             <div className="error__message">Fill out the required field</div>
    //         )
    //     }
    // }


    render() {

        const {
            form: {
                firstName, lastName, phone, email, description,
                address: {streetAddress, city, state, zip}
            }
        } = this.state;

        const {onCloseClicked} = this.props;

        return (
            <div className="rounded createItem__form">
                <div className="createItem__header">
                    <div className="createItem__label">Creation of new data</div>
                    <button
                        className="close createItem__buttonClose"
                        onClick={onCloseClicked}
                    >×
                    </button>
                </div>
                <div className="needs-validation">
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <Input
                                value={firstName}
                                label="First name"
                                onChange={this.handleChangeFirstName}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <Input
                                value={lastName}
                                label="Last name"
                                onChange={this.handleChangeLastName}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <Input
                                value={phone}
                                label="Phone"
                                onChange={this.handleChangePhone}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <Input
                                value={email}
                                label="Email"
                                onChange={this.handleChangeEmail}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="createItem__address">Address:</div>
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <Input
                                    value={streetAddress}
                                    label="Street address"
                                    onChange={this.handleChangeStreetAddress}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <Input
                                    value={city}
                                    label="City"
                                    onChange={this.handleChangeCity}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <Input
                                    value={state}
                                    label="State"
                                    onChange={this.handleChangeState}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <Input
                                    value={zip}
                                    label="Zip"
                                    onChange={this.handleChangeZip}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 createItem__description">
                        <TextArea
                            value={description}
                            label="Description"
                            onChange={this.handleChangeDescription}
                        />
                    </div>
                </div>
                <button
                    disabled={this.changeTransitionDisabled()}
                    type="button"
                    className="btn btn-outline-dark btn__add"
                    onClick={this.sendDataOfPerson}>
                    Add to table
                </button>
            </div>
        )
    }
}
