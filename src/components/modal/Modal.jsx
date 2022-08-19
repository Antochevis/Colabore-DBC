import { ModalContent } from './Modal.styled'
import { Button } from '../button/Button'
import { redColor } from '../../consts'

const Modal = ({closeModal, confirmModal}) => {
  return (
    
      <div className="modalBackground">
      <ModalContent>
        <div className="title">
          <h1>Você tem certeza?</h1>
        </div>
        <div className="body">
          <p>Você tem certeza que deseja realizar essa contribuição?</p>
        </div>
        <div className="btnsModal">
          <Button onClick={() => closeModal(false)} backgroundColor={redColor} border={`1px solid ${redColor}`}>Cancelar</Button>
          <Button onClick={() => confirmModal()} >Confirmar</Button>
        </div>
        </ModalContent>
      </div>
    
  )
}
export default Modal