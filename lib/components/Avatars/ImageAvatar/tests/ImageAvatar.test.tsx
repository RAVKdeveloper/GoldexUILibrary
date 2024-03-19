import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react' 
import userEvent from '@testing-library/user-event'

import { ImageAvatar } from '../ui/ImageAvatar.ui'


const testingUrl = `
https://th.bing.com/th?q=Funny+People&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.
3&pid=InlineBlock&mkt=ru-RU&cc=RU&setlang=ru&adlt=moderate&t=1&mw=247
`

describe('tests ImageAvatar component', () => {

    it('render and check img src', () => {

        render(
         <ImageAvatar 
           url={testingUrl}
           altText='image' 
           size='lg'
         />
        )

        const element = screen.getByAltText(/image/i)

        expect(element).toBeInTheDocument()
        expect(element).toHaveAttribute('src', testingUrl)

    })

    it('check click to remove btn', () => {

        const user = userEvent.setup() 

        render(
            <ImageAvatar 
              url={testingUrl}
              altText='image' 
              size='lg'
            />
           )
   
           const element = screen.getByTestId('remove')

           user.click(element)

    })

    it('small version render', () => {

        render(
            <ImageAvatar 
              url={testingUrl}
              altText='image' 
              size='sm'
            />
           )
   
           const element = screen.getByAltText(/image/i)

           expect(element).toBeInTheDocument()
           expect(element).toHaveAttribute('src', testingUrl)

    })

    it('extrasmall version render', () => {

      render(
          <ImageAvatar 
            url={testingUrl}
            altText='image' 
            size='es'
          />
         )
 
         const element = screen.getByAltText(/image/i)

         expect(element).toBeInTheDocument()
         expect(element).toHaveAttribute('src', testingUrl)

    })

    it('large version render', () => {

      render(
          <ImageAvatar 
            url={testingUrl}
            altText='image' 
            size='lg'
          />
         )
 
         const element = screen.getByAltText(/image/i)

         expect(element).toBeInTheDocument()
         expect(element).toHaveAttribute('src', testingUrl)

  })

})