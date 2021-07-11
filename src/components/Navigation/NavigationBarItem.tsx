import React from 'react'
import tw from 'twin.macro'


const Link = tw.a`
  uppercase
  font-bold
  text-lg
  font-sans
`

interface NavigationBarItemProps {
  page: string
}

export const NavigationBarItem: React.FC<NavigationBarItemProps> = ({ page }) => {
  return <Link>{page}</Link>
}
