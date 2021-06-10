import React from 'react'
import styled, { keyframes } from 'styled-components'
import {
  random,
  range,
  usePrefersReducedMotion,
  useRandomInterval,
} from '../components/utils'

const DEFAULT_COLOR = '#FFC700'
const generateSparkle = (color) => {
  const sparkle = {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    color,
    size: random(10, 20),
    style: {
      top: random(0, 100) + '%',
      left: random(0, 100) + '%',
    },
  }
  return sparkle
}
export const Sparkles = ({ color = DEFAULT_COLOR, children, ...delegated }) => {
  const [sparkles, setSparkles] = React.useState(() => {
    return range(3).map(() => generateSparkle(color))
  })
  const prefersReducedMotion = usePrefersReducedMotion()
  useRandomInterval(
    () => {
      const sparkle = generateSparkle(color)
      const now = Date.now()
      const nextSparkles = sparkles.filter((sp) => {
        const delta = now - sp.createdAt
        return delta < 750
      })
      nextSparkles.push(sparkle)
      setSparkles(nextSparkles)
    },
    prefersReducedMotion ? null : 50,
    prefersReducedMotion ? null : 450
  )
  return (
    <Wrapper {...delegated}>
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <ChildWrapper>{children}</ChildWrapper>
    </Wrapper>
  )
}
const Sparkle = ({ size, color, style }) => {
  const path =
    'M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z'
  return (
    <SparkleWrapper style={style}>
      <SparkleSvg width={size} height={size} viewBox="0 0 68 68" fill="none">
        <path d={path} fill={color} />
      </SparkleSvg>
    </SparkleWrapper>
  )
}

export const Note = ({ children, varient }) => {
  if (varient === 'success')
    return (
      <div className="bg-light-backgroundSecondary dark:bg-dark-backgroundSecondary py-2 px-5 md:px-8 lg:px-10 rounded-lg border-l-4 border-light-primary dark:border-green-500 relative mt-10 mb-8">
        <p className="py-4 text-light-font dark:text-dark-font text-xl leading-8">
          {children}
        </p>
        <div
          className="absolute bg-light-background dark:bg-dark-background flex justify-center items-center"
          style={{
            top: -25,
            left: -25,
            width: 50,
            height: 50,
            borderRadius: 25,
          }}
        >
          <svg
            fill="none"
            height="38"
            width="38"
            viewBox="0 0 24 24"
            stroke="rgba(16, 185, 129, var(--tw-border-opacity))"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12" y2="8"></line>
          </svg>
        </div>
      </div>
    )
  return (
    <div className="bg-light-backgroundSecondary dark:bg-dark-backgroundSecondary py-2 px-5 md:px-8 lg:px-10 rounded-lg border-l-4 border-light-primary dark:border-dark-primary relative mt-10 mb-8">
      <p className="py-4 text-light-font dark:text-dark-font text-xl leading-8">
        {children}
      </p>
      <div
        className="absolute bg-light-background dark:bg-dark-background flex justify-center items-center"
        style={{
          top: -25,
          left: -25,
          width: 50,
          height: 50,
          borderRadius: 25,
        }}
      >
        <svg
          fill="none"
          height="38"
          width="38"
          viewBox="0 0 24 24"
          stroke="var(--hover-color)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12" y2="8"></line>
        </svg>
      </div>
    </div>
  )
}

const comeInOut = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`
const Wrapper = styled.span`
  display: inline-block;
  position: relative;
`
const SparkleWrapper = styled.span`
  position: absolute;
  display: block;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${comeInOut} 700ms forwards;
  }
`
const SparkleSvg = styled.svg`
  display: block;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${spin} 1000ms linear;
  }
`
const ChildWrapper = styled.strong`
  position: relative;
  z-index: 1;
  font-weight: bold;
  color: var(--color);
`

const SpecialTest = styled.span`
  font-family: 'Sriracha', cursive;
  color: var(--hover-color);
`

const SpecialTestBlack = styled.span`
  font-family: 'Sriracha', cursive;
  color: black;
`

export const Special = ({ children }) => <SpecialTest>{children}</SpecialTest>

export const SpecialBlack = ({ children }) => (
  <SpecialTestBlack>{children}</SpecialTestBlack>
)

export const ATag = ({ href, children }) => {
  return (
    <a id="a-tag" href={href}>
      {children}
    </a>
  )
}

export const PreTag = ({ children }) => {
  return <pre className="text-5xl py-5">{children}</pre>
}

export const H1Tag = ({ children }) => {
  return <h3 className="title__link__h1 text-5xl py-5">{children}</h3>
}

export const H2Tag = ({ children }) => {
  return <h3 className="title__link text-4xl py-5">{children}</h3>
}

export const H3Tag = ({ children }) => {
  return <h3 className="title__link text-3xl py-5">{children}</h3>
}

export const PTag = ({ children }) => {
  return (
    <p className="py-4 text-light-font dark:text-dark-font text-xl leading-8">
      {children}
    </p>
  )
}

export const Quote = ({ children }) => {
  return (
    <div className="quote-body">
      <blockquote>{children}</blockquote>
    </div>
  )
}

export const QuoteAuthor = ({ children }) => {
  return (
    <div className="quote-body">
      <cite>{children}</cite>
    </div>
  )
}
