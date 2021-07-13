module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.source.club'
  },
  plugins: [
    {
      resolve: 'gatsby-theme-i18n',
      options: {
        defaultLang: 'fi',
        configPath: require.resolve('./i18n/config.json'),
        prefixDefault: true
      }
    },
    {
      resolve: 'gatsby-theme-i18n-lingui',
      options: {
        localeDir: './i18n/lingui'
      }
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.STRAPI_API_URL,
        queryLimit: 1000,
        collectionTypes: [
          { name: 'partner', api: { qs: { _locale: 'all' } } }
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
