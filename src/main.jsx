import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CartProvider } from './context/CartContext.jsx'
import './index.css'
import { UserProvider } from './context/UserContext.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Routes.jsx'
import Navbar from './components/Navbar/Navbar.jsx'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       
    <CartProvider>
      <UserProvider>
      <Navbar/>
        <RouterProvider router={router} />
      </UserProvider>
    </CartProvider>
  </React.StrictMode>
)
