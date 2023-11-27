import { Modal as BootstrapModal, Button } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const Modal = ({ show, handleClose, title, children }) => {
  return (
    <BootstrapModal show={show} onHide={handleClose}>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>{title}</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>{children}</BootstrapModal.Body>
      <BootstrapModal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
};

export default Modal;