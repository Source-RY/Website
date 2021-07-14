import { t } from '@lingui/macro'
import { Trans } from '@lingui/react'
import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'
import { useLocalization } from 'gatsby-theme-i18n'
import React from 'react'
import tw, { GlobalStyles } from 'twin.macro'
import { Container, HTML, NavigationBar } from '../components'
import { createGlobalStyle } from 'styled-components'
import styled from '@emotion/styled'



const Button = tw.button`
  hover:bg-green-400
  rounded-md
  shadow-md
`

const GlobalStyle = createGlobalStyle`
  body {
    ${tw`
      light:bg-gray-50
      dark:bg-gray-900
    `}
  }
`

export default function HomePage () {
  return (
    <>
      <GlobalStyle />
      <Container>
        <NavigationBar />
        <HTML dangerouslySetInnerHTML={{ __html: t`home:body` }} />
      </Container>
    </>
  )
}
