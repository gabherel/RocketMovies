import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { MovieItem } from '../../components/MovieItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

import { FiArrowLeft } from 'react-icons/fi'

import { Container, Form } from './styles'

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <div className="icon-wrapper">
            <FiArrowLeft />
            <Link to="/">voltar</Link>
          </div>
          <header>
            <h1>Novo filme</h1>
          </header>

          <div className="inputWrapper">
            <Input placeholder="Título" />        
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>
          
            <Textarea placeholder="Observações" />

          <Section title="Marcadores">
            <div className='tags'>
              <MovieItem value="React" />
              <MovieItem isNew placeholder="Novo marcador" />
            </div>
          </Section>

          <div className="buttonWrapper">
            <Button className="delete" title="Excluir filme"/>
            <Button title="Salvar"/>
          </div>
        </Form>
      </main>
    </Container>
  )
}