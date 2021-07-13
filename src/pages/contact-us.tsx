import { t } from '@lingui/macro'
import { Trans } from '@lingui/react'
import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'
import { useLocalization } from 'gatsby-theme-i18n'
import React from 'react'
import tw from 'twin.macro'
import { Container, NavigationBar } from '../components'


const Button = tw.button`
  hover:bg-green-400
  rounded-md
  shadow-md
`

export default function ContactUsPage () {
  const x = useLocalization()

  console.log(x)

  return (
    <Container>
      <NavigationBar />
      <div dangerouslySetInnerHTML={{ __html: t`home:body` }} />
    </Container>
  )
}
