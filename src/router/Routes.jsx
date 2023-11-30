import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../Pages/Login';
import Products from '../Pages/Products';
import Register from '../Pages/Register';
import Cart from '../Pages/Cart';
import Error from '../Pages/Error';
import UserPanel from '../Pages/UserPanel/UserPanel';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/footer';
import BuildYourPc from '../Pages/BuildYourPc/BuildYourPc';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '*',
        element: <Error />,
      },
      {
        path: '/',
        element: <App />,
        errorElement: <Error />,
      },
      {
        path: '/carrito',
        element: <Cart />,
        errorElement: <Error />,
      },
      {
        path: '/login',
        element: <Login />,
        errorElement: <Error />,
      },
      {
        path: '/productos',
        element: <Products />,
        errorElement: <Error />,
      },
      {
        path: '/registro',
        element: <Register />,
        errorElement: <Error />,
      },
      {
        path: '/user_panel',
        element: <UserPanel />,
        errorElement: <Error />,
      },
      {
        path: '/armatupc',
        element: <BuildYourPc />,
        errorElement: <Error />,
      },
    ],
  },
]);
