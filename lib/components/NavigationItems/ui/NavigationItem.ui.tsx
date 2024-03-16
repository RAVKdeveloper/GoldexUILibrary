import { FC } from 'react'

import type { NavigationItemType } from '../assets/NavigationItem.type' 

import { useNavItem } from '../logic/useNavItem.model'

import s from '../assets/style.module.css'


export const NavigationItem: FC<NavigationItemType> = ({
    Icon, listNodes, badge, isEnd = false, text, isActive = false, disabled = false, type = 'main', keyOpen = 0
}) => {

    const { open, isOpen } = useNavItem(keyOpen)

    const isOpenedList = isOpen.keyOpen === keyOpen && isOpen.isOpen

    return (

        <li onClick={open} className={s.wrapper}>
        <div className={`
         ${s.root} 
         ${s[type]}
         ${isActive && s.active}
         ${type === 'list' ? isOpenedList && s.active : ''} 
         ${disabled && s.dis}
         ${Icon ? '' : isEnd ? s.endBorder : s.middleBorder}
         `}>
            <div className={s.content}>
            {
                Icon && 
                <Icon 
                 width={20} 
                 height={20} 
                 opacity={isActive || isOpenedList ? 1 : 0.4} 
                 /> 
            }    
            {text}
            </div>
            <div className={s.badge}>
            {
                badge &&
                 badge
            }
            </div>
        </div>
        {
           listNodes && 
            <ul className={`${s.listNodes} ${isOpenedList && s.open}`}>
                {listNodes}
            </ul>
        }
        </li>
    )
}