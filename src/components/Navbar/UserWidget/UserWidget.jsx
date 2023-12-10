import { useUser } from "../../../context/Hooks"
import Dropdown from 'react-bootstrap/Dropdown';
import { FaUserCircle } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { useState } from "react";
import Modal from "../../Modal/Modal";
import LoginForm from "../../LoginForm/LoginForm";
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
          <UserDropdown />
          :
          <LoginButton />
      }
    </>
  )
}

const LoginButton = () => {
  const { login, register } = useUser();
  const [showModal, setShowModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setShowRegisterModal(false);
  };
  const handleOpenRegisterModal = () => setShowRegisterModal(true);
  const handleCloseRegisterModal = () => setShowRegisterModal(false);

  const loginSecondaryButton = {
    text: "Registrarse",
    onClick: handleOpenRegisterModal,
  }

  const registerSecondaryButton = {
    text: "Iniciar Sesión",
    onClick: handleCloseRegisterModal,
  }

  const handleLoginSubmit = async (values) => {
    const res = await login(values.email, values.password);
    if (res.status == 200){
      handleCloseModal();
    } else {
      showErrorMessage(res.message);
    }
  };

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
      handleCloseRegisterModal();
      handleCloseModal();
    } else {
      showErrorMessage(res.message);
    }
  };

  return (
    <>
      <Button onClick={handleOpenModal} className="d-flex align-items-center gap-2">
        <FaUserCircle />
        <p>Iniciar Sesión</p>
      </Button>
      { showRegisterModal ? 
        <Modal show={showModal} handleClose={handleCloseModal} title="Registrarse">
          <RegisterForm handleSubmit={handleRegisterSubmit} secondaryButton={registerSecondaryButton}/>
        </Modal>
        :
        <Modal show={showModal} handleClose={handleCloseModal} title="Iniciar Sesión">
          <LoginForm handleSubmit={handleLoginSubmit} secondaryButton={loginSecondaryButton}/>
        </Modal>
      }
    </>
  )
} 

const UserDropdown = () => {
  const { user, logout, isAdmin } = useUser()
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  }

  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic" style={{
        backgroundColor: "white", 
        border: "none",
        boxShadow: "none",
        color: "black",
      }}>
        {(user.firstName + " " + user.lastName)}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => navigate('/user_panel')}>Mi cuenta</Dropdown.Item>
        { isAdmin && <Dropdown.Item onClick={() => navigate('/admin_panel')} >Dashboard</Dropdown.Item> }
        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default UserWidget

