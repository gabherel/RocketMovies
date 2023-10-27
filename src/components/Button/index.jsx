import { Container } from "./styles";

import { Link } from "react-router-dom";

export function Button({ title, loading = false, ...rest }) {
  return (
    <Container 
    type="button"
    to="/"
    disabled={ loading }
    {...rest}
    >
      { loading ? 'carregando...' : title}
    </Container>
  )
}