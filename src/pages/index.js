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
        <div className="flex flex-col mx-auto relative max-w-screen-xl px-4 sm:px-6 lg:px-20 py-4">
          <div className="flex flex-col md:flex-row lg:flex-row justify-center">
            <div className="block md:hidden lg:hidden xl:hidden">
              <div className="mb-2 w-full md:w-3/12 lg:w-3/12 flex items-center flex-col ">
                <span className="text-light-font dark:text-dark-font text-center pb-1 text-xl border-b-4 mb-4 border-light-primary dark:border-dark-primary ">
                  Tags
                </span>
                <div id="all-tags" className="text-start">
                  <Tags tags={tagNames} />
                </div>
              </div>
            </div>
            <div className="pt-10 w-full md:w-9/12 lg:w-9/12 flex flex-row flex-wrap">
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
            <div className="hidden md:block lg:block xl:block w-full md:w-3/12 lg:w-3/12">
              <div className="mt-10 ml-6 mb-10 p-3 flex items-center flex-col border-2 rounded-2xl border-light-primary dark:border-dark-primary">
                <span className="text-light-font dark:text-dark-font text-center pb-1 text-xl border-b-4 mb-4 border-light-primary dark:border-dark-primary ">
                  Tags
                </span>
                <div id="all-tags" className="text-start">
                  <Tags tags={tagNames} />
                </div>
              </div>
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
          excerpt(pruneLength: 130)
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
                fluid(quality: 90, maxWidth: 700) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`
