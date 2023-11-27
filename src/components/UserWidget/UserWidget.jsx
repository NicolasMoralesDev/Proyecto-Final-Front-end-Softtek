import { useUser } from "../../context/Hooks"
import Dropdown from 'react-bootstrap/Dropdown';
import { FaUserCircle } from "react-icons/fa";
import { Button } from "react-bootstrap";

const UserWidget = () => {

  // Get the user and the functions from the custom hook
  const { user, isAdmin, isLogged, logout } = useUser()
  
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
            <Dropdown.Item href="#/action-1">Mi cuenta</Dropdown.Item>
            { isAdmin() && <Dropdown.Item href="#/action-2">Dashboard</Dropdown.Item> }  {/* If the user is admin, show the dashboard option */}
            <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        :  
        <LoginButton /> } {/* If the user is not logged in, show the login button */}
    </>
  )
}

const LoginButton = () => {
  const { login } = useUser();

  return (
    <Button onClick={login} className="d-flex align-items-center gap-2">
      <FaUserCircle />
      <p>Iniciar Sesión</p>
    </Button>
  )
} 

export default UserWidget

