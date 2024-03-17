import { Routes, Route } from 'react-router-dom'

import { Sidebar, SidebarMobile } from '../lib/main'


function App() {

  return (
    <ul style={{ margin: 20, background: '#1F1F24', padding: 20, height: 1000 }}>
      <Routes>
        <Route path='/' element={<App />} />
      </Routes>

       <Sidebar 
        balanceUSDT={24243}
        balanceRub={24324}
        user={{ id: 1, name: 'London', avatar: 'test', url: '/test', role: 'Operator' }}
        notifications={{ Dashboard: 1, Balance: 1, Projects: 1, Invoices: 15, Transactions: 0, Account: 1 }}
        timeRemaining={'Time remaining: 60 m 00s'}
        links={
          {
            Dashboard: '/d',
            Balance: '/b',
            Projects: '/p',
            Invoices: '/i',
            Transactions: '/t',
            Account: '/a'
          }
        }
       />
       <SidebarMobile 
         avatarUrl='/user'
         userName='HUEHUHQWHIU'
         onOpenSidebar={() => confirm('wertkewtrjeoj')}
       />
    </ul>
  )
}

export default App
