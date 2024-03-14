import { FC } from 'react'

import type { BadgeType } from './assets/Badge.type' 

import s from './assets/style.module.css'


export const Badge: FC<BadgeType> = ({ text, ...props }) => {

    return (

        <div {...props} className={s.root}>
          {text}
        </div>
    )
}