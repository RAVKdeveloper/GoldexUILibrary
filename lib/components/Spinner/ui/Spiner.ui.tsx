import { FC } from 'react'

import type { SpinnerType } from '../assets/Spinner.type'

import s from '../assets/style.module.css'


export const Spinner: FC<SpinnerType> = ({ size = 'md' }) => {

    return (

        <div data-testid='spinner' className={s.wrapper}>
            <div className={`${s.loader} ${s[size]}`}></div>
        </div>
    )
}