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
import { ASCENDING, DESCENDING, ONE, MINUS_ONE, DEFAULT_PAGE_SIZE } from "../../consts/index";

export default class App extends Component {

    tableService = new TableService();

    state = {
        people: [],
        selectedPerson: null,
        loading: true,
        renderCreateItem: false,
        isModalOpen: false,
        currentPage: 0,
        searchText: '',
        pageCount: null,
        sort: {
            direction: null,
            headerName: null
        }
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
        if (this.state.currentPage !== prevState.currentPage || this.state.searchText !== prevState.searchText) {
            this.initPeople(this.state.currentPage, this.state.searchText);
            this.getTotalPeople();
        }
    }

    initPeople = (currentPage = 0, searchText) => {
        this.setState({
            ...this.state,
            currentPage,
            searchText,
            loading: true,
        });
        this.tableService
            .getData(currentPage, searchText)
            .then(this.onPeopleLoaded);
    };

    getTotalPeople = () => {
        this.tableService
            .getTotalData()
            .then((number) => {
                const pageCount = Math.ceil(number/DEFAULT_PAGE_SIZE);
                this.setState({
                    ...this.state,
                    pageCount
                });
            })
    }

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

    onSearchPanel = ({target}) => {
        this.setState({
            searchText: target.value
        })
    };

    sortPeople = (a, b, headerName, direction) => {
        if (a[headerName] > b[headerName]) {
            return direction === ASCENDING ? ONE : MINUS_ONE;
        }
        if (a[headerName] < b[headerName]) {
            return direction === ASCENDING ? MINUS_ONE : ONE;
        }
        return 0;
    };

    onClickHeader = (headerName) => {
        this.setState(({people}) => {
            let direction;
            if (this.state.sort.headerName === headerName) {
                if (this.state.sort.direction) direction = this.getOppositeDirection(this.state.sort.direction);
            } else {
                direction = ASCENDING;
            }
            const arrSorted = people.sort((a, b) => this.sortPeople(a, b, headerName, direction));

            return {
                ...this.state,
                people: arrSorted,
                sort: {
                    direction,
                    headerName: headerName
                }
            };
        });
    };

    getOppositeDirection(direction) {
        if (direction === ASCENDING) return DESCENDING;
        return ASCENDING;
    }


    render() {

        const {people, selectedPerson, isModalOpen, currentPage, search, pageCount, sort: { direction, headerName }} = this.state;

        const content = (people.length > 1) ? <Table
            data={people}
            onPersonClicked={this.onPersonClicked}
            onClickHeader={this.onClickHeader}
            direction={direction}
            headerName={headerName}
        /> : null;

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
                    <SearchPanel onSearchPanel={this.onSearchPanel} value={search}/>
                    {content}
                    <Pagination
                        onCurrentPageClicked={this.initPeople}
                        currentPage={currentPage}
                        pageCount={pageCount}
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