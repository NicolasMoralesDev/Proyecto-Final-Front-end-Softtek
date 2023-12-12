import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import Error from './Pages/Error';
import Cart from './Pages/Cart/Cart';
import Login from './Pages/Login/Login';
import Products from './Pages/Home/Home';
import RequireAuth from './router/RequireAuth';
import UserPanel from './Pages/UserPanel/UserPanel';
import RequireAdminRole from './router/RequireAdminRole';
import BuildYourPc from './Pages/BuildYourPc/BuildYourPc';
import AdminPanel from './Pages/AdminPanel/AdminPanel';
import RecoverPassword from "./Pages/RecoverPassword";
import CookieConsent from './components/CookieConsent/CookieConsent';
import Cookies from "universal-cookie";
import RecuperarPassword from './Pages/RecuperarPassword';
import Help from './Pages/Help/Help';

function App() {

  const cookies = new Cookies();
  
  // Check if the user has already given cookie consent
  const cookieConsent = cookies.get("cookieConsent");
  
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} errorElement={<Error />} />
        <Route path='/carrito' element={<Cart />} errorElement={<Error />} />
        <Route path='/login' element={<Login />} errorElement={<Error />} />
        <Route path='/productos' element={<Products />} errorElement={<Error />} />
        <Route path='/armatupc' element={<BuildYourPc />} errorElement={<Error />} />
        <Route path='/user_panel' element={<RequireAuth> <UserPanel /></RequireAuth> }errorElement={<Error />}/>
        <Route path='/dashboard' element={<RequireAdminRole><UserPanel /></RequireAdminRole>}errorElement={<Error />}/>
        <Route path='/admin_panel' element={<RequireAdminRole><AdminPanel/></RequireAdminRole>}errorElement={<Error />}/>
        <Route path='/recoverPasword' element={<RecoverPassword/>}errorElement={<Error />}/>
        <Route path='/recuperarPassword' element={<RecuperarPassword/>}errorElement={<Error />}/>
        <Route path='/ayuda' element={<Help/>} errorElement={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    {!cookieConsent && <CookieConsent />}
    </div>
  );
}

export default App;
