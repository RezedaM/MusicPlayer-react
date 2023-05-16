import React, { useContext } from 'react'

// export const themes = {
//   dark: 'dark',
//   light: 'light',
// }

export const themes = {
  dark: {
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
    color: '#FFFFFF',
  },
  light: {
    '--signup-background': 'rgba(0, 0, 0, 0.85)',
    /* mainTree*/
    '--page-background': '#ff299f',
    /* global */
    '--a-color': '#ff299f',
    /*bar*/
    '--bar-background': '#ff299f',
    /* barPlayer*/
    '--barPlayer-stroke': '#ff299f',
    '--barPlayer-stroke-hover': '#ff299f',
    '--barPlayer-background': '#ff299f',
    /* filter by*/
    '--scroll-back': '#ff299f',
    '--active-color': '#ff299f',
    '--hover-color': '#ff299f',
    '--dropdwn-shadow': 'rgba(0, 0, 0, 0.2)',
    /*burger*/
    '--burger-back': '#ff299f',
    '--burger-line': '#ff299f',
    /*search*/
    '--border-bottom': '#ff299f',
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
