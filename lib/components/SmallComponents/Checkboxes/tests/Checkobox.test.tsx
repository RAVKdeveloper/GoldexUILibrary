import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Checkbox } from '../..'


describe('testing Checkbox component', () => {

    const user = userEvent.setup()
    const click = jest.fn()

    it('render plus(no selected)', () => {

        render(
            <Checkbox 
             variant='plus'
             selected={false}
             onClick={() => confirm('click')}
            />
        )

        const element = screen.getByTestId('checkbox')

        user.click(element)

        expect(element).toBeInTheDocument()

    })

    it('render plus(selected)', () => {

        render(
            <Checkbox 
             variant='plus'
             selected={true}
             onClick={() => confirm('click')}
            />
        )

        const element = screen.getByTestId('checkbox')

        user.click(element)

        expect(element).toBeInTheDocument()

    })

    it('render minus(no selected)', () => {

        render(
            <Checkbox 
             variant='minus'
             selected={false}
             onClick={() => confirm('click')}
            />
        )

        const element = screen.getByTestId('checkbox')

        user.click(element)

        expect(element).toBeInTheDocument()

    })

    it('render minus(selected)', () => {

        render(
            <Checkbox 
             variant='minus'
             selected={true}
             onClick={click}
            />
        )

        const element = screen.getByTestId('checkbox')

        user.click(element)

        expect(element).toBeInTheDocument()

    })

    it('render plus(disabled)', () => {

        render(
            <Checkbox 
             variant='plus'
             selected={false}
             disabled={true}
             onClick={click}
            />
        )

        const element = screen.getByTestId('checkbox')

        user.click(element)

        expect(element).toBeInTheDocument()
        expect(click).not.toHaveBeenCalled()

    })


})