import { HTMLAttributes } from 'react'

export interface TabType extends HTMLAttributes<HTMLDivElement> {
    sizeType?: 'lg' | 'sm'
    isActive?: boolean
    disabled?: boolean    
    text: string
}