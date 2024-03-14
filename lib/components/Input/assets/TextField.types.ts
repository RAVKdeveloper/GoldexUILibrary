import { InputHTMLAttributes, ReactNode } from "react"

export interface TextFieldType extends InputHTMLAttributes<HTMLInputElement> {
    helpText?: string
    isError?: boolean
    variant?: 'input' | 'search' | 'select',
    sizeType?: 'lg' | 'sm'
    label?: string
    icon?: ReactNode
    cbIcon?: () => void 
    disabled?: boolean
}