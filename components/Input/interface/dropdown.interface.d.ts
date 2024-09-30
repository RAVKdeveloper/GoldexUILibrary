import { SelectOptions } from "../assets/TextField.types";
export interface DropDownSelect {
    options: SelectOptions[];
    readonly isOpen: boolean;
    readonly value: string;
    changeSelectValue: (selectValue: SelectOptions) => void;
    readonly cbClose: () => void;
    readonly placeholder: string;
    readonly btnText: string;
}
