import { FC, InputHTMLAttributes } from 'react'
import { SearchIcon } from 'goldex-icon-library' 

import s from '../assets/search.module.css'


interface Props extends InputHTMLAttributes<HTMLInputElement> {
    cbSearch?: () => void
    disabled?: boolean
}


export const SearchInput: FC<Props> = ({ cbSearch, disabled, ...props }) => {

    return (

       <div className={`${s.wrapper} ${disabled && s.dis}`}>
           <input className={s.root} 
            {...props}
           />
        <div onClick={() => cbSearch?.()} className={s.icon}>
           <SearchIcon width={19} height={19} opacity={0.4} />
        </div>
       </div>
    )
}