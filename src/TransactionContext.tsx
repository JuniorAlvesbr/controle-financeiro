import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAT: string;
}

interface TransactionChildrenProps {
  children: ReactNode
}

export const TransactionContext = createContext<Transaction[]>([])

export function TransactionsProvider({ children }: TransactionChildrenProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transations')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  return (
    <TransactionContext.Provider value={transactions}>
      {children}
    </TransactionContext.Provider>
  )
}