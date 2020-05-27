import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { Special } from './ContentUtils'

export default function Subscribe() {
    const [email, setEmail] = React.useState('')
    const formInput =
        typeof window !== 'undefined' &&
        document.querySelector('.subscribe__input')
    const formBtn =
        typeof window !== 'undefined' &&
        document.querySelector('.subscribe__btn')
    const subscribeImg =
        typeof window !== 'undefined' &&
        document.querySelector('.subscribe__image')

    const handleClick = (e) => {
        e.preventDefault()

        formBtn.classList.add('btn--active')
        subscribeImg.classList.add('subscribe__image--success')
        formBtn.classList.add('btn--success')
        formBtn.value = "You're on the list! 👍"

        formInput.disabled = true
        formBtn.disabled = true
        addToMailchimp(email)
            .then((data) => {
                console.log(data.result)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className="subscribe">
            <div className="subscribe__image">
                <img
                    alt="Subscribe"
                    src="https://user-images.githubusercontent.com/23297041/53905033-9570ad00-4058-11e9-809d-c090c0468264.png"
                />
            </div>
            <div className="subscribe__text">
                <p className="heading">Stay tuned</p>
                <p className="subheading">
                    <Special>A newsletter that sparks joy.</Special>
                </p>
            </div>
            <div className="subscribe__text" style={{ maxWidth: '80%' }}>
                <p className="subheading">
                    This year I'm focusing big-time on writing content for web
                    developers. Expect rich and bite-sized articles. There will
                    be no spam and you can unsubscribe at any time.
                </p>
            </div>
            <form className="form" id="form">
                {/* jsx-a11y/control-has-associated-label*/}
                <input
                    className="subscribe__input input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter your email"
                    required
                    name="email"
                />
                <input
                    className="subscribe__btn btn"
                    type="submit"
                    value="Subscribe"
                    onClick={handleClick}
                />
            </form>
        </div>
    )
}
