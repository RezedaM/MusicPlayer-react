import { AppRoutes } from './routes'
import {useState} from 'react'

function App() {
  const [user, setUser] = useState(localStorage.getItem('login'))

  // const handleLogin = () => setUser({ login: 'taradam' })
  // const handleLogout = () => setUser(null)
  return (
    <div className="App">
      <AppRoutes user={user} setUser={setUser}/>
    </div>
  )
}

export default App
