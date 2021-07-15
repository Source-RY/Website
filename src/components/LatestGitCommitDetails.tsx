import { graphql, useStaticQuery } from 'gatsby'
import tw from 'twin.macro'


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

export const LatestBuildDetails: React.FC = () => {
  const data: LatestBuildDetailsData = useStaticQuery(graphql`
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
    <div>
      {data.gitCommit.author.name}
    </div>
  )
}
