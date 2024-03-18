import { FC } from 'react'

import { PlaceholderDropdown } from './Placeholder.ui'
import type { DropdownType } from '../assets/Dropdown.type'

import s from '../assets/input.module.css'


export const InputDropdown: FC<DropdownType> = ({
    icon, iconEnd, isCheckbox, isSuccess, isToggle, cbCheckbox, 
    disabled = false, cbToggle, placeholder, active = false, 
    isActiveCheckbox = false, isActiveToggle = false, ...props
}) => {

    return (

        <div className={`${s.wrapper} ${disabled && s.dis}`}>
            <div {...props} className={`${s.root} ${active && s.active}`}>
            <PlaceholderDropdown 
             icon={icon}
             placeholder={placeholder}
             iconEnd={iconEnd}
             isCheckbox={isCheckbox}
             isSuccess={isSuccess}
             isToggle={isToggle}
             cbCheckbox={cbCheckbox}
             cbToggle={cbToggle}
             active={active}
             isActiveCheckbox={isActiveCheckbox}
             isActiveToggle={isActiveToggle}
            />
            </div>
        </div>
    )
}