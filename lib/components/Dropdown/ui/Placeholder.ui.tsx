import { FC } from 'react'
import { CheckMarkIcon } from 'goldex-icon-library'

import s from '../assets/placeholder.module.css'

import { Toggle, Checkbox } from '../../SmallComponents'

import type { PlaceholderDropdownType } from '../assets/Placeholder.type'


export const PlaceholderDropdown: FC<PlaceholderDropdownType> = ({
    icon, iconEnd, isCheckbox, isSuccess, isToggle, cbCheckbox, cbToggle, 
    placeholder = '', active = false, isActiveCheckbox = false, isActiveToggle = false
}) => {

    return (

        <div className={s.root}>
          <div className={s.left}>
          {icon && !isCheckbox && icon}
          {
           !icon && isCheckbox && 
             <Checkbox 
              selected={isActiveCheckbox}
              onClick={() => cbCheckbox?.()}
             />
          }
          <span className={s.text}>{placeholder}</span>
          </div>
          {iconEnd && !isToggle && iconEnd}
          {
            !iconEnd && isToggle && 
             <Toggle 
               active={isActiveToggle}
               onClick={() => cbToggle?.()}
               size='sm'
             />
          }
          {
             !iconEnd && !isToggle && active && isSuccess && 
              <CheckMarkIcon width={18} height={18} color='green' />
          }
        </div>
    )
}