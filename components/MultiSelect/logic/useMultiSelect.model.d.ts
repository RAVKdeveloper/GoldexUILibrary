import type { SelectOptions } from '../assets/MultiSelect.type';
export declare const useMultiSelect: (changeValue: (val: SelectOptions[]) => void, value: SelectOptions[], allDeleted?: boolean) => {
    isOpenDropDown: boolean;
    openDropdown: () => void;
    changeSelectValue: (selectValue: SelectOptions) => void;
    value: SelectOptions[];
    removeValue: (removeValue: string) => void;
    deleteAllValue: () => void;
};
