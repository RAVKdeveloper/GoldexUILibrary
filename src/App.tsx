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
       <Pagination 
        currentPage={9} 
        pages={10} 
        textContent="Page 9 of 10" 
        next={() => console.log('next')}
        back={() => console.log('prev')}
        />
    </div>
  )
}

export default App
