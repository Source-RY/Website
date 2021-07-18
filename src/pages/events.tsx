import React from 'react'

import { graphql } from 'gatsby'
import { useLocalization } from 'gatsby-theme-i18n'

import { flow, pipe } from 'fp-ts/lib/function'
import * as I from 'fp-ts/lib/Identity'
import * as A from 'fp-ts/lib/Array'
import * as ORD from 'fp-ts/lib/Ord'
import * as N from 'fp-ts/lib/number'

import ReactMarkdown from 'react-markdown'
import tw from 'twin.macro'
import dayjs, { Dayjs as DateTime } from 'dayjs'

import { Markdown, Page } from '../components'


export const data = graphql`
  query EventsPageQuery {
    allStrapiEvent {
      edges {
        node {
          name
          date
          description
          locale
          cover {
            localFile {
              childImageSharp {
                original {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`

interface EventsPageData {
  allStrapiEvent: {
    edges: Array<{
      node: {
        name: string
        date: string
        description: string
        locale: string
        cover: {
          localFile: {
            childImageSharp: {
              original: {
                src: string
              }
            }
          }
        }
      }
    }>
  }
}

interface EventsPageProps {
  data: EventsPageData
}

const EventName = tw.h1`
  text-3xl
  mb-2
  dark:text-white
`

const EventDate = tw.p`
  dark:text-white
`


interface Image {
  src: string
}

interface Event {
  name: string
  date: DateTime
  description: string
  cover: Image
}

const byDate = pipe(
  N.Ord,
  ORD.contramap((event: Event) => event.date.unix())
)

const upcomingEvents = (locale: string) => (data: EventsPageData): Event[] => pipe(
  data.allStrapiEvent.edges,
  A.map(edge => edge.node),
  A.filter(node => node.locale === locale),
  A.map(node => ({
    name: node.name,
    date: dayjs(node.date),
    description: node.description,
    cover: {
      src: node.cover.localFile.childImageSharp.original.src
    }
  })),
  A.filter(event => event.date.isAfter(dayjs())),
  A.sort(byDate)
)


type EventProps = Event

const Cover = tw.img`
  max-w-4xl
  object-contain
`

const EventWrapper = tw.div`
  flex
  flex-row
`

const EventDetails = tw.div`
`

const Event: React.FC<EventProps> = (props: EventProps) => (
  <EventWrapper>
    <EventDetails>
      <EventName>{props.name}</EventName>
      <EventDate>{props.date.toISOString()}</EventDate>
      <Markdown>{props.description}</Markdown>
    </EventDetails>
    <Cover src={props.cover.src} />
  </EventWrapper>
)

// const Event = tw.div`
//   grid
//   grid-
// `

export default function EventsPage (props: EventsPageProps) {
  const { locale } = useLocalization()

  const events = pipe(upcomingEvents, I.ap(locale), I.ap(props.data))

  return (
    <Page>
      {events.map(event => <Event {...event} />)}
    </Page>
  )
}
