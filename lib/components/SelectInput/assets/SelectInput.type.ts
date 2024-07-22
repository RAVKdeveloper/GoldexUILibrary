import { InputHTMLAttributes } from 'react';

export interface OptionType {
  id: number;
  label: string;
  value: string | number;
}

export interface SelectInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  active: string;
  options: OptionType[];
  onClickOption: (value: string | number) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  sizeType: 'sm' | 'lg' | 'full';
}
