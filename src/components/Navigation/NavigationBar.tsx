import { graphql, useStaticQuery } from 'gatsby'
import tw from 'twin.macro'
import { NavigationBarItem } from './NavigationBarItem'


const Wrapper = tw.nav`
  flex
  flex-row
  gap-4
  p-4
  border
  justify-evenly
`

export const NavigationBar: React.FC = ({ children }) => {


  // const data: NavigationBarData = useStaticQuery(graphql`
  //  query NavigationBarQuery {

  //   }
  // `)


  function onlyUnique (value, index, self) {
    return self.indexOf(value) === index
  }

  return (
    <Wrapper>
      yee
    </Wrapper>
  )
}
