
interface EventProps {
  pageContext: {
    name: string
    description: string
    // location: string
    date: string
  }
}

export default ({ pageContext }: EventProps) => {
  const event = pageContext

  return (
    <div>
      <h1>{event.name}</h1>
      <p>{event.date}</p>
      <p>{event.description}</p>
    </div>
  )
}
