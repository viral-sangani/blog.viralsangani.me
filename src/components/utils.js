import React from 'react'

export const colorList = [
  '#ffeb46',
  '#e5c9f2',
  '#ffcaa3',
  '#92dbc6',
  '#7fd5ea',
  '#bfdda6',
  '#c6d861',
]

export const COLORS = {
  light: {
    background: '#fff',
    backgroundSeconday: '#FFFFFF',
    font: '#000',
    fontShadowPrimary: '#e1e1e1',
    fontShadowSecondary: '#bab8b8',
    hover: '#0629ee',
    color: '#000',
    fontSecondary: '#7f7a7a',
  },
  dark: {
    background: '#262525',
    backgroundSeconday: '#1E272F',
    font: '#e1e1e1',
    fontShadowPrimary: '#000',
    fontShadowSecondary: '#757575',
    hover: '#ff0a78',
    color: '#fff',
    fontSecondary: '#999898',
  },
}

export const tagNames = [
  'aws',
  'git',
  'ci-cd',
  'linux',
  'python',
  'javascript',
  'django',
  'reactjs',
  'vim',
  'flutter',
]

export const useRandomInterval = (callback, minDelay, maxDelay) => {
  const timeoutId = React.useRef(null)
  const savedCallback = React.useRef(callback)
  React.useEffect(() => {
    savedCallback.current = callback
  })
  React.useEffect(() => {
    let isEnabled = typeof minDelay === 'number' && typeof maxDelay === 'number'
    if (isEnabled) {
      const handleTick = () => {
        const nextTickAt = random(minDelay, maxDelay)
        timeoutId.current = window.setTimeout(() => {
          savedCallback.current()
          handleTick()
        }, nextTickAt)
      }
      handleTick()
    }
    return () => window.clearTimeout(timeoutId.current)
  }, [minDelay, maxDelay])
  const cancel = React.useCallback(function () {
    window.clearTimeout(timeoutId.current)
  }, [])
  return cancel
}

const QUERY = '(prefers-reduced-motion: no-preference)'
const isRenderingOnServer = typeof window === 'undefined'
const getInitialState = () => {
  // For our initial server render, we won't know if the user
  // prefers reduced motion, but it doesn't matter. This value
  // will be overwritten on the client, before any animations
  // occur.
  return isRenderingOnServer ? true : !window.matchMedia(QUERY).matches
}
export const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(
    getInitialState
  )
  React.useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY)
    const listener = (event) => {
      setPrefersReducedMotion(!event.matches)
    }
    mediaQueryList.addListener(listener)
    return () => {
      mediaQueryList.removeListener(listener)
    }
  }, [])
  return prefersReducedMotion
}

export const random = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min

export const range = (start, end, step = 1) => {
  let output = []
  if (typeof end === 'undefined') {
    end = start
    start = 0
  }
  for (let i = start; i < end; i += step) {
    output.push(i)
  }
  return output
}
