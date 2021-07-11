import React from 'react'

import { graphql } from 'gatsby'

export interface SuggestionsPageProps {
  data: {
    strapiSuggestionsPage: {
      id: string
      body: string
      locale: 'fi' | 'en'
    }
  }
}

export const query = graphql`
  query SuggestionsPageQuery {
    strapiSuggestionsPage {
      id
      body
      locale
    }
  }
`

export default function SuggestionsPage (props: SuggestionsPageProps): JSX.Element {
  return (
    <>
      <p>Hello, world!</p>
      <div>
        {props.data.strapiSuggestionsPage.body}
      </div>
    </>
  )
}

