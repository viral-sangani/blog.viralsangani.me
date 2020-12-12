import React from 'react'
import { SpecialBlack } from './ContentUtils'
import axios from 'axios'
import { StaticQuery, graphql } from 'gatsby'

export default function Subscribe() {
  const [email, setEmail] = React.useState('')
  const [name] = React.useState('')
  const formInput =
    typeof window !== 'undefined' && document.querySelector('.subscribe__input')
  const formBtn =
    typeof window !== 'undefined' && document.querySelector('.subscribe__btn')
  const subscribeImg =
    typeof window !== 'undefined' && document.querySelector('.subscribe__image')
  const nameInput =
    typeof window !== 'undefined' && document.querySelector('.nameInput')
  const emailInput =
    typeof window !== 'undefined' && document.querySelector('.emailInput')

  const handlSubmit = (e) => {
    e.preventDefault()
    if (email === '') {
      console.log('Error')
    } else {
      // console.log()
      formBtn.classList.add('btn--active')
      subscribeImg.classList.add('subscribe__image--success')
      formBtn.classList.add('btn--success')
      formBtn.value = "You're on the list! 👍"

      formInput.disabled = true
      formBtn.disabled = true
      nameInput.disabled = true
      emailInput.disabled = true
      axios
        .get(
          `https://ux28cjiz1f.execute-api.ap-south-1.amazonaws.com/dev/api/blog/subscribe?email=${email}&name=${name}`
        )
        .then((res) => {
          console.log(res.data)
        })
    }
  }
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
      <form className="form" id="form" onSubmit={handlSubmit}>
        <label>
          Email &nbsp;&nbsp;&nbsp;
          <input
            className="subscribe__input input emailInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            name="email"
          />
        </label>
        <input className="subscribe__btn btn" type="submit" value="Subscribe" />
      </form>
    </div>
  )
}
