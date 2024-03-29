import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Button } from '../ui/Button'
import { CircleIcon } from '../../../main' 


describe('tests Button component', () => {

    it('render primary', () => {

       render(
        <Button variant='primary' size='lg'> 
            Button
        </Button>
       )

       const element = screen.getByText(/Button/i)

       expect(element).toBeInTheDocument()

    })

    it('render secondary', () => {

        render(
            <Button variant='secondary' size='lg'> 
                Button
            </Button>
           )
    
           const element = screen.getByText(/Button/i)
    
           expect(element).toBeInTheDocument()

    })

    it('click test primary', () => {

        const user = userEvent.setup()

        render(
            <Button variant='primary' size='lg'> 
                Button
            </Button>
        )

        user.click(screen.getByRole('button', {name: /Button/i}))

    })

    it('click test secondary', () => {

        const user = userEvent.setup()

        render(
            <Button variant='secondary' size='lg'> 
                Button
            </Button>
        )

        user.click(screen.getByRole('button', {name: /Button/i}))

    })

    it('click test and render critical', () => {

        const user = userEvent.setup()

        render(
            <Button variant='critical' size='lg'> 
                Button
            </Button>
        )

        user.click(screen.getByRole('button', {name: /Button/i}))

    })

    it('render with icon and click', () => {

        const user = userEvent.setup()

        render(
            <Button variant='primary' size='lg' icon={<CircleIcon />}> 
                Button
            </Button>
        )

        user.click(screen.getByRole('button', {name: /Button/i}))

        const elementImg = screen.getByRole('img')

        expect(elementImg).toBeInTheDocument()

    })

})