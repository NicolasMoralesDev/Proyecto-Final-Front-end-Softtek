import { useUser } from "../../../context/Hooks"
import Dropdown from 'react-bootstrap/Dropdown';
import { FaUserCircle } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { useState } from "react";
import Modal from "../../Modal/Modal";
import LoginForm from "../../LoginForm/LoginForm";
import RegisterForm from "../../RegisterForm/RegisterForm";
import { useNavigate } from "react-router-dom";


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

  const handleLoginSubmit = (values) => {
    login(values.email, values.password);
    handleCloseModal();
  };

  const handleRegisterSubmit = (values) => {
    register(values);
    handleCloseRegisterModal();
    handleCloseModal();
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

