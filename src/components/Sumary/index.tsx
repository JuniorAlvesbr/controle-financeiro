import { Container, Content } from "./styles";
import income from '../../../public/assets/income.svg'
import outcome from '../../../public/assets/outcome.svg'
import total from '../../../public/assets/total.svg'
import { useTransactions } from "../../hooks/useTransaction";

export function Sumary() {
  const { transactions } = useTransactions()

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount
      acc.total += transaction.amount
    } else {
      acc.withdraws += transaction.amount
      acc.total -= transaction.amount
    }

    return acc
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  })

  return (
    <Container>
      <Content>
        <div>
          <span>Entrada</span>
          <img src={income} alt="Entrada" />
        </div>
        <strong>{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(summary.deposits)}</strong>
      </Content>

      <Content>
        <div>
          <span>Saídas</span>
          <img src={outcome} alt="Saídas" />
        </div>
        <strong>
          -
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.withdraws)}</strong>
      </Content>

      <Content className="highlight-background">
        <div>
          <span>Total</span>
          <img src={total} alt="Total" />
        </div>
        <strong>{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(summary.total)}</strong>
      </Content>

    </Container>
  )
}