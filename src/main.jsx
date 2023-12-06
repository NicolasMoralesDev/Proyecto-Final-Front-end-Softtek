import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CartProvider } from './context/CartContext.jsx'
import './index.css'
import { UserProvider } from './context/UserContext.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Routes.jsx'
import { PaginationProvider } from './context/PaginationContext.jsx'
import { PaginationCategoryProvider } from './context/PaginationCategoryContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
       
    <CartProvider>
      <UserProvider>
        <PaginationProvider>
          <PaginationCategoryProvider>
          <RouterProvider router={router} />
          </PaginationCategoryProvider>
        </PaginationProvider>
      </UserProvider>
    </CartProvider>
)
