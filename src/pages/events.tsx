import React from 'react'

import { graphql } from 'gatsby'
import { useLocalization } from 'gatsby-theme-i18n'

import { flow, pipe } from 'fp-ts/lib/function'
import * as I from 'fp-ts/lib/Identity'
import * as A from 'fp-ts/lib/Array'
import * as ORD from 'fp-ts/lib/Ord'
import * as N from 'fp-ts/lib/number'

import tw from 'twin.macro'
import dayjs, { Dayjs as DateTime } from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'

import { Markdown, Page } from '../components'
import styled from 'styled-components'


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
                fluid {
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
              fluid: {
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
      src: node.cover.localFile.childImageSharp.fluid.src
    }
  })),
  A.filter(event => event.date.isAfter(dayjs())),
  A.sort(byDate)
)


type EventProps = Event & { flipped: boolean }

const Cover = tw.img`
  h-64
  w-64
  object-cover
  rounded-lg
  hidden
  md:block
`

const EventWrapper = styled.div`
  ${tw`
    flex
    flex-row
    gap-5
    items-center
    justify-between
  `}
`

const EventDetails = styled.div`
  ${tw`
    flex
    flex-col
  `}
`

const EventDescription = styled(Markdown)`
  ${tw`
    h-full
  `}
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
  my-6
  flex
  px-6
  flex-col
  gap-5
`

export default function EventsPage (props: EventsPageProps) {
  const { locale } = useLocalization()

  const events = pipe(upcomingEvents, I.ap(locale), I.ap(props.data))

  const isOdd = (i: number) => i % 2 === 1

  return (
    <Page>
      <Container>
        {events.map((event, index) => <Event key={event.name} {...event} flipped={isOdd(index)} />)}
      </Container>
    </Page>
  )
}
