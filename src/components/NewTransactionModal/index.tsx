import Modal from 'react-modal'
import { Container, TransactionTypeContainer } from './styles';

import closeImage from '../../../public/assets/close.svg'
import incomeImg from '../../../public/assets/income.svg'
import outcomeImg from '../../../public/assets/outcome.svg'

Modal.setAppElement('#root')

interface props {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransectionModal({ isOpen, onRequestClose }: props) {
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
          <button type='button'>
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>
          <button type='button'>
            <img src={outcomeImg} alt="Saida" />
            <span>Saida</span>
          </button>
        </TransactionTypeContainer>

        <input type="number" placeholder='categoria' />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
