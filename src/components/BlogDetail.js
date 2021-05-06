import React from 'react'
import { Link } from 'gatsby'
import BlogComment from './BlogComment'
import Tags from './Tags'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import RenderMdx from './RederMdx'
import SocialShare from './SocialShare'
import Subscribe from './Subscribe'
import PollyAudioPlayer from './PollyAudioPlayer'

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
      <section className="flex flex-col mx-auto relative max-w-screen-lg px-2 sm:px-6 lg:px-20 py-4">
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
              {/* <figure
                className="content-item__image image mb-xs-60"
                data-component="image"
              >
                <span className="image__content">
                  <Img
                    Tag="div"
                    className="image__img_blog"
                    fluid={image}
                    backgroundColor={`#007ACC`}
                  />
                </span>
              </figure> */}
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
            </header>

            <PollyAudioPlayer slug={slug} />

            <RenderMdx>
              <MDXRenderer>{content}</MDXRenderer>
            </RenderMdx>
            <div className="content-item__body user-content"></div>

            <ul className="flex flex-nowrap justify-between list-none p-0 text-light-font dark:text-dark-font text-xl">
              {previous && (
                <li className="border-2 rounded-xl border-light-primary dark:border-dark-primary p-4 text-light-font dark:text-dark-font mr-2 cursor-pointer hover:font-bold">
                  <Link to={`posts/${previous.fields.slug}`} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                </li>
              )}

              {next && (
                <li className="border-2 rounded-xl border-light-primary dark:border-dark-primary p-4 text-light-font dark:text-dark-font ml-2 cursor-pointer">
                  <Link to={`posts/${next.fields.slug}`} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>

      <div className="flex flex-col mx-auto relative max-w-screen-lg px-2 sm:px-6 lg:px-20 py-4">
        <div className="flex justify-between my-4">
          <SocialShare slug={slug} excerpt={excerpt} title={title} />
        </div>
        <BlogComment title={title} id={id} />
      </div>
      <div className="flex flex-col max-w-screen-lg sm:px-6 lg:px-20 py-4">
        <Subscribe />
      </div>
    </main>
  )
}

export default BlogDetail
