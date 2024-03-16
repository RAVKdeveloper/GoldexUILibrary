import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { NavigationItem } from '../ui/NavigationItem.ui'
import { LeadIcon } from 'goldex-icon-library'


describe('testing NavigationItems component', () => {

    const user = userEvent.setup()

    it('render main type', () => {

        render(
            <NavigationItem 
             type='main'
             text='Dashboard'
             keyOpen={1}
             isActive={false}
            />
        )

        const element = screen.getByText(/Dashboard/i)

        user.click(element)

        expect(element).toBeInTheDocument()

    })

    it('render list type', () => {

        render(
            <NavigationItem 
             type='list'
             text='Dashboard'
             keyOpen={1}
             isActive={false}
            />
        )

        const element = screen.getByText(/Dashboard/i)

        user.click(element)

        expect(element).toBeInTheDocument()

    })

    it('render with icon and active state', () => {

        render(
            <NavigationItem 
             type='main'
             text='Dashboard'
             keyOpen={1}
             isActive={true}
             Icon={LeadIcon}
            />
        )

        const element = screen.getByText(/Dashboard/i)

        user.click(element)

        expect(element).toBeInTheDocument()

    })

    it('render disabled item', () => {

        render(
            <NavigationItem 
             type='main'
             text='Dashboard'
             keyOpen={1}
             isActive={false}
             disabled={true}
             Icon={LeadIcon}
            />
        )

        const element = screen.getByText(/Dashboard/i)

        expect(element).toBeInTheDocument()

    })

})