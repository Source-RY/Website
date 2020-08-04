const path = require('path');


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // Sometimes, optional fields tend to get not picked up by the GraphQL
  // interpreter if not a single content uses it. Therefore, we're putting them
  // through `createNodeField` so that the fields still exist and GraphQL won't
  // trip up. An empty string is still required in replacement to `null`.
  switch (node.internal.type) {
  default: break;
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allStrapiPage {
        edges {
          node {
            name
            banner {
              childImageSharp {
                original {
                  src
                }
              }
            }
            url
            enabled
            translations {
              title
              body
              language
            }
          }
        }
      }
    }
  `);

  console.log(result);

  for (const { url } of result.data.allStrapiPage.edges.map(edge => edge.node)) {
    createPage({
      path: url,
      component: path.resolve('./src/templates/page.tsx'),
      context: {
        url: url
      }
    });
  }
};
