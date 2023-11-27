import { Link } from "react-router-dom";

const NavbarLinks = () => {
  return (
    <nav className='navbar navbar-expand-lg' style={{backgroundColor: "gray"}}>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav mx-auto'>
          <li className='nav-item text-center mx-2'>
              <a className='nav-link mx-5' href='/'>
                Home
              </a>
            </li>
            <li className='nav-item text-center mx-2'>
              <a className='nav-link mx-5' href='/productos'>
                Productos
              </a>
            </li>
            <li className='nav-item text-center mx-2'>
              <a className='nav-link mx-5' href='#'>
                Arma tu PC
              </a>
            </li>
            <li className='nav-item text-center mx-2'>
              <Link className='nav-link mx-5' to='#'>
                Help
              </Link>
            </li>
          </ul>
        </div>
    </nav>
  );
};

export default NavbarLinks;
