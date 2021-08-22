const path = require('path')

const { pipe } = require('fp-ts/lib/function')
const A = require('fp-ts/lib/Array')

const kebabCase = require('kebab-case')


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      allStrapiEvent {
        edges {
          node {
            name
            date
            description
          }
        }
      }
    }
  `)

  pipe(
    data.allStrapiEvent.edges,
    A.map(edge => edge.node),
    A.map(createEventPage)
  )

  function createEventPage ({ name, date, description }) {
    console.log(name)
    console.log(kebabCase(name))

    createPage({
      path: `/events/${kebabCase(name)}`,
      component: path.resolve('./src/templates/event.tsx'),
      context: {
        name,
        date,
        description
      }
    })
  }
}
