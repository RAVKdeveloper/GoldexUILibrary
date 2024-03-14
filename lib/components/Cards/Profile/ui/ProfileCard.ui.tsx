import { FC } from 'react'
import { MenuDotsIcon } from 'goldex-icon-library' 

import type { ProfileCardType } from '../assets/ProfileCard.type' 

import s from '../assets/style.module.css'


export const ProfileCard: FC<ProfileCardType> = ({ 
    avatarNickName, avatarRole, avatarUrl, cbOptions
}) => {

    return (

        <article className={s.root}>  
            <div className={s.content}>
                <img src={avatarUrl} alt={avatarNickName} className={s.avatar} />
                <div className={s.column}>
                    <span className={s.nick}>{avatarNickName}</span>
                    <span className={s.role}>{avatarRole}</span>
                </div>
            </div>
            <div data-testid={'click-options'} onClick={() => cbOptions()}>
             <MenuDotsIcon opacity={0.4} width={20} height={20} />
            </div>
        </article>
    )
}