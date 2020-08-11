import React, {Component} from "react";
import Table from "../Table";
import TableService from "../../services/TableService";
import CreateItem from "../CreateItem";
import SearchPanel from "../SearchPanel";
import Spinner from "../Spinner";

import './index.css';
import ButtonCreateItem from "../ButtonCreateItem";
import ItemSelected from "../ItemSelected";
import Pagination from "../Pagination";

export default class App extends Component {

    tableService = new TableService();

    state = {
        people: [],
        selectedPerson: null,
        loading: true,
        renderCreateItem: false,
        isModalOpen: false,
        currentPage: 0
        // search: ''
    };

    onPeopleLoaded = (people) => {
        this.setState({
            ...this.state,
            people,
            loading: false
        });
    };

    componentDidMount() {
        this.initPeople();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.currentPage !== prevState.currentPage) {
            this.initPeople(this.state.currentPage);
        }
    }

    initPeople = (currentPage = 0) => {
        this.setState({
            ...this.state,
            currentPage,
            loading: true,
        });
        this.tableService
            .getListOfTableItems(currentPage)
            .then(this.onPeopleLoaded);
    };

    renderLoading() {
        const {loading} = this.state;

        if (!loading) {
            return null;
        }

        return (
            <div className="app__background">
                <Spinner/>
            </div>
        );
    };

    renderModalWindow() {
        return (
            <div className="app__background">
                <CreateItem
                    onCloseClicked={() => this.onModalOpened(false)}
                    onSuccessCreated={this.initPeople}
                />
            </div>
        );
    }

    onPersonClicked = (personId) => {
        this.setState({
            ...this.state,
            selectedPerson: personId
        })
    }

    onModalOpened = (value) => {
        this.setState({
            ...this.state,
            isModalOpen: value
        })
    }

    // addData = ({newObj}) => {
    //     this.setState(({ people }) => {
    //         const newArr = [
    //             ...people,
    //             newObj
    //         ];
    //
    //         return {
    //             people: newArr
    //         }
    //     });
    // };


    // onSearchPanel = (e) => {
    //     this.setState({
    //         search: e.target.value
    //     })
    // };


    render() {

        const {people, selectedPerson, isModalOpen, currentPage } = this.state;

        const content = (people.length > 1) ? <Table
            data={people}
            onPersonClicked={this.onPersonClicked}
            // people={peopleAfterFilter}
        /> : null;

        // const peopleAfterFilter = people.filter((elem) => {
        //     return elem.label.toUpperCase().includes(search.toUpperCase());
        // });


        const modalWindow = isModalOpen ? this.renderModalWindow() : null;

        return (
            <React.Fragment>
                <div className="app">
                    <div className="app__header">
                        <header>Personal Data</header>
                        <ButtonCreateItem
                            onClick={() => this.onModalOpened(true)}
                        />
                    </div>
                    <SearchPanel/>
                    {/*<SearchPanel onSearchPanel={this.onSearchPanel} value={search} />*/}
                    {content}
                    <Pagination
                        onCurrentPageClicked={this.initPeople}
                        currentPage={currentPage}
                    />
                    {modalWindow}
                    <ItemSelected
                        id={selectedPerson}
                        onClose={() => this.onPersonClicked(null)}
                    />
                </div>
                {this.renderLoading()}
            </React.Fragment>
        )


    }
}