import { createContext, useState } from "react";
import { loginRequest, registerRequest, modifyUserRequest } from "../utils/fetchUser";

export const UserContext = createContext(); // Create a context object

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {

  // state for the user
  const [user, setUser] = useState(null);
  
  // Mock login function. To test the 'user' role, you can change the role to 'admin'
  const login = (email, password) => {
    loginRequest(email, password)
      .then((res) => {
        setUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Mock logout function
  const logout = () => setUser(null);

  // Check if the user is logged in
  const isLogged = () => user ? true : false;

  // Check if the user is admin
  const isAdmin = () => user && user.role === 'admin' ? true : false;
  
  const register = (user) => {
    registerRequest(user)
      .then((res) => {
        setUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const modify = (user) => {
    modifyUserRequest(user)
      .then((res) => {
        setUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const userOrders = () => {
    return user.orders;
  }

  const values = {
    user,
    login,
    logout,
    isLogged,
    isAdmin,
    register,
    userOrders,
    modify
  };
  
  return (
    <UserContext.Provider value={values} >
      {children}
    </UserContext.Provider>
  );
}
