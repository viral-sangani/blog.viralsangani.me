import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import CodeBlock from './CodeBlock'
import {
  Sparkles,
  Special,
  ATag,
  H3Tag,
  Quote,
  QuoteAuthor,
  H1Tag,
  H2Tag,
  PTag,
  Note,
} from './ContentUtils'

const components = {
  pre: (props) => <div {...props} />,
  code: CodeBlock,
  Sparkles: Sparkles,
  Special: Special,
  a: ATag,
  h1: H1Tag,
  h2: H2Tag,
  h3: H3Tag,
  p: PTag,
  Quote: Quote,
  QuoteAuthor: QuoteAuthor,
  Note: Note,
}

export default function RederMdx(props) {
  return (
    <MDXProvider components={components}>
      <main {...props}></main>
    </MDXProvider>
  )
}
