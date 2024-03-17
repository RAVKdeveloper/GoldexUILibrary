import { ModalActions } from '../lib/main'

function App() {

  return (
     <div style={{ padding: 20, background: '#1F1F24', width: 540 }}>
         <ModalActions 
          btnTextCancel='Cansel'
          btnTextAction='Delete'
          variant='delete'
          align='vertical'
          cbCansel={() => alert('')}
          cbAction={() => alert('')}
         />
     </div>      
  )
}

export default App
