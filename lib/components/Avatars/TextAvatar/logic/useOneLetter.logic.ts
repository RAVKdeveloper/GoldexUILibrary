import { useEffect, useState } from 'react'

export const useOneLetter = (name: string ): string => {

    const [ value, setValue ] = useState<string>('')

    const transform = () => {
        const result = name.split(' ').map(letter => { return letter[0] }).join('')
        setValue(result)
    }

    useEffect(() => {
       
        if(name) transform()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ name ])

    return value
}