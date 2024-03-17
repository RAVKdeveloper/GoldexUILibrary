import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ModalActions } from '../..'


describe('testing ModalActions component', () => {

    const user = userEvent.setup()

    it('render with confirm', () => {

        render(
            <ModalActions 
             btnTextCancel='Cansel'
             btnTextAction='Confirm'
             cbAction={() => alert('')}
             cbCansel={() => alert('')}
             variant='confirm'
            />
        )

        const element = screen.getByText(/Confirm/i)
        const elementCancel = screen.getByText(/Cansel/i)

        user.click(element)
        user.click(elementCancel)

        expect(element).toBeInTheDocument()

    })

    it('render with delete', () => {

        render(
            <ModalActions 
             btnTextCancel='Cansel'
             btnTextAction='Delete'
             cbAction={() => alert('')}
             cbCansel={() => alert('')}
             variant='delete'
            />
        )

        const element = screen.getByText(/Delete/i)
        const elementCancel = screen.getByText(/Cansel/i)

        user.click(element)
        user.click(elementCancel)

        expect(element).toBeInTheDocument()

    })

    it('render with confirm vertical', () => {

        render(
            <ModalActions 
             btnTextCancel='Cansel'
             btnTextAction='Confirm'
             cbAction={() => alert('')}
             cbCansel={() => alert('')}
             variant='confirm'
             align='vertical'
            />
        )

        const element = screen.getByText(/Confirm/i)
        const elementCancel = screen.getByText(/Cansel/i)

        user.click(element)
        user.click(elementCancel)

        expect(element).toBeInTheDocument()

    })

    it('render with delete vertical', () => {

        render(
            <ModalActions 
             btnTextCancel='Cansel'
             btnTextAction='Delete'
             cbAction={() => alert('')}
             cbCansel={() => alert('')}
             variant='delete'
             align='vertical'
            />
        )

        const element = screen.getByText(/Delete/i)
        const elementCancel = screen.getByText(/Cansel/i)

        user.click(element)
        user.click(elementCancel)

        expect(element).toBeInTheDocument()

    })

})