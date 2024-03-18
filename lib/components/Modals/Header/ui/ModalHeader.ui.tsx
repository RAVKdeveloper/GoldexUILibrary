import { FC } from 'react'
import { CloseIcon } from 'goldex-icon-library'

import type { ModalHeaderType } from '../assets/ModalHeader.type'

import s from '../assets/style.module.css'


export const ModalHeader: FC<ModalHeaderType> = ({
    title, paragraph, icon, align = 'default', cbClose
}) => {

    return (

        <div className={`${s.root} ${s[align]}`}>
            {
                icon &&
                 icon
            }
            <div className={`${s.textContent} ${s[align]}`}>
            <h5 className={s.title}>{title}</h5>
            <p className={`${s.text} ${s[align]}`}>{paragraph}</p>
            </div>
            <div data-testid='close' onClick={() => cbClose()} className={s.close}>
                <CloseIcon width={20} height={20} opacity={0.4} />
            </div>
        </div>
    )
}
