import { Container, Content } from "./styles";
import income from '../../../public/assets/income.svg'
import outcome from '../../../public/assets/outcome.svg'
import total from '../../../public/assets/total.svg'


export function Sumary() {
  return (
    <Container>
      <Content>
        <div>
          <span>Entrada</span>
          <img src={income} alt="Entrada" />
        </div>
        <strong>R$ 17.400,00</strong>
      </Content>

      <Content>
        <div>
          <span>Saídas</span>
          <img src={outcome} alt="Saídas" />
        </div>
        <strong>R$ 1.259,00</strong>
      </Content>

      <Content className="highlight-background">
        <div>
          <span>Total</span>
          <img src={total} alt="Total" />
        </div>
        <strong>R$ 16.141,00</strong>
      </Content>

    </Container>
  )
}