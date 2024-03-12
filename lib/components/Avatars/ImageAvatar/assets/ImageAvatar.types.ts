import { HTMLAttributes } from 'react'

export interface ImageAvatarTypes extends HTMLAttributes<HTMLDivElement> {
    url: string
    size?: 'lg' | 'sm'
    altText: string
    removeFn?: () => void
}