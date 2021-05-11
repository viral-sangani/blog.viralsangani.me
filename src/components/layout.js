import React, { useContext } from 'react'
import '../../static/custom.css'
import Navigation from './Navigation'
import Footer from './Footer'
import 'nprogress/nprogress.css'
import { ThemeProvider, ThemeContext } from './Context'
import { StaticQuery, graphql } from 'gatsby'

export default ({ children }) => {
  return (
    <ThemeProvider>
      <Layout children={children} />
    </ThemeProvider>
  )
}

const Layout = ({ children }) => {
  const { colorMode } = useContext(ThemeContext)
  return (
    <div className={colorMode === 'dark' ? `dark` : ``}>
      <StaticQuery
        query={graphql`
          {
            file(name: { eq: "avatar" }) {
              childImageSharp {
                fluid(quality: 90, maxWidth: 300) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        `}
        render={(data) => (
          <Navigation image={data.file.childImageSharp.fluid} />
        )}
      />
      {children}
      <Footer />
    </div>
  )
}
