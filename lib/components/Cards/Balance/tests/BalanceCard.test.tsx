import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react' 

import { BalanceCard } from '../ui/BalanceCard.ui'


describe('testing BalanceCard component', () => {

    it('render ruble variant', () => {

        render(
            <BalanceCard variant='rub' balance={2357534.54} />
        )

        const element = screen.getByText(/2,357,534.54/i)

        expect(element).toBeInTheDocument()

    })

    it('render usdt variant', () => {

        render(
            <BalanceCard variant='usdt' balance={2357534.54} />
        )

        const element = screen.getByText(/2,357,534.54/i)

        expect(element).toBeInTheDocument()

    })

    it('render usdt variant', () => {

        render(
            <BalanceCard variant='usdt' balance={1000000000.00} />
        )

        const element = screen.getByText(/1e/i)

        expect(element).toBeInTheDocument()

    })

})