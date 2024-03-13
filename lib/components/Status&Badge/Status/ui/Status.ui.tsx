import { FC } from 'react'
import { CheckIcon, WaitingIcon, ErrorIcon } from 'goldex-icon-library' 

import type { StatusType } from '../assets/Status.type' 

import s from '../assets/style.module.css'


export const Status: FC<StatusType> = ({ variant = 'paid', text = 'Оплачено' }) => {

    const variantObj = {
        paid: <CheckIcon color='#17B26A' width={16} height={16} />,
        wait: <WaitingIcon color='#F79009' />,
        rejected: <ErrorIcon color='#F04438' />,
        expired: <WaitingIcon color='#F04438' />
    }

    return (

        <div className={`${s.status} ${s[variant]}`}>
            {variantObj[variant]}
            {text}
        </div>
    )
}