const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const blogPost = path.resolve(`./src/templates/blog-post.js`)
    const tagPost = path.resolve('./src/templates/tag-post.js')
    const result = await graphql(
        `
            {
                allMdx(
                    sort: { fields: [frontmatter___date], order: DESC }
                    limit: 1000
                ) {
                    edges {
                        node {
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                            }
                        }
                    }
                }
                site {
                    siteMetadata {
                        tags
                    }
                }
            }
        `
    )

    if (result.errors) {
        throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMdx.edges
    const tags = result.data.site.siteMetadata.tags
    posts.forEach((post, index) => {
        const next = index === posts.length - 1 ? null : posts[index + 1].node
        const previous = index === 0 ? null : posts[index - 1].node
        createPage({
            path: '/posts' + post.node.fields.slug,
            component: blogPost,
            context: {
                slug: post.node.fields.slug,
                previous,
                next,
            },
        })
    })

    tags.forEach((tag) => {
        createPage({
            path: `tags/${tag}`,
            component: tagPost,
            context: {
                tag,
                filterTag: tag,
            },
        })
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === `Mdx`) {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}
