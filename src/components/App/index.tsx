import React, {Component} from "react";
import TableService from "../../services/TableService";
import {DEFAULT_PAGE_SIZE} from "../../consts";
import ItemSelected from "../ItemSelected";
import CreateItem from "../CreateItem";
import {ButtonCreateItem} from "../ButtonCreateItem";
import {SearchPanel} from "../SearchPanel";
import {Pagination} from "../Pagination";
import {Spinner} from "../Spinner";
import {Table} from "../Table";
import {AppState, Direction, HeaderName} from "../../types/App/AppState";
import {Person} from "../../types/Person";

import "./index.scss";


export default class App extends Component {

    tableService = new TableService();

    state: AppState = {
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

    onPeopleLoaded = (people: Array<Person>) => {
        this.setState({
            ...this.state,
            people,
            loading: false
        });
    };

    componentDidMount() {
        this.initPeople();
    }

    componentDidUpdate(prevProps: any, prevState: AppState) {
        if (this.state.currentPage !== prevState.currentPage || this.state.searchText !== prevState.searchText) {
            this.initPeople(this.state.currentPage, this.state.searchText);
            this.getTotalPeople();
        }
    }

    initPeople = (currentPage: number = 0, searchText: string = ''): void => {
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

    onPersonClicked = (personId: string | null) => {
        this.setState({
            ...this.state,
            selectedPerson: personId
        })
    }

    onModalOpened = (value: boolean): void => {
        this.setState({
            ...this.state,
            isModalOpen: value
        })
    }

    onSearchPanel = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            searchText: target.value
        })
    };

    sortPeople = (a: Person, b: Person, headerName: HeaderName | null, direction: string | null): number => {
        if (headerName === null) return 0;
        if (a[headerName] > b[headerName]) {
            return direction === Direction.ASCENDING ? 1 : -1;
        }
        if (a[headerName] < b[headerName]) {
            return direction === Direction.ASCENDING ? -1 : 1;
        }
        return 0;
    };

    onClickHeader = (headerName: HeaderName | null) => {
        this.setState(({people}: AppState): AppState => {
            let direction: Direction | null = null;
            if (this.state.sort.headerName === headerName) {
                if (this.state.sort.direction) direction = this.getOppositeDirection(this.state.sort.direction);
            } else {
                direction = Direction.ASCENDING;
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

    getOppositeDirection(direction: string | null): Direction {
        if (direction === Direction.ASCENDING) return Direction.DESCENDING;
        return Direction.ASCENDING;
    }


    render() {

        const {people, selectedPerson, isModalOpen, currentPage, searchText, pageCount,
                sort: { direction, headerName }} = this.state;

        const content = (people.length > 1) ? <Table
            data={people}
            onPersonClicked={this.onPersonClicked}
            onClickHeader={this.onClickHeader}
            direction={direction}
            headerName={headerName}
        /> : null;
        const pagination = (people.length > 1) ? <Pagination
            onCurrentPageClicked={this.initPeople}
            currentPage={currentPage}
            pageCount={pageCount}
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
                    <SearchPanel onSearchPanel={this.onSearchPanel} value={searchText}/>
                    {content}
                    {pagination}
                    {modalWindow}
                    <ItemSelected
                        id={selectedPerson}
                        onClose={this.onPersonClicked}
                    />
                </div>
                {this.renderLoading()}
            </React.Fragment>
        )
    }
}