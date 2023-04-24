import NavMenu from './navMenu'
import logo from '../assets/images/logo.png'
import { useState } from 'react'

// const [menuActive, setMenuActive] = useState(false)

// const items = [
//     { value: 'Главное', href: 'link', id: 1 },
//     { value: 'Мой плейлист', href: 'link', id: 1 },
//     { value: 'Войти', href: 'link', id: 1 },
//   ]
export default function Burger() {
  const [menuActive, setMenuActive] = useState(false)

  const items = [
    { value: 'Главное', href: 'link', id: 1 },
    { value: 'Мой плейлист', href: 'link', id: 1 },
    { value: 'Войти', href: 'link', id: 1 },
  ]
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src={logo} alt="logo" />
      </div>
      <div
        className="nav__burger burger"
        onClick={() => setMenuActive(!menuActive)}
      >
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      <NavMenu active={menuActive} setActive={setMenuActive} items={items} />
    </nav>
  )
}
