import React from 'react'

import { Page } from '../components'


interface PartnersPageProps {
  data: {
    allStrapiPartner: {
      edges: Array<{
        node: {
          locale: 'fi' | 'en'
          name: string
          logo: {
            url: string
          }
          website: string
        }
      }>
    }
  }
}

export default function PartnersPage (props: PartnersPageProps) {
  return (
    <Page>
      yee
    </Page>
  )
}
