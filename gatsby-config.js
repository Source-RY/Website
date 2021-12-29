module.exports = {
  // pathPrefix: '',
  siteMetadata: {
    title: 'SOURCE ry',
    description: 'Homepage of SOURCE ry',
    keywords: '',
    siteUrl: 'https://www.source.club',
    author: {
      name: 'SOURCE ry',
      url: '',
      email: 'hallitus@source.club'
    }
  },
  plugins: [
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-google-analytics-gdpr',
      options: {
        // The property ID; the tracking code won't be generated without it.
        trackingId: 'UA-175588917-1',
        // Optional parameter (default false) - Enable analytics in development mode.
        enableDevelopment: false, // default false
        // Optional parameter (default true) - Some countries (such as Germany) require you to use the _anonymizeIP function for Google Analytics. Otherwise you are not allowed to use it.
        anonymizeIP: true,
        // Optional parameter (default false) - Starts google analytics with cookies enabled. In some countries (such as Germany) this is not allowed.
        autoStartWithCookiesEnabled: false
      }
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'https://strapi.source.club',
        queryLimit: 1000, // Default to 100
        contentTypes: ['page', 'partner'],
        singleTypes: ['navigation-bar']
      }
    },
    {
      resolve: 'gatsby-plugin-less'
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://www.source.club'
      }
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-transformer-ffmpeg',
    'gatsby-plugin-ffmpeg',
    'gatsby-plugin-styled-components'
  ]
};
