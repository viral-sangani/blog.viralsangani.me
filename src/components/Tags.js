import React from 'react'
import { colorList } from './utils'
import { Link } from 'gatsby'

export default function Tags({ tags }) {
  return (
    <React.Fragment>
      {tags.map((tag) => {
        let tagColor = colorList[Math.floor(Math.random() * colorList.length)]
        return (
          <React.Fragment key={tag}>
            <Link
              to={`/tags/${tag}`}
              className="categoryTag text-base lg:text-xl"
              style={{
                backgroundColor: tagColor,
                cursor: 'pointer',
                textDecoration: 'none',
              }}
            >
              #{tag}
            </Link>
            &nbsp;
          </React.Fragment>
        )
      })}
    </React.Fragment>
  )
}
