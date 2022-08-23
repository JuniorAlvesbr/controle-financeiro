import Modal from 'react-modal'
import { Container } from './styles';

import closeImage from '../../../public/assets/close.svg'

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
        <form>
          <input type="text" placeholder='titulo' />
          <input type="number" placeholder='valor' />
          <input type="number" placeholder='categoria' />
          <button type="submit">Cadastrar</button>
        </form>
      </Container>
    </Modal>
  )
}
