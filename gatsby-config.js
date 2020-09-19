module.exports = {
  // pathPrefix: '',
  siteMetadata: {
    title: 'SOURCE ry',
    description: 'Homepage of SOURCE ry',
    keywords: '',
    siteUrl: 'https://www.sourcery.rocks',
    author: {
      name: 'SOURCE ry',
      url: '',
      email: 'source.tite@gmail.com'
    }
  },
  plugins: [
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'https://strapi.vanhanen.dev',
        queryLimit: 1000, // Default to 100
        contentTypes: ['page'],
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
        siteUrl: 'https://www.sourcery.rocks'
      }
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-remove-trailing-slashes'
  ]
};
