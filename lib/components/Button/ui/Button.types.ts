import { ButtonHTMLAttributes, ReactNode } from 'react'


export interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: ReactNode
}