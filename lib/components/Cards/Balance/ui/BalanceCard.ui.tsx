import { FC } from 'react'
import { USDTIcon, RubleIcon } from 'goldex-icon-library' 

import type { BalanceCardType } from '../assets/BalanceCard.type' 

import s from '../assets/style.module.css'


export const BalanceCard: FC<BalanceCardType> = ({ variant = 'rub', balance = 0 }) => {

    const stringsValues = {
        usdt: 'USDT',
        rub: 'RUB'
    }

    const currency = {
        usdt: <USDTIcon />,
        rub: <RubleIcon />
    }

    return (

        <article className={s.root}>
            <div className={s.content}>
                <span className={s.balance}>
                    {
                        balance < 1000000000 ?
                        balance.toLocaleString('en', {minimumFractionDigits: 2})
                        :
                        '1e'
                    }
                </span>
                <span className={s.currency}>{stringsValues[variant]}</span>
            </div>
            <div className={s.bgIcon}>
              {currency[variant]}
            </div>
        </article>
    )
}