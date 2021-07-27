import React, {Component} from "react";
import TableService from "../../services/TableService";
import {TextArea} from "../TextArea";
import {Input} from "../Input";
import {CreateItemState, CreateItemProps} from "../../types/CreateItem";

import "./index.scss";


export default class CreateItem extends Component<CreateItemProps, CreateItemState> {

    tableService = new TableService();

    state: CreateItemState = {
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
            .sendData(this.state.form)
            .then(() => {
            this.props.onCloseClicked();
            this.props.onSuccessCreated();
        })
    }

    handleChangeFirstName = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            form: {
                ...this.state.form,
                firstName: target.value
            }
        })
    }

    handleChangeLastName = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            form: {
                ...this.state.form,
                lastName: target.value
            }
        })
    }

    handleChangePhone = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            form: {
                ...this.state.form,
                phone: target.value
            }
        })
    }

    handleChangeEmail = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            form: {
                ...this.state.form,
                email: target.value
            }
        })
    }

    handleChangeDescription = ({target}: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({
            form: {
                ...this.state.form,
                description: target.value
            }
        })
    }


    handleChangeStreetAddress = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            form: {
                ...this.state.form,
                address: {
                    ...this.state.form.address,
                    streetAddress: target.value
                }
            }
        })
    }

    handleChangeCity = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            form: {
                ...this.state.form,
                address: {
                    ...this.state.form.address,
                    city: target.value
                }
            }
        })
    }

    handleChangeState = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            form: {
                ...this.state.form,
                address: {
                    ...this.state.form.address,
                    state: target.value
                }
            }
        })
    }

    handleChangeZip = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            form: {
                ...this.state.form,
                address: {
                    ...this.state.form.address,
                    zip: target.value
                }
            }
        })
    }

    changeTransitionDisabled = (): boolean => {
        let isError = false;
        Object.values(this.state.form)
            .forEach((value) => {
                if (!value) {
                    return isError = true;
                }
            });
        return isError;
    };

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
                                disabled={false}
                                onChange={this.handleChangeFirstName}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <Input
                                value={lastName}
                                label="Last name"
                                disabled={false}
                                onChange={this.handleChangeLastName}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <Input
                                value={phone}
                                label="Phone"
                                disabled={false}
                                onChange={this.handleChangePhone}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <Input
                                value={email}
                                label="Email"
                                disabled={false}
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
                                    disabled={false}
                                    onChange={this.handleChangeStreetAddress}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <Input
                                    value={city}
                                    label="City"
                                    disabled={false}
                                    onChange={this.handleChangeCity}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <Input
                                    value={state}
                                    label="State"
                                    disabled={false}
                                    onChange={this.handleChangeState}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <Input
                                    value={zip}
                                    label="Zip"
                                    disabled={false}
                                    onChange={this.handleChangeZip}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 createItem__description">
                        <TextArea
                            value={description}
                            label="Description"
                            disabled={false}
                            onChange={this.handleChangeDescription}
                        />
                    </div>
                </div>
                <button
                    disabled={this.changeTransitionDisabled()}
                    type="button"
                    className="btn btn-outline-dark createItem__buttonAdd"
                    onClick={this.sendDataOfPerson}>
                    Add to table
                </button>
            </div>
        )
    }
}
