import { FC } from 'react'
import { CameraPlusIcon } from 'goldex-icon-library'

import type { ImageAvatarTypes } from '../assets/ImageAvatar.types'

import s from '../assets/style.module.css'


export const ImageAvatar: FC<ImageAvatarTypes> = ({ url, size = 'md', altText, removeFn, ...props }) => {

    return (

        <div className={`${s.root} ${s[size]}`} {...props}>
            {
                 (size === 'lg' || size === 'md') &&
                 <div data-testid='remove' onClick={removeFn} className={s.close}>
                   <CameraPlusIcon width={20} height={20} opacity={1} />
                 </div>
            }
            <img className={s.img} src={url} alt={altText} />
        </div>
    )
}