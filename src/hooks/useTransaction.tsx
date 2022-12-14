import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

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

type TransactionInput = Omit<Transaction, 'id' | 'createdAT'>

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionsProvider({ children }: TransactionChildrenProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transations')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAT: new Date()
    })
    const { transaction } = response.data

    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionContext)

  return context
}