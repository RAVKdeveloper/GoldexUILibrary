import { NavigationItem } from '../lib/main' 
import { LeadIcon } from 'goldex-icon-library'
import { Badge } from '../lib/main'


function App() {

  return (
    <ul style={{ margin: 20, background: '#1F1F24', padding: 20, height: 1000 }}>
       <NavigationItem 
         keyOpen={1}
         text='Dashboard'
         Icon={LeadIcon}
         isActive={true}
         disabled={false}
         badge={<Badge text='14' />}
         type='list'
         isEnd={false}
         listNodes={
          <>
           <NavigationItem type='main' text='Name item' />
           <NavigationItem type='main' text='Name item' isActive={true} badge={<Badge text='14' />}  />
           <NavigationItem type='main' text='Name item' isEnd={true} />
          </>
         }
       />
    </ul>
  )
}

export default App
