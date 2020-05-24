import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import BlogDetail from '../components/BlogDetail'

const BlogPostTemplate = ({ data, pageContext, location }) => {
    const post = data.mdx
    const siteTitle = data.site.siteMetadata.title
    const { previous, next } = pageContext

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title={post.frontmatter.title} description={post.excerpt} />

            <BlogDetail
                excerpt={post.excerpt}
                slug={post.fields.slug}
                title={post.frontmatter.title}
                created={post.frontmatter.date}
                image={post.frontmatter.featuredImage.childImageSharp.fluid}
                content={post.body}
                previous={previous}
                next={next}
                tags={post.frontmatter.tags}
                id={post.id}
                type={post.frontmatter.type}
            />
        </Layout>
    )
}

export default BlogPostTemplate

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        mdx(fields: { slug: { eq: $slug } }) {
            id
            excerpt(pruneLength: 160)
            body
            fields {
                slug
            }
            frontmatter {
                type
                title
                tags
                date(formatString: "MMMM DD, YYYY")
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
`
