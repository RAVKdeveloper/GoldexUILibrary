import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react' 

import { Badge } from '../Badge.ui' 


describe('testint Badge component', () => {

    it('render component', () => {

        render(<Badge text='Badge' />)

        const element = screen.getByText(/Badge/i)

        expect(element).toBeInTheDocument()

    })

})