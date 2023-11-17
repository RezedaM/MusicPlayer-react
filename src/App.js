import { AppRoutes } from './routes'
import { useState } from 'react'
// import { ThemeContext, themes } from './contexts/theme'

function App() {
  // const [user, setUser] = useState(localStorage.getItem('login'))
  const [userToken, setUserToken] = useState(localStorage.getItem('refreshToken'))
  // const [currentTheme, setCurrentTheme] = useState(themes.dark)

  // const toggleTheme = () => {
  //   if (currentTheme === themes.dark) {
  //     setCurrentTheme(themes.light)
  //     return
  //   }
  //   setCurrentTheme(themes.dark)
  // }
  // console.log(currentTheme)

  // const handleLogin = () => setUser({ login: 'taradam' })
  // const handleLogout = () => setUser(null)
  return (
    // <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
    <AppRoutes userToken={userToken} setUserToken={setUserToken} />
    // </ThemeContext.Provider>
  )
}

export default App
