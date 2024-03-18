import { HTMLAttributes } from 'react'

export interface ToggleType extends HTMLAttributes<HTMLDivElement> {
    size?: 'lg' | 'sm',
    active: boolean
    disabled?: boolean
}