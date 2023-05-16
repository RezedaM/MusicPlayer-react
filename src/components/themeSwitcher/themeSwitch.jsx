import { useState } from 'react'
import { themes, useThemeContext } from '../../contexts/theme'
import Sprite from '../../assets/icons/sprite.svg'

import NavMenu from '../nav/navMenu'

// const getTheme = () => {
//     const theme = `${window.localStorage.getItem('theme')}`
//     if (Object.values(themes).includes(theme)) return theme

//     const userMedia = window.matchMedia
// }

// const [currentTheme, setCurrentTheme] = useState(themes.dark)

// const toggleTheme = () => {
//   if (currentTheme === themes.dark) {
//     setCurrentTheme(themes.light)
//     return
//   }
//   setCurrentTheme(themes.dark)
// }

export default function ThemeSwitcher() {
  const { toggleTheme, currentTheme } = useThemeContext

  console.log(currentTheme)
  console.log(toggleTheme)

  const darkTheme = (
    <svg alt="dark">
      <use xlinkHref={`${Sprite}#icon-dark`}></use>
    </svg>
  )
  const lightTheme = (
    <svg alt="light">
      <use xlinkHref={`${Sprite}#icon-light`}></use>
    </svg>
  )
  return (
    <div onClick={toggleTheme}>
      {currentTheme === themes.dark ? darkTheme : lightTheme}
    </div>
  )
}
