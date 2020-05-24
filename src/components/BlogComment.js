import React from 'react'
import { DiscussionEmbed } from 'disqus-react'
import { ThemeContext } from './Context'

export default function Comment(props) {
    const { colorMode } = React.useContext(ThemeContext)
    const { title, id } = props
    const disqusShortname = 'blog-viralsangani-me'
    const disqusConfig = {
        identifier: id,
        title,
    }
    return (
        <>
            {colorMode === 'light' ? (
                <DiscussionEmbed
                    shortname={disqusShortname}
                    config={disqusConfig}
                />
            ) : (
                <DiscussionEmbed
                    shortname={disqusShortname}
                    config={disqusConfig}
                />
            )}
        </>
    )
}
