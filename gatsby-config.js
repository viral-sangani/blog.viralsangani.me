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
      twitter: `viral_sangani_`,
    },
    tags: [
      'aws',
      'git',
      'ci-cd',
      'linux',
      'python',
      'terminal',
      'website',
      'javascript',
      'opensource',
      'cybersecurity',
      'django',
      'reactjs',
      'vim',
      'flutter',
      'nginx',
    ],
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Inter`, `Anonymous Pro`, `Sriracha`, `Special Elite`],
        display: 'swap',
      },
    },
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
      resolve: `gatsby-plugin-splitbee`,
      options: {
        includeInDevelopment: false,
        delayTimeout: 0,
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
            options: {
              escapeEntities: ['}', '='],
            },
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
        short_name: `Viral's Blog`,
        description: `All about Web3 and Stuff`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `./static/logo.png`,
      },
    },
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'blog.viralsangani.me',
      },
    },
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['css', 'html', 'js', 'svg'],
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
        tooltipText: `Copy code`,
        toasterDuration: 5000,
      },
    },
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        color: 'linear-gradient(to right, #1536EF, #FF0A78)',
        height: '3px',
        paths: ['/', '/posts/**', '/tags/**'],
        zIndex: `9999`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://viralsangani.me',
        p: 'https://viralsangani.me/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`],
      },
    },
  ],
}
