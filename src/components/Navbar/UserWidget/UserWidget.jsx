import { useUser } from "../../../context/Hooks"
import Dropdown from 'react-bootstrap/Dropdown';
import { FaUserCircle } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { useState } from "react";
import Modal from "../../Modal/Modal";
import LoginForm from "../../LoginForm/LoginForm";
import RegisterForm from "../../RegisterForm/RegisterForm";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const UserWidget = () => {

  // Get the user and the functions from the custom hook
  const { user, isAdmin, isLogged, logout } = useUser()
  
  // Navigate to the user panel
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  }

  return (
    <>

      {isLogged() ?  // If the user is logged in, show the dropdown menu
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" style={{
            backgroundColor: "white", 
            border: "none",
            boxShadow: "none",
            color: "black",
          }}>
            {user.fullName}
          </Dropdown.Toggle>
    
          <Dropdown.Menu>
            <Dropdown.Item><Link to="user_panel">Mi cuenta</Link></Dropdown.Item>
            { isAdmin() && <Dropdown.Item>Dashboard</Dropdown.Item> }  {/* If the user is admin, show the dashboard option */}
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        :  
        <LoginButton /> } {/* If the user is not logged in, show the login button */}
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
          <RegisterForm handleSubmit={handleRegisterSubmit} handleCloseRegisterModal={handleCloseRegisterModal}/>
        </Modal>
        :
        <Modal show={showModal} handleClose={handleCloseModal} title="Iniciar Sesión">
          <LoginForm handleSubmit={handleLoginSubmit} handleOpenRegisterModal={handleOpenRegisterModal}/>
        </Modal>
      }
    </>
  )
} 

export default UserWidget

