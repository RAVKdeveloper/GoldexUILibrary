import { FC } from 'react'

import { useOneLetter } from '../logic/useOneLetter.logic'

import type { TextAvatarType } from './TextAvatar.types'


export const TextAvatar: FC<TextAvatarType> = ({ bgColor = 'green', name, auto = false, ...props}) => {

    const letter = useOneLetter(name)

    const classsBg = {
        green: 'bg-avatar-green',
        pink: 'bg-avatar-pink',
        yellow: 'bg-avatar-yellow',
        blue: 'bg-avatar-blue',
        purple: 'bg-avatar-purple',
        lightPurple: 'bg-avatar-lightPurple'
    }

    return (

        <article 
         {...props} 
         className={`
          w-7 h-7 rounded-circle select-none ${classsBg[bgColor]}
           flex justify-center items-center font-medium text-xs pb-0.25
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