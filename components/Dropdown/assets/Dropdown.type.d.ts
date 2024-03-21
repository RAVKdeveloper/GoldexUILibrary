import { InputHTMLAttributes, ReactNode } from 'react';
export interface DropdownType extends InputHTMLAttributes<HTMLInputElement> {
    icon?: ReactNode;
    isCheckbox?: boolean;
    isToggle?: boolean;
    iconEnd?: ReactNode;
    isSuccess?: boolean;
    disabled?: boolean;
    active?: boolean;
    isActiveCheckbox?: boolean;
    isActiveToggle?: boolean;
    cbCheckbox?: () => void;
    cbToggle?: () => void;
}
