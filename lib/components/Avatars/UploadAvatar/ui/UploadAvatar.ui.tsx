import { FC } from 'react'

import type { UploadAvatarType } from '../types/UploadAvatar.types' 

import s from './style.module.css'

import cameraIcon from '../../../../assets/img/camera-pluscamera-plus.svg'


export const UploadAvatar: FC<UploadAvatarType> = ({ AltText = 'upload image', ...props }) => {

    return (

        <article {...props} className={s.root}>
            <img src={cameraIcon} alt={AltText} />
        </article>
    )
}