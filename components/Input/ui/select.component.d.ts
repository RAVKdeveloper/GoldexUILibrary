import { FC, ReactNode } from 'react';
interface Props {
    icon?: ReactNode;
    placeholder?: string;
    callback?: () => void;
    sizeType?: 'lg' | 'sm';
    isError?: boolean;
    disabled?: boolean;
}
export declare const SelectComponent: FC<Props>;
export {};
