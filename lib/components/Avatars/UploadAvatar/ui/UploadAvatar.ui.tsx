import { FC } from 'react'
import { CameraPlusIcon } from 'goldex-icon-library'

import type { UploadAvatarType } from '../types/UploadAvatar.types' 

import s from './style.module.css'


export const UploadAvatar: FC<UploadAvatarType> = ({ size = 'md', ...props }) => {

    const sizesIcon = {
       lg: 24,
       md: 20,
       sm: 16,
       es: 12
    }

    return (

        <article {...props} className={`${s.root} ${s[size]}`}>
            <CameraPlusIcon width={sizesIcon[size]} height={sizesIcon[size]} opacity={0.4} />
        </article>
    )
}