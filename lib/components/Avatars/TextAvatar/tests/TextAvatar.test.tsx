import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { TextAvatar } from '../ui/TextAvatar.ui'

describe('test TextAvatar', () => {

    it('render', () => {

        render(<TextAvatar bgColor='pink' name={'R'} />)

        const element = screen.getByText(/R/i)

        expect(element).toBeInTheDocument()

    })

    it('render auto name', () => {

        render(<TextAvatar auto bgColor='pink' name={'Rruewrgui'} />)

        const element = screen.getByText(/R/i)

        expect(element).toBeInTheDocument()

    })

    it('render with other(example yellow) color', () => {

        render(<TextAvatar bgColor='yellow' name={'R'} />)

        const element = screen.getByText(/R/i)

        expect(element).toBeInTheDocument()

    })

})