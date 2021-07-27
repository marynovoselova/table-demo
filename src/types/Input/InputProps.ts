import React from "react";

export type InputProps = {
    value: string,
    label: string,
    disabled: boolean,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}