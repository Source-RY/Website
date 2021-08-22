import tw from 'twin.macro'


const Image = tw.img`
  object-cover
  w-full
  h-96
  mb-4
`

const Container = tw.div`
`

interface HeroImageProps {
  src: string
}

export const HeroImage: React.FC<HeroImageProps> = ({ src }) => {
  return (
    <Container>
      <Image src={src} />
    </Container>
  )
}
