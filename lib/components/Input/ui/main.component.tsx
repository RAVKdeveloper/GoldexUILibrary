import { FC, InputHTMLAttributes, ReactNode } from 'react'

import s from '../assets/input.module.css'


interface Props extends InputHTMLAttributes<HTMLInputElement> {
    isError: boolean 
    variant: 'lg' | 'sm'
    icon?: ReactNode
    cbIcon?: () => void 
    disabled?: boolean
}


export const MainInputComponent: FC<Props> = ({ 
    variant = 'lg', isError = false, icon, cbIcon, disabled = false, ...props 
}) => {

    return (

        <div className={`${s.wrapper} ${disabled && s.dis}`}>
            <input 
             className={`${s.root} ${s[variant]} ${isError && s.error} ${icon && s.pad}`} 
             {...props} 
             />
             {
                icon &&
                  <div 
                   onClick={() => cbIcon?.()} 
                   className={`${s.icon} ${s[variant]}`}
                   >
                    {icon}
                  </div>
             }
        </div>
    )
}