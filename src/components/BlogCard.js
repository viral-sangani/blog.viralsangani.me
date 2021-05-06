import React from 'react'
import { Link } from 'gatsby'
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
  console.log(`hero`, hero)
  return (
    <div className="row">
      <div className="">
        <div className="col-xs-12 mb-xs-40 mb-md-80">
          <section className="">
            <header className="">
              <time className="text-light-fontShadowSecondary dark:text-dark-fontShadowSecondary text-lg">
                {created} &mdash;
              </time>
              <span className="text-light-primary dark:text-dark-primary text-lg">
                &nbsp;&nbsp;{timeToRead} min read ☕
              </span>
              <h2 className="mt-0 pb-6">
                <Link className="title__link text-3xl" to={`${slug}`}>
                  {title}
                </Link>
              </h2>
            </header>
            <section className="">
              <p
                className="text-xl text-light-font dark:text-dark-font"
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
            </section>
            <footer className="mb-16 mt-5">
              <div id="all-tags">
                <Tags tags={tags} />
              </div>
            </footer>
          </section>
        </div>
      </div>
    </div>
  )
}

export default BlogCard

{
  /* <div className="col-xs-12 col-md-12 col-lg-4">
        <div className="row">
          <Img
            Tag="div"
            className="image__img_blog"
            fluid={hero}
            backgroundColor={`#007ACC`}
          />
        </div>
      </div> */
}
