import React from 'react'
import Img from 'gatsby-image/withIEPolyfill'
import { Link } from 'gatsby'
import BlogComment from './BlogComment'
import Tags from './Tags'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import RenderMdx from './RederMdx'
import SocialShare from './SocialShare'

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
}) => {
    return (
        <main className="main">
            <section className="container--blog mt-xs-20 mt-sm-40 mb-xs-120">
                <Link to="/" style={{ paddingBottom: '20px' }}>
                    <div className="back-btn">⤆ Go Back</div>
                </Link>
                <div className="row">
                    <div className="col-xs-12 mb-xs-40 mb-md-80">
                        <header className="content-item__header">
                            <h1 className="title__link">{title}</h1>
                            <p className="content-item__subtitle">
                                <time
                                    className="content-item__date"
                                    datetime=""
                                    itemprop="datePublished"
                                >
                                    {created}
                                </time>
                                &mdash;
                            </p>
                            <div className="row">
                                <div id="all-tags">
                                    <Tags tags={tags} />
                                </div>
                            </div>
                        </header>
                        <figure
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
                        </figure>
                        {/* <div
                            className="post-content"
                            dangerouslySetInnerHTML={{ __html: content }}
                        /> */}

                        <RenderMdx>
                            <MDXRenderer>{content}</MDXRenderer>
                        </RenderMdx>
                        <div className="content-item__body user-content"></div>

                        <ul
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'space-between',
                                listStyle: 'none',
                                padding: 0,
                            }}
                        >
                            {previous && (
                                <li>
                                    <Link
                                        to={`posts/${previous.fields.slug}`}
                                        rel="prev"
                                    >
                                        ← {previous.frontmatter.title}
                                    </Link>
                                </li>
                            )}

                            {next && (
                                <li>
                                    <Link
                                        to={`posts/${next.fields.slug}`}
                                        rel="next"
                                    >
                                        {next.frontmatter.title} →
                                    </Link>
                                </li>
                            )}
                        </ul>

                        <SocialShare
                            slug={slug}
                            excerpt={excerpt}
                            title={title}
                        />

                        <BlogComment title={title} id={id} />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default BlogDetail
