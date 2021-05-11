import React from 'react'
import { Link } from 'gatsby'

const Footer = ({ children }) => {
  return (
    <footer className="bg-light-background dark:bg-dark-background pt-12">
      <div className="flex flex-col md:flex-row lg:flex-row justify-between flex-wrap mx-auto relative max-w-screen-lg px-4 sm:px-6 lg:px-20 py-4">
        <div className="flex flex-col">
          <p className="text-light-primary dark:text-dark-primary text-xl">
            Viral Sangani
          </p>
          <p className="text-light-font dark:text-dark-font text-lg pt-4">
            viral.sangani2011@gmail.com
          </p>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row">
          <div className="flex flex-col">
            <p className="text-light-primary dark:text-dark-primary text-xl mt-8 md:mt-0 lg:mt-0">
              Menu
            </p>
            <Link to={`/`} className="pt-4 text-light-font dark:text-dark-font">
              Blog
            </Link>
            <Link to={`/`} className="pt-1 text-light-font dark:text-dark-font">
              Project
            </Link>
          </div>
          <div className="flex flex-col ml-0 md:ml-10 lg:ml-10">
            <p className="text-light-primary dark:text-dark-primary text-xl mt-8 md:mt-0 lg:mt-0">
              Contact
            </p>
            <Link to={`/`} className="pt-4 text-light-font dark:text-dark-font">
              viral.sangani2011@gmail.com
            </Link>
            <Link to={`/`} className="pt-1 text-light-font dark:text-dark-font">
              Skype
            </Link>
          </div>
          <div className="flex flex-col ml-0 md:ml-10 lg:ml-10">
            <p className="text-light-primary dark:text-dark-primary text-xl mt-8 md:mt-0 lg:mt-0">
              Online
            </p>
            <Link to={`/`} className="pt-4 text-light-font dark:text-dark-font">
              Github
            </Link>
            <Link to={`/`} className="pt-1 text-light-font dark:text-dark-font">
              Twitter
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mx-auto relative max-w-screen-lg px-4 sm:px-6 lg:px-20 py-4">
        <p
          className="text-lg text-center text-light-font dark:text-dark-font"
          style={{ fontFamily: 'Sriracha, cursive' }}
        >
          "Give a man a program, frustrate him for a day. Teach a man to
          program, frustrate him for a lifetime"
        </p>
        <p className="pt-4 text-light-primary dark:text-dark-primary">
          Made with{' '}
          <span role="img" aria-label="heart">
            ❤️
          </span>{' '}
          in GatsbyJS
        </p>
      </div>
    </footer>
  )
}

export default Footer
