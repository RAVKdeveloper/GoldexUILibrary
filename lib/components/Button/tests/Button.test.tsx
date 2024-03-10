import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Button } from '../ui/Button'


describe('tests Button component', () => {

    it('render', () => {

        render(<Button type='submit'>hello</Button>)

        const element = screen.getByText(/hello/i)

        expect(element).toBeTruthy()

    })

})