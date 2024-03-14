import { FC, ReactNode } from 'react'
import { ChevronArrowDownIcon } from 'goldex-icon-library' 

import s from '../assets/placeholder.module.css'



interface Props {
    icon?: ReactNode
    placeholder?: string
}


export const PlaceholderComponent: FC<Props> = ({ icon, placeholder }) => {

    return (

        <div className={s.root}>
           <div className={s.iconsRow}>
             {
                icon &&
                 icon
             }
             <span className={s.text}>
             {placeholder}
             </span>
           </div>
           <ChevronArrowDownIcon width={20} height={20} opacity={0.4} />
        </div>
    )
}
