module.exports = {
  siteMetadata: {
    siteUrl: `https://www.source.club`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true
      }
    }
  ]
}
