module.exports = {
    siteMetadata: {
        title: `Gatsby Blog`,
        author: {
            name: `Viral Sangani`,
            summary: `Just A Dev`,
        },
        description: `A blog demonstrating what Gatsby can do.`,
        siteUrl: `https://blog.viralsangani.me`,
        social: {
            twitter: `viral-sangani`,
        },
        tags: [
            'api',
            'aws',
            'git',
            'ci-cd',
            'linux',
            'coding',
            'python',
            'terminal',
            'websites',
            'javascript',
            'opensource',
            'cybersecurity',
        ],
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/assets`,
                name: `assets`,
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
                remarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                    },
                    {
                        resolve: `gatsby-remark-copy-linked-files`,
                    },
                    {
                        resolve: `gatsby-remark-smartypants`,
                    },
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                //trackingId: `ADD YOUR TRACKING ID HERE`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Gatsby Starter Blog`,
                short_name: `GatsbyJS`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `content/assets/gatsby-icon.png`,
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        {
            resolve: `gatsby-plugin-s3`,
            options: {
                bucketName: 'blog.viralsangani.me',
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
