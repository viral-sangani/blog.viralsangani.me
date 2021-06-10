import { graphql } from 'gatsby'
import React from 'react'
import BlogDetail from '../components/BlogDetail'
import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        image={post.frontmatter.featuredImage.childImageSharp.fixed.srcWebp}
      />

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
        timeToRead={post.timeToRead}
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
      timeToRead
      frontmatter {
        type
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImage {
          childImageSharp {
            fixed {
              srcWebp
            }
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
