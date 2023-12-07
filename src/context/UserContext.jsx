import { createContext, useEffect, useState } from "react";
import { loginRequest, registerRequest  } from "../utils/fetchUser";
import { jwtDecode } from "jwt-decode";

export const UserContext = createContext(); // Create a context object

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {

  // state for the user
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const saveTokenLocally = (token) => localStorage.setItem("token", token);

  const handleTokenError = () => {
    setUser(null);
    setIsAuthenticated(false);
    setIsAdmin(false);
    localStorage.removeItem("token");
  }

  const setUserStatesFromToken = (token) => {
    try {
      const decodedToken = jwtDecode(token);
      setUser({
        firstName: decodedToken.firstName,
        lastName: decodedToken.lastName,
        email: decodedToken.sub,
        role: decodedToken.role,
        id: decodedToken.id,
      });
      setIsAuthenticated(true);
      setIsAdmin(decodedToken.role === "ROLE_ADMIN");
    } catch (err) {
      handleTokenError();
    }
  }

useEffect(() => {
  setLoading(true);
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp < Date.now()) {
        setUserStatesFromToken(token);
      } else {
        handleTokenError("Token expired");
      }
    } catch (err) {
      handleTokenError();
    }
  }
  setLoading(false);
}, []);

const login = (email, password) => {
  setLoading(true)
  loginRequest({email, password})
    .then((res) => {
      const token = res.token;
      saveTokenLocally(token);
      setUserStatesFromToken(token);
    })
    .catch((err) => {
      handleTokenError(err);
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
        const token = res.token;
        saveTokenLocally(token);
        setUserStatesFromToken(token);
      })
      .catch((err) => {
        handleTokenError(err);
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
    loading
  };
  
  return (
    <UserContext.Provider value={values} >
      {children}
    </UserContext.Provider>
  );
}
