import React, {Component} from "react";
import TableService from "../../Services/TableService";
import './index.css';
import Input from "../Input";
import TextArea from "../TextArea";


export default class ItemSelected extends Component {

    tableService = new TableService();

    state = {
        person: null
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

    render() {

        if (!this.state.person) {
            return null;
        }

        const {
            firstName, lastName, phone, email, description,
            address: {streetAddress, city, state, zip}
        } = this.state.person;
        const {onClose} = this.props;


        return (
            <div className="rounded itemSelected__form">
                <div className="itemSelected__header">
                    <div className="itemSelected__label">Selected person</div>
                    <button
                        className="close"
                        onClick={onClose}
                    >×
                    </button>
                </div>
                <div className="needs-validation">
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <Input
                                value={firstName}
                                label="First name"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <Input
                                value={lastName}
                                label="Last name"
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <Input
                                value={phone}
                                label="Phone"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <Input
                                value={email}
                                label="Email"
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
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <Input
                                    value={city}
                                    label="City"
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <Input
                                    value={state}
                                    label="State"
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <Input
                                    value={zip}
                                    label="Zip"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 itemSelected__description">
                        <TextArea
                            value={description}
                            label="Description"
                        />
                    </div>
                </div>
            </div>
        )
    }
}
