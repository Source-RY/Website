import { graphql, useStaticQuery } from 'gatsby'
import ReactMarkdown from 'react-markdown'


export default function useText(locale: string): ({ children: string }) => JSX.Element {
  const data = useStaticQuery(graphql`
    query FrontPageTextsQuery {
      allStrapiText {
        edges {
          node {
            value
            locale
            key
          }
        }
      }
    }
  `)

  const locales = data.allStrapiText.edges.reduce((locales, { node }) => ({
    [node.locale]: { ...locales[node.locale], [node.key]: node.value }
  }), {})

  console.log(locales)

  // ).allStrapiText.edges
  // .map(({ node }) => ({ [node.locale]: [node.key, node.value] }))
  // .reduce((obj, x) => ({ ...obj, ...x }), {})

  // console.log(texts)

  return ({ children }) => (
    <ReactMarkdown>{locales[locale]?.[children]}</ReactMarkdown>
  )
}



