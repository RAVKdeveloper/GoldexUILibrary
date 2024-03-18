import { Dropdown } from '../lib/main'
import { LeadIcon } from 'goldex-icon-library'


function App() {

  return (
     <div style={{ padding: 20, background: '#1F1F24', width: 540 }}>
          <Dropdown 
           placeholder='Placeholder'
           icon={<LeadIcon width={18} height={18} />}
           isToggle={true}
           isActiveToggle={true}
           disabled={false}
           isSuccess={false}
           active={false}
           cbToggle={() => confirm('toggle')}
         />
     </div>      
  )  
}

export default App
