import { useState } from 'react'


interface IsOpenType {
    isOpen: boolean
    keyOpen: number | null
}


export const useNavItem = (key: number): {
    open: () => void, isOpen: IsOpenType
} => {

    const [ isOpen, setIsOpen ] = useState<IsOpenType>({ isOpen: false, keyOpen: null })

    const open = () => {
      setIsOpen({ isOpen: !isOpen.isOpen, keyOpen: key })
    } 

    return {
        open,
        isOpen
    }

}