import { FC } from 'react'

import { useOneLetter } from '../logic/useOneLetter.logic'

import type { TextAvatarType } from './TextAvatar.types'


export const TextAvatar: FC<TextAvatarType> = ({ bgColor = 'green', name, auto = false, sizeType = 'md', ...props}) => {

    const letter = useOneLetter(name)

    const classsBg = {
        green: 'bg-avatar-green',
        pink: 'bg-avatar-pink',
        yellow: 'bg-avatar-yellow',
        blue: 'bg-avatar-blue',
        purple: 'bg-avatar-purple',
        lightPurple: 'bg-avatar-lightPurple'
    }

    const classSizes = {
       es: 'w-7 h-7 text-xs',
       sm: 'w-10 h-10 text-lg',
       md: 'w-14 h-14 text-2xl',
       lg: 'w-18 h-18 text-3xl'
    }

    return (

        <article 
         {...props} 
         className={`
           rounded-circle select-none ${classsBg[bgColor]} ${classSizes[sizeType]}
           flex justify-center items-center font-medium pb-0.25 cursor-pointer
         `}
         >
            {
               auto ?
                letter
                :
                name
            }
        </article>
    )
}