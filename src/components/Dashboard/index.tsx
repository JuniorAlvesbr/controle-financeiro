import { Sumary } from "../Sumary";
import { TransationTable } from "../TransationsTable";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Sumary />
      <TransationTable />
    </Container>
  )
}