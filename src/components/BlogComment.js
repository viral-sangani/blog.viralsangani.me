import React from 'react'
import { DiscussionEmbed } from 'disqus-react'

export default function Comment(props) {
    const { title, id } = props
    const disqusShortname = 'blog-viralsangani-me'
    const disqusConfig = {
        identifier: id,
        title,
    }
    return (
        <>
            <DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
            />
        </>
    )
}
