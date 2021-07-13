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

const FrontPage: React.FC = () => {
  const x = useLocalization()

  console.log(x)

  return (
    <Container>
      <NavigationBar />
      <Trans id="home:body" />
    </Container>
  )
}

export default FrontPage
