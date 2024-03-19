import { ImageAvatar } from '../lib/main'


function App() {

  return (
     <div style={{ padding: 20, background: '#1F1F24' }}>
        <ImageAvatar 
         url='/lib/assets/img/Rectangle 1886testAvatar.svg' 
         altText='Avatar' 
         size='lg'
        />
     </div>      
  )  
}

export default App
