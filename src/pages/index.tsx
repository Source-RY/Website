import React from 'react'
import { graphql } from 'gatsby'
import tw from 'twin.macro'
import { Container, NavigationBar } from '../components'


export interface FrontPageProps {
  data: {
    strapiFrontPage: {
      id: string
      body: string
      locale: 'fi' | 'en'
    }
  }
}

export const query = graphql`
  query FrontPageQuery {
    strapiFrontPage {
      id
      body
      locale
    }
  }
`

const Button = tw.button`
  hover:bg-green-400
  rounded-md
  shadow-md
`

export default function FrontPage (props: FrontPageProps): JSX.Element {
  return (
    <Container>
      <NavigationBar />
      <p>Hello, world!</p>
      <Button>Click me</Button>
      <div>
        {props.data.strapiFrontPage.body}
      </div>
    </Container>
  )
}

