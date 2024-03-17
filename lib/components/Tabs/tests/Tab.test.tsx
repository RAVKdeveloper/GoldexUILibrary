import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Tab } from '../ui/Tab.ui'


describe('testing Tab component', () => {

    const user = userEvent.setup()

    it('render large component', () => {

        render(
            <Tab 
             sizeType='lg'
             text='Label'
            />
        )

        const element = screen.getByText(/Label/i)

        user.click(element)

        expect(element).toBeInTheDocument()

    })

    it('render small component', () => {

        render(
            <Tab 
             sizeType='sm'
             text='Label'
            />
        )

        const element = screen.getByText(/Label/i)

        user.click(element)

        expect(element).toBeInTheDocument()

    })
    
    it('render active tab', () => {

        render(
            <Tab 
             sizeType='lg'
             text='Label'
             isActive={true}
            />
        )

        const element = screen.getByText(/Label/i)

        user.click(element)

        expect(element).toBeInTheDocument()

    })

    it('render disabled tab', () => {

        const click = jest.fn()

        render(
            <Tab 
             sizeType='lg'
             text='Label'
             disabled={true}
             onClick={click}
            />
        )

        const element = screen.getByText(/Label/i)

        expect(click).not.toHaveBeenCalled()
        expect(element).toBeInTheDocument()

    })

})