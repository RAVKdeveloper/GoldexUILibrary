import { FC } from 'react'

import type { TextFieldType } from './assets/TextField.types' 

import { MainInputComponent } from './ui/main.component' 
import { SearchInput } from './ui/search.component' 
import { SelectComponent } from './ui/select.component' 

import s from './assets/textfield.module.css'


export const TextField: FC<TextFieldType> = ({ 
    helpText = '', isError = false, variant = 'input', sizeType = 'lg', icon, cbIcon, label, disabled = false, ...props 
}) => {


    const objFields = {
        input: <MainInputComponent 
                isError={isError}
                variant={sizeType}
                icon={icon}
                cbIcon={cbIcon}
                disabled={disabled}
                {...props}
                />,
        search: <SearchInput cbSearch={cbIcon} disabled={disabled} {...props} />,
        select: <SelectComponent 
                 placeholder={props.placeholder} 
                 icon={icon} 
                 callback={cbIcon} 
                 sizeType={sizeType} 
                 isError={isError}
                 disabled={disabled}
                 />
    }


    return (

        <fieldset className={s.root}>
            {
                label &&
                 <label data-testid='label' className={s.label}>{label}</label>
            }
            {objFields[variant]}
            {
                helpText && variant !== 'search' &&
                 <p className={`${s.text} ${isError && s.error}`}>{helpText}</p> 
            }
        </fieldset>
    )
}