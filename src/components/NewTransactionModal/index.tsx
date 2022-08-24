import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styles';

import closeImage from '../../../public/assets/close.svg'
import incomeImg from '../../../public/assets/income.svg'
import outcomeImg from '../../../public/assets/outcome.svg'
import { useState } from 'react';

Modal.setAppElement('#root')

interface props {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransectionModal({ isOpen, onRequestClose }: props) {
  const [type, setType] = useState('')

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

      <Container>
        <h2>Cadastrar trazações</h2>
        <input type="text" placeholder='titulo' />
        <input type="number" placeholder='valor' />

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

        <input type="number" placeholder='categoria' />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
