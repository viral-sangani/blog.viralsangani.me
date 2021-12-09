import React from 'react'
import { colorList } from './utils'

export default function Web3Tags({ tags }) {
  return (
    <React.Fragment>
      {tags.map((tag) => {
        let tagColor = colorList[Math.floor(Math.random() * colorList.length)]
        return (
          <React.Fragment key={tag}>
            <div
              className="categoryTag text-base lg:text-xl"
              style={{
                backgroundColor: tagColor,
                cursor: 'default',
                textDecoration: 'none',
              }}
            >
              #{tag}
            </div>
            &nbsp;
          </React.Fragment>
        )
      })}
    </React.Fragment>
  )
}
