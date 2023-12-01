import { createContext, useEffect, useState } from "react";
import { loginRequest, registerRequest  } from "../utils/fetchUser";
import { jwtDecode } from "jwt-decode";

export const UserContext = createContext(); // Create a context object

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {

  // state for the user
  const [user, setUser] = useState(null);
  const [userOrders, setUserOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const setUserFromToken = () => {

    let token = localStorage.getItem('token');
    if (token) {
      try {
        let decoded = jwtDecode(token);
        setUser({
          firstName: decoded.firstName,
          lastName: decoded.lastName,
          email: decoded.sub,
          role: decoded.role,
        });
        setIsAuthenticated(true);
        setIsAdmin(decoded.role === "ROLE_ADMIN");
      } catch (error) {
        localStorage.removeItem('token');
      }
    }
  }

  useEffect(() => {
    setLoading(true);
    setUserFromToken();
    setLoading(false);
  }, []);

  
  // Mock login function. To test the 'user' role, you can change the role to 'admin'
  const login = (email, password) => {
    setLoading(true)
    loginRequest({email, password})
      .then((res) => {
        const jwtToken = res.token;
        localStorage.setItem("token", jwtToken);
        setUserFromToken();
        
      })
      .catch((err) => {
        console.log(err);
      });
      setLoading(false);
  };

  // Mock logout function
  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setIsAdmin(false);
    setUser(null);
  }


  
  const register = (user) => {
    setLoading(true);
    registerRequest(user)
    .then((res) => {
      const jwtToken = res.token;
      localStorage.setItem("token", jwtToken);
      setUserFromToken();
    })
    .catch((err) => {
      console.log(err);
    });    
    setLoading(false);
  };

  const values = {
    user,
    login,
    logout,
    isAuthenticated,
    isAdmin,
    register,
    loading,
    userOrders
  };
  
  return (
    <UserContext.Provider value={values} >
      {children}
    </UserContext.Provider>
  );
}
