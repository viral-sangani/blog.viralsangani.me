import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import CodeBlock from './CodeBlock'
import { Sparkles, Special, ATag, H3Tag } from './ContentUtils'

const components = {
    pre: (props) => <div {...props} />,
    code: CodeBlock,
    Sparkles: Sparkles,
    Special: Special,
    a: ATag,
    h3: H3Tag,
}

export default function RederMdx(props) {
    return (
        <MDXProvider components={components}>
            <main {...props}></main>
        </MDXProvider>
    )
}
