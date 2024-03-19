import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { UploadAvatar } from '../ui/UploadAvatar.ui'


describe('test UploadAvatar component', () => {

    it('component render large and click', () => {

        const user = userEvent.setup()

        render(<UploadAvatar size='lg' />)

        const element = screen.getByRole('article')

        user.click(element)

        expect(element).toBeInTheDocument()

    })

    it('component render middle and click', () => {

        const user = userEvent.setup()

        render(<UploadAvatar size='md' />)

        const element = screen.getByRole('article')

        user.click(element)

        expect(element).toBeInTheDocument()

    })

    it('component render small and click', () => {

        const user = userEvent.setup()

        render(<UploadAvatar size='sm' />)

        const element = screen.getByRole('article')

        user.click(element)

        expect(element).toBeInTheDocument()

    })

    it('component render extrasmall and click', () => {

        const user = userEvent.setup()

        render(<UploadAvatar size='es' />)

        const element = screen.getByRole('article')

        user.click(element)

        expect(element).toBeInTheDocument()

    })

})