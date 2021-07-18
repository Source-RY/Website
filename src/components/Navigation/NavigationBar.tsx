import React from 'react'

import { Trans } from '@lingui/react'
import { graphql, useStaticQuery } from 'gatsby'
import tw from 'twin.macro'
import { NavigationBarItem } from './NavigationBarItem'
import { Facebook, Instagram } from 'react-feather'
import styled from 'styled-components'


const StyledNav = tw.nav`
  dark:bg-foreground
  flex
  flex-col
  lg:flex-row
  items-center
  lg:p-3
  p-8
  gap-8
  justify-center
`

const Container = tw.div`
  flex
  flex-grow
  flex-col
  gap-3
  text-lg
  max-w-7xl
  w-full
  items-center
  justify-evenly
  lg:flex-row
`


const Logo = tw.img`
  h-16
  w-16
  flex-none
`

const SocialMedia = styled.div`
  ${tw`
    px-2
    flex-none
    flex
    flex-row
    text-white
    gap-4
  `}

  > a > svg {
    ${tw`
      h-10
      w-10
    `}
  }
`

export const NavigationBar: React.FC = () => {
  const data = useStaticQuery(graphql`
    query NavigationBarQuery {
      file(name: {eq: "source-logo"}) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `)

  return (
    <StyledNav>
      <Logo src={data.file.childImageSharp.fluid.src} alt="logo" />
      <Container>
        <NavigationBarItem url="/"><Trans id="navigation:home" /></NavigationBarItem>
        <NavigationBarItem url="/membership"><Trans id="navigation:membership" /></NavigationBarItem>
        <NavigationBarItem url="/events"><Trans id="navigation:events" /></NavigationBarItem>
        <NavigationBarItem url="/suggestions"><Trans id="navigation:suggestions" /></NavigationBarItem>
        <NavigationBarItem url="/contact-us"><Trans id="navigation:contact-us" /></NavigationBarItem>
        <NavigationBarItem url="/partners"><Trans id="navigation:partners" /></NavigationBarItem>
      </Container>
      <SocialMedia>
        <a href="https://www.facebook.com/tamko.source/"><Facebook /></a>
        <a href="https://www.instagram.com/source_ry/"><Instagram /></a>
      </SocialMedia>
    </StyledNav>
  )
}
