import { Trans } from '@lingui/react'
import React from 'react'
import tw from 'twin.macro'
import { NavigationBarItem } from './NavigationBarItem'


const StyledNav = tw.nav`
  flex
  flex-col
  gap-3
  p-4
  justify-evenly

  lg:flex-row
`

export const NavigationBar: React.FC = () => {
  return (
    <StyledNav>
      <NavigationBarItem url="/"><Trans id="navigation:home" /></NavigationBarItem>
      <NavigationBarItem url="/membership"><Trans id="navigation:membership" /></NavigationBarItem>
      <NavigationBarItem url="/events"><Trans id="navigation:events" /></NavigationBarItem>
      <NavigationBarItem url="/suggestions"><Trans id="navigation:suggestions" /></NavigationBarItem>
      <NavigationBarItem url="/contact-us"><Trans id="navigation:contact-us" /></NavigationBarItem>
      <NavigationBarItem url="/partners"><Trans id="navigation:partners" /></NavigationBarItem>
    </StyledNav>
  )
}
