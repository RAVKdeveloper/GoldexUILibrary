import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react' 
import userEvent from '@testing-library/user-event'

import { TextField } from '../TextField.ui' 


describe('testing TextField component', () => {

    it('render input variant', () => {

        const user = userEvent.setup()

        render(
            <TextField 
              variant='input'
              label='Email'
            />
        )

        const element = screen.getByTestId('label')

        user.type(element, 'testing component')

        expect(element).toBeInTheDocument()

    })

    it('render search variant', () => {

        const user = userEvent.setup()

        render(
            <TextField 
              variant='search'
              label='Email'
            />
        )

        const element = screen.getByTestId('label')

        user.type(element, 'testing component')

        expect(element).toBeInTheDocument()

    })

    it('render select variant', () => {

        const user = userEvent.setup()

        render(
            <TextField 
              variant='select'
              label='Email'
            />
        )

        const element = screen.getByTestId('label')

        user.click(element)

        expect(element).toBeInTheDocument()

    })

    it('click input icon', () => {

        const user = userEvent.setup()

        render(
            <TextField 
              variant='input'
              label='Email'
              icon={
                <div data-testid={'icon'}></div>
              }
            />
        )

        const element = screen.getByTestId('icon')

        user.click(element)

        expect(element).toBeInTheDocument()

    })

})