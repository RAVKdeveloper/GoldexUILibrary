import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event' 


import { ProfileCard } from '../ui/ProfileCard.ui'


describe('testing ProfileCard component', () => {

    it('render component', () => {

        render(
            <ProfileCard 
            avatarNickName="Test"
            avatarUrl="https://th.bing.com/th/id/OIP.kBYYR1K4b69A9FLskKJXOAHaHa?rs=1&pid=ImgDetMain"
            avatarRole="Operator"
            cbOptions={() => console.log('hello')}
            />
        )

        const altText = screen.getByAltText(/Test/i)

        expect(altText).toBeInTheDocument()
        expect(altText).toHaveAttribute('src')

    })

    it('render and click options', () => {

        const user = userEvent.setup()

        render(
            <ProfileCard 
            avatarNickName="Test"
            avatarUrl="https://th.bing.com/th/id/OIP.kBYYR1K4b69A9FLskKJXOAHaHa?rs=1&pid=ImgDetMain"
            avatarRole="Operator"
            cbOptions={() => console.log('hello')}
            />
        )

        const element = screen.getByTestId('click-options')
        
        user.click(element)

    })

})