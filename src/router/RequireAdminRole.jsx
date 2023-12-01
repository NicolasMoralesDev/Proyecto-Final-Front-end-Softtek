import { useEffect } from 'react'
import { useUser } from '../context/Hooks'
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types, no-unused-vars
const RequireAdminRole = ({children}) => {
  
  const { loading, isAdmin } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!(loading && isAdmin)) {
      navigate('/login');
    }
  }, [loading, isAdmin, navigate]);

  return children;
}

export default RequireAdminRole