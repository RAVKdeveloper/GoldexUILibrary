import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react' 

import { Status } from '../ui/Status.ui' 


describe('testing Status component', () => {

    it('render paid', () => {

        render(<Status variant='paid' text='Оплачено' />)

        const element = screen.getByText(/Оплачено/i)

        expect(element).toBeInTheDocument()

    })

    it('render wait', () => {

        render(<Status variant='wait' text='Ожидание' />)

        const element = screen.getByText(/Ожидание/i)

        expect(element).toBeInTheDocument()

    })

    it('render rejected', () => {

        render(<Status variant='rejected' text='Отмена' />)

        const element = screen.getByText(/Отмена/i)

        expect(element).toBeInTheDocument()

    })

    it('render expired', () => {

        render(<Status variant='expired' text='Истекло' />)

        const element = screen.getByText(/Истекло/i)

        expect(element).toBeInTheDocument()

    })

})