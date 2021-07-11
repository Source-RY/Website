import React from 'react'
import { graphql } from 'gatsby'


export interface PartnersPageProps {
  data: {
    strapiPartnersPage: {
      id: string
      body: string
      locale: 'fi' | 'en'
    }
  }
}

export const query = graphql`
  query PartnersPageQuery {
    strapiPartnersPage {
      id
      body
      locale
    }
  }
`

export default function PartnersPage (props: PartnersPageProps): JSX.Element {
  return (
    <>
      <p>Hello, world!</p>
      <div>
        {props.data.strapiPartnersPage.body}
      </div>
    </>
  )
}

