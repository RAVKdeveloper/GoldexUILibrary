import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { HeaderTable } from '../ui/Header.ui'


describe('testing HeaderTable component', () => {

    it('render', () => {

        render(<HeaderTable text='Example header'/>)

        const element = screen.getByText(/Example header/i)

        expect(element).toBeInTheDocument()

    })

})