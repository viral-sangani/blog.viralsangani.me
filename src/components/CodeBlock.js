import React from 'react'
import styled from 'styled-components'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/dracula'
// import theme from 'prism-react-renderer/themes/shadesOfPurple'
// import theme from 'prism-react-renderer/themes/vsDark'

const Pre = styled.pre`
    text-align: left;
    margin: 1em 0;
    padding: 0.5em;
    overflow: scroll;
    font-size: 5px;
    border-radius: 5px;
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

export default function CodeBlock({ children, className }) {
    const language = className.replace(/language-/, '')
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
                console.log('tokens', tokens)
                return (
                    <div className="gatsby-highlight" data-language={language}>
                        <Pre className={className} style={style}>
                            {tokens.map((line, i) => (
                                <Line
                                    key={i}
                                    {...getLineProps({ line, key: i })}
                                >
                                    <LineNo>{i + 1}</LineNo>
                                    <LineContent>
                                        {line.map((token, key) => (
                                            <span
                                                style={{ fontSize: '10px' }}
                                                key={key}
                                                {...getTokenProps({
                                                    token,
                                                    key,
                                                })}
                                            />
                                        ))}
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
