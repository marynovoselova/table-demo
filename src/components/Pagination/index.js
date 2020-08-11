import React, {Component} from "react";
import './index.css';

export default class Pagination extends Component {

    // componentDidUpdate(prevProps) {
    //     if (this.props.currentPage !== prevProps.currentPage) {
    //         this.props.onCurrentPageClicked();
    //     }
    // }

    render() {

        const { onCurrentPageClicked, currentPage } = this.props;

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

        return (
            <div className="pagination">
                {renderPrevButton()}
                <button
                    className="btn btn-outline-dark pagination__button"
                    onClick={() => onCurrentPageClicked(currentPage)}>
                    {currentPage + 1}
                </button>
                <button
                    className="btn btn-outline-dark pagination__button"
                    onClick={() => onCurrentPageClicked(currentPage + 1)}>
                    {currentPage + 2}
                </button>
                <button
                    className="btn btn-outline-dark pagination__button"
                    onClick={() => onCurrentPageClicked(currentPage + 2)}>
                    {currentPage + 3}
                </button>
                <div className="pagination__text">...</div>
                <button
                    className="btn btn-outline-dark pagination__button"
                    onClick={() => onCurrentPageClicked(currentPage + 1)}>
                    →
                </button>
            </div>
        );
    }
}