import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Toggle } from '../..'


describe('testing Toggle component', () => {

    const user = userEvent.setup()

    it('render large(no active)', () => {

        render(
            <Toggle 
             size='lg'
             active={false}
             onClick={() => confirm('click')}
            />
        )

        const element = screen.getByTestId('toggle')

        user.click(element)

        expect(element).toBeInTheDocument()

    })

    it('render small(no active)', () => {

        render(
            <Toggle 
             size='sm'
             active={false}
             onClick={() => confirm('click')}
            />
        )

        const element = screen.getByTestId('toggle')

        user.click(element)

        expect(element).toBeInTheDocument()
        
    })

    it('render large(active)', () => {

        render(
            <Toggle 
             size='lg'
             active={true}
             onClick={() => confirm('click')}
            />
        )

        const element = screen.getByTestId('toggle')

        user.click(element)

        expect(element).toBeInTheDocument()
        
    })

    it('render small(active)', () => {

        render(
            <Toggle 
             size='sm'
             active={true}
             onClick={() => confirm('click')}
            />
        )

        const element = screen.getByTestId('toggle')

        user.click(element)

        expect(element).toBeInTheDocument()
        
    })

    it('disabled', () => {

        const click = jest.fn()

        render(
            <Toggle 
             size='lg'
             active={false}
             onClick={click}
             disabled={true}
            />
        )

        const element = screen.getByTestId('toggle')

        user.click(element)

        expect(element).toBeInTheDocument()
        expect(click).not.toHaveBeenCalled()
        
    })

})