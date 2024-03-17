import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { CellTable } from '../ui/Cell.ui'
import { LeadIcon } from 'goldex-icon-library'


describe('testing CellTable component', () => {

    it('render', () => {

        render(
            <CellTable 
              text='Alesia Carpova'
            />
        )

        const element = screen.getByText(/Alesia Carpova/i)

        expect(element).toBeInTheDocument()

    })

    it('render with icon', () => {

        render(
            <CellTable 
              text='Alesia Carpova'
              icon={<LeadIcon width={20} height={20} />} 
            />
        )

        const element = screen.getByText(/Alesia Carpova/i)

        expect(element).toBeInTheDocument()

    })

})