import { Button } from '../lib/components/Button/ui/Button'
import { CircleIcon } from '../lib/main'

function App() {

  return (
    <div style={{ margin: 20, background: '#1F1F24' }}>
      <Button 
        // disabled
        variant='secondary'
        size='lg'
      >
        Button
      </Button>
    </div>
  )
}

export default App
