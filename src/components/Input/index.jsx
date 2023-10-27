import { Container } from './styles'

export function Input({ icon: Icon, ...rest }) {
  return (
    <Container>
      {/* Icon just apear if exists */}
      {Icon && <Icon size={20} />}

      <input {...rest} />
    </Container>
  )
}