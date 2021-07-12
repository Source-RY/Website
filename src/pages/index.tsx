import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'
import React from 'react'
import tw from 'twin.macro'
import ReactMarkdown from 'react-markdown'
import { Container, NavigationBar } from '../components'
import { I18nProvider, Trans } from '@lingui/react'
import { withI18n } from '@lingui/react'
import { i18n } from '@lingui/core'
import { messages } from '../locale/en/messages'


i18n.load('en', messages)
i18n.activate('en')

const Button = tw.button`
  hover:bg-green-400
  rounded-md
  shadow-md
`

const FrontPage: React.FC = () => {
  return (
    <Container>
      <NavigationBar />
      <Trans id="home:body" />
    </Container>
  )
}

export default function() {
  return (
    <I18nProvider i18n={i18n}>
      <FrontPage />
    </I18nProvider>
  )
}
