import { useEffect, useState } from 'react'

export const useOneLetter = (name: string ): string => {

    const [ value, setValue ] = useState<string>('')

    const transform = () => {
        const result = name.split(' ').map(letter => { return letter[0] }).join('')
        setValue(result)
    }

    useEffect(() => {
       
        if(name) transform()

    }, [ name ])

    return value
}