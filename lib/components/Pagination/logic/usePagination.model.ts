import { useEffect, useState } from "react"


interface Returned {
    isBack: boolean
    isNext: boolean
}



export const usePagination = (currentPage: number, pages: number): Returned  => {

    const [ isBack, setIsBack ] = useState<boolean>(false)
    const [ isNext, setIsNext ] = useState<boolean>(false)


    const checkActivated = () => {
        if(currentPage >= pages) {
            setIsNext(false)
            setIsBack(true)
        }    
        else if(currentPage < pages) { 
            if(currentPage === 1) {
                setIsNext(true)
                setIsBack(false)
            } else {
                setIsBack(true)
                setIsNext(true)
            }
        }  
    }


    useEffect(() => {

       checkActivated()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ currentPage, pages ])


    return {
        isBack,
        isNext
    }

} 