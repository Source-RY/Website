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
import localizedFormat from 'dayjs/plugin/localizedFormat'

import { Markdown, Page } from '../components'


dayjs.extend(localizedFormat)

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

const EventTitle = tw.div`
  mb-5
  flex
  flex-col
  gap-2
`

const EventName = tw.span`
  text-4xl
  dark:text-white
`

const EventDate = tw.span`
  dark:text-white
  text-lg
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


type EventProps = Event & { flipped: boolean }

const Cover = tw.img`
  h-96
  w-96
  object-cover
  rounded-lg
  hidden
  md:block
`

const EventWrapper = tw.div`
  flex
  flex-row
  gap-6
`

const EventDetails = tw.div`
`

const Event: React.FC<EventProps> = (props: EventProps) => {
  if (props.flipped) {
    return (
      <EventWrapper>
        <Cover src={props.cover.src} />
        <EventDetails>
          <EventTitle>
            <EventName>{props.name} </EventName>
            <EventDate>{props.date.format('LLLL')}</EventDate>
          </EventTitle>
          <Markdown>{props.description}</Markdown>
        </EventDetails>
      </EventWrapper>
    )
  }

  return (
    <EventWrapper>
      <EventDetails>
        <EventTitle>
          <EventName>{props.name} </EventName>
          <EventDate>{props.date.format('LLLL')}</EventDate>
        </EventTitle>
        <Markdown>{props.description}</Markdown>
      </EventDetails>
      <Cover src={props.cover.src} />
    </EventWrapper>
  )
}

// const Event = tw.div`
//   grid
//   grid-
// `

const Container = tw.div`
  mt-6
  flex
  px-6
  flex-col
  gap-12
`

export default function EventsPage (props: EventsPageProps) {
  const { locale } = useLocalization()

  const events = pipe(upcomingEvents, I.ap(locale), I.ap(props.data))

  return (
    <Page>
      <Container>
        {events.map((event, index) => <Event {...event} flipped={index % 2 !== 0} />)}
      </Container>
    </Page>
  )
}
