import React from 'react'

import { LocalizedLink, useLocalization } from 'gatsby-theme-i18n'
import styled from '@emotion/styled'
import tw from 'twin.macro'
import { useLocation } from '@reach/router'


interface LocalizedLinkProps {
  [x: string]: any;
  to: any;
  language: any;
}

interface LocalizedLinkStyleProps {
  $isActive: boolean
}

const WrappedLocalizedLink: React.FC<LocalizedLinkProps & LocalizedLinkStyleProps> = ({ $isActive, ...props }) =>
  <LocalizedLink {...props} />

const StyledLocalizedLink = styled(WrappedLocalizedLink)`
  ${tw`
    uppercase
    font-sans
    dark:text-white
  `}

  ${({ $isActive }) => $isActive && tw`
    font-bold
  `}
`

export interface NavigationBarItemProps {
  url: string
  children?: React.ReactNode
}

export const NavigationBarItem: React.FC<NavigationBarItemProps> = ({ url, children }) => {
  const { locale } = useLocalization()
  const location = useLocation()

  const isActive = React.useMemo(() => location.pathname.endsWith(url), [location, url])

  return (
    <StyledLocalizedLink
      to={url}
      language={locale}
      $isActive={isActive}>
      {children}
    </StyledLocalizedLink>
  )
}
