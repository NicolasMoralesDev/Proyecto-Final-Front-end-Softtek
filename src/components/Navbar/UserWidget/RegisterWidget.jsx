import { useUser } from "../../../context/Hooks"
import Dropdown from 'react-bootstrap/Dropdown';
import { FaUserCircle } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { useState } from "react";
import Modal from "../../Modal/Modal";
import RegisterForm from "../../RegisterForm/RegisterForm";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const UserWidget = () => {

  // Get the user and the functions from the custom hook
  const { loading, isAuthenticated } = useUser()

  return (
    <>
      { loading ?
        <p>Loading...</p>
        :
        isAuthenticated ?
          null
          :
          <LoginButton />
      }
    </>
  )
}

const LoginButton = () => {
  const {register } = useUser();
  const [showModal, setShowModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setShowRegisterModal(false);
  };
  const handleOpenRegisterModal = () => setShowRegisterModal(true);

  const showErrorMessage = (message) => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message,
      // cerrar a los 2 segundos
      timer: 2000,
    })
  }

  const handleRegisterSubmit = async (values) => {
    const res = await register(values);
    if (res.status == 200){
      Swal.fire({
        icon: 'success',
        title: '¡Registro exitoso!',
        text: res.message,
        timer: 1000,
      })
      handleCloseModal();
    } else {
      showErrorMessage(res.message);
    }
  };

  return (
    <>
      <Button onClick={handleOpenModal} className="d-flex align-items-center gap-2 btn-success">
        <FaUserCircle />
        <p>Registrarse</p>
      </Button>
        <Modal show={showModal} handleClose={handleCloseModal} title="Registrarse">
          <RegisterForm handleSubmit={handleRegisterSubmit}/>
        </Modal>
    </>
  )
} 

export default UserWidget

