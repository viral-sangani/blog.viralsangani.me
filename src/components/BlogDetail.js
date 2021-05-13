import React from 'react'
import { Link } from 'gatsby'
import Tags from './Tags'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import RenderMdx from './RederMdx'
import SocialShare from './SocialShare'
import Subscribe from './Subscribe'
import PollyAudioPlayer from './PollyAudioPlayer'
import Img from 'gatsby-image'

const BlogDetail = ({
  excerpt,
  slug,
  title,
  created,
  image,
  content,
  previous,
  next,
  tags,
  id,
  timeToRead,
}) => {
  return (
    <main className="bg-light-background dark:bg-dark-background pt-6">
      <section className="flex flex-col mx-auto relative max-w-screen-lg px-4 sm:px-6 lg:px-20 py-4">
        <div className="mb-8">
          <Link
            to="/"
            className="py-2 px-3 border-2 border-light-font hover:border-light-primary dark:hover:border-dark-primary dark:border-dark-font rounded-xl hover:rounded-sm text-light-primary hover:text-light-font dark:hover:text-dark-font dark:text-dark-primary text-lg"
          >
            ⤆ Go Back
          </Link>
        </div>
        <div className="row">
          <div className="col-xs-12 mb-xs-40 mb-md-80">
            <header className="content-item__header">
              <h1 className="title__link text-3xl">{title}</h1>
              <p className="text-light-font dark:text-dark-font text-lg py-4">
                <time
                  className="content-item__date"
                  dateTime=""
                  itemProp="datePublished"
                >
                  {created}{' '}
                </time>
                &mdash; {timeToRead} min read ☕
              </p>
              <div className="pb-5">
                <div id="all-tags">
                  <Tags tags={tags} />
                </div>
              </div>
              <figure className="pt-4 pb-8" data-component="image">
                <Img
                  Tag="div"
                  className="image__img_blog"
                  fluid={image}
                  backgroundColor={`#007ACC`}
                />
              </figure>
            </header>

            <PollyAudioPlayer slug={slug} />

            <RenderMdx>
              <MDXRenderer>{content}</MDXRenderer>
            </RenderMdx>
            <div className="content-item__body user-content"></div>

            <ul className="flex md:flex-nowrap lg:flex-nowrap flex-wrap justify-between list-none p-0 text-light-font dark:text-dark-font text-xl">
              {previous && (
                <Link to={`${previous.fields.slug}`}>
                  <li className="border-2 rounded-xl hover:bg-dark-primary my-2 border-light-primary dark:border-dark-primary p-4 text-light-font dark:text-dark-font mr-2 cursor-pointer hover:font-bold">
                    ← {previous.frontmatter.title}
                  </li>
                </Link>
              )}

              {next && (
                <Link to={`${next.fields.slug}`}>
                  <li className="border-2 rounded-xl hover:bg-dark-primary my-2 border-light-primary dark:border-dark-primary p-4 text-light-font dark:text-dark-font mr-2 cursor-pointer hover:font-bold">
                    {next.frontmatter.title} →
                  </li>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </section>

      <div className="flex flex-col justify-center items-center mx-auto relative max-w-screen-lg px-4 sm:px-6 lg:px-20 py-4">
        <div className="flex justify-between my-4">
          <SocialShare slug={slug} excerpt={excerpt} title={title} />
        </div>
        {/* <BlogComment title={title} id={id} /> */}
        <Subscribe />
      </div>
      {/* <div className="flex flex-col max-w-screen-lg sm:px-6 lg:px-20 py-4">
      </div> */}
    </main>
  )
}

export default BlogDetail
