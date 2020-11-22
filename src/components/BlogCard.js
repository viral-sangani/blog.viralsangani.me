import React from 'react'
import { Link } from 'gatsby'
// import Img from 'gatsby-image/withIEPolyfill'
import Tags from './Tags'

const BlogCard = ({
  slug,
  title,
  description,
  created,
  hero,
  tags,
  timeToRead,
}) => {
  return (
    <div className="col-xs-12 col-md-12">
      <div className="row">
        <div className="col-xs-12 mb-xs-40 mb-md-80">
          <section className="list-item">
            <header className="list-item__header">
              <time
                style={{ color: 'var(--font-secondary-color)' }}
                className="list-item__date"
              >
                {created} &mdash;
              </time>
              <span style={{ color: 'var(--font-color)' }}>
                {'  '}
                {timeToRead} min read ☕
              </span>
              <h2 className="list-item__title" style={{ marginTop: '0px' }}>
                <Link className="title__link" to={`${slug}`}>
                  {title}
                </Link>
              </h2>
            </header>
            <section className="list-item__excerpt">
              <p
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
            </section>
            <footer className="list-item__footer">
              <div className="row">
                <div id="all-tags">
                  <Tags tags={tags} />
                </div>
              </div>
            </footer>
          </section>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
