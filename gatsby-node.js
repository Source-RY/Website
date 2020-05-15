const path = require('path');
const _ = require('lodash');


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
      allStrapiEvent {
        edges {
          node {
            id
            end
            content
            start
            name
          }
        }
      }
      allStrapiPage {
        edges {
          node {
            id
            title
            textContent
          }
        }
      }
    }
  `);

  for (const { node } of result.data.allStrapiEvent.edges) {
    createPage({
      path: `/events/${_.kebabCase(node.name)}`,
      component: path.resolve('./src/templates/event.tsx'),
      context: {
        id: node.id
      }
    });
  }

  for (const { node } of result.data.allStrapiPage.edges) {
    createPage({
      path: `/${node.title.toLowerCase()}`,
      component: path.resolve('./src/templates/page.tsx'),
      context: {
        id: node.id
      }
    });
  }
};
