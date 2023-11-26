import React from "react";
import Navbar from '../components/Navbar';

const Header = () => {
    return(
        <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <div className="d-flex align-items-center justify-content-between w-100">
      <div className="text-center">
        <a className="navbar-brand"  href="/">TecnoTienda</a>
      </div>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search product" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className="d-flex">
        <button className="btn btn-outline-primary me-2" type="button">Sign in</button>
        <button className="btn btn-outline-warning" type="button">Cart</button>
      </div>
    </div>
  </div>
</nav>
    )
}

export default Header