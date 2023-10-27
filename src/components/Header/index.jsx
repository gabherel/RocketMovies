import { Input } from '../../components/Input'

import { Container, Profile, TitleHeader, Search } from './styles'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <Container>

      <Link to="/">
        <TitleHeader >
          RocketMovies
        </TitleHeader>
      </Link>

      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>

      <Profile to="/profile">
        <div>
          <strong>Gabriel Macedo</strong>
          <span>Sair</span>
        </div>
        
        <img src="https://github.com/gabherel.png" 
        alt="Foto do usuário" />
        
      </Profile>


    </Container>
  )
}