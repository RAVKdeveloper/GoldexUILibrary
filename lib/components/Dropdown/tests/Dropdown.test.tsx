import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Dropdown } from '../Dropdown.ui'
import { LeadIcon } from 'goldex-icon-library'


describe('testing Dropdown component', () => {

    const user = userEvent.setup()

    it('render default with icon', () => {

        render(
            <Dropdown 
             placeholder='Placeholder'
             icon={<LeadIcon width={18} height={18} />}
            />
        )

        const element = screen.getByText(/Placeholder/i)

        user.click(element)

        expect(element).toBeInTheDocument()

    })

    it('render default with icon(active)', () => {

        render(
            <Dropdown 
             placeholder='Placeholder'
             icon={<LeadIcon width={18} height={18} />}
             active={true}
            />
        )

        const element = screen.getByText(/Placeholder/i)

        user.click(element)

        expect(element).toBeInTheDocument()

    })

    it('render with icon and toggle', () => {

        render(
            <Dropdown 
             placeholder='Placeholder'
             icon={<LeadIcon width={18} height={18} />}
             isToggle={true}
            />
        )

        const element = screen.getByText(/Placeholder/i)

        user.click(element)

        expect(element).toBeInTheDocument()

    })

    it('render with checkbox and iconEnd', () => {

        render(
            <Dropdown 
             placeholder='Placeholder'
             isCheckbox={true}
             iconEnd={<LeadIcon width={20} height={20} />}
            />
        )

        const element = screen.getByText(/Placeholder/i)

        user.click(element)

        expect(element).toBeInTheDocument()

    })

    it('render disabled', () => {

        const click = jest.fn()

        render(
            <Dropdown 
             placeholder='Placeholder'
             icon={<LeadIcon width={20} height={20} />}
             isToggle={true}
             onClick={click}
            />
        )

        const element = screen.getByText(/Placeholder/i)

        user.click(element)

        expect(element).toBeInTheDocument()
        expect(click).not.toHaveBeenCalled()

    })

})