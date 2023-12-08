import { useEffect } from 'react'
import { useUser } from '../context/Hooks'
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types, no-unused-vars
const RequireAdminRole = ({children}) => {
  
  const { loading, isAdmin } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isAdmin) {
      navigate('/login')
    }
  }, [loading, isAdmin, navigate])

  if (loading) {
    return <p>Loading...</p>
  }

  if (!isAdmin) {
    return <p>Unauthorized</p>
  }

  return children
}

export default RequireAdminRole