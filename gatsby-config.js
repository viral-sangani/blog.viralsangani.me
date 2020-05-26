module.exports = {
    siteMetadata: {
        title: `Viral Sangani`,
        author: {
            name: `Viral Sangani`,
            summary: `Your Friendly Neighborhood CSE Student`,
        },
        description: `Friendly tutorials for programmers and developers. Focus on Linux, Web Development and Cyber Security.`,
        siteUrl: `https://blog.viralsangani.me`,
        social: {
            twitter: `ViralSangani5`,
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
            'website',
            'javascript',
            'opensource',
            'cybersecurity',
            'django',
            'reactjs',
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
                plugins: [`gatsby-remark-images`],
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 950,
                        },
                    },
                ],
                remarkPlugins: [
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
                trackingId: `UA-166477510-1`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Viral Sangani Blog`,
                short_name: `Viral Sangani Blog`,
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
        `gatsby-plugin-sitemap`,
        {
            resolve: 'gatsby-plugin-google-marketing-platform',
            options: {
                dataLayer: {
                    // Preset dataLayer values
                    gaPropertyId: 'UA-166477510-1',
                },
                tagmanager: {
                    id: 'GTM-57M3NDX',
                    params: {
                        gtm_cookies_win: 'x',
                    },
                },
                analytics: {
                    id: 'UA-166477510-1',
                },
                optimize: {
                    id: 'OPT-TG8TSBC',
                },
            },
        },
        {
            resolve: 'gatsby-remark-code-buttons',
            options: {
                // Optional button container class name. Defaults
                // to 'gatsby-code-button-container'.
                // buttonContainerClass: `customButtonContainerClass`,
                // Optional button class name. Defaults to 'gatsby-code-button'.
                // buttonClass: `customButtonClass`,
                // Optional button text. Defaults to ''.
                // buttonText: `customButtonText`,
                // Optional svg icon class name. Defaults to 'gatsby-code-button-icon'.
                // svgIconClass: `customSvgIconClass`,
                // Optional svg icon. Defaults to svg string and can be
                // replaced with any other valid svg. Use custom classes
                // in the svg string and skip `iconClass` option.
                // svgIcon: `customSvgIcon`,
                // Optional tooltip text. Defaults to ''.
                tooltipText: `Copy code`,
                // Optional toaster class name. Defaults to ''.
                // toasterClass: `customToasterClass`,
                // Optional toaster text class name. Defaults to ''.
                // toasterTextClass: `customToasterTextClass`,
                // Optional toaster text. Defaults to ''.
                // toasterText: 'customToasterText',
                // Optional toaster duration. Defaults to 3500.
                toasterDuration: 5000,
            },
        },

        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
