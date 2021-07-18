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
  p-2
  rounded-md
`

const Link = tw.a`
  text-sm
  dark:text-gray-400
  hover:text-white
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
      <Link target="_blank" href={`https://github.com/SOURCE-ry/Website/commit/${gitCommit.hash}`}>
        <Trans
          id="git:latest-change"
          values={{
            message: gitCommit.message,
            date: dayjs(gitCommit.date).fromNow(),
            author: gitCommit.author.name
          }} />
      </Link>
    </Container>
  )
}
