module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.source.club'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/locales`,
        name: 'locale'
      }
    },
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        languages: ['fi', 'en'],
        defaultLanguage: 'fi',
        siteUrl: 'https://www.source.club/',
        i18nextOptions: {},
        pages: []
      }
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.STRAPI_API_URL,
        queryLimit: 1000,
        collectionTypes: ['text']
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
