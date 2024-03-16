import { ReactNode } from 'react'
import { LeadIcon } from 'goldex-icon-library'


export interface NavigationItemType {
    listNodes?: ReactNode
    badge?: ReactNode
    Icon?: typeof LeadIcon
    isEnd?: boolean
    text: string
    isActive?: boolean
    disabled?: boolean
    type?: 'main' | 'list'
    keyOpen?: number
}