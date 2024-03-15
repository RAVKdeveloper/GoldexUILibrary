import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react' 
import userEvent from '@testing-library/user-event'

import { Pagination } from '../ui/Pagination.ui' 


describe('testing Pagination component', () => {

    const user = userEvent.setup()

    it('render with current page 1', () => {

        render(<Pagination 
                currentPage={1} 
                pages={10} 
                textContent='Page 1 of 10' 
                next={() => console.log('next')}
                back={() => console.log('prev')}
                />)

        const elementPrevBtn = screen.getByText(/Back/i)
        const elementNextBtn = screen.getByText(/Next/i)

        user.click(elementNextBtn)

        expect(elementPrevBtn).toBeDisabled()
        expect(elementNextBtn).not.toBeDisabled()

    })

    it('render with current page 3', () => {

        render(<Pagination 
                currentPage={3} 
                pages={10} 
                textContent='Page 3 of 10' 
                next={() => console.log('next')}
                back={() => console.log('prev')}
                />)

        const elementPrevBtn = screen.getByText(/Back/i)
        const elementNextBtn = screen.getByText(/Next/i)

        user.click(elementNextBtn)
        user.click(elementPrevBtn)

        expect(elementPrevBtn).not.toBeDisabled()
        expect(elementNextBtn).not.toBeDisabled()

    })

    it('render with current page 10', () => {

        render(<Pagination 
                currentPage={10} 
                pages={10} 
                textContent='Page 3 of 10' 
                next={() => console.log('next')}
                back={() => console.log('prev')}
                />)

        const elementPrevBtn = screen.getByText(/Back/i)
        const elementNextBtn = screen.getByText(/Next/i)

        user.click(elementPrevBtn)

        expect(elementPrevBtn).not.toBeDisabled()
        expect(elementNextBtn).toBeDisabled()

    })

})