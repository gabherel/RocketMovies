import styled from 'styled-components'

export const Container = styled.button`
  font-family: 'Roboto Slab', sans-serif;

  background: none;
  color: ${({ theme, $isactive }) =>
    $isactive ? theme.COLORS.PINK : theme.COLORS.GRAY_100};

  border: none;
  font-size: 1.6rem;
`
