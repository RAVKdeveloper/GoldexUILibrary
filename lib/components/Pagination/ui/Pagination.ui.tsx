import { FC } from 'react' 

import { Button } from '../../../main' 
import { usePagination } from '../logic/usePagination.model' 
import type { PaginationType } from '../assets/Pagination.type' 

import s from '../assets/style.module.css'



export const Pagination: FC<PaginationType> = ({ 
    currentPage, pages, btnPrev = 'Back', btnNext = 'Next', textContent, next, back
}) => {

    const { isBack, isNext } = usePagination(currentPage, pages)

    return (

        <article className={s.root}>
            <div className={s.content}>
                {textContent}
            </div>
            <div className={s.btnRow}>
               <Button 
                variant='secondary' 
                size='sm' 
                disabled={!isBack}
                onClick={back}
                >
                 {btnPrev}
               </Button>
               <Button 
                variant='secondary' 
                size='sm'
                disabled={!isNext}
                onClick={next}
                >
                 {btnNext}
               </Button>
            </div>
        </article>
    )
}