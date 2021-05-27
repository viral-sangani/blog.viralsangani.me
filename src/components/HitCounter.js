import RetroHitCounter from 'react-retro-hit-counter'
import React from 'react'

function HitCounter({ slug }) {
  const [hits, setHits] = React.useState(undefined)
  React.useEffect(() => {
    console.log('called')
    // Don't count hits on localhost
    // if (process.env.NODE_ENV !== 'production') {
    //   return
    // }
    // Invoke the function by making a request.
    // Update the URL to match the format of your platform.
    fetch(
      `https://blog.viralsangani.me/.netlify/functions/register-hit?slug=${slug}`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log('json ==> ', json)
        if (typeof json.hits === 'number') {
          setHits(json.hits)
        }
      })
  }, [slug])
  if (typeof hits === 'undefined') {
    return null
  }
  return (
    <div className="mr-10">
      <RetroHitCounter hits={hits} />
    </div>
  )
}

export default HitCounter
