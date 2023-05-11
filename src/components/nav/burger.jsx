import NavMenu from './navMenu'
import logo from '../../assets/images/logo.png'
import { useState } from 'react'

import styles from '../nav/burger.module.css'

export default function Burger() {
  const [menuActive, setMenuActive] = useState(false)

  const items = [
    { value: 'Главное', href: 'link', id: 1 },
    { value: 'Мой плейлист', href: 'link', id: 1 },
    { value: 'Войти', href: 'link', id: 1 },
  ]
  return (
    <nav className={styles.main__nav}>
      <div className={styles.nav__logo}>
        <img className={styles.logo__image} src={logo} alt="logo" />
      </div>
      <div
        className={styles.nav__burger}
        onClick={() => setMenuActive(!menuActive)}
      >
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
      </div>
      <NavMenu active={menuActive} setActive={setMenuActive} items={items} />
    </nav>
  )
}
