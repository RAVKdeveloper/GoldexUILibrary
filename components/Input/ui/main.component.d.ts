import { FC, InputHTMLAttributes, ReactNode } from 'react';
interface Props extends InputHTMLAttributes<HTMLInputElement> {
    isError: boolean;
    variant: 'lg' | 'sm';
    icon?: ReactNode;
    cbIcon?: () => void;
    disabled?: boolean;
}
export declare const MainInputComponent: FC<Props>;
export {};
