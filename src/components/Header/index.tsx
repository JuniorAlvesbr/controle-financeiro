import { Button, Container, Content } from './styles'

import image from '../../../public/assets/logo.svg'

export function Header() {
  return (
    <Container>
      <Content>
        <img src={image} alt="Logo" />
        <Button>Nova transação</Button>
      </Content>
    </Container>
  )
}