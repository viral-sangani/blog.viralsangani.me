import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import CodeBlock from './CodeBlock'
import { Sparkles, Special } from './ContentUtils'

const components = {
    pre: (props) => <div {...props} />,
    code: CodeBlock,
    Sparkles: Sparkles,
    Special: Special,
}

export default function RederMdx(props) {
    return (
        <MDXProvider components={components}>
            <main {...props}></main>
        </MDXProvider>
    )
}
