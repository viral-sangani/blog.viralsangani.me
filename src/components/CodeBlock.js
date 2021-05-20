import React from 'react'
import styled from 'styled-components'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/dracula'
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live'
// import theme from 'prism-react-renderer/themes/shadesOfPurple'
// import theme from 'prism-react-renderer/themes/vsDark'
import { mdx } from '@mdx-js/react'

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;
  font-size: 5px;
  border-radius: 5px;
  color: #000;
  font-family: 'ui-monospace';
`

const Line = styled.div`
  display: table-row;
`

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`

const LineContent = styled.span`
  display: table-cell;
`

export default function CodeBlock({ children, className, live, render }) {
  const language = className.replace(/language-/, '')
  if (live) {
    return (
      <div style={{ marginTop: 30, marginBottom: 5 }}>
        <LiveProvider
          code={children.trim()}
          transformCode={(code) => '/** @jsx mdx */' + code}
          scope={{ mdx }}
          theme={theme}
          style={{
            borderRadius: 15,
            boxShadow: '1px 1px 20px rgba(20, 20, 20, 0.27)',
            overflow: 'auto',
            marginBottom: 15,
          }}
        >
          <div className="flex flex-col md:flex-row lg:flex-row justify-items-stretch items-stretch">
            <div
              className="bg-gray-400 text-sm w-full md:w-1/2 lg:w-1/2"
              style={{
                fontFamily: '"Source Code Pro", monospace',
                height: 350,
                maxHeight: 350,
                overflow: 'auto',
              }}
            >
              <LiveEditor style={{ height: '100%', overflow: 'auto' }} />
            </div>
            <LivePreview
              style={{
                position: 'relative',
                padding: '0.5rem',
                background: 'white',
                color: 'black',
                height: 'auto',
                overflow: 'hidden',
              }}
              className=" w-full md:w-1/2 lg:w-1/2"
            />
          </div>
          <LiveError
            style={{
              display: 'block',
              padding: 8,
              backgroundColor: 'red',
              color: 'white',
              whiteSpace: 'pre-wrap',
              textAlign: 'left',
              fontSize: 16,
              fontFamily: '"Source Code Pro", monospace',
            }}
          />
        </LiveProvider>
        <div className="flex justify-end">
          <span className="text-sm text-light-primary dark:text-dark-primary py-2">
            ( Live Preview in JSX )
          </span>
        </div>
      </div>
    )
  }

  if (render) {
    return (
      <div style={{ marginTop: '40px' }}>
        <LiveProvider code={children}>
          <LivePreview />
        </LiveProvider>
      </div>
    )
  }

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        style = { ...style, fontSize: '16px', textShadow: 'none' }
        tokens = tokens.slice(0, -1)

        return (
          <div className="gatsby-highlight" data-language={language}>
            <Pre className={className} style={style}>
              {tokens.map((line, i) => (
                <Line key={i} {...getLineProps({ line, key: i })}>
                  <LineNo>{i + 1}</LineNo>
                  <LineContent>
                    {line.map((token, key) => {
                      console.log()
                      return (
                        <span
                          style={{ fontSize: '10px' }}
                          key={key}
                          {...getTokenProps({
                            token,
                            key,
                          })}
                        />
                      )
                    })}
                  </LineContent>
                </Line>
              ))}
            </Pre>
          </div>
        )
      }}
    </Highlight>
  )
}
