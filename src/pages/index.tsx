import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'
import React from 'react'
import tw from 'twin.macro'
import ReactMarkdown from 'react-markdown'
import { Container, NavigationBar } from '../components'
import useText from '../text'


const Button = tw.button`
  hover:bg-green-400
  rounded-md
  shadow-md
`

export default function FrontPage (): JSX.Element {
  const Text = useText('fi')

  return (
    <Container>
      <NavigationBar />
      <text>
        Meikä mandariini

        tässä taas moi


        hei maailma
      </text>
      <div>
      </div>
    </Container>
  )
}

