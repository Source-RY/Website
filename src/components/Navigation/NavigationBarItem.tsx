import React from 'react'

import { LocalizedLink, useLocalization } from 'gatsby-theme-i18n'
import styled from '@emotion/styled'
import tw from 'twin.macro'


const Link = styled(LocalizedLink)`
  ${tw`
    uppercase
    text-lg
    font-sans
  `}

  ${({ isActive }) => isActive && tw`
    font-bold
  `}
`

interface NavigationBarItemProps {
  url: string
}

export const NavigationBarItem: React.FC<NavigationBarItemProps> = ({ url, children }) => {
  const { locale } = useLocalization()

  const isActive = React.useMemo(() => window.location.href.endsWith(url), [url])

  return (
    <Link
      to={url}
      language={locale}
      isActive={isActive}>
      {children}
    </Link>
  )
}
