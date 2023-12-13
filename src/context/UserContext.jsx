import { createContext, useEffect, useState } from "react";
import { loginRequest, registerRequest  } from "../utils/fetchUser";
import { jwtDecode } from "jwt-decode";
import Cookies from "universal-cookie";

export const UserContext = createContext(); // Create a context object


/**
 * This component is a provider for the UserContext. It will wrap the entire application.
 * Here we handle:
 * 1. Authentication functions (login, logout, register)
 * 2. User states (user, isAuthenticated, isAdmin)
 * 3. Loading state (flag to indicate if we are waiting for a response from the server)
 * 4. Cookies (save and remove token from cookies)
 * 5. Token error (handle errors when token is invalid. For example, when it expires)
 */

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const cookies = new Cookies();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const saveTokenToCookie = (token) => {
    // Expiration date 10hs
    const date = new Date();
    date.setTime(date.getTime() + (1000 * 60 * 60 * 10));
    cookies.set("token", token, { path: "/", expires: date });
  }

  const removeTokenFromCookie = () => {
    cookies.remove("token");
  }
  
  const handleTokenError = () => {
    setUser(null);
    setIsAuthenticated(false);
    setIsAdmin(false);
    removeTokenFromCookie();
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

  /**
   * This effect will run only once when the application starts. 
   * It will check if there is a token in the cookies and if it is valid.
   * If it is valid, it will set the user states (user, isAuthenticated, isAdmin).
   * If it is not valid, it will remove the token from the cookies and set the user states to null.
   */
  useEffect(() => {
    setLoading(true);
    const token = cookies.get("token");
    if (token) {
      setUserStatesFromToken(token);
    } else {
      handleTokenError();
    }
    setLoading(false);
  }

  , []);

  const login = async (email, password) => {
    setLoading(true)
    const res  = await loginRequest({email, password})

    if (res.token) {
      const token = res.token;
      saveTokenToCookie(token);
      setUserStatesFromToken(token);
      setLoading(false);
      return {status: 200, message: "Usuario logueado correctamente."}
    } else if (res.response.status == 403) {
      handleTokenError();
      setLoading(false);
      return {status: 403, message: "Email o contraseña incorrectos."}
    } else {
      handleTokenError();
      setLoading(false);
      return {status: 500, message: "Ocurrió un error."}
    }
  }

  const logout = () => {
    removeTokenFromCookie();
    setIsAuthenticated(false);
    setIsAdmin(false);
    setUser(null);
  }

  const register = async (user) => {
    setLoading(true);
    const res  = await registerRequest(user)
    
    if (res.token) {
      const token = res.token;
      saveTokenToCookie(token);
      setUserStatesFromToken(token);
      setLoading(false);
      return {status: 200, message: "Usuario registrado correctamente."}
    } else if (res.response.status === 409) {
      handleTokenError();
      setLoading(false);
      return {status: 409, message: "El email ya se encuentra en nuestros registros."}
    } else {
      handleTokenError();
      setLoading(false);
      return {status: 500, message: "Ocurrió un error."}
    }
         
    
  }

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
