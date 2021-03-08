import React, {Component} from "react";
import { PAGES_COUNT_TO_SHOW } from "../../consts/index";
import './index.css';

export default class Pagination extends Component {

    renderButton = (numberPage, number) => {
        const { onCurrentPageClicked, currentPage } = this.props;
        const isClassActive = ((numberPage + (number - 1) === currentPage) && currentPage !== 0)
                            ? 'pagination__button-active' : '';

        return (
            <button
                key={number}
                className={`btn btn-outline-dark pagination__button ${isClassActive}`}
                onClick={() => onCurrentPageClicked(numberPage + (number - 1))}>
                {numberPage + number}
            </button>
        );
    };

    renderButtons = (currentPage) => {
        return (
            <React.Fragment>
                {this.renderButton(currentPage, 1)}
                {this.renderButton(currentPage, 2)}
                {this.renderButton(currentPage, 3)}
            </React.Fragment>
        );
    };

    renderPagination = () => {
        const { currentPage, pageCount } = this.props;

        if (currentPage + PAGES_COUNT_TO_SHOW > pageCount - 1) {
            if (currentPage + PAGES_COUNT_TO_SHOW === pageCount) return this.renderButtons(currentPage);
            if (currentPage + 1 === pageCount) return this.renderButtons(currentPage - 2);
            return this.renderButtons(currentPage - 1);
        } else return this.renderButtons(currentPage);
    };

    renderButtonNext = () => {
        const {onCurrentPageClicked, currentPage, pageCount} = this.props;
        if (currentPage + PAGES_COUNT_TO_SHOW > pageCount - 1) return null;
        return (
            <button
                className="btn btn-outline-dark pagination__button"
                onClick={() => onCurrentPageClicked(currentPage + 1)}>
                →
            </button>
        );
    };

    renderPrevButton = () => {
        const {onCurrentPageClicked, currentPage} = this.props;
        if (currentPage !== 0) {
            return (
                <button
                    className="btn btn-outline-dark pagination__button"
                    onClick={() => onCurrentPageClicked(currentPage - 1)}>
                    ←
                </button>
            );
        }
        return null;
    }


    render() {
        const renderButtonNext = this.props.pageCount > 3 ? this.renderButtonNext() : null;

        return (
            <div className="pagination">
                {this.renderPrevButton()}
                {this.renderPagination()}
                {renderButtonNext}
            </div>
        );
    }
}