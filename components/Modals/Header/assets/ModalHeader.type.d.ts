import { ReactNode } from "react";
export interface ModalHeaderType {
    title: string;
    paragraph: string;
    icon?: ReactNode;
    align?: 'default' | 'left' | 'center';
    cbClose: () => void;
}
