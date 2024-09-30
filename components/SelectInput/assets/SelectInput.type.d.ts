import { InputHTMLAttributes } from "react";
export interface OptionType {
    id: number;
    label: string;
    value: string;
}
export interface SelectInputProps extends InputHTMLAttributes<HTMLInputElement> {
    readonly placeholder: string;
    readonly active: string | number;
    readonly options: OptionType[];
    onClickOption: (value: OptionType) => void;
    readonly sizeType: "sm" | "lg" | "full";
    readonly emptyText?: string;
}
