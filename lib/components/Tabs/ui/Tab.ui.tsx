import { FC } from 'react'

import type { TabType } from '../assets/Tab.type'

import s from '../assets/style.module.css'


export const Tab: FC<TabType> = ({
    sizeType = 'lg', isActive = false, disabled = false, text
}) => {

    return (

        <div className={`
         ${s.root}
         ${s[sizeType]}
         ${isActive && s.active}
         ${disabled && s.dis}
        `}>
            {text}
        </div>
    )
}