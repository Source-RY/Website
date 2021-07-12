import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'
import React from 'react'
import tw from 'twin.macro'
import ReactMarkdown from 'react-markdown'
import { Container, NavigationBar } from '../components'
import { Trans } from '@lingui/react'


const Button = tw.button`
  hover:bg-green-400
  rounded-md
  shadow-md
`

export default function FrontPage (props: unknown): JSX.Element {
  return (
    <Container>
      <NavigationBar />
      <Trans id="home:body" />
    </Container>
  )
}

