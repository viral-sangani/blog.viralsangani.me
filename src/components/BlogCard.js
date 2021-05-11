import React from 'react'
import { Link } from 'gatsby'
import Tags from './Tags'
import Img from 'gatsby-image/withIEPolyfill'

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
    <section className="md:w-6/12 lg:w-6/12 w-full ">
      <div className="flex flex-col flex-wrap bg-light-backgroundSecondary dark:bg-dark-backgroundSecondary p-4 mx-1 my-4 rounded-2xl border-2 border-transparent hover:border-light-primary dark:hover:border-dark-primary">
        <div className="w-full mb-7 md:mr-6 lg:mr-6">
          <Img
            Tag="div"
            fadeIn
            durationFadeIn={1500}
            objectFit="cover"
            className="h-full w-full rounded-2xl"
            fluid={hero}
            backgroundColor={`#fff`}
          />
        </div>
        <div className="w-full pr-4">
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
          <footer className="mb-4 mt-5">
            <div id="all-tags">
              <Tags tags={tags} />
            </div>
          </footer>
        </div>
      </div>
    </section>
  )
}

export default BlogCard
