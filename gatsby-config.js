module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.source.club'
  },
  plugins: [
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        queryLimit: 1000,
        singleTypes: [
          'front-page',
          'membership-page',
          'contact-us-page',
          'partners-page',
          'suggestions-page',
          'events-page'
        ]
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
