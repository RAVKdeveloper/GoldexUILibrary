import type { HTMLAttributes, ReactNode } from "react";

export interface SelectOptions {
  label: string;
  value: string;
  icon?: ReactNode;
}

export interface DropDownMultiSelect {
  options: SelectOptions[];
  readonly isOpen: boolean;
  readonly value: SelectOptions[];
  changeSelectValue: (selectValue: SelectOptions) => void;
  readonly removeItem: (removeValue: string) => void;
}

export interface CardMultiSelectType {
  readonly cardValue: SelectOptions;
  readonly removeItem: (removeValue: string) => void;
}

export interface MultiSelectType extends HTMLAttributes<HTMLDivElement> {
  placeholder?: string | ReactNode;
  options: SelectOptions[];
  onChangeValue: (val: SelectOptions[]) => void;
}
