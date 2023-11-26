import { createContext, useState } from "react";

export const UserContext = createContext(); // Create a context object

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {

  // state for the user
  const [user, setUser] = useState(null);
  
  // Mock login function. To test the 'user' role, you can change the role to 'admin'
  const login = () => {
    setUser({
      fullName: 'John Doe',
      role: 'user'
    })
  };

  // Mock logout function
  const logout = () => setUser(null);

  // Check if the user is logged in
  const isLogged = () => user ? true : false;

  // Check if the user is admin
  const isAdmin = () => user && user.role === 'admin' ? true : false;
  
  const values = {
    user,
    login,
    logout,
    isLogged,
    isAdmin
  };
  
  return (
    <UserContext.Provider value={values} >
      {children}
    </UserContext.Provider>
  );
}