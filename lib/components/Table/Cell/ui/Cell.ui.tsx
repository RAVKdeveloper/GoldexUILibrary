import { FC } from 'react'

import type { CellTableType } from '../assets/CellTable.type'

import s from '../assets/style.module.css'


export const CellTable: FC<CellTableType> = ({ text, icon }) => {

    return (

        <td className={s.root}>
          {icon && icon}
          {text}
        </td>
    )
} 