import React from 'react'
import { COLORS } from './utils'

function getInitialColorMode() {
  const persistedColorPreference =
    typeof window !== 'undefined' && window.localStorage.getItem('color-mode')
  const hasPersistedPreference = typeof persistedColorPreference === 'string'
  // If the user has explicitly chosen light or dark,
  // let's use it. Otherwise, this value will be null.
  if (hasPersistedPreference) {
    return persistedColorPreference
  }
  // If they haven't been explicit, let's check the media
  // query
  const mql =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)')
  const hasMediaQueryPreference = typeof mql.matches === 'boolean'
  if (hasMediaQueryPreference) {
    return mql.matches ? 'dark' : 'light'
  }
  // If they are using a browser/OS that doesn't support
  // color themes, let's default to 'light'.
  return 'dark'
}

export const ThemeContext = React.createContext()

export const ThemeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState(getInitialColorMode)
  const setColorMode = (newValue) => {
    const root = window.document.documentElement

    rawSetColorMode(newValue)
    // Persist it on update
    window.localStorage.setItem('color-mode', newValue)

    root.style.setProperty(
      '--background',
      newValue === 'light' ? COLORS.light.background : COLORS.dark.background
    )
    root.style.setProperty(
      '--font-color',
      newValue === 'light' ? COLORS.light.font : COLORS.dark.font
    )
    root.style.setProperty(
      '--font-secondary-color',
      newValue === 'light'
        ? COLORS.light.fontSecondary
        : COLORS.dark.fontSecondary
    )
    root.style.setProperty(
      '--font-shadow-primary',
      newValue === 'light'
        ? COLORS.light.fontShadowPrimary
        : COLORS.dark.fontShadowPrimary
    )
    root.style.setProperty(
      '--font-shadow-secondary',
      newValue === 'light'
        ? COLORS.light.fontShadowSecondary
        : COLORS.dark.fontShadowSecondary
    )
    root.style.setProperty(
      '--color',
      newValue === 'light' ? COLORS.light.color : COLORS.dark.color
    )
    root.style.setProperty(
      '--hover-color',
      newValue === 'light' ? COLORS.light.hover : COLORS.dark.hover
    )
  }
  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const ThemeContainer = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}
