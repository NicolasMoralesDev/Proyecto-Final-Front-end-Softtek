import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CartProvider } from './context/CartContext.jsx'
import './index.css'
import { UserProvider } from './context/UserContext.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Routes.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
       
    <CartProvider>
      <UserProvider>
      <Navbar/>
        <RouterProvider router={router} />
        <Footer/>
      </UserProvider>
    </CartProvider>
)
