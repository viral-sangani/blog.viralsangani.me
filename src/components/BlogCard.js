import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import Tags from './Tags'

const BlogCard = ({ slug, title, description, created, hero, tags }) => {
    return (
        <div className="col-xs-12 col-md-12">
            <div className="row">
                <div className="col-xs-12 mb-xs-40 mb-md-80">
                    <section className="list-item">
                        <figure
                            className="content-item__image image mb-xs-60"
                            data-component="image"
                        >
                            <Link to={`/posts/${slug}`}>
                                <span className="image__content">
                                    <Img
                                        Tag="div"
                                        className="image__img_blog"
                                        fluid={hero}
                                        backgroundColor={`#007ACC`}
                                    />
                                </span>
                            </Link>
                        </figure>
                        <header className="list-item__header">
                            <time className="list-item__date">
                                {created} &mdash;
                            </time>
                            {'  '}3 min read
                            <h2 className="list-item__title">
                                <Link
                                    className="list-item__link"
                                    to={`/posts/${slug}`}
                                    style={{ color: 'var(--font-color)' }}
                                >
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
                            <Tags tags={tags} />
                        </footer>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
