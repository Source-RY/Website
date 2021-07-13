import { t } from '@lingui/macro'
import { Trans } from '@lingui/react'
import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'
import { useLocalization } from 'gatsby-theme-i18n'
import React from 'react'
import tw from 'twin.macro'
import { Container, NavigationBar } from '../components'


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

export const query = graphql`
  query PartnersPageQuery {
    allStrapiPartner {
      edges {
        node {
          locale
          name
          logo {
            url
          }
          website
        }
      }
    }
  }
`

export default function PartnersPage (props: PartnersPageProps) {
  const { locale } = useLocalization()

  const partners = props.data.allStrapiPartner.edges
    .map(edge => edge.node)
    .filter(partner => partner.locale === locale)
    .map(({ name, logo, website }) => ({
      name,
      website,
      logoUrl: logo.url
    }))

  return (
    <Container>
      <NavigationBar />
      <div dangerouslySetInnerHTML={{ __html: t`home:body` }} />
      {partners.map(partner => (
        <div key={partner.website}>{partner.name}</div>
      ))}
    </Container>
  )
}
