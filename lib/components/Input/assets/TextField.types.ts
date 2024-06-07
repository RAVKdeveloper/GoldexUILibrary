import { InputHTMLAttributes, ReactNode } from "react";

export interface SelectOptions {
  label: string;
  value: string;
  icon?: ReactNode;
}

export interface TextFieldType extends InputHTMLAttributes<HTMLInputElement> {
  helpText?: string;
  isError?: boolean;
  variant?: "input" | "search" | "select";
  sizeType?: "lg" | "sm" | "full";
  label?: string;
  icon?: ReactNode;
  cbIcon?: () => void;
  disabled?: boolean;
  options?: SelectOptions[];
  activeValue?: string | number;
  changeSelectValue?: (value: SelectOptions) => void;
  isOpenOverflow?: boolean;
  readonly btnText?: string;
}
