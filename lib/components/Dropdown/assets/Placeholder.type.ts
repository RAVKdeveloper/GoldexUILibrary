import { ReactNode } from 'react'

export interface PlaceholderDropdownType {
    placeholder?: string
    icon?: ReactNode
    isCheckbox?: boolean
    isToggle?: boolean
    iconEnd?: ReactNode
    isSuccess?: boolean
    active?: boolean
    isActiveCheckbox?: boolean
    isActiveToggle?: boolean 
    cbCheckbox?: () => void
    cbToggle?: () => void
}