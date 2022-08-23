import { useState } from 'react';
import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import { NewTransectionModal } from './components/NewTransactionModal';

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransationModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransationModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransationModal={handleOpenNewTransationModal} />
      <Dashboard />
      <NewTransectionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransationModal}
      />
    </>
  )
}

export default App
