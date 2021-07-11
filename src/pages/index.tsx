import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'
import React from 'react'
import tw from 'twin.macro'
import ReactMarkdown from 'react-markdown'
import { Container, NavigationBar } from '../components'
import * as strapi from '../strapi'
import { I18nextContext, useI18next } from 'gatsby-plugin-react-i18next'



const Button = tw.button`
  hover:bg-green-400
  rounded-md
  shadow-md
`

export default function FrontPage (props: unknown): JSX.Element {
  const { languages, changeLanguage } = useI18next()
  const context = React.useContext(I18nextContext)


  if (context.language !== 'en')
    changeLanguage('en')

  console.log(context.language)

  const Markdown = strapi.useMarkdown(context.language)

  return (
    <Container>
      <NavigationBar />
      <Markdown>home:body</Markdown>
    </Container>
  )
}

