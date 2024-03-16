import { FC } from 'react'
import { Link } from 'react-router-dom'
import { MenuIcon, LogoIcon } from 'goldex-icon-library'

import { TextAvatar } from '../../Avatars'

import type { MobileSidebar } from '../assets/mobileSidebar.type'

import s from '../assets/mobile.module.css'



export const SidebarMobile: FC<MobileSidebar> = ({ userName, avatarUrl, onOpenSidebar }) => {

    return (

        <article data-testid='sidebar' className={s.root}>
            <div data-testid='menu' onClick={onOpenSidebar}>
               <MenuIcon width={24} height={24} opacity={0.4} />
            </div>
            <LogoIcon />
            <Link to={avatarUrl}>
            <TextAvatar 
              auto
              name={userName}
              bgColor='lightPurple'
            />
            </Link>
        </article>
    )
}