import NavMenu from './navMenu'
import logo from '../../assets/images/logo.png'
import logo_modal from '../../assets/images/logo_modal.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from '../nav/burger.module.css'
import { useThemeContext } from '../../contexts/theme'

export default function Burger() {
  const [menuActive, setMenuActive] = useState(false)

  const items = [
    { value: 'Главное', href: '/', id: 'nav_1' },
    { value: 'Мой плейлист', href: '/personal', id: 'nav_2' },
    { value: 'Выйти', href: '/login', id: 'nav_3' },
  ]

  const { theme, toggleTheme, currentTheme } = useThemeContext()

  // console.log(currentTheme)
  // console.log(toggleTheme)
  return (
    <nav className={styles.main__nav} style={{ backgroundColor: currentTheme['--burger-back']}}>
      <div className={styles.nav__logo}>
        <img className={styles.logo__image} src={        currentTheme.theme === 'dark' ? logo : logo_modal} alt="logo">
         
        </img>
      </div>
      <div
        className={styles.nav__burger}
        onClick={() => setMenuActive(!menuActive)}
      >
        <span className={styles.burger__line} style={{ backgroundColor: currentTheme['--burger-line']}}></span>
        <span className={styles.burger__line} style={{ backgroundColor: currentTheme['--burger-line']}}></span>
        <span className={styles.burger__line} style={{ backgroundColor: currentTheme['--burger-line']}}></span>
      </div>
      <NavMenu active={menuActive} setActive={setMenuActive} items={items} />
    </nav>
  )
}
