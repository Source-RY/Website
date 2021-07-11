import React from 'react'

import { graphql } from 'gatsby'

export interface HomePageProps {
  data: {
    strapiFrontPage: {
      id: string
      body: string
      locale: 'fi' | 'en'
    }
  }
}

export const query = graphql`
  query HomePageQuery {
    strapiFrontPage {
      id
      body
      locale
    }
  }
`

export default function HomePage (props: HomePageProps): JSX.Element {
  return (
    <>
      <p>Hello, world!</p>
      <div>
        {props.data.strapiFrontPage.body}
      </div>
    </>
  )
}

