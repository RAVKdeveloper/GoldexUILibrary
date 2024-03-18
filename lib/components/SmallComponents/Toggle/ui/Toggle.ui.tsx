import { FC } from 'react'

import type { ToggleType } from '../assets/Toggle.type'

import s from '../assets/style.module.css'


export const Toggle: FC<ToggleType> = ({ 
    active, size = 'lg', disabled = false, ...props 
}) => {

    return (

        <div
         data-testid='toggle'
         {...props}
         className={`
         ${s.root} 
         ${s[size]}
         ${active && s.active}
         ${disabled && s.dis}
        `}>
          <div 
           className={`
            ${s.check} 
            ${s[size]}
            ${active && s.active}
            `}></div>
        </div>
    )
}