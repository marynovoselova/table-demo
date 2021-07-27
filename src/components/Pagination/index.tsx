import React from "react";
import {PAGES_COUNT_TO_SHOW} from "../../consts";
import {PaginationProps} from "../../types/Pagination/PaginationProps";

import "./index.scss";


export const Pagination:React.FC<PaginationProps> = ({onCurrentPageClicked,
                                                      currentPage, pageCount}) => {

    const renderButton = (numberPage: number, number: number) => {
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

    const renderButtons = (currentPage: number) => {
        return (
            <React.Fragment>
                {renderButton(currentPage, 1)}
                {renderButton(currentPage, 2)}
                {renderButton(currentPage, 3)}
            </React.Fragment>
        );
    };

    const renderPagination = () => {
        if (pageCount !== null && currentPage + PAGES_COUNT_TO_SHOW > pageCount - 1) {
            if (currentPage + PAGES_COUNT_TO_SHOW === pageCount) return renderButtons(currentPage);
            if (currentPage + 1 === pageCount) return renderButtons(currentPage - 2);
            return renderButtons(currentPage - 1);
        } else return renderButtons(currentPage);
    };

    const renderButtonNext = () => {
        if (pageCount !== null && currentPage + PAGES_COUNT_TO_SHOW > pageCount - 1) return null;
        return (
            <button
                className="btn btn-outline-dark pagination__button"
                onClick={() => onCurrentPageClicked(currentPage + 1)}>
                →
            </button>
        );
    };

    const renderPrevButton = () => {
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

    const renderNextButton = pageCount !== null && pageCount > 3 ? renderButtonNext() : null;

    return (
        <div className="pagination">
            {renderPrevButton()}
            {renderPagination()}
            {renderNextButton}
        </div>
    );
}