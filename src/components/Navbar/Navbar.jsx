import { Col, Row } from "react-bootstrap"
import CartWidget from "./CartWidget/CartWidget"
import SearchBar from "./SearchBar/SearchBar"
import UserWidget from "./UserWidget/UserWidget"
import NavbarLinks from "./NavbarLinks/NavbarLinks"
import logo from "./../../assets/logotienda.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-fluid ">

      <Row className="d-flex align-items-center justify-content-around gap-3 pt-2">
        <Col xs={7} sm={4} md={2} className="d-flex justify-content-center">
          <div className="container">
            <div className="h-25">
              <Link className='nav-link mx-5 link-light fw-bold' to='/' >
              <img src={logo} alt="Logo del Sitio" className="mx-auto img-fluid bg-light"/>
              </Link>
            </div>
          </div>
        </Col>
        <Col xs={10} sm={7} md={4} className="container-fluid"> {/* Añadido el breakpoint `lg` y la clase `container-fluid` */}
          <SearchBar />
        </Col>
        <Col xs={10} md={5} className="d-flex gap-3 justify-content-center">
          <UserWidget />
          <CartWidget />
        </Col>
      </Row>


      <Row>
        <NavbarLinks />
      </Row>


    </div>
  );
}

export default Navbar