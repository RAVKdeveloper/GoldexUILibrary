import { FC, ReactNode } from "react";
import type { SelectOptions } from "../assets/TextField.types";
interface Props {
    icon?: ReactNode;
    placeholder?: string;
    callback?: () => void;
    sizeType?: "lg" | "sm" | "full";
    isError?: boolean;
    disabled?: boolean;
    options?: SelectOptions[];
    activeValue?: string | number;
    changeSelectValue?: (value: SelectOptions) => void;
    isOpenOverflow?: boolean;
    readonly btnText?: string;
}
export declare const SelectComponent: FC<Props>;
export {};
