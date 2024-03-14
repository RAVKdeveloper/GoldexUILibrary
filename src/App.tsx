import { TextField } from "../lib/main" 
import { EyeIcon } from "goldex-icon-library" 


function App() {

  return (
    <div style={{ margin: 20, background: '#1F1F24', padding: 20 }}>
      <TextField 
       isError={false} 
       helpText="Help Text" 
       sizeType="lg" 
       placeholder="Hello" 
       icon={<EyeIcon width={20} height={20} opacity={0.4} />}
       cbIcon={() => console.log('hello')}
       variant="search"
       disabled={false}
       label="Label Input"
       />
    </div>
  )
}

export default App
