import styles from '../nav/navMenu.module.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { theme, useThemeContext } from '../../contexts/theme'
import Sprite from '../../assets/icons/sprite.svg'
import { useState } from 'react'
import ThemeSwitcher from '../themeSwitcher/themeSwitch'

export default function NavMenu({ items, active }) {
  // const { theme } = useThemeContext
  // const [themeColor, setThemeColor] = useState('dark')
  // function logout(e) {
  //   if (Link.value === 'Выйти') {
  //     localStorage.removeItem('login')
  //   }
  // }

  // const darkTheme = (
  //   <div>
  //     <svg>
  //       <use xlinkHref={`${Sprite}#icon-dark`}></use>
  //     </svg>
  //   </div>
  // )
  // const lightTheme = (
  //   <div>
  //     <svg>
  //       <use xlinkHref={`${Sprite}#icon-dark`}></use>
  //     </svg>
  //   </div>
  // )

  // const themeChange = (themeColor) => {
  //   if (themeColor === 'dark') {
  //     setThemeColor('light')
  //     return lightTheme
  //   } else {
  //     setThemeColor('dark')
  //     return darkTheme
  //   }
  // }

  // const themeChange = isPlaying ? darkTheme : lightTheme

  // const playStart = () => {
  //   audioRef.current.play()
  //   console.log('play')
  //   setIsPlaying(true)
  // }

  // const playStop = () => {
  //   audioRef.current.pause()
  //   console.log('stop')
  //   setIsPlaying(false)
  // }

  // const { toggleTheme, currentTheme } = useThemeContext

  // console.log(currentTheme)
  // console.log(toggleTheme)
  return (
    <div className={styles.nav__menu}>
      <ul
        className={`${
          active
            ? [styles.menu__list, styles.active].join(' ')
            : styles.menu__list
        }`}
      >
        {items.map((item) => (
          <li className={styles.menu__item} key={item.id}>
            <Link
              to={item.href}
              className={styles.menu__link}
              
            >
              {item.value}
            </Link>
          </li>
        ))}
        <ThemeSwitcher />
        {/* <div>
          <svg alt="dark">
            <use xlinkHref={`${Sprite}#icon-dark`}></use>
          </svg>
        </div> */}
      </ul>
    </div>
  )
}
