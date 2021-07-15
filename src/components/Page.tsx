import React from 'react'

import { createGlobalStyle } from 'styled-components'
import tw from 'twin.macro'

import { NavigationBar } from './Navigation'


const GlobalStyle = createGlobalStyle`
  html, body, #___gatsby, #gatsby-focus-wrapper {
    ${tw`
      h-full
    `}
  }

  body {
    ${tw`
      light:bg-gray-50
      dark:bg-gray-900
    `}
  }
`

const Layout = tw.div`
  flex
  flex-col
  h-full
`

const Header = tw.div`
`

const Content = tw.div`
  container
  mx-auto
  my-4
  flex-1
`

const Footer = tw.div`
  py-16
  bg-gray-600
`

export const Page: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Header>
          <NavigationBar />
        </Header>
        <Content>{children}</Content>
        <Footer>
          hehe
          hoiho
          hii
        </Footer>
      </Layout>
    </>
  )
}
