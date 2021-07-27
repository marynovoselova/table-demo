import React from "react";

export type SearchPanelProps = {
    onSearchPanel: ({target}: React.ChangeEvent<HTMLInputElement>) => void,
    value: string
}