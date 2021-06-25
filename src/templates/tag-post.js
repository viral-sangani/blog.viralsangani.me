import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import BlogCard from '../components/BlogCard'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Subscribe from '../components/Subscribe'

// import { MdKeyboardBackspace } from 'react-icons/md'

export default function TagPost(props) {
  const { tag } = props.pageContext
  const posts = props.data.allMdx.edges
  return (
    <Layout>
      <SEO title={`#${tag} | Blog`} />
      <main className="bg-light-background dark:bg-dark-background pt-10">
        <div className="flex flex-col mx-auto relative max-w-screen-lg px-4 sm:px-6 lg:px-20 py-4">
          <div className="flex flex-col md:flex-row lg-flex-row justify-between">
            <div className="mb-8">
              <Link
                to="/"
                className="py-2 px-3 border-2 border-light-font hover:border-light-primary dark:hover:border-dark-primary dark:border-dark-font rounded-xl hover:rounded-sm text-light-primary hover:text-light-font dark:hover:text-dark-font dark:text-dark-primary text-lg"
              >
                ⤆ Go Back
              </Link>
            </div>
            <div style={{ display: 'flex' }}>
              <div className="typewriter text-lg text-light-font dark:text-dark-font">
                <p>ls -a | grep "{tag}"</p>
              </div>
            </div>
          </div>
          <div className="pt-6 w-full flex flex-row flex-wrap">
            {posts.map(({ node }) => {
              const title = get(node.frontmatter, 'title') || node.fields.slug
              return (
                <BlogCard
                  timeToRead={node.timeToRead}
                  key={node.fields.slug}
                  slug={node.fields.slug}
                  title={title}
                  created={node.frontmatter.date}
                  description={node.excerpt}
                  hero={node.frontmatter.featuredImage.childImageSharp.fluid}
                  tags={node.frontmatter.tags}
                />
              )
            })}
          </div>
          <Subscribe />
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
          timeToRead
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
