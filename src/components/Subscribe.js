import React from 'react'
import { SpecialBlack } from './ContentUtils'
import axios from 'axios'
import { StaticQuery, graphql } from 'gatsby'

export default function Subscribe() {
  const [email, setEmail] = React.useState('')

  return (
    <div className="subscribe">
      <div className="subscribe__image">
        <StaticQuery
          query={graphql`
            {
              file(name: { eq: "email" }) {
                childImageSharp {
                  fluid(quality: 90, maxWidth: 300) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          `}
          render={(data) => (
            <img alt="Subscribe" src={data.file.childImageSharp.fluid.src} />
          )}
        />
      </div>
      <div className="subscribe__text">
        <p className="heading">Stay tuned</p>
        <p className="subheading">
          <SpecialBlack>A newsletter that sparks joy.</SpecialBlack>
        </p>
      </div>
      <div className="subscribe__text" style={{ maxWidth: '80%' }}>
        <p
          className="subheading"
          style={{ color: 'var(--font-shadow-primary)' }}
        >
          This year I'm focusing big-time on writing content for web developers.
          Expect rich and bite-sized articles. There will be no spam and you can
          unsubscribe at any time.
        </p>
      </div>
      <form
        className="form"
        id="form"
        action="https://buttondown.email/api/emails/embed-subscribe/viral-sangani"
        method="post"
        target="popupwindow"
        onsubmit="window.open('https://buttondown.email/viral-sangani', 'popupwindow')"
        class="embeddable-buttondown-form"
      >
        <label>
          Email &nbsp;&nbsp;&nbsp;
          <input
            className="subscribe__input input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            name="email"
          />
        </label>
        <input
          className="subscribe__btn btn"
          type="submit"
          value="Subscribe 😬"
        />
      </form>
    </div>
  )
}
