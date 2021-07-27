import React from "react";

export type TextAreaProps = {
    value: string,
    label: string,
    disabled: boolean,
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}