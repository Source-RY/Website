module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.source.club'
  },
  plugins: [
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.STRAPI_API_URL,
        queryLimit: 1000,
        collectionTypes: [{
          name: 'text',
          api: {
            qs: {
              _locale: 'all'
            }
          }
        }]
      }
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        jsxPragma: 'jsx',
        allExtensions: true
      }
    },
    'gatsby-plugin-emotion'
  ]
}
