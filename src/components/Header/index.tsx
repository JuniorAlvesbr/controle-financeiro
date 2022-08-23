import { Button, Container, Content } from './styles'

import image from '../../../public/assets/logo.svg'

interface props {
  onOpenNewTransationModal: () => void;
}

export function Header({ onOpenNewTransationModal }: props) {
  return (
    <Container>
      <Content>
        <img src={image} alt="Logo" />
        <Button onClick={onOpenNewTransationModal}>Nova transação</Button>
      </Content>
    </Container>
  )
}