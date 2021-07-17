import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import { useLocalization } from 'gatsby-theme-i18n'
import tw from 'twin.macro'
import styled from 'styled-components'


type Image = { localFile: { childImageSharp: { original: { src: string }}}}

interface PartnerSectionData {
  allStrapiPartner: {
    edges: Array<{
      node: {
        locale: 'fi' | 'en'
        name: string
        logo: Image
        footer_logo_dark: Image
        footer_logo_light: Image
        website: string
      }
    }>
  }
}

type ThemeAwareImageProps =
  & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  & {
    $darkSrc: string
    $lightSrc: string
  }

const ThemeAwareImage: React.FC<ThemeAwareImageProps> = ({ $darkSrc, $lightSrc, ...props }) => {
  return <div {...props} />
}

const Partner = styled(ThemeAwareImage)`
  ${tw`
    h-40
    w-40
  `}

  @media (prefers-color-scheme: dark) {
    background-image: url(${({ $darkSrc }) => $darkSrc});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }

  @media (prefers-color-scheme: light) {
    background-image: url(${({ $lightSrc }) => $lightSrc});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
`

const Container = tw.div`
  p-8
  gap-12
  flex
  flex-row
  flex-wrap
  items-center
  justify-evenly
`

export const PartnerSection: React.FC = () => {
  const { locale } = useLocalization()
  const data: PartnerSectionData = useStaticQuery(graphql`
    query PartnerSectionQuery {
      allStrapiPartner {
        edges {
          node {
            locale
            name
            logo {
              localFile {
                url
                childImageSharp {
                  original {
                    src
                  }
                }
              }
            }
            footer_logo_dark {
              localFile {
                url
                childImageSharp {
                  original {
                    src
                  }
                }
              }
            }
            footer_logo_light {
              localFile {
                url
                childImageSharp {
                  original {
                    src
                  }
                }
              }
            }
            website
          }
        }
      }
    }
  `)

  const partners = React.useMemo(
    () => data.allStrapiPartner.edges
      .map(edge => edge.node)
      .filter(partner => partner.locale === locale)
      .map(({ name, footer_logo_dark, footer_logo_light, website }) =>
        ({
          name,
          website,
          logoUrl: {
            dark: footer_logo_dark.localFile.childImageSharp.original.src,
            light: footer_logo_light.localFile.childImageSharp.original.src
          }
        })),
    [locale]
  )

  return (
    <Container>
      {partners.map(partner => (
        partner.name === 'ReceiptHero' ?
          <Partner
            key={partner.name}
            $darkSrc={partner.logoUrl.dark}
            $lightSrc={partner.logoUrl.light} /> :
          <Partner
            key={partner.name}
            $darkSrc={partner.logoUrl.dark}
            $lightSrc={partner.logoUrl.light} />
      ))}
    </Container>
  )
}
