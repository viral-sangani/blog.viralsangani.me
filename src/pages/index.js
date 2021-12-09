// Gatsby supports TypeScript natively!
import React from 'react'
import { graphql } from 'gatsby'
import Tags from '../components/Tags'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BlogCard from '../components/BlogCard'
import { tagNames } from '../components/utils'
import Subscribe from '../components/Subscribe'
import Img from 'gatsby-image/withIEPolyfill'
import FigmentCard from '../components/FigmentCard'

const BlogIndex = (props) => {
  const { data, location } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges
  const homeHeroImg = data.allImageSharp.nodes[0].fluid
  const latestPost = posts[0]

  const figmentData = [
    {
      title: 'Create a Peer to Peer payment dApp, Part 1',
      description:
        'This tutorial will learn how to create a Peer-to-Peer payment dApp and deploy our smart contract on Polygon Network. We will first create an ERC20 token smart contract and use this token in our payment dApp to send to other addresses.',
      icon:
        'https://learn.figment.io/_next/image?url=%2Fimages%2Flogo-main.svg&w=1920&q=75',
      timeToRead: '1 hour',
      url:
        'https://learn.figment.io/tutorials/peer-to-peer-payment-on-polygon-part-1',
      date: 'Sept 28th, 2021',
      tags: ['Intermediate', 'Polygon', 'Javascript', 'Next.js'],
    },
    {
      title: 'Create a Peer to Peer payment dApp, Part 2',
      description:
        'This is the second part of two-part tutorial series on how to create a Peer-to-Peer payment dApp. In the first part, we created an ERC20 token using an openzappline contract and deployed it on the Polygon testnet. This part will learn how to add other tokens like USDT, BUSD, etc... on the Polygon network.',
      icon:
        'https://learn.figment.io/_next/image?url=%2Fimages%2Flogo-main.svg&w=1920&q=75',
      timeToRead: '1 hour',
      url:
        'https://learn.figment.io/tutorials/peer-to-peer-payment-on-polygon-part-2',
      date: 'Sept 28th, 2021',
      tags: ['ERC20', 'Polygon', 'Javascript', 'Next.js'],
    },
    {
      title: 'How to create a Polymarket clone on Polygon',
      description:
        'In this tutorial, we will learn how to create a Polymarket clone. Polymarket is a decentralized information market, harnessing the power of free markets to demystify the real-world events that matter most. We will create a full-stack dApp with an admin panel where events/markets are created, and a UI where users can predict the outcome on the website. In this tutorial we will create two smart contracts, one for the ERC20 tokens used on our website to delegate an amount to a specific event, and another contract for Polymarket itself.',
      icon:
        'https://learn.figment.io/_next/image?url=%2Fimages%2Flogo-main.svg&w=1920&q=75',
      timeToRead: '1 hour',
      url:
        'https://learn.figment.io/tutorials/create-a-polymarket-clone-on-polygon',
      date: 'Nov 18th, 2021',
      tags: ['Solidity', 'Polygon', 'Next.js'],
    },
    {
      title: 'Create a donation dApp on Polygon',
      description:
        'In this tutorial, you will learn how to create a Donation dApp on Polygon to award your favorite content creator with MATIC tokens and how to deploy your smart contract on the Polygon network.',
      icon:
        'https://learn.figment.io/_next/image?url=%2Fimages%2Flogo-main.svg&w=1920&q=75',
      timeToRead: '1.5 hour',
      url:
        'https://learn.figment.io/tutorials/create-a-donation-dapp-on-polygon',
      date: 'Spet 14th, 2021',
      tags: ['IPFS', 'Solidity', 'Polygon'],
    },
    {
      title: 'Create a To-Do dApp with Flutter',
      description:
        'In this tutorial, we will learn how to perform CRUD (Create, Read, Update and Delete) operations in a Flutter Dapp on the Polygon network by creating a To-do app.',
      icon:
        'https://learn.figment.io/_next/image?url=%2Fimages%2Flogo-main.svg&w=1920&q=75',
      timeToRead: '1.5 hour',
      url: 'https://learn.figment.io/tutorials/create-a-todo-dapp-with-flutter',
      date: 'Spet 14th, 2021',
      tags: ['Flutter', 'Solidity', 'Polygon', 'Next.js'],
    },
  ]

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Blog" />
      <main className="bg-light-background dark:bg-dark-background pt-5">
        <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between xl-flex-row mx-auto relative max-w-screen-xl px-4 sm:px-6 lg:px-20 py-4 mt-8 md:mt-0 lg:mt-0">
          <div className="w-10/12 md:w-6/12 lg:w-6/12 xl:w-6/12 ">
            <div className="quote-body">
              <blockquote className="text-xl md:text-2xl lg:text-3xl xl:text-3xl">
                A bug is never just a mistake. It represents something bigger.
                An error of thinking that makes you who you are.
              </blockquote>
            </div>
            <div className="quote-body">
              <cite>-- Mr. Robot</cite>
            </div>
          </div>

          <div className="w-10/12 md:w-5/12 lg:w-5/12 xl:w-5/12">
            <Img
              Tag="div"
              fadeIn
              objectFit="scale-down"
              className="h-full w-full rounded-2xl home-hero"
              fluid={homeHeroImg}
            />
          </div>
        </div>
        <div className="flex flex-col mx-auto relative max-w-screen-xl px-4 sm:px-6 lg:px-20 py-4">
          {/* <div className="my-5 text-black dark:text-white">Web3 Tutorials</div> */}

          <h2 className="mt-16 pb-6 title__link text-6xl">Web3 Tutorials</h2>
          <div className="pt-6 w-full flex flex-row flex-wrap">
            {figmentData.map((data) => {
              return (
                <FigmentCard
                  timeToRead={data.timeToRead}
                  key={data.slug}
                  url={data.url}
                  title={data.title}
                  created={data.date}
                  description={data.description}
                  tags={data.tags}
                />
              )
            })}
          </div>
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
            <div className="pt-6 w-full md:w-9/12 lg:w-9/12 flex flex-row flex-wrap">
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
            <div className="hidden md:block lg:block xl:block w-full md:w-3/12 lg:w-3/12 mt-10">
              <div className="sticky top-10 ml-6 mb-10 p-3 flex items-center flex-col border-2 rounded-2xl border-light-primary dark:border-dark-primary">
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
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    allImageSharp(
      filter: { fixed: { originalName: { eq: "home-hero.png" } } }
    ) {
      nodes {
        fluid(quality: 90, maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
