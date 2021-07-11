import React from 'react'
import { graphql } from 'gatsby'


export interface MembershipPageProps {
  data: {
    strapiMembershipPage: {
      id: string
      body: string
      locale: 'fi' | 'en'
    }
  }
}

export const query = graphql`
  query MembershipPageQuery {
    strapiMembershipPage {
      id
      body
      locale
    }
  }
`

export default function MembershipPage (props: MembershipPageProps): JSX.Element {
  return (
    <>
      <p>Hello, world!</p>
      <div>
        {props.data.strapiMembershipPage.body}
      </div>
    </>
  )
}

