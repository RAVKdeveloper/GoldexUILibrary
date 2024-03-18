import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ModalHeader } from '../..'
import { FeaturedIcon } from 'goldex-icon-library'


describe('testing ModalHeader component', () => {

    const user = userEvent.setup() 

    it('default render', () => {

       render(
        <ModalHeader 
         title='Blog post'
         paragraph='text'
         cbClose={() => confirm('close')}
        />
       )

       const element = screen.getByTestId('close')

       user.click(element)

       expect(element).toBeInTheDocument()

    })

    it('left render', () => {

        render(
         <ModalHeader 
          title='Blog post'
          paragraph='text'
          cbClose={() => confirm('close')}
          align='left'
         />
        )
 
        const element = screen.getByTestId('close')
 
        user.click(element)
 
        expect(element).toBeInTheDocument()
 
    })

    it('center render', () => {

      render(
      <ModalHeader 
        title='Blog post'
        paragraph='text'
        cbClose={() => confirm('close')}
        align='center'
        />
      )
 
      const element = screen.getByTestId('close')
 
      user.click(element)
 
      expect(element).toBeInTheDocument()
 
    })

    it('render with icon', () => {

        render(
        <ModalHeader 
          title='Blog post'
          paragraph='text'
          cbClose={() => confirm('close')}
          align='default'
          icon={<FeaturedIcon size='lg' />}
          />
        )
   
        const element = screen.getByTestId('close')
   
        user.click(element)
   
        expect(element).toBeInTheDocument()
   
      })

})