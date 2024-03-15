import { Textarea, Pagination } from "../lib/main" 


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
       <Pagination currentPage={10} pages={10} textContent="Page 2 of 10" />
    </div>
  )
}

export default App
