import { FormEvent, useState } from 'react';
import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { api } from '../../services/api'

import closeImage from '../../../public/assets/close.svg'
import incomeImg from '../../../public/assets/income.svg'
import outcomeImg from '../../../public/assets/outcome.svg'

Modal.setAppElement('#root')

interface props {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransectionModal({ isOpen, onRequestClose }: props) {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const data = {
      title, value, category, type
    }

    api.post('/transactions', data)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button onClick={onRequestClose} className="react-button-close-modal">
        <img src={closeImage} alt="Fechar Modal" />
      </button>

      <Container onSubmit={handleSubmit}>
        <h2>Cadastrar trazações</h2>
        <input
          type="text"
          placeholder='titulo'
          onChange={event => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder='valor'
          onChange={event => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type='button'
            onClick={() => { setType('deposit') }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type='button'
            onClick={() => { setType('withdraw') }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saida</span>
          </RadioBox>

        </TransactionTypeContainer>

        <input
          placeholder='categoria'
          onChange={event => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
