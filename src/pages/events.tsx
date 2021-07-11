import React from 'react'
import { graphql } from 'gatsby'


export interface EventsPageProps {
  data: {
    strapiEventsPage: {
      id: string
      body: string
      locale: 'fi' | 'en'
    }
  }
}

export const query = graphql`
  query EventsPageQuery {
    strapiEventsPage {
      id
      body
      locale
    }
  }
`

export default function EventsPage (props: EventsPageProps): JSX.Element {
  return (
    <>
      <p>Hello, world!</p>
      <div>
        {props.data.strapiEventsPage.body}
      </div>
    </>
  )
}

