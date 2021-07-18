import React from 'react'

import { graphql } from 'gatsby'
import { t } from '@lingui/macro'

import { HTML, Page } from '../components'
import { HeroImage } from '../components/Content/HeroImage'
import tw from 'twin.macro'


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

const Container = tw.div`
  px-3
`

export default function HomePage ({ data }: HomePageProps) {
  return (
    <Page>
      <HeroImage src={data.file.publicURL} />
      <Container>
        <HTML dangerouslySetInnerHTML={{ __html: t`home:body` }} />
      </Container>
    </Page>
  )
}
