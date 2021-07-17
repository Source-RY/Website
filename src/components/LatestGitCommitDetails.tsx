import { graphql, useStaticQuery } from 'gatsby'
import tw from 'twin.macro'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/fi'
import React from 'react'
import { Trans } from '@lingui/react'
import { useLocalization } from 'gatsby-theme-i18n'


dayjs.extend(relativeTime)

interface LatestBuildDetailsData {
  gitCommit: {
    hash: string
    message: string
    date: string
    author: {
      email: string
      name: string
    }
  }
}

const Container = tw.div`
  text-center
  // hover:border
  p-2
  rounded-md
`

const Line = tw.span`
  text-sm
  dark:text-white
`

export const LatestBuildDetails: React.FC = () => {
  const { gitCommit }: LatestBuildDetailsData = useStaticQuery(graphql`
    query LatestBuildDetailsQuery {
      gitCommit(latest: {eq: true}) {
        author {
          id
          name
          email
        }
        message
        hash
        date
      }
    }
  `)

  const { locale } = useLocalization()

  dayjs.locale(locale)

  return (
    <Container>
      <a target="_blank" href={`https://github.com/SOURCE-ry/Website/commit/${gitCommit.hash}`}>
        <Line><Trans id="git:latest-change" /></Line><span> </span>
        <i><Line>{gitCommit.message}</Line></i><span> </span>
        <Line>{dayjs(gitCommit.date).fromNow()}</Line><span> </span>
        <Line><Trans id="git:by" /></Line><span> </span>
        <Line>{gitCommit.author.name}</Line>
      </a>
    </Container>
  )
}
