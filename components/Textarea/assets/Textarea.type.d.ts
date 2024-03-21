import { InputHTMLAttributes } from 'react';
export interface TextareaType extends InputHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    isError?: boolean;
    helpText?: string;
    disabled?: boolean;
}
