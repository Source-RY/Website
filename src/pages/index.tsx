import React from 'react'

import { graphql } from 'gatsby'
import { t } from '@lingui/macro'

import { HTML, Page } from '../components'
import { HeroImage } from '../components/Content/HeroImage'


interface HomePageData {
  file: {
    publicURL: string
  }
}

export const query = graphql`
 query HomePageQuery {
    file(name: {eq: "home-page-hero-image"}) {
      publicURL
    }
  }
`

interface HomePageProps {
  data: HomePageData
}

export default function HomePage ({ data }: HomePageProps) {
  return (
    <Page>
      <HeroImage src={data.file.publicURL} />
      <HTML dangerouslySetInnerHTML={{ __html: t`home:body` }} />
    </Page>
  )
}
