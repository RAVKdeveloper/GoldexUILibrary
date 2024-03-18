import { FC } from 'react'

import type { RadioType } from '../assets/Radio.type'

import s from '../assets/style.module.css'


export const Radio: FC<RadioType> = ({ selected, disabled = false, onClick }) => {

    return (

        <div 
        data-testid='radio'
        onClick={() => onClick()} 
        className={`${s.root} ${selected && s.selected} ${disabled && s.dis}`}
        >
          {selected && <div className={s.dot}></div>}
        </div>
    )
}