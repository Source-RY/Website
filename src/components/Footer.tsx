import tw from 'twin.macro'


const FooterWrapper = tw.footer`

`

const FooterContent = tw.div`
  container
  mx-auto
`

export const Footer: React.FC = ({ children }) => (
  <FooterWrapper>
    <FooterContent>{children}</FooterContent>
  </FooterWrapper>
)
