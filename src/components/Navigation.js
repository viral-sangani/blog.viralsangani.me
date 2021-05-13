import React, { useContext } from 'react'
import { Link } from 'gatsby'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import IconButton from '@material-ui/core/IconButton'
import { ThemeContext } from './Context'

const Navigaion = ({ image }) => {
  const { colorMode, setColorMode } = useContext(ThemeContext)
  return (
    <nav class="bg-light-background dark:bg-dark-background">
      <div class="max-w-screen-lg mx-auto px-2 sm:px-6 lg:px-20 py-4">
        <div className="flex flex-row justify-between items-center">
          {/* Left Part */}
          <div className="flex flex-row items-center">
            <Link to="/" className="shadow-none">
              <img
                className="w-14 rounded-full m-0"
                src={image.src}
                alt="Viral Sangani"
              />
            </Link>
            <div className="flex flex-col pl-4">
              <Link to={'/'}>
                <p className="text-light-primary dark:text-dark-primary text-lg hover:text-light-font dark:hover:text-dark-font">
                  Viral Sangani
                </p>
              </Link>
              <p className="text-light-font dark:text-dark-font text-md ">
                Your Friendly Neighborhood Tech Guy
              </p>
            </div>
          </div>
          {/* Right Part */}
          <div className="hidden lg:block md:block">
            <div className="flex items-center">
              <Link
                className="shadow-none px-4 text-lg text-light-font dark:text-dark-font hover:text-light-hover dark:hover:text-dark-primary"
                to="/subscribe"
              >
                Subscribe
              </Link>
              <a
                className="shadow-none px-4 text-lg text-light-font dark:text-dark-font hover:text-light-hover dark:hover:text-dark-primary"
                href="https://github.com/viral-sangani"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                className="shadow-none px-4 text-lg text-light-font dark:text-dark-font hover:text-light-hover dark:hover:text-dark-primary"
                target="_blank"
                href="mailto:viral.sangani2011@gmail.com"
                rel="noreferrer"
              >
                Contact
              </a>
              {colorMode === 'dark' ? (
                <IconButton
                  className="text-light-font dark:text-dark-font text-xl hover:text-light-hover dark:hover:text-dark-primary"
                  onClick={() => {
                    setColorMode('light')
                  }}
                >
                  <Brightness7Icon className="text-xl" />
                </IconButton>
              ) : (
                <IconButton
                  className="text-light-font dark:text-dark-font text-xl hover:text-light-hover dark:hover:text-dark-primary"
                  onClick={() => {
                    setColorMode('dark')
                  }}
                >
                  <Brightness4Icon className="text-xl" />
                </IconButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navigaion
