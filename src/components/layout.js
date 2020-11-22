import React from 'react'
import '../../static/style.css'
import '../../static/custom.css'
import Navigation from './Navigation'
import Footer from './Footer'
import 'nprogress/nprogress.css'
import { ThemeProvider } from './Context'
import { StaticQuery, graphql } from 'gatsby'

export default ({ children }) => {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  )
}
