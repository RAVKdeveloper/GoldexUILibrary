import { FC, InputHTMLAttributes } from 'react';
interface Props extends InputHTMLAttributes<HTMLInputElement> {
    cbSearch?: () => void;
    disabled?: boolean;
}
export declare const SearchInput: FC<Props>;
export {};
