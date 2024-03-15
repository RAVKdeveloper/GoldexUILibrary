import { FC, useRef } from 'react'

import type { TextareaType } from '../assets/Textarea.type' 

import s from '../assets/style.module.css'



export const Textarea: FC<TextareaType> = ({
    isError = false, helpText = '', label = '', disabled = false, ...props
}) => {

    const textareaRef = useRef<HTMLTextAreaElement>(null)

    const onResize = () => {
        if(textareaRef.current) {
            const element =  textareaRef.current
            element.style.height = "5px";
            element.style.height = (element.scrollHeight) + "px";
        }
    }

    return (

        <fieldset className={s.root}>
            {
                label &&
                 <label className={s.label}>{label}</label>
            }
            <textarea 
             ref={textareaRef}
             className={`
             ${s.textarea} 
             ${isError && s.error}
             ${disabled && s.dis}
             `}
             {...props} 
             onInput={() => onResize()}
             />
            {
                helpText &&
                 <p className={`${s.text} ${isError && s.error}`}>{helpText}</p>
            }
        </fieldset>
    )
}