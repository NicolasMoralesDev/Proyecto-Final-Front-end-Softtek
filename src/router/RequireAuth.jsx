import { useNavigate } from "react-router-dom";
import { useUser } from "../context/Hooks";
import { useEffect } from "react";

const RequireAuth = ({ children }) => {
  const { loading, isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      console.log(isAuthenticated)
      navigate("/login");
    }
  }, [loading, isAuthenticated, navigate]);

  return children;
};

export default RequireAuth;