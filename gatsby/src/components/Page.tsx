import React from 'react'

import { createGlobalStyle } from 'styled-components'
import tw from 'twin.macro'
import { LatestBuildDetails } from './LatestGitCommitDetails'

import { NavigationBar } from './Navigation'
import { PartnerSection } from './PartnerSection'


const GlobalStyle = createGlobalStyle`
  html, body, #___gatsby, #gatsby-focus-wrapper {
    ${tw`
      h-full
    `}
  }

  body {
    ${tw`
      light:bg-gray-50
      dark:bg-background
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
  max-w-4xl
  mx-auto
  flex-1
`

const Footer = tw.div`
  // bg-gray-600
  flex
  flex-col
  gap-8
  items-center
  justify-center
  // light:bg-gray-200
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
          <PartnerSection />
          <LatestBuildDetails />
        </Footer>
      </Layout>
    </>
  )
}
