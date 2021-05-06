// Gatsby supports TypeScript natively!
import React from 'react'
import { graphql } from 'gatsby'
import Tags from '../components/Tags'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BlogCard from '../components/BlogCard'
import { tagNames } from '../components/utils'
import Subscribe from '../components/Subscribe'

const BlogIndex = (props) => {
  const { data, location } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Blog" />
      <main className="bg-light-background dark:bg-dark-background pt-10">
        <div className="flex flex-col mx-auto relative max-w-screen-lg px-2 sm:px-6 lg:px-20 py-4">
          <div className="">
            <div id="all-tags" style={{ textAlign: 'center' }}>
              <Tags tags={tagNames} />
            </div>
          </div>
          <div className="pt-16">
            <div className="">
              {posts.map(({ node }) => {
                if (node.frontmatter.publish) {
                  const title = node.frontmatter.title || node.fields.slug
                  return (
                    <BlogCard
                      timeToRead={node.timeToRead}
                      key={node.fields.slug}
                      slug={node.fields.slug}
                      title={title}
                      created={node.frontmatter.date}
                      description={node.excerpt}
                      hero={
                        node.frontmatter.featuredImage.childImageSharp.fluid
                      }
                      tags={node.frontmatter.tags}
                    />
                  )
                } else return null
              })}
            </div>
          </div>
          <Subscribe />
        </div>
      </main>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 300)
          fields {
            slug
          }
          timeToRead
          frontmatter {
            publish
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
