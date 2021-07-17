import { graphql, useStaticQuery } from 'gatsby'
import tw from 'twin.macro'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'


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
  hover:border
  p-2
  rounded-md
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

  return (
    <Container>
      <a href={`https://github.com/SOURCE-ry/Website/commit/${gitCommit.hash}`}>
        <p>Latest edit</p>
        <p>{gitCommit.message}</p>
        <p>{dayjs(gitCommit.date).fromNow()} by</p>
        <p>{gitCommit.author.name}</p>
      </a>
    </Container>
  )
}
