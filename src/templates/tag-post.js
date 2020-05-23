import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import BlogCard from '../components/BlogCard'
import get from 'lodash/get'
// import { MdKeyboardBackspace } from 'react-icons/md'

export default function TagPost(props) {
    const { tag } = props.pageContext
    const posts = props.data.allMdx.edges
    console.log(props.pageContext)
    return (
        <Layout>
            <Helmet title={`#${tag} | Blog`} />
            <main className="main">
                <div className="container--blog mt-xs-20 mt-sm-40 mb-xs-120">
                    <Link to="/" style={{ paddingBottom: '20px' }}>
                        <div className="back-btn">⤆ Go Back</div>
                    </Link>

                    <div style={{ display: 'flex' }}>
                        <div class="typewriter">
                            <p>ls -a | grep "{tag}"</p>
                        </div>
                    </div>
                    <div className="row">
                        &nbsp;
                        <div
                            className="sidebar col-xs-12 col-md-12"
                            data-component="sidebar"
                        >
                            {posts.map(({ node }) => {
                                const title =
                                    get(node.frontmatter, 'title') ||
                                    node.fields.slug
                                return (
                                    <BlogCard
                                        key={node.fields.slug}
                                        slug={node.fields.slug}
                                        title={title}
                                        created={node.frontmatter.date}
                                        description={node.excerpt}
                                        hero={
                                            node.frontmatter.featuredImage
                                                .childImageSharp.fluid
                                        }
                                        tags={node.frontmatter.tags}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export const pageQuery = graphql`
    query TagQuery($filterTag: String!) {
        allMdx(
            limit: 1000
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { in: [$filterTag] } } }
        ) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        tags
                        description
                        featuredImage {
                            childImageSharp {
                                fluid(quality: 90, maxWidth: 1920) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
