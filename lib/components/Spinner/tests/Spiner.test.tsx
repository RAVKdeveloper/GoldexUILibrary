import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Spinner } from '../ui/Spiner.ui'


describe('testing Spinner component', () => {

    it('extrasmall render', () => {

        render(<Spinner size='es' />)

        const element = screen.getByTestId('spinner')

        expect(element).toBeInTheDocument()

    })

    it('small render', () => {

        render(<Spinner size='sm' />)

        const element = screen.getByTestId('spinner')

        expect(element).toBeInTheDocument()

    })

    it('middle render', () => {

        render(<Spinner size='md' />)

        const element = screen.getByTestId('spinner')

        expect(element).toBeInTheDocument()

    })

    it('large render', () => {

        render(<Spinner size='lg' />)

        const element = screen.getByTestId('spinner')

        expect(element).toBeInTheDocument()

    })

})