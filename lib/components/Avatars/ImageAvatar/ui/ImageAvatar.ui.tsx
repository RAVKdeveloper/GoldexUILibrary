import { FC } from 'react'

import type { ImageAvatarTypes } from '../assets/ImageAvatar.types'

import s from '../assets/style.module.css'

import closeIcon from '../../../../assets/img/closeclose.svg'


export const ImageAvatar: FC<ImageAvatarTypes> = ({ url, size = 'lg', altText, removeFn, ...props }) => {

    return (

        <div className={`${s.root} ${s[size]}`} {...props}>
            {
                size === 'lg' &&
                 <div onClick={removeFn} className={s.close}>
                   <img src={closeIcon} alt='remove' className={s.remove} />
                 </div>
            }
            <img className={s.img} src={url} alt={altText} />
        </div>
    )
}