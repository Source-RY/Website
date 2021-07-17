import { Trans } from '@lingui/react'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import tw from 'twin.macro'
import { NavigationBarItem } from './NavigationBarItem'


const StyledNav = tw.nav`
  dark:bg-foreground
  flex
  flex-col
  items-center
`

const Container = tw.div`
  flex
  flex-col
  gap-3
  text-lg
  max-w-7xl
  w-full
  p-2
  items-center
  justify-evenly
  lg:flex-row
`


const Logo = tw.img`
  h-16
  w-16
`


export const NavigationBar: React.FC = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(name: {eq: "source-logo"}) {
        id
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
      <Container>
        <Logo src={data.file.childImageSharp.fluid.src} alt="logo" />
        <NavigationBarItem url="/"><Trans id="navigation:home" /></NavigationBarItem>
        <NavigationBarItem url="/membership"><Trans id="navigation:membership" /></NavigationBarItem>
        <NavigationBarItem url="/events"><Trans id="navigation:events" /></NavigationBarItem>
        <NavigationBarItem url="/suggestions"><Trans id="navigation:suggestions" /></NavigationBarItem>
        <NavigationBarItem url="/contact-us"><Trans id="navigation:contact-us" /></NavigationBarItem>
        <NavigationBarItem url="/partners"><Trans id="navigation:partners" /></NavigationBarItem>
      </Container>
    </StyledNav>
  )
}
