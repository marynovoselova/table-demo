import React from "react";
import {SearchPanelProps} from "../../types/SearchPanel/SearchPanelProps";

import './index.scss';


export const SearchPanel: React.FC<SearchPanelProps> = ({onSearchPanel, value}) => {
    return (
        <div className="searchPanel__search">
            <input
                className="form-control my-0 py-1 red-border"
                type="text"
                placeholder="Search"
                onChange={onSearchPanel}
                value={value}
            />
        </div>
    );
};