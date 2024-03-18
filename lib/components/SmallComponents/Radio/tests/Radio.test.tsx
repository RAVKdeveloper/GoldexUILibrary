import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Radio } from '../..'


describe('testing Radio component', () => {

    const click = jest.fn()

    it('render(no selected)', () => {

        render(
            <Radio 
             selected={false}
             disabled={false}
             onClick={click}
            />
        )

        const element = screen.getByTestId('radio')

        expect(element).toBeInTheDocument()

    })

    it('render(selected)', () => {

        render(
            <Radio 
             selected={true}
             disabled={false}
             onClick={click}
            />
        )

        const element = screen.getByTestId('radio')

        expect(element).toBeInTheDocument()

    })

    it('render(disabled)', () => {

        render(
            <Radio 
             selected={false}
             disabled={true}
             onClick={click}
            />
        )

        const element = screen.getByTestId('radio')

        expect(element).toBeInTheDocument()

    })

})