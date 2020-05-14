module.exports = {
  siteMetadata: {
    title: '',
    description: '',
    keywords: '',
    siteUrl: 'http://localhost:8000',
    author: {
      name: '',
      url: '',
      email: ''
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'https://strapi.vanhanen.dev',
        queryLimit: 1000, // Default to 100
        contentTypes: ['event']
      }
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
        siteUrl: '<url-goes-here>'
      }
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
};
