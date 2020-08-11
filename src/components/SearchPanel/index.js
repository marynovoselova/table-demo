import React from "react";
import './index.css';


const SearchPanel = ({onSearchPanel, value}) => {
    return (
        <div className="search">
            <input
                className="form-control my-0 py-1 red-border"
                type="text"
                placeholder="Search"
                onChange={onSearchPanel}
                value={value}
            />
        </div>

    );
}

export default SearchPanel;