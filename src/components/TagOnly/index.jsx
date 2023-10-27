import { Container } from './styles'
import { Tag } from '../Tag'


export function TagOnly({ data, ...rest}) {
  return (
    <Container {...rest} >  
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