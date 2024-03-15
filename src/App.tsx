import { Textarea } from "../lib/main" 


function App() {

  return (
    <div style={{ margin: 20, background: '#1F1F24', padding: 20 }}>
       <Textarea 
        isError={false}
        disabled={false}
        placeholder="Textarea" 
        label="Text"
        helpText="Help Text"
       />
    </div>
  )
}

export default App
