import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react' 
import userEvent from '@testing-library/user-event'

import { Textarea } from '../ui/Textarea.ui' 


describe('testint Textarea component', () => {

    const setupUser = () => userEvent.setup()

    it('render', () => {

        const user = setupUser()

        render(
            <Textarea 
             placeholder='Textarea'
             helpText='Help Text'
             label='Label'
            />
        )

        const element = screen.getByPlaceholderText(/Textarea/i)

        user.type(element, 'testing text')

        expect(element).toBeInTheDocument()

    })

    it('render error component', () => {

        const user = setupUser()

        render(
            <Textarea 
             isError={true}
             placeholder='Textarea'
             helpText='Help Text'
             label='Label'
            />
        )

        const element = screen.getByPlaceholderText(/Textarea/i)

        user.type(element, 'testing text')

        expect(element).toBeInTheDocument()

    })
    
})