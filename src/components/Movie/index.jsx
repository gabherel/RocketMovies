import { Container } from './styles'
import { Tag } from '../Tag'
import { StarsIcon } from '../Stars'

export function Movie({ data, isNew, ...rest}) {
  return (
    <Container {...rest} >
      <h1>{data.title}</h1>
      <StarsIcon/>
      <p>{data.text}</p>
      {
        data.tags && 
        <footer>
          {
            data.tags.map( tag => <Tag key={tag.name} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  )
}