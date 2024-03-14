import { FC, ReactNode } from 'react'

import s from '../assets/select.module.css'

import { PlaceholderComponent } from './placeholder.component' 


interface Props {
    icon?: ReactNode
    placeholder?: string
    callback?: () => void
    sizeType?: 'lg' | 'sm'
    isError?: boolean
    disabled?: boolean
}



export const SelectComponent: FC<Props> = ({ 
    icon, placeholder, callback, sizeType = 'lg', isError = false, disabled = false
}) => {

    return (

        <div 
         onClick={() => callback?.()} 
         className={`${s.root} ${s[sizeType]} ${isError && s.error} ${disabled && s.dis}`}
         >
            <PlaceholderComponent icon={icon} placeholder={placeholder} />
        </div>
    )
}