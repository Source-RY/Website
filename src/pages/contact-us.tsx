import React from 'react'

import { graphql } from 'gatsby'

export interface ContactUsPageProps {
  data: {
    strapiContactUsPage: {
      id: string
      body: string
      locale: 'fi' | 'en'
    }
  }
}

export const query = graphql`
  query ContactUsPageQuery {
    strapiContactUsPage {
      id
      body
      locale
    }
  }
`

export default function ContactUsPage (props: ContactUsPageProps): JSX.Element {
  return (
    <>
      <p>Hello, world!</p>
      <div>
        {props.data.strapiContactUsPage.body}
      </div>
    </>
  )
}

