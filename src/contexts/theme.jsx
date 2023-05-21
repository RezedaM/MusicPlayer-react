import React, { useContext } from 'react'

// export const themes = {
//   dark: 'dark',
//   light: 'light',
// }

export const themes = {
  dark: {
    theme: 'dark',
    '--signup-background': 'rgba(0, 0, 0, 0.85)',
    /* mainTree*/
    '--page-background': '#383838',
    /* global */
    '--a-color': '#ffffff',
    /*bar*/
    '--bar-background': '#2e2e2e',
    /* barPlayer*/
    '--barPlayer-stroke': '#696969',
    '--barPlayer-stroke-hover': '#acacac',
    '--barPlayer-background': '#313131',
    /* filter by*/
    '--scroll-back': '#4b4949',
    '--active-color': '#ad61ff',
    '--hover-color': '#d9b6ff',
    '--dropdwn-shadow': 'rgba(0, 0, 0, 0.2)',
    /*burger*/
    '--burger-back': '#181818',
    '--burger-line': '#d3d3d3',
    /*search*/
    '--border-bottom': '#4e4e4e',

    '--bar-back': 'rgba(28, 28, 28, 0.5)',
  },
  light: {
    theme: 'light',
    '--signup-background': 'rgba(0, 0, 0, 0.85)',
    /* mainTree*/
    '--page-background': '#F6F5F3',
    /* global */
    '--a-color': '#181818',
    /*bar*/
    '--bar-background': '#850808',
    /* barPlayer*/
    '--barPlayer-stroke': '#850808',
    '--barPlayer-stroke-hover': '#850808',
    '--barPlayer-background': '#850808',
    /* filter by*/
    '--scroll-back': '#850808',
    '--active-color': '#850808',
    '--hover-color': '#850808',
    '--dropdwn-shadow': 'rgba(0, 0, 0, 0.2)',
    /*burger*/
    '--burger-back': '#FFFFFF',
    '--burger-line': '#181818',
    /*search*/
    '--border-bottom': '#D9D9D9',
    '::placeholder': { color: '#D9D9D9' },
    '--bar-back': '#850808',
    '--range-progr': '#D9D9D9',
  },
  
}

export const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {},
})

export const useThemeContext = () => {
  const theme = useContext(ThemeContext)
  if (!theme) return theme.light

  return theme
}

// export const ThemeContext = React.createContext({})
