import BarPlayer from '../bar/barPlayer'
import BarVolume from '../bar/barVolume'
import Bar from '../bar/bar'
import Sidebar from '../sidebar/sidebar'
import Burger from '../nav/burger'
import CenterBlock from '../centerBlock/centerblock'
import Track from '../tracklist/track'
import TrackList from '../tracklist/tracklist'
import Filter from '../filter-by/filter'
import Search from '../search/search'
import NavMenu from '../nav/navMenu'
import Personal from '../sidebar/personal'
import SidebarItem from '../sidebar/sidebarItem'
import styles from '../mainTree/mainTree.module.css'
import { AppRoutes } from '../../routes'
import { ThemeContext, themes, useThemeContext } from '../../contexts/theme'
import { useState } from 'react'
// import { ThemeContext, themes } from './contexts/theme'

// const items = [
//   { value: 'Главное', href: 'link', id: 1 },
//   { value: 'Мой плейлист', href: 'link', id: 1 },
//   { value: 'Войти', href: 'link', id: 1 },
// ]

export default function MainTree() {
  // const [currentTheme, setCurrentTheme] = useState(themes.dark)

  // const toggleTheme = () => {
  //   if (currentTheme === themes.dark) {
  //     setCurrentTheme(themes.light)
  //     return
  //   }
  //   setCurrentTheme(themes.dark)
  // }

  // <ThemeContext.Provider value= {{theme: currentTheme, toggleTheme}}></ThemeContext.Provider>

  const  theme = useThemeContext
  const [user, setUser] = useState(localStorage.getItem('login'))
  const [currentTheme, setCurrentTheme] = useState(themes.dark)

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light)
      return
    }
    setCurrentTheme(themes.dark)
  }
  console.log(currentTheme)
  return (
    <ThemeContext.Provider value={{ theme, currentTheme, toggleTheme }}>
      <div className="App">
        <div
          className={styles.wrapper}
          style={{ backgroundColor: currentTheme['--page-background'] }}
        >
          <div className={styles.container}>
            <main className={styles.main}>
              <Burger />
              <CenterBlock />
              <Sidebar />
            </main>
            <div className={styles.bar}>
              <Bar />
            </div>
            <footer className={styles.footer}></footer>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}