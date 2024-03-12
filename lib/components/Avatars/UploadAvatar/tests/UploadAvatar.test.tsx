import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { UploadAvatar } from '../ui/UploadAvatar.ui'


describe('test UploadAvatar component', () => {

    it('component render', () => {

        render(<UploadAvatar AltText='upload avatar' />)

        const element = screen.getByAltText(/upload avatar/i)

        expect(element).toBeInTheDocument()

    })

    it('component render and click', () => {

        const user = userEvent.setup()

        render(<UploadAvatar AltText='upload avatar' />)

        const element = screen.getByAltText(/upload avatar/i)

        user.click(screen.getByRole('article'))

        expect(element).toBeInTheDocument()

    })

})