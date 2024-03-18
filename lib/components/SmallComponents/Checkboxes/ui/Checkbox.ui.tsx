import { FC } from 'react'
import { CheckMarkIcon, MinusIcon } from 'goldex-icon-library'

import type { CheckboxType } from '../assets/Checkbox.type'

import s from '../assets/style.module.css'


export const Checkbox: FC<CheckboxType> = ({ selected, variant = 'plus', disabled = false, onClick }) => {

    return (

       <div 
        data-testid='checkbox' 
        className={`${s.root} ${selected && s.selected} ${disabled && s.dis}`}
        onClick={() => onClick()}
       >
        {
            selected && variant === 'plus' &&
            <CheckMarkIcon width={13} height={13} color='black' />
        }
        {
            selected && variant === 'minus' &&
            <MinusIcon width={13} height={13} color='black' />
        }
       </div>
    )
}