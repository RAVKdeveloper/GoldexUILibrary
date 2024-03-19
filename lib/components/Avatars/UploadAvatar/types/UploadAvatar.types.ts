import { HTMLAttributes } from 'react'

export interface UploadAvatarType extends HTMLAttributes<HTMLDivElement> {
    size?: 'lg' | 'md' | 'sm' | 'es'
}