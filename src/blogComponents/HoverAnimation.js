import React, { useState } from 'react'
import { Icon } from 'react-icons-kit'
import { animated } from 'react-spring'
import useHoverAnimation, {
  useHoverAnimationWithoutSpring,
} from '../components/hoverAnimationHook'

export const IconHoverAnimation = ({ icon, className, size, hoverConfig }) => {
  const [style, trigger] = useHoverAnimation(hoverConfig)

  return (
    <animated.span
      style={{ ...style, cursor: 'pointer' }}
      onMouseEnter={trigger}
    >
      <Icon icon={icon} className={className} size={size} />
    </animated.span>
  )
}

export const IconHoverAnimationWithoutSpring = ({
  icon,
  className,
  size,
  hoverConfig,
}) => {
  const [style, trigger] = useHoverAnimationWithoutSpring(hoverConfig)

  return (
    <span style={{ ...style, cursor: 'pointer' }} onMouseEnter={trigger}>
      <Icon icon={icon} className={className} size={size} />
    </span>
  )
}

export const EmojiHoverAnimation = () => {
  const [style, trigger] = useHoverAnimation({ y: 9 })
  const [emoji, setEmoji] = useState('😁')
  return (
    <animated.span
      style={{ ...style, fontSize: 50, cursor: 'pointer' }}
      onMouseEnter={() => {
        trigger()
        setEmoji('😩')
      }}
      onMouseLeave={() => {
        setEmoji('😁')
      }}
    >
      {emoji}
    </animated.span>
  )
}

export const NavItemHoverAnimation = ({
  icon,
  className,
  size,
  hoverConfig,
}) => {
  const [style, trigger] = useHoverAnimation(hoverConfig)

  return (
    <div
      onMouseEnter={trigger}
      className="text-light-font dark:text-dark-font flex justify-center items-center space-x-4 bg-light-backgroundSecondary dark:bg-dark-backgroundSecondary px-3 py-2 rounded-xl cursor-pointer"
    >
      <span>Home</span>
      <animated.span style={{ ...style, cursor: 'pointer' }}>
        <Icon icon={icon} className={className} size={size} />
      </animated.span>
    </div>
  )
}
