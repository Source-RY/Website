import React from 'react'

import { createGlobalStyle } from 'styled-components'
import tw from 'twin.macro'

import { NavigationBar } from './Navigation'


const GlobalStyle = createGlobalStyle`
  body {
    ${tw`
      light:bg-gray-50
      dark:bg-gray-900
    `}
  }
`

const Container = tw.div`
  container
  mx-auto
`

const Content = tw.div`
  mt-2
`

export const Page: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <NavigationBar />
        <Content>{children}</Content>
      </Container>
    </>
  )
}
